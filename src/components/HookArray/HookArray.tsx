import { Component, ReactNode } from "react";
import MOCK_BOOK from "../../Data/MockBooks";
import Book from "../../model/Book";

export class HookArray extends Component<any, any> {

    state: Readonly<any> = {
        // item: []
        products: MOCK_BOOK
    };

    addItemHandler() {

        this.setState({
            // item: [
            //     ...this.state.item,
            //     { id: this.state.item.length, number: Math.floor(Math.random() * 10) }
            // ]
            products: [
                ...this.state.products,
                new Book({
                    id: this.state.products.length,
                    name: 'Johnson - Kutch',
                    price: `${Math.floor(Math.random() * 100)} $`
                }),
            ]

        })

    }

    render(): ReactNode {

        return (
            <div>
                <button onClick={this.addItemHandler.bind(this)}>Add Item</button>
                {
                    this.state.products.map((product: any) => {
                        return <li key={product.id}>{product.name} {product.price}</li>
                    })
                }
            </div>
        );

    }
}