import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import './Register.css'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, loadData } from '../../actions'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))


function FormPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const { data: teachers } = await axios.get("http://localhost:4000/teachers");
    const { data: students } = await axios.get("http://localhost:4000/students");
    dispatch(loadData(teachers, students));
  }
  const classes = useStyles();
  const students = useSelector(state => state.students);
  const [gender, setGender] = useState()
  const [scholarship, setScholarship] = useState()
  const [groups, setGroups] = useState()
  const [isexsist, setIsexist] = useState(true)
  const [payment, setPayment] = useState('Payment')
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [fathername, setFathername] = useState('');
  const [dateofbirth, setDateofbirth] = useState('')
  const [advertice, setAdvertice] = useState('')
  const [course, setCourse] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [extraphonenumber, setExtraphonenumber] = useState('')
  const [comment, setComment] = useState('')
  const [group, setGroup] = useState('')


  const handleScholarship = (e) => {
    setScholarship(e.target.name)
  }

  const handleGender = (e) => {
    setGender(e.target.value)
  }

  const handleGrops = (e) => {
    setGroups(e.target.value)
  }
  const handleClick = () => {
    const student = students.find(e => e.name === firstname);
    if (student) {
      alert('Bunday foydalanuvchi allaqachon mavjud!')
    } else {
      const newStudent = {
        name: firstname,
        // group: groups,
        firstName: firstname,
        lastName: lastname,
        fatherName: fathername,
        dateOfBirth: dateofbirth,
        isexsist: isexsist,
        gender: gender,
        scholarship: scholarship,
        advertice: advertice,
        group: group,
        comment: comment,
        course: course,
        phonenumber: phonenumber,
        extraphonenumber: extraphonenumber,
      }
      // console.log(newStudent);
      const last = student;
      axios.post('http://localhost:4000/students', newStudent)
        .then(res => res.json())
        .then(res => {
          students.push(newStudent);
          addStudent(students)
        })
        .catch(err => console.log(err))
    }
  }
  const handleInp = (e) => {
    const { name, value } = e.target;
    if (name === "firstname") {
      setFirstname(value)
    } else if (name === "lastname") {
      setLastname(value)
    } else if (name === "fathername") {
      setFathername(value)
    } else if (name === "dateofbirth") {
      setDateofbirth(value)
    } else if (name === "advertice") {
      setAdvertice(value)
    } else if (name === "group") {
      setGroup(value)
    } else if (name === "comment") {
      setComment(value)
    } else if (name === "course") {
      setCourse(value)
    } else if (name === "phonenumber") {
      setPhonenumber(value)
    } else if (name === "extraphonenumber") {
      setExtraphonenumber(value);
    } else if (name === "dateofbirth") {
      setDateofbirth(value)
    }
  }

  const [hasSchoolarship, setHasSchoolarship] = useState(false)
  const handleInput = (e) => {
    if (e.target.name === 'no') setPayment('No payment')
    if (e.target.name === 'yes') setPayment('Yes payment')
    setHasSchoolarship(e.target.value === 'Added' ? true : false)
  }
  function handleTyping() {
    setIsexist(false)
  }

  function handleWaiting() {
    setIsexist(true)
  }
  return (
    <Container id="reg-cont" maxWidth="sm">
      <form>
        <h1 id="reg-header">Registration</h1>
        <label class="focus">First Name</label>
        <br />
        <input
          id="reg-input"
          type="text"
          placeholder="First Name"
          name="firstname"
          onChange={handleInp}
          required
        ></input>
        <label class="focus">Last Name</label>
        <br />
        <input
          id="reg-input"
          type="text"
          placeholder="Last Name"
          name="lastname"
          onChange={handleInp}
          required
        ></input>
        <label class="focus">Father's Name</label>
        <br />
        <input
          id="reg-input"
          type="text"
          placeholder="Father's name"
          name="fathername"
          onChange={handleInp}
          required
        ></input>
        <label class="focus">Data was born</label>
        <input
          class="reg-time"
          type="date"
          name="dateofbirth"
          onChange={handleInp}
          placeholder="First name"
          required
        ></input>
        <div id="reg-div">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <label class="focus">Phone Number</label>
              <input
                id="reg-input"
                type="text"
                name="phonenumber"
                onChange={handleInp}
                placeholder="Phone Number"
                required
              ></input>
            </Grid>
            <Grid item xs={6}>
              <label class="focus" required>
                Extra Phone Number
              </label>
              <input
                id="reg-input"
                type="text"
                name="extraphonenumber"
                onChange={handleInp}
                placeholder="Extra Phone Number"
                required
              ></input>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <div id="border-div">
                <p id="gender-p">Gender</p>
                <Radio
                  value="male"
                  checked={gender === 'male'}
                  onChange={handleGender}
                  required
                />
                <span class="focus">Male</span>
                <br></br>
                <Radio
                  value="female"
                  checked={gender === 'female'}
                  onChange={handleGender}
                  required
                />
                <span class="focus">Female</span>
              </div>
            </Grid>
            <Grid item xs>
              <div id="border-div-scholar">
                <p id="gender-p" class="focus">
                  Scholarship
                </p>
                <div>
                  <Radio
                    onClick={handleInput}
                    value="Added"
                    name="yes"
                    checked={scholarship === 'yes'}
                    onChange={handleScholarship}
                  />
                  <span class="focus">Yes</span>
                  <Radio
                    onClick={handleInput}
                    name="no"
                    checked={scholarship === 'no'}
                    onChange={handleScholarship}
                    required
                  />
                  <span class="focus">NO</span>
                </div>
              </div>
              <input
                id="reg-input"
                type="text"
                placeholder={payment}
                disabled={hasSchoolarship ? !'disabled' : 'disabled'}
                label="Payment"
                variant="outlined"
                required
              ></input>
            </Grid>
            {/* <Grid item xs>
              <label class="focus">Payment</label>
              <input
                id="reg-input"
                type="text"
                placeholder="Payment"
                disabled={hasSchoolarship ? !'disabled' : 'disabled'}
                label="Payment"
                variant="outlined"
                required
              ></input>
            </Grid> */}
          </Grid>
        </div>
        <div id="reg-div">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Radio
                value="add"
                checked={groups === 'add'}
                onChange={handleGrops}
                onClick={handleTyping}
                required
              />
              <span>Add exsisting group</span>
              <br />
              <Radio
                value="waiting"
                checked={groups === 'waiting'}
                onChange={handleGrops}
                onClick={handleWaiting}
                required
              />
              <span>Waiting for a new group</span>
            </Grid>
            <Grid item xs={6}>
              <div class="select">
                <span class="focus">Course</span>
                <select id="reg-select" name="course" onChange={handleInp}>
                  <option id="reg-select" value="1-bosqich">
                    1-bosqich
                  </option>
                  <option id="reg-select" value="2-bosqich">
                    2-bosqich
                  </option>
                  <option id="reg-select" value="3-bosqich">
                    3-bosqich
                  </option>
                  <option id="reg-select" value="DTM">
                    DTM
                  </option>
                  <option id="reg-select" value="KIDS">
                    Kids
                  </option>
                </select>
              </div>
            </Grid>
          </Grid>
        </div>
        <div id="reg-div">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div class="select" name="group" onChange={handleInp}>
                <span class="focus">Groups</span>
                <select
                  id="reg-select"
                  disabled={isexsist ? !'disabled' : 'disabled'}
                  name="group"
                  onChange={handleInp}
                >
                  {
                    course === "1-bosqich" && <>
                      <option id="reg-select" value="101">
                        101
                  </option>
                      <option id="reg-select" value="102">
                        102
                  </option>
                      <option id="reg-select" value="103">
                        103
                  </option>
                    </>
                  }
                  {
                    course === "2-bosqich" && <>
                      <option id="reg-select" value="201">
                        201
                </option>
                      <option id="reg-select" value="202">
                        202
                </option>
                      <option id="reg-select" value="203">
                        203
                </option>
                    </>
                  }
                  {
                    course === "3-bosqich" && <>
                      <option id="reg-select" value="301">
                        301
                </option>
                      <option id="reg-select" value="302">
                        302
                </option>
                      <option id="reg-select" value="303">
                        303
                </option>
                    </>
                  }
                  {
                    course === "DTM" && <>
                      <option id="reg-select" value="DTM-1">
                        DTM-1
                </option>
                      <option id="reg-select" value="DTM-2">
                        DTM-2
                </option>
                    </>
                  }
                  {
                    course === "KIDS" && <>
                      <option id="reg-select" value="monsters">
                        monsters
                </option>
                      <option id="reg-select" value="Beauty-and-Beast">
                        Beauty and Beast
                </option>
                    </>
                  }
                  {/* <option id="reg-select" value="Option 1">
                    Ahror
                  </option>
                  <option id="reg-select" value="Option 2">
                    Samandar
                  </option>
                  <option id="reg-select" value="Option 3">
                    Shaxbozbek
                  </option>
                  <option id="reg-select" value="Option 4">
                    Maftuna
                  </option> */}
                </select>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div class="select">
                <span class="focus">Advertise</span>
                <select id="reg-select" name="advertice" onChange={handleInp}>
                  <option id="reg-select" value="Social Media">
                    Social Media
                  </option>
                  <option id="reg-select" value="Tv">
                    Tv
                  </option>
                  <option id="reg-select" value="Friends">
                    Friends
                  </option>
                  <option id="reg-select" value="Radio">
                    Radio
                  </option>
                </select>
              </div>
            </Grid>
          </Grid>
          <div>
            <textarea
              placeholder="Typing..."
              id="text-area"
              name="comment"
              onChange={handleInp}
              disabled={isexsist ? !'disabled' : 'disabled'}
              rows="5"
              cols="60"
            ></textarea>
          </div>
        </div>
        <br></br>
        <Button onClick={handleClick} variant="contained" color="primary">
          SUBMIT
        </Button>
        <br></br>
        <br></br>
      </form>
    </Container>
  )
}

export default FormPage
