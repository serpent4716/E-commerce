import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import CartValAtom from '../../recoil/CartValAtom';
import data from '../Electronics/elec_products.json'
import CartIndexAtom from '../../recoil/CartIndexAtom';
import './cart.css';
const Cart = () => {
    const [cartval, setCartVal] = useRecoilState(CartValAtom);
    const [apiprod, setApiProd] = useRecoilState(CartIndexAtom);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (data[apiprod]) {
            const price = parseInt(data[apiprod].price.slice(1).replace(',', ''));
            setTotal(price * cartval);
        }
    }, [apiprod, cartval]);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        setCartVal(newQuantity);
    };

    return (
        <div>
            <header>
            <div className="navbar">
        <div className="nav-logo border">
            <div className="logo">
                <h1>ShopEase.</h1>
            </div>
        </div>
        <div className="search-bar">
            <input className="input" type="text" placeholder="Search..." ></input>
        </div>
        <div className="account border">
            <button><FontAwesomeIcon icon={faUser}/></button>
        </div>
        
        <div className="cart border">
            <button> <FontAwesomeIcon icon={faCartShopping}/> <h5>{cartval}</h5></button>
        </div>
    </div>
    
            </header>
            
            <h1 className='shopingCart'>Shopping Cart</h1>
            
            <div className="content">
                
                {data[apiprod] && (
                    <div className='shopping-cart'>
                        <div className="cart-item">
                            <input type="checkbox" />
                            <img src={data[apiprod].image} alt={data[apiprod].name} />
                            <div className="item-details">
                                <h2>{data[apiprod].name} {data[apiprod].desc} - Black</h2>
                                <p className="stock-status">In stock</p>
                                <p className="prime">Prime</p>
                                <p>Colour: <strong>Black</strong></p>
                                <div className="actions">
                                    <select id="quantity" value={cartval} onChange={handleQuantityChange}>
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                    <a href="#">Delete</a>
                                    <a href="#">Save for later</a>
                                    <a href="#">See more like this</a>
                                    <a href="#">Share</a>
                                </div>
                                
                            </div>
                            <div className="price">
                                <p>{data[apiprod].price}</p>
                            </div>
                        </div>
                    </div>
                )}
                <aside>
                <div className="item-divider" />
<div className="summary">
    <p>Subtotal ({cartval} item): ₹{total}</p>
    <button className="BUYING">Proceed to Buy</button>
</div>
<div className="divider" />
<div className="discover-more">
    <h2>Discover more</h2>
    <div className="suggested-item">
        <img src="https://images-eu.ssl-images-amazon.com/images/I/61+89PHEXgL._AC_UL100_SR100,100_.jpg" alt="Suggested Product 1" />
        <p>Lotus Herbals Night Cream For Hydrates, ...</p>
        <p>₹722.00</p>
        <button>Add to Cart</button>
    </div>
    <div className="suggested-item">
        <img src="https://images-eu.ssl-images-amazon.com/images/I/51kEmhAv3wS._AC_UL100_SR100,100_.jpg" alt="Suggested Product 2" />
        <p>Lotus Organics+ Precious Brightening ...</p>
        <p>₹503.00</p>
        <button>Add to Cart</button>
    </div>
</div>

                </aside>
            </div>
        </div>
    )
}

export default Cart