import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";

function StudentHeader() {

    return (
        <div className="student_header">
            <div className="student_header_container">
                <Link className='menu_nutton_link' to={"/StudentPage/register"}><h3>ثبت نام کلاس</h3></Link>
                <Link className='menu_nutton_link' to={"/StudentPage/my_classes"}><h3>کلاس های من</h3></Link>
                <Link className='menu_nutton_link' to={"/StudentPage/prev_semesters"}><h3>آمار ترم های قبل</h3></Link>
                <Link className='menu_nutton_link' to={"/StudentPage/reviews"}><h3>نظرات دانشجویان</h3></Link>

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