import './TShirt.css'
const TShirt = ({tShirt, addToCart}) => {
    const {name, price, picture} = tShirt;
    return (
        <div className='single-t-shirt'>
            <img src= {picture} alt=''></img>
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <button className='btn' onClick={()=>addToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;