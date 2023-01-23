import React from 'react';
import StudentClassCard from './StudentClassCard';
import { send_request } from '../send_request';
import { useState, useEffect } from 'react';


// import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";

async function get_all_courses(method, url){
    try {
        const res = await send_request(method, url);
        const res_obj = await res.json()
        console.log('-----get_all_courses-----')
        console.log(res_obj)
        console.log('-------------------------')
        return res_obj;
    }
    catch (e) {
        console.log('student main page - getting all courses: oops ...');
    }
}

function StudentBookClass() {
    let courses = get_all_courses("GET", "/all_courses")

    console.log('----courses_raw----')
    console.log(courses)
    console.log('-------------------')

    let course_components = []
    for (var i = 0; i < courses.length; i++) {
        let crs = courses[i];

        console.log('---$$----')
        console.log(crs)
        console.log(typeof crs)

        course_components.push(<StudentClassCard key={i} course_name={crs.name} />);
    };

    return (
        <div className="bookclass_body">
            <div className='search_div'>
                <input id="bookclass_search_bar" className='search_input' type={'text'} placeholder={'اسم کلاسی که دنبالشی رو اینجا بنویس'}/>
            </div>

            <div className='class_container'>

                {/* {course_components} */}

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