import { createSlice } from "@reduxjs/toolkit";

export const UserInfo = createSlice({
    name: "UserInfo",
    initialState: { user_type: null, token: null, user_id: null, student_grade: null, major: null, prev_taken_courses: null },
    reducers: {
        login: (state = {}, action) => {
            return {
                user_type: action.payload.user_type,
                token: action.payload.token,
                user_id: action.payload.user_id,
                student_grade: action.payload.student_grade,
                major: action.payload.major,
                prev_taken_courses: action.payload.prev_taken_courses
            }
        },
        logout: (state = {}) => {
            return {
                user_type: null,
                token: null,
                user_id: null,
                student_grade: null,
                major: null,
                prev_taken_courses: null
            }
        }
    }
});

export const { login, logout } = UserInfo.actions;

export default UserInfo.reducer;