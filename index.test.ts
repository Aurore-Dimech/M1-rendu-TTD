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
        const cart = createOriginalCart()

        const painting: Article = new Article("Peinture", 35)

        //ACT
        const display = addArticleToCart(cart, painting)
        //ASSERT
        expect(display.content.map(it => it.name)).toEqual(["Table", "Chaise", "Tabouret", "Peinture"])
        expect(display.content.map(it => it.price)).toEqual([50, 20, 10, 35])
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