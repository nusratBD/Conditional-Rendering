const Cart = ({carts}) => {
    return (
        <div>
            <h1>Order Summary</h1>
            <ol>
            {carts.map(cart=>
                <li>{cart.name}</li>
            )}
            </ol>
       </div>
    );
};

export default Cart;