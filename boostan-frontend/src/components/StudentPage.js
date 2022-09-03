import React from 'react';
import StudentBookClass from './StudentBookClass';

// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { changeMode } from "./redux/colorMode.js";

import StudentHeader from './StudentHeader';

function StudentPage(props) {

    // const my_dispatch = useDispatch();
    // const darkMode = useSelector((state) => state.colorMode.darkMode);

    return (
        <div>
            <StudentHeader />
            <StudentBookClass />
        </div>
    );

}
export default StudentPage;