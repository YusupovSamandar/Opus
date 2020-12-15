import React, { useState, createContext, useEffect } from "react";
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
    const [tempStudents, setTempStudents] = useState({ firstName: "Abdushukur", lastName: "Urinboev", phoneNumber: "+998906335599" });

    return (
        <TempStudentContext.Provider value={[tempStudents, setTempStudents]}>
            {props.children}
        </TempStudentContext.Provider>
    )
}