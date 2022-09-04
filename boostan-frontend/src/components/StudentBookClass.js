import React from 'react';
import StudentClassCard from './StudentClassCard';

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
                <StudentClassCard
                    course_name={'مبانی طراحی سیستم های دیجیتال'}
                    instructor_name={'علی جهانیان'}
                    class_code={1234002}
                    class_capacity={50}
                    registered={50}
                    in_queue={12}
                />

                <StudentClassCard
                    course_name={'برنامه نویسی پیشرفته'}
                    instructor_name={'صادق علی اکبری'}
                    class_code={1234003}
                    class_capacity={50}
                    registered={40}
                    in_queue={0}
                />

                <StudentClassCard
                    course_name={'مبانی طراحی سیستم های دیجیتال'}
                    instructor_name={'علی جهانیان'}
                    class_code={1234002}
                    class_capacity={50}
                    registered={50}
                    in_queue={12}
                />

                <StudentClassCard
                    course_name={'برنامه نویسی پیشرفته'}
                    instructor_name={'صادق علی اکبری'}
                    class_code={1234003}
                    class_capacity={50}
                    registered={40}
                    in_queue={0}
                />

                <StudentClassCard
                    course_name={'مبانی طراحی سیستم های دیجیتال'}
                    instructor_name={'علی جهانیان'}
                    class_code={1234002}
                    class_capacity={50}
                    registered={50}
                    in_queue={12}
                />

            </div>

        </div>
    );

}
export default StudentBookClass;