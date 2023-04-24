import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const addToCart = (tShirt) =>{
        const newCart = [...cart, tShirt];
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div>
            <h1>Total T-Shirts: {tShirts.length}</h1>
            <div className='tShirt'>
                {tShirts.map(tShirt=><TShirt key={tShirt._id} tShirt={tShirt} addToCart={addToCart}></TShirt>)}
            </div>
            </div>
            <div>
                <Cart carts={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;