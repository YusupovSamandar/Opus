import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const StudentContext = createContext();
export const TempStudentContext = createContext();
export const RegisteredStudents = createContext();
export const chosenStudent = createContext();
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

export const RegisteredProvider = (props) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const { data } = await axios.get("http://localhost:4000/students");
        setStudents(data);
    }

    return (
        <RegisteredStudents.Provider value={[students, setStudents]}>
            {props.children}
        </RegisteredStudents.Provider>
    )
}


export const ThemeProvider = (props) => {
    const [isDark, setIsDark] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    return (
        <themeContext.Provider value={[isDark, setIsDark]}>
            {props.children}
        </themeContext.Provider>
    )
}

export const TempStudentProvider = (props) => {



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

    return (
        <TempStudentContext.Provider value={[tempStudents, setTempStudents]}>
            {props.children}
        </TempStudentContext.Provider>
    )
}

export const ChosenStudentProvider = (props) => {

    const [chosenStudents, setChosenStudents] = useState({});

    return (
        <chosenStudent.Provider value={[chosenStudents, setChosenStudents]}>
            {props.children}
        </chosenStudent.Provider>
    )
}