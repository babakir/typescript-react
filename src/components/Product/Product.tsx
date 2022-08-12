export const Product = (props: any) => {
    return (
        <div>
            <p>Book #{props.id} : {props.name} price : {props.price}</p>
            {props.children}
            <hr />
        </div>
    )
}

// export class Product extends Component<{}, any> {

//     constructor(props: any) {

//         super(props);

//         this.state = { value: '' };
//     }

//     render(): ReactNode {
//         return (
//             <div>
//                 <p>Book #{this.state.value.id} : {this.state.value.name} price : {this.state.value.price}</p>
//                 {/* {this.props.children} */}
//                 <hr />
//             </div>
//         );
//     }

// }