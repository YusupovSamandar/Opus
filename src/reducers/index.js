import { createStore } from "redux";

export const AppState = {
    teachers: [],
    students: [],
    selectedTeacher: {},
    groupStudents: [],
    users: [],
    currentUser: {},
    isAuth: true,
}


const reducer = (state = AppState, action) => {
    switch (action.type) {
        case "TEACHER_SELECTED": {
            const selectedTeacher = action.payload;
            const filteredStudents = state.students.filter(student => student.group === selectedTeacher.group);
            console.log(filteredStudents);
            return { ...state, groupStudents: filteredStudents };
        }

        case "DATA_LOAD": {
            const { teachers, students } = action;
            const chosenteacher = (teachers && teachers.length > 1) ? teachers[0] : {};
            const filteredStudents = (chosenteacher) ?
                students.filter(student => student.group === chosenteacher.group) :
                [];
            return {
                ...state,
                teachers: teachers,
                students: students,
                selectedTeacher: chosenteacher,
                groupStudents: filteredStudents
            }
        }
        case "LOAD_USERS": {
            const { users } = action;
            return {
                ...state,
                users: users
            }
        }
        case "SET_USER": {
            return {
                ...state,
                currentUser: action.user,
                isAuth: true
            }
        }
        case "LOG_OUT": {
            return {
                ...state,
                isAuth: false,
                currentUser: {}
            }
        }
        // case "ADD_DATA": {
        //     const students = action.payload;
        //     return {
        //         ...state,
        //         students
        //     }

        // }

        default:
            return state;
    }
}

export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);