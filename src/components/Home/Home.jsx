import React, { useEffect , useState} from 'react'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import data from './home_products.json'
import { Link } from 'react-router-dom';
const Home = () => {
    const [apiData, setApiData] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    useEffect(() => {
        console.log(data);
        setApiData(data);
    }, []);
    
  return (
    <div>
        <header>
        <div className="header">
            <div className="nav-logo border">
                <div className="logo">
                    <h1>ShopEase.</h1>
                </div>
            </div>
            <div className="search-bar">
                {/* <span className='actions'>
                        <button><FontAwesomeIcon icon={faSearch} /></button>
                </span> */}
                <input 
                    type="text" 
                    placeholder="Search for products, brands and more" 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                
                
            </div>
            <div className="account border">
               <button><FontAwesomeIcon icon ={faUser}  /></button> 
            </div>
            <div className="cart border">
                <button><FontAwesomeIcon icon = {faCartShopping}  /></button>
            </div>
        </div>
        <div className="panel">
           
            <div className="panel-ops">
            <button>
                <FontAwesomeIcon icon = {faBars} />
                All
                </button>
                <button>Today's Deal</button>
                <button>Electronics</button>
                <button>Clothing</button>
                <button>Accessories</button>
                <button>Shop Deals</button>
            </div>
            
        </div> 
        </header>
        <div className="main">
          <div className="msg">
            <marquee direction="right">
                <p>You are on ShopEase. Upto 80% OFF on millions of products. Shop Now</p>
                <p>Special offers on HDFC credit cards</p>
            </marquee>
          </div> 
        </div>
        <div className='product-wrapper'>
            {apiData?.filter((filtered_value) => {
                if(searchInput === ""){
                    return filtered_value;
                }
                else if(filtered_value?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())){
                    return filtered_value
                }
            })?.map((data, index) => {
                return(
                    <div key = {data?.id} className='product-card'>
                        <div className='product-name'>
                            <h1>{data?.name}</h1>
                        </div>
                        <div className='image-wrapper'>
                        {index === 0 ? (
                            <Link to='/electronics'>
                                <img className='image' src={data?.img} alt={data?.name} />
                            </Link>
                            ) : (
                                <img className='image' src={data?.img} alt={data?.name} />
                            )}
                        </div>
                        
                    </div>
                )
            })}
        </div>


    </div>
  )
}

export default Home