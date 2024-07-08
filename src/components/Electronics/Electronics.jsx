import React, { useEffect , useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons';
import data from '../Electronics/elec_products.json'
import './electronics.css'
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import CartValAtom from '../../recoil/CartValAtom';
import CartIndexAtom from '../../recoil/CartIndexAtom';

const Electronics = () => {
    const [api, setApi] = useState(null);
    const [searchInp, setSearchInp] = useState("");
    const [cartval, setCartVal] = useRecoilState(CartValAtom);
    const [apiprod, setApiProd] = useRecoilState(CartIndexAtom);
    useEffect(()=>{
        setApi(data);
//         console.log(data);
        
// console.log(data?.[0]?.name);
// console.log(data[0]?.name);
// console.log(data?.name === data[0]?.name);
    },[]);
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
            <input className="input" type="text" placeholder="Search..." value={searchInp} onChange={(e) => setSearchInp(e.target.value)}></input>
        </div>
        <div className="account border">
            <button><FontAwesomeIcon icon={faUser}/></button>
        </div>
        
        <div className="cart border">
            <button> <FontAwesomeIcon icon={faCartShopping}/><h5>{cartval}</h5></button>
            
        </div>
    </div>
    
    </header>
    <div className='product-list'>
    {api?.filter((filtered_value) => {
                if(searchInp === ""){
                    return filtered_value;
                }
                else if(filtered_value?.name?.toLowerCase()?.includes(searchInp?.toLowerCase())){
                    return filtered_value
                }
            })?.map((data, index) => {
                return(
                    <div key = {data?.id} className='product-card'>
                        <span class="sponsored">Sponsored</span>
                         {index === 0 ? (
                        <Link to='/electronics/product'>
                         <img src={data?.image} alt={data?.name} />
                        </Link>
                        ):(
                         <img src={data?.image} alt={data?.name} /> 
                        )} 
                        
                        <div className='product-info'>
                            <h3>{data?.name}</h3>
                            <div className='price'>{data?.price}</div>
                            <button onClick={() =>setCartVal(cartval+1) && setApiProd(index)}>Add to Cart</button>
                            
                        </div>
                    </div>
                )})}
    <footer>
    <a href="#" class="back-to-top" title="Back to top">Back to Top</a>
    </footer>
    </div>
    </div>
  )
}

export default Electronics