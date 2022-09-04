import React from 'react';

function ClassInfo(props) {

    return (
        <div className="ClassInfo_container">
            <div className='class_info'>
                <p>
                    {props.course_name} - {props.instructor_name} - کد: {props.class_code}
                </p>
            </div>

            <div className='class_registration_info'>
                <p>
                    ظرفیت: {props.class_capacity} - ثبت نام شده: {props.registered} - در صف: {props.in_queue}
                </p>
            </div>
        </div>
    );

}
export default ClassInfo;