import React from 'react';
import ClassInfo from './ClassInfo';

function StudentClassCard(props) {

    return (
        <div className="StudentClassCard_container">

            <ClassInfo 
                course_name={props.course_name}
                instructor_name={props.instructor_name}
                class_code={props.class_code}
                class_capacity={props.class_capacity}
                registered={props.registered}
                in_queue={props.in_queue}
            />

            <div className='StudentClassCard_register'>
                <button type='button'>ثبت نام</button>
            </div>

        </div>
    );

}
export default StudentClassCard;