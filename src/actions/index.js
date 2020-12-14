export const selectedTeacher = (teacher) => {
  //Return an action
  return {
    type: "TEACHER_SELECTED",
    payload: teacher
  };
};


export const loadData = (teachers, students) => {
  //Return an action
  return {
    type: "DATA_LOAD",
    teachers,
    students
  };
};  