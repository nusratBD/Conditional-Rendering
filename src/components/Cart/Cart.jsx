import './Cart.css';
const Cart = ({ carts }) => {
//Conditional Rendering:
    //Option-01: if-else
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
            {/* 
            Option-02: ternary operator
            */}
            {
                carts.length === 0? <p className='alert-to-buy-more'>Dokane Jokhon Esecho, Kicho to Kino</p>:<p className='alert-to-buy'>Tumi Fokir Na, Buje Gechi</p>
            }
            {/* 
            Option-03: Logical &&. If the condition is true, the code will execute.
            */}
            {
                carts.length===3 && <p className='discount-50'>If you buy more, you will get 50% discount!!</p>
            }
            {/* 
            Option-04: Logical ||. If the condition is false, the code will execute. 
            */}
            {
                carts.length<6||<p className='special-client-alert'>Tumi Amader Special Client!!</p>
            }
            <ol>
                {carts.map(cart =>
                    <li>{cart.name}</li>
                )}
            </ol>
        </div>
    );
};

export default Cart;