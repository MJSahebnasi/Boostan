import React from 'react';
import StudentClassCard from './StudentClassCard';
import { send_request } from '../send_request';

// import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";

async function get_all_courses(method, url){
    try {
        const res = await send_request(method, url);
        return res;
    }
    catch (e) {
        console.log('student main page - getting all courses: oops ...');
    }
}

function StudentBookClass() {
    let courses_raw = get_all_courses("GET", "all_courses")
    console.log('----$$$$----')
    console.log(courses_raw)
    console.log('----$$$$----')
    let course_components = []
    for (var i = 0; i < courses_raw.length; i++) {
        let crs = courses_raw[i];

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