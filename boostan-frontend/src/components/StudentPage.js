import React, { useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";

import StudentBookClass from './StudentBookClass';
import StudentHeader from './StudentHeader';

function StudentPage(props) {

    // const my_dispatch = useDispatch();
    // const darkMode = useSelector((state) => state.colorMode.darkMode);
    // const [tab, setTab] = useState('register');

    // console.log('------------')
    // console.log(props.tab);

    if (props.tab === 'register')
        return (
            <div>
                <StudentHeader />

                <StudentBookClass />
            </div>
        );
    else if (props.tab === 'my_classes')
        return (
            <div>
                <StudentHeader />

                <p>به زودی ...</p>
            </div>
        );
    else if (props.tab === 'prev_semesters')
        return (
            <div>
                <StudentHeader />

                <p>به زودی ...</p>
            </div>
        );
    else if (props.tab === 'reviews')
        return (
            <div>
                <StudentHeader />

                <p>به زودی ...</p>
            </div>
        );
    else
        return (
            <div>oops ...</div>
        );

}
export default StudentPage;