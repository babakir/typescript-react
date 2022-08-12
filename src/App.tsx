import { useState } from 'react';
// import { ReactNode } from 'react';
import { Product } from './components/Product/Product';
import MOCK_BOOK from './Data/MockBooks';
import Book from './model/Book';
import HookCounter from './components/HookCounter/HookCounter';

// export class App extends React.Component {

//     state = {
//         products: MOCK_BOOK
//     };

//     ChangePrice() {
//         this.setState({
//             products: [
//                 new Book({
//                     id: 1,
//                     name: 'Johnson - Kutch',
//                     price: '185 $'
//                 }),
//                 new Book({
//                     id: 2,
//                     name: 'Wisozk Group',
//                     price: '190 $'
//                 }),
//                 new Book({
//                     id: 3,
//                     name: 'Denesik LLC',
//                     price: '1105 $'
//                 }),
//                 new Book({
//                     id: 4,
//                     name: 'Purdy, Keeling and Smitham',
//                     price: '179 $'
//                 }),
//             ]
//         })
//     }

//     render(): ReactNode {
//         return (
//             <div className="container">
//                 <h1>Shopping App</h1>
//                 <Product name="Angular" price="85 $" />
//                 <Product name="React" price="89 $">
//                     <p>Discont is : 15 %</p>
//                 </Product>
//                 {/* <pre>
//                     {JSON.stringify(MOCK_BOOK, null, ' ')}
//                 </pre> */}
//                 {/* {
//                     MOCK_BOOK.map(book =>
//                         <Product id={book.id} name={book.name} price={book.price} />
//                     )
//                 } */}
//                 {
//                     this.state.products.map((product) => {
//                         return <Product key={product.id} id={product.id} name={product.name} price={product.price} />
//                     })
//                 }
//                 <button onClick={this.ChangePrice.bind(this)}>Change Price</button>
//             </div>
//         );
//     }

// }

export const App = () => {

    const [products, setProduct] = useState(MOCK_BOOK);

    function ChangePrice() {
        setProduct([
            new Book({
                id: 1,
                name: 'Johnson - Kutch',
                price: '185 $'
            }),
            new Book({
                id: 2,
                name: 'Wisozk Group',
                price: '190 $'
            }),
            new Book({
                id: 3,
                name: 'Denesik LLC',
                price: '1105 $'
            }),
            new Book({
                id: 4,
                name: 'Purdy, Keeling and Smitham',
                price: '179 $'
            }),
        ]
        );
    }


    return (
        <div className="container">
            <h1>Shopping App</h1>
            {
                products.map((product) => {
                    return <Product key={product.id} id={product.id} name={product.name} price={product.price} />
                })
            }
            <button onClick={ChangePrice}>Change Price</button>
            <HookCounter />
        </div>
    );
}