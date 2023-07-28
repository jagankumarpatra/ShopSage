import React, { useState } from 'react';
import './HomePage.css';
// import firebase
import CartModal from './CartModal';
import { Navigate, useNavigate } from 'react-router';
// import {Link, useNavigate } from 'react-router-dom';

const productData=[
  {
    id: 1,
    image: 'https://www.jiomart.com/images/product/original/490008332/closeup-everfresh-red-hot-gel-toothpaste-150-g-pack-of-2-product-images-o490008332-p490008332-0-202306071847.jpg?im=Resize=(360,360)',
    description: 'Closeup Everfresh Red Hot Gel Toothpaste 150 g (Pack of 2)',
    price: '100',
    quant:1
  },
  {
    id: 2,
    image: 'https://www.jiomart.com/images/product/original/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-0-202208111657.jpg?im=Resize=(360,360)',
    description: 'Nirmal 5kg pack ',
    price: '369',
  },
  {
    id: 3,
    image: 'https://www.jiomart.com/images/product/original/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-0-202208111657.jpg?im=Resize=(360,360)',
    description: 'Surf 5kg pack ',
    price: '369',
  },
  {
    id: 4,
    image: 'https://www.jiomart.com/images/product/original/492367966/surf-excel-easy-wash-detergent-powder-5-kg-product-images-o492367966-p590837659-0-202208111657.jpg?im=Resize=(360,360)',
    description: 'FeshSoap 5kg pack ',
    price: '369',
  }
]
const HomeData=[
  {
    id: 1,
    image: "https://www.jiomart.com/images/product/original/rvrrnlvyew/shf-velvet-door-mat-bathmat-multicolor-set-of-5-piece-size-30x45-cm-or-12x18-inch-oval-product-images-orvrrnlvyew-p601734748-0-202305232358.jpg?im=Resize=(360,360)",
    description: 'Carpet ',
    price: '99', 
  },
  {
    id: 2,
    image: "https://www.jiomart.com/images/product/original/rvle2t4jzd/fendo-21-inches-2-fold-auto-open-umbrella-for-travel-premium-umbrella-for-women-sea-green-product-images-orvle2t4jzd-p600753556-0-202304251643.jpg?im=Resize=(360,360)",
    description: 'Umbrella ',
    price: '199', 
  },
  {
    id: 3,
    image: "https://www.jiomart.com/images/product/original/rvlo9rwvos/nirlon-stainless-steel-fridge-water-bottle-refrigerator-bottle-single-wall-leakproof-silver-1000-ml-pack-of-2-product-images-orvlo9rwvos-p598039824-0-202302022000.jpg?im=Resize=(360,360)",
    description: 'Stainless Steel Water Bottel Pack of 2',
    price: '399',  
  },
  {
    id: 4,
    image: "https://www.jiomart.com/images/product/original/493830167/nirlon-red-aluminium-non-stick-cookware-set-3-pcs-product-images-o493830167-p602022890-0-202305311112.jpg?im=Resize=(360,360)",
    description: 'nirlon-red-aluminium-non-stick-cookware-set-3-pcs',
    price: '499',  
  }
]
const FashionData=[
  {
    id: 1,
    image: "https://www.jiomart.com/images/product/original/443018808_white/cotton-button-down-shirt-with-patch-pocket-model-443018808_white-0-202305302309.jpg?im=Resize=(330,410)"  ,
    description: 'Cotton White Shirt',
    price: '699',  
  },
  {
    id: 2,
    image: "https://www.jiomart.com/images/product/original/rvoixcjdfc/tripr-pack-of-2-men-printed-track-pants-product-images-rvoixcjdfc-0-202304290436.jpg?im=Resize=(330,410)"  ,
    description: 'Track Pants',
    price: '250',  
  },
  {
    id: 3,
    image: "https://www.jiomart.com/images/product/original/443009729_mustard/np-06-slim-fit-shirt-with-patch-pocket-model-443009729_mustard-0-202303091626.jpg?im=Resize=(330,410)"   ,
    description: 'Slim-fit-shirt',
    price: '899',  
  },
  {
    id: 4,
    image: "https://www.jiomart.com/images/product/original/443012862_navy/plaid-checked-slim-fit-shirt-model-443012862_navy-0-202305301955.jpg?im=Resize=(330,410)"   ,
    description: 'Printed Formal Shirt',
    price: '399',  
  }
]
const electronicsData=[
  {
    id: 1,
    image: "https://www.jiomart.com/images/product/original/491946461/apple-mgn63hna-macbook-air-apple-m1-chip-8gb-256gb-ssd-macos-big-sur-retina-33-78-cm-13-3-inch-digital-o491946461-p590441594-0-202108122000.jpeg?im=Resize=(360,360)"  ,
    description: 'Apple MacBook Air',
    price: '140000',  
  },
  {
    id: 2,
    image: "https://www.jiomart.com/images/product/original/493177048/hp-15s-fr5007tu-laptop-12th-gen-intel-core-i5-1235u-8gb-ram-512gb-ssd-iris-xe-graphics-windows-11-home-mso-fhd-39-6-cm-15-6-inch-natural-silver-digital-o493177048-p593199864-0-202207281636.jpeg?im=Resize=(360,360)"  ,
    description: 'Laptop-12th-gen-intel-core-i5',
    price: '45000',  
  },
  {
    id: 3,
    image: "https://www.jiomart.com/images/product/original/491901317/mi-20000-mah-power-bank-3i-digital-o491901317-p591212019-0-202203242235.jpeg?im=Resize=(360,360)"   ,
    description: 'Mi-20000-mah-power-bank-3i',
    price: '3000',  
  },
  {
    id: 4,
    image: "https://www.jiomart.com/images/product/original/rvqrvcy8g0/rv7-anaglyph-3d-video-glasses-red-and-blue-product-images-orvqrvcy8g0-p602442681-0-202306141939.jpg?im=Resize=(360,360)"   ,
    description: '3d-video-glasses-red-and-blue',
    price: '2950',  
  }
]
const sportsData=[
  {
    id: 1,
    image: "https://www.jiomart.com/images/product/original/rvrjvnadkn/aristocrat-red-hard-body-luggage-strolly-set-of-3-product-images-orvrjvnadkn-p600558301-0-202304151116.jpg?im=Resize=(360,360)"  ,
    description: 'Aristocrat-red-hard-body-luggage-strolly-set-of-3',
    price: '6999',  
  },
  {
    id: 2,
    image: "https://www.jiomart.com/images/product/original/rvbq6gef4q/avon-buke-bicycles-steam-26t-high-performance-mtb-with-26-inches-wheel-size-and-18-inches-carbon-steel-frame-rigid-suspension-fork-front-rare-disc-brakes-and-double-wall-alloy-rims-matt-grey-product-images-orvbq6gef4q-p600039059-0-202303311514.jpg?im=Resize=(360,360)"  ,
    description: 'Buke Bicycle',
    price: '5000',  
  },
  {
    id: 3,
    image: "https://www.jiomart.com/images/product/original/rvvo9uthxr/abso-wooden-cricket-kit-bat-size-4-for-age-group-9-11-years-product-images-orvvo9uthxr-p591012968-0-202201192018.jpg?im=Resize=(360,360)"   ,
    description: 'Cricket Bat Set',
    price: '2999',  
  },
  {
    id: 4,
    image: "https://www.jiomart.com/images/product/original/rvy1gnqe4c/enorme-magnetic-educational-folding-chess-board-game-for-kids-and-adults-10-inch-product-images-orvy1gnqe4c-p591419318-0-202205180647.jpg?im=Resize=(360,360)"   ,
    description: 'Chess Board',
    price: '550',  
  }
]
// top deals
const toDeals=[
  {
    id: 1,
    image: "https://www.jiomart.com/images/product/original/493178801/redmi-11-prime-64-gb-4-gb-ram-peppy-purple-mobile-phone-digital-o493178801-p594779628-0-202210221328.jpeg?im=Resize=(360,360)"   ,
    description: 'Redmi 11 prime 64gb',
    price: '10000',  
  },
  {
    id: 2,
    image: "https://www.jiomart.com/images/product/original/rvpdbdc2y5/beatxp-vortex-plus-4m-air-bike-exercise-cycle-with-adjustable-cushioned-seat-moving-handles-back-support-tummy-twister-black-product-images-orvpdbdc2y5-p592463815-0-202207090758.jpg?im=Resize=(360,360)"   ,
    description: 'bike-exercise-cycle',
    price: '5500',  
  },
  {
    id: 3,
    image: "https://www.jiomart.com/images/product/original/rvmjxu8djg/essentail-world-engineered-wood-study-table-free-standing-finish-color-glossy-pre-assembled-product-images-orvmjxu8djg-p594184605-0-202209302039.jpg?im=Resize=(360,360)"   ,
    description: 'Wood-study-table',
    price: '700',  
  },
  {
    id: 4,
    image: "https://www.jiomart.com/images/product/original/491667188/neopack-wsltbr42-42-44-mm-leather-strap-brown-digital-o491667188-p590038023-0-202009260542.jpeg?im=Resize=(360,360)"   ,
    description: 'Leather-strap-brown-digital watch',
    price: '2550',  
  }
]
// top picks
const topicks=[
  {
    id: 1,
    image: "https://www.jiomart.com//images/product/original/491373488/britannia-nutrichoice-hi-fibre-digestive-biscuits-1-kg-product-images-o491373488-p491373488-0-202209281320.jpg?im=Resize=(150,150)"   ,
    description: 'Britannia-nutrichoice',
    price: '55',  
  },
  {
    id: 2,
    image: "https://www.jiomart.com//images/product/original/490001325/brooke-bond-taj-mahal-tea-500-g-product-images-o490001325-p490001325-0-202306012114.jpg?im=Resize=(150,150)"   ,
    description: 'Tea Pack',
    price: '100',  
  },
  {
    id: 3,
    image: "https://www.jiomart.com//images/product/original/rvetg9cnmp/realme-11-pro-5g-oasis-green-8gb-ram-256gb-rom-smartphone-product-images-orvetg9cnmp-p602866101-0-202306301655.jpg?im=Resize=(150,150)"   ,
    description: 'Realme Phone',
    price: '7000',  
  },
  {
    id: 4,
    image: "https://www.jiomart.com//images/product/original/491187481/bournvita-750-g-product-images-o491187481-p491187481-0-202203150515.jpg?im=Resize=(150,150)"   ,
    description: 'Bournvita',
    price: '250',  
  }
]
// top electronics
const topEle=[
  {
    id: 1,
    image: "https://www.jiomart.com/images/product/original/493664826/samsung-galaxy-m13-5g-64-gb-4-gb-ram-aqua-green-mobile-phone-digital-o493664826-p597537672-0-202301131204.png?im=Resize=(360,360)"   ,
    description: 'SamSung Galaxy M13',
    price: '11999',  
  },
  {
    id: 2,
    image: "https://www.jiomart.com/images/product/original/491997817/apple-ipad-9th-gen-2021-25-91-cm-10-2-inch-wi-fi-tablet-64-gb-space-grey-mk2k3hn-a-digital-o491997817-p590798663-0-202109210546.jpeg?im=Resize=(360,360)"   ,
    description: 'Apple Ipad 9th gen',
    price: '100000',  
  },
  {
    id: 3,
    image: "https://www.jiomart.com/images/product/original/rvyjhir3om/i-kall-n7-black-wi-fi-only-tablet-7-inch-2-gb-ram-16-gb-rom-product-images-orvyjhir3om-p592455831-0-202212221737.jpg?im=Resize=(360,360)"   ,
    description: 'Tablet',
    price: '7999',  
  },
  {
    id: 4,
    image: "https://www.jiomart.com/images/product/original/rv0js4ebvy/chakam-new-intelligent-led-table-lamp-4-in-1-wireless-charger-night-light-lamp-app-control-bluetooth-speaker-alarm-clock-home-office-study-bedside-charging-lamp-for-bedroom-home-decor-product-images-orv0js4ebvy-p602997192-0-202307071506.jpg?im=Resize=(360,360)"   ,
    description: 'Samrt lamp',
    price: '2580',  
  }
]
// iphone
const topiph = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/61nzPMNY8zL._SX466_.jpg",
    description:'The iPhone 11 is a powerful smartphone with a dual-camera system, A13 Bionic chip, and all-day battery life.',
    price: '150000'
  }
];

