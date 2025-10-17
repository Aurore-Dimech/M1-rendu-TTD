import { describe, test, expect } from "@jest/globals"

const createOriginalCart = () => new Cart([
    new Article("Table", 50),
    new Article("Chaise", 20),
    new Article("Tabouret", 10)
])

describe('Panier', () =>{
    test('devrait afficher le panier', () =>{

        //ARRANGE
        const cart = createOriginalCart()

        //ACT
        const display = displayCart(cart)
        //ASSERT
        expect(display.content.map(it => it.name)).toEqual(["Table", "Chaise", "Tabouret"])
        expect(display.content.map(it => it.price)).toEqual([50, 20, 10])
    })

    test('devrait pouvoir ajouter des éléments au panier le panier', () =>{

        //ARRANGE
        let cart = createOriginalCart()

        const painting: Article = new Article("Peinture", 35)

        //ACT
        cart = addArticleToCart(cart, painting)
        //ASSERT
        expect(cart.content.map(it => it.name)).toEqual(["Table", "Chaise", "Tabouret", "Peinture"])
        expect(cart.content.map(it => it.price)).toEqual([50, 20, 10, 35])
    })

    test('devrait pouvoir calculer le total du panier', () =>{

        //ARRANGE
        const cart = createOriginalCart()

        //ACT
        const total = getCartTotal(cart)
        //ASSERT
        expect(total).toEqual(50 + 20 + 10)
    })

    test('devrait pouvoir obtenir une réduction de 10% si le total est égale à 100€', () =>{

        //ARRANGE
        const cart = new Cart([
            new Article("Gold statue", 100)
        ])

        //ACT
        const total = getCartTotal(cart)
        //ASSERT
        expect(total).toEqual(90)
    })
})



class Cart {
    constructor(
        public content: Article[]
    ) {}

    withContent(article: Article): Cart {
        return new Cart([...this.content, article])
    }

}

class Article {
    constructor(
        public name: string,
        public price: number
    ) {}

}

const displayCart = (cart: Cart) => cart

const addArticleToCart = (cart: Cart, article: Article) => cart.withContent(article)

const getCartTotal = (cart: Cart) => {
    let total = 0
    cart.content.forEach((article: Article) => {
        total += article.price
    })

    total = calculateReduction(total)

    return total
}

const calculateReduction = (total: number): number => {
    if (total < 100) return total

    return (total - (total * 0.1)) 
}