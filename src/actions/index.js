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

export const loadUsers = (users) => {
  return {
    type: "LOAD_USERS",
    users
  }
}

export const setUser = (user) => {
  return {
    type: "SET_USER",
    user
  }
}

export const logOuts = () => {
  return {
    type: "LOG_OUT"
  }
}