function HomePage() {
  const [isPaymentDone, setPaymentDone] = useState(false);
  const navigate=useNavigate();
  //cart systm
  const [cartItems, setCartItems] = useState([]);
  const cartItemCount = cartItems.length;
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    // setCartItems(cartItems+product);
  };
 
  // State to store the cart modal visibility
  const [isCartOpen, setCartOpen] = useState(false);

   // Function to toggle the cart modal visibility
   const toggleCart = () => {
    setCartOpen(!isCartOpen);
    
    if (isPaymentDone) {
      setCartItems([]);
      setPaymentDone(true); 
      // navigate('./cart');
    }
  };

  

  // search 
  const[searchQuery,setSearchQuery]=useState('');
  const [isSearched, setIsSearched] = useState(false);
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    event.preventDefault(); 
    setIsSearched(true);
  };

// grocery search
const filteredProducts = () => {
  if (searchQuery.trim() === '') {
    // If search query is empty, show all products
    return productData;
    
  } 
  else  {
    // If search query is not empty, filter products based on the description
    return productData.filter((product) =>
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
};
// home data search
const filteredProduct = () => {
  if (searchQuery.trim() === '') {
    // If search query is empty, show all products
    return HomeData;
    
  } 
  else  {
    // If search query is not empty, filter products based on the description
    return HomeData.filter((product) =>
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
};
// fashion search
const filteredProdu = () => {
  if (searchQuery.trim() === '') {
    // If search query is empty, show all products
    return FashionData;
    
  } 
  else  {
    // If search query is not empty, filter products based on the description
    return FashionData.filter((product) =>
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
};
// electronics search
const filteredProd = () => {
  if (searchQuery.trim() === '') {
    // If search query is empty, show all products
    // return electronicsData;
    return electronicsData;
    
  } 
  else  {
    // If search query is not empty, filter products based on the description
    return electronicsData.filter((product) =>
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
};
// sports search
const filteredPro = () => {
  if (searchQuery.trim() === '') {
    // If search query is empty, show all products
    // return electronicsData;
    return sportsData;
    
  } 
  else  {
    // If search query is not empty, filter products based on the description
    return sportsData.filter((product) =>
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
};


  const[Groceries,setGroceries]=useState(false);
  const showGroceries=()=>{
     setGroceries(!Groceries);    
  }
  const[Home,setHome]=useState(false);
  const showHomeandKitchen=()=>{
    setHome(!Home);
  }
  const[fashion,setFashion]=useState(false);
  const showFashion=()=>{
    setFashion(!fashion);
  }
  const[electronics,setElectronics]=useState(false);
  const showElectronics=()=>{
    setElectronics(!electronics);
  }
  const[sports,setSports]=useState(false);
  const showSports=()=>{
    setSports(!sports);
  }
  const showdata=()=>{
    alert('the produ')
  }
  // const navigate=useNavigate();
  const navi = () => {
    navigate('/home');
    window.location.reload()
  }
  const [showLogout, setShowLogout] = useState(false);
  
  const handleLogout = () =>{
    navigate('/signin');
  };

  const handleAccountClick = () => {
    setShowLogout(!showLogout)
  };
  return (
    <div>
      {/* Top header */}
      <div>
        <h4 id='top'>Welcome To ShopSage Store</h4> <hr />
      </div>
      <div className="coupon-code">
      <span className="blinking-text">Use Coupon code ShopSage10 to get extra 10% off..</span> 
      </div>
      

      {/* Navbar*/}
      <div className="container">
        <img src={require('./img.png')} alt="ShopSage Logo" id='im' onClick={navi} />
        <input type="search" name="sr" id="Src" placeholder="Please Select the Category and do Search the products" value={searchQuery} onChange={handleSearch} />
        <span id="accountSymbol" onClick={handleAccountClick}>👤</span> {/* Replace with the account symbol of your choice */}
        
        {showLogout && (
        <div>
          {/* Replace the following with your logout option */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
        <span id="cartItemCount">{cartItemCount}</span>
        <span id="cartSymbol" onClick={toggleCart}>🛒</span>     
      </div>
      {isCartOpen && <CartModal cartItems={cartItems} onClose={toggleCart} onPaymentDone={() => setPaymentDone(true)}/>}
      {/* Categories */}
      <div className="Categories">
        <button className="active" onClick={showGroceries}>Groceries</button>
        <button className="active" onClick={showHomeandKitchen}>Home And Kitchen</button>
        <button  className="active" onClick={showFashion}>Fashion</button>
        <button className="active" onClick={showElectronics}>Electronics</button>
        <button className="active" onClick={showSports}>Sports Toys And Luggage</button>
      </div>
      {/* Display the cart modal */}
      
      {/* groceries data */}
        {Groceries &&  (
          <div className='product-container'>
          {/* <h3 >Grocery Store</h3> */}
          {filteredProducts().map((product) => (
            <div className="product-box" key={product.id}>
                <img className="product-image" src={product.image} alt={product.description} onClick={showdata}/>
                <div className="product-description">{product.description}</div>
                <div className="product-price">{product.price}</div>
                <button className="add-to-cart-button" onClick={()=>addToCart(product)}>Add to Cart </button>
            </div>
          ))}
          </div>
        )}
      {/* home data */}
      {Home &&  (
          <div className='product-container'>
          {/* <h3 >Grocery Store</h3> */}
          {filteredProduct().map((product) => (
            <div className="product-box" key={product.id}>
                <img className="product-image" src={product.image} alt={product.description} onClick={showdata}/>
                <div className="product-description">{product.description}</div>
                <div className="product-price">{product.price}</div>
                <button className="add-to-cart-button" onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
          ))}
          </div>
        )}
      {/* fashion data */}
      {fashion &&  (
          <div className='product-container'>
         
          {filteredProdu().map((product) => (
            <div className="product-box" key={product.id}>
                <img className="product-image" src={product.image} alt={product.description} onClick={showdata}/>
                <div className="product-description">{product.description}</div>
                <div className="product-price">{product.price}</div>
                <button className="add-to-cart-button" onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
          ))}
          </div>
        )}
      {/* electronics data */}
      {electronics &&  (
          <div className='product-container'>
         
          {filteredProd().map((product) => (
            <div className="product-box" key={product.id}>
                <img className="product-image" src={product.image} alt={product.description} onClick={showdata}/>
                <div className="product-description">{product.description}</div>
                <div className="product-price">{product.price}</div>
                <button className="add-to-cart-button" onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
          ))}
          </div>
        )}
      {/* sports data */}
      {sports &&  (
          <div className='product-container'>
         
          {filteredPro().map((product) => (
            <div className="product-box" key={product.id}>
                <img className="product-image" src={product.image} alt={product.description} onClick={showdata}/>
                <div className="product-description">{product.description}</div>
                <div className="product-price">{product.price}</div>
                <button className="add-to-cart-button" onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
          ))}
          </div>
        )}
        
      {/*Start Banners */}
    
      <div className='StartBanners'>
  <div className='slider' >
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1689760513_Beautifully_Crafted_Decor_for_Your_Living_Room__Desktop.jpg?im=Resize=(1680,320)" alt="" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1689779807_Home_improvement_needs_Desktop.jpg?im=Resize=(1680,320)" alt="" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1689761560_Nutritious_Dals_and_Pulses_Desktop.jpg?im=Resize=(1680,320)" alt="" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1689955910_HPMC_DT_without_banking_strip.jpg?im=Resize=(1680,320)" alt="" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1689761419_Max_Discounts_On_Daily_Essentails_Desktop.jpg?im=Resize=(1680,320)" alt="" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1689779403_WhatsApp_Image_2023-07-17_at_17.37.311.jpg?im=Resize=(1680,320)" alt="" />
    <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1689779740_Best_selling_kitchenware_range_Desktop.jpg?im=Resize=(1680,320)" alt="" />
  </div>
</div>
      {/* Flash Sales */}
     
      <h3 className='td'>Top Deals from ShopSage Store</h3>
      <div className='product-container'>
          {toDeals.map((product) => (
            <div className="product-box" key={product.id}>
                  <img className="product-image" src={product.image} alt={product.description} />
                  <div className="product-description">{product.description}</div>
                  <div className="product-price">{product.price}</div>
                  <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                    Add to Cart
            </button>
        </div>
      ))}
      </div>

      
      {/* Top Picks */}
      <h3 className='td'>Top Picks</h3>
      <div className='product-container'>
            {topicks.map((product) => (
            <div className="product-box" key={product.id}>
                  <img className="product-image" src={product.image} alt={product.description} />
                  <div className="product-description">{product.description}</div>
                  <div className="product-price">{product.price}</div>
                  <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                    Add to Cart
            </button>
        </div>
      ))}
      </div>
      
      {/* Best Smartphones */}
      <h3 className='td'>Top Electronics</h3>
      <div className='product-container'>
              {topEle.map((product) => (
            <div className="product-box" key={product.id}>
                  <img className="product-image" src={product.image} alt={product.description} />
                  <div className="product-description">{product.description}</div>
                  <div className="product-price">{product.price}</div>
                  <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                    Add to Cart
            </button>
        </div>
      ))}
      </div>
      {/* Product of the day */}
      {/* <h3 className='td'>Product of the day</h3>
      <div className='product-container'>
              {topiph.map((product) => (
            <div className="product-box" key={product.id}>
                  <img className="product-image" src={product.image} alt={product.description} />
                  <div className="product-description">{product.description}</div>
                  <div className="product-price">{product.price}</div>
                  <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                    Add to Cart
            </button>
        </div>
      ))}
      </div> */}
      <h3 className='product-of-the-day-title'>Product of the day</h3>
<div className='product-of-the-day-container'>
  {topiph.map((product) => (
    <div className="product-box" key={product.id}>
      <img className="product-image" src={product.image} alt={product.description} />
      <div className="product-description">{product.description}</div>
      <div className="product-price">{product.price}</div>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  ))}
</div>

      {/* Assurance */}
      <div className="footer">
        <div className="footer-box">
          <span className="footer-icon">🌍</span>
          <p className="footer-description">
            World Wide delivery - Fast and reliable shipping to anywhere in the world.
          </p>
        </div>
        <div className="footer-box">
          <span className="footer-icon">🔒</span>
          <p className="footer-description">
            Safe Payment Gateway - Securely make payments with our trusted payment gateway.
          </p>
        </div>
        <div className="footer-box">
          <span className="footer-icon">🛡️</span>
          <p className="footer-description">
            Shop with confidence - We guarantee the quality and authenticity of our products.
          </p>
        </div>
        <div className="footer-box">
          <span className="footer-icon">📞</span>
          <p className="footer-description">
            24/7 support - Our customer support team is available 24/7 to assist you.
          </p>
        </div>
      </div>
      {/* Footer page */}
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>Order Status</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Information</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li>Categories</li>
            <li>Deals</li>
            <li>New Arrivals</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We at ShopSage assure you quality products with faster delivery and at lower price.
          </p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li>
              
                <i className="fa fa-facebook"></i>
              
            </li>
            <li>
              
                <i className="fa fa-twitter"></i>
            
            </li>
            <li>
              
                <i className="fa fa-instagram"></i>
              
            </li>
          </ul>
        </div>
      </div>
     
    </footer>
    </div>
  );
}

export default HomePage;