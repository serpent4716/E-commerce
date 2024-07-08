import React from 'react'
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import CartValAtom from '../../recoil/CartValAtom';
import CartIndexAtom from '../../recoil/CartIndexAtom';
const Product = () => {
    const [cartval, setCartVal] = useRecoilState(CartValAtom);
    const[apiprod, setApiProd] = useRecoilState(CartIndexAtom);
    function changeImage(imgElement) {
        const mainImageElement = document.getElementById('main-product-image');
        if (mainImageElement) {
            mainImageElement.src = imgElement.src;
        }
    }
    
    
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

    <div className="container">
    <div className="main-content">
        <div className="product-details">
            <h1 className="product-title">HP Victus Gaming Laptop, AMD Ryzen 5 5600H, 4GB RTX 3050 GPU, 15.6-inch (39.6 cm), FHD, IPS, 144Hz, 8GB DDR4, 512GB SSD</h1>
            <div className="ratings">
                <span>⭐⭐⭐⭐☆</span> (57 ratings)
            </div>
            <div className="price">
                ₹99,990 <span className="discount">- 28% ₹74,999</span>
            </div>
            <div className="emi-info">
                <p>₹9,832 /month EMI starts</p>
                <p>No Cost EMI available</p>
            </div>
            <div className="buttons">
                <button className="add-to-cart" onClick={() =>setCartVal(cartval+1) && setApiProd(0)}>Add to Cart</button>
                <Link to='/cart'>
                <button className="buy-now">Buy Now</button>
                </Link>
                
            </div>
        </div>
        <div className="side-bar">
            <ul>
                <li><img src="https://m.media-amazon.com/images/I/615jlhQq8PL._SX679_.jpg" alt='' onClick={(e) => changeImage(e.target)}/></li>
                <li><img src="https://m.media-amazon.com/images/I/61qHjL+X+pL._SX679_.jpg"alt='' onClick={(e) => changeImage(e.target)}/></li>
                <li><img src="https://m.media-amazon.com/images/I/61gZdQUgKBL._SX679_.jpg"alt='' onClick={(e) => changeImage(e.target)}/></li>
                <li><img src="https://m.media-amazon.com/images/I/71V-hot6oqL._SX679_.jpg"alt='' onClick={(e) => changeImage(e.target)}/></li>
            </ul>
        </div>
    </div>

    
    <div className="main-product-image">
        <img id="main-product-image" src="https://m.media-amazon.com/images/I/71h9nOTd93L._SX679_.jpg" alt="HP Victus Gaming Laptop"/>
    </div>
</div>
    </div>
  )
}

export default Product