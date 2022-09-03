import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";

function StudentBookClass() {

    // const cartItems = useSelector((state) => state.cart.items);

    // if (cartItems.length === 0) {
    //     return (
    //         <div className="navbar">
    //             <div className="container">
    //                 <Link className='menu_nutton_link' to={"/"}><h3>All Products</h3></Link>
    //                 <Link className='menu_nutton_link' to={"/Smartphones"}><h3>Smartphones</h3></Link>
    //                 <Link className='menu_nutton_link' to={"/Notebooks"}><h3>Notebooks</h3></Link>
    //                 <div>
    //                     <Link id='cartLink' to={"/cart"}><button type="button" className="cart_button">Cart</button></Link>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="bookclass_body">
            <div className='search_div'>
                <input id="bookclass_search_bar" className='search_input' type={'text'} placeholder={'اسم کلاسی که دنبالشی رو اینجا بنویس'}/>
            </div>

            <div className='class_container'>

            </div>
        </div>
    );

}
export default StudentBookClass;