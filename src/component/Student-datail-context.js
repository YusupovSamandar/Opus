import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const StudentContext = createContext();
export const TempStudentContext = createContext();

export const StudentProvider = (props) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const { data } = await axios.get("http://localhost:3000/students");
        setStudents(data);
    }

    return (
        <StudentContext.Provider value={[students, setStudents]}>
            {props.children}
        </StudentContext.Provider>
    )
}

export const TempStudentProvider = (props) => {
    const [tempStudents, setTempStudents] = useState({ name: "Abdushukur", surname: "Urinboev", phone: "+998906335599" });

    return (
        <TempStudentContext.Provider value={[tempStudents, setTempStudents]}>
            {props.children}
        </TempStudentContext.Provider>
    )
}