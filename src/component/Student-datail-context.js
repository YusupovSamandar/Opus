import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";

export const StudentContext = createContext();
export const TempStudentContext = createContext();
export const themeContext = createContext();

export const StudentProvider = (props) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const { data } = await axios.get("http://localhost:4000/Student-details");
        setStudents(data);
    }

    return (
        <StudentContext.Provider value={[students, setStudents]}>
            {props.children}
        </StudentContext.Provider>
    )
}

export const ThemeProvider = (props) => {
    const [isDark, setIsDark] = useState(false);

    return (
        <themeContext.Provider value={[isDark, setIsDark]}>
            {props.children}
        </themeContext.Provider>
    )
}

export const TempStudentProvider = (props) => {

    const [student, setStudent] = useContext(StudentContext);



    const [tempStudents, setTempStudents] = useState({
        "id": "1",
        "firstName": "Samandar",
        "lastName": "Yusupov",
        "fatherName": "Yunusali",
        "dateOfBirth": "31.10.2005",
        "phoneNumber": "+998999974771",
        "extraPhoneNumber": "+998901245457",
        "gender": "Male",
        "schoolarship": "false",
        "course": "1-bosqich",
        "group": "Malika",
        "advertise": "Social Media",
        "comment": "Something must be written",
        "fees": []
    });

    useEffect(() => {
        let newArray = student.map((stud) => {
            if (stud.id === tempStudents.id) {
                return { ...stud, fees: tempStudents.fees }
            } else {
                return stud;
            }
        });

        setStudent(newArray)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tempStudents]);

    return (
        <TempStudentContext.Provider value={[tempStudents, setTempStudents]}>
            {props.children}
        </TempStudentContext.Provider>
    )
}