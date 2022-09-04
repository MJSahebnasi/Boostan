import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

import { logout } from "../redux/UserInfo";

function StudentHeader() {

    const my_dispatch = useDispatch();

    return (
        <div className="student_header">
            <div className="student_header_container">
                <div className='menue_buttons_div'>
                    <Link className='menu_nutton_link' to={"/StudentPage/register"}><h3>ثبت نام کلاس</h3></Link>
                    <Link className='menu_nutton_link' to={"/StudentPage/my_classes"}><h3>کلاس های من</h3></Link>
                    <Link className='menu_nutton_link' to={"/StudentPage/prev_semesters"}><h3>آمار ترم های قبل</h3></Link>
                    <Link className='menu_nutton_link' to={"/StudentPage/reviews"}><h3>نظرات دانشجویان</h3></Link>
                </div>

                <div>
                    {/* <Link id='cartLink' to={"/cart"}><button type="button" className="cart_button">Cart</button></Link> */}
                    <button type="button" 
                        className="cart_button"
                        onClick={() => { my_dispatch(logout()) }}
                        >خروج</button>
                    {/* <div id='cartItemCounter'>{cartItems.length}</div> */}
                </div>
            </div>
        </div>
    );

}
export default StudentHeader;