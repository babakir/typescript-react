import React from 'react';
import { ReactNode } from 'react';
import Product from './components/Product/Product';
import MOCK_BOOK from './Data/MockBooks';

class App extends React.Component {

    render(): ReactNode {
        return (
            <div className="container">
                <h1>Shopping App</h1>
                <Product name="Angular" price="85 $" />
                <Product name="React" price="89 $">
                    <p>Discont is : 15 %</p>
                </Product>
                {/* <pre>
                    {JSON.stringify(MOCK_BOOK, null, ' ')}
                </pre> */}
                {
                    MOCK_BOOK.map(book =>
                        <Product id={book.id} name={book.name} price={book.price} />
                    )
                }
            </div>
        );
    }

}

export default App;