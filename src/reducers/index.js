import { Satellite } from "@material-ui/icons";
import { createStore } from "redux";

export const AppState = {
    teachers: [],
    students: [],
    selectedTeacher: {},
    groupStudents: []
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

        default:
            return state;
    }
}

export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);