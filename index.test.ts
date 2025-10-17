import { describe, test, expect } from "@jest/globals"

describe('Panier', () =>{
    test('devrait afficher le panier', () =>{

        //ARRANGE
        const cart: Cart = new Cart(
            [
                new Article(
                    "Table",
                    50
                ),
                new Article(
                    "Chaise",
                    20
                ),
                new Article(
                    "Tabouret",
                    10
                )
            ]
        )

        //ACT
        const display = displayCart(cart)
        //ASSERT
        expect(display.content.map(it => it.name)).toEqual(["Table", "Chaise", "Tabouret"])
        expect(display.content.map(it => it.price)).toEqual([50, 20, 10])
    })
})