import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";

function StudentHeader() {

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
        <div className="navbar">
            <div className="navbar_container">
                {/* <Link className='menu_nutton_link' to={"/"}><h3>All Products</h3></Link>
                <Link className='menu_nutton_link' to={"/Smartphones"}><h3>Smartphones</h3></Link>
                <Link className='menu_nutton_link' to={"/Notebooks"}><h3>Notebooks</h3></Link> */}

                <h3>کلاس ها</h3>
                <h3>آمار ترم های قبل</h3>
                <h3>نظرات دانشجویان</h3>

                <div>
                    {/* <Link id='cartLink' to={"/cart"}><button type="button" className="cart_button">Cart</button></Link> */}
                    <button type="button" className="cart_button">خروج</button>
                    {/* <div id='cartItemCounter'>{cartItems.length}</div> */}
                </div>
            </div>
        </div>
    );

}
export default StudentHeader;