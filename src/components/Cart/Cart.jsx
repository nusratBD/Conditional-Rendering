import './Cart.css';
const Cart = ({ carts }) => {
//Conditional Rendering:
    //1. if-else
    let message;
    if (carts.length === 0) {
        message = <p className="alert-to-buy">Please Buy Some Product</p>
    }
    else if(carts.length<=3){
        message = <p className="alert-to-buy-more">Buy More</p>
    }
    else{
        message = <p className="thanks-alert">Thanks For Shopping!!</p>
    }

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            {message}
            <ol>
                {carts.map(cart =>
                    <li>{cart.name}</li>
                )}
            </ol>
        </div>
    );
};

export default Cart;