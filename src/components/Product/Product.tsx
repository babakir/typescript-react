const Product = (props: any) => {
    return (
        <div>
            <p>Book #{props.id} : {props.name} price : {props.price}</p>
            {props.children}
            <hr />
        </div>
    )
}

export default Product;