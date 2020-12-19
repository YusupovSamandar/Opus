
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { Link } from 'react-router-dom';
import './search.css'


const useStyles = makeStyles((theme) => ({
    label: {
        display: 'block',
    },
    listbox: {
        width: 330,
        padding: 15,
        zIndex: 1,
        listStyle: "none",
        position: 'absolute',
        overflow: 'auto',
        maxHeight: 200,
        border: '1px solid rgba(0,0,0,.25)',
        '& li[data-focus="true"]': {
            backgroundColor: '#4a8df6',
            color: 'white',
            cursor: 'pointer',
        },
        '& li:active': {
            backgroundColor: '#2977f5',
            color: 'white',
        },
    },
}));
function Search(props) {
    const classes = useStyles();

    let component = [
        { title: "Registration", link: '/register', img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" },
        { title: "Attendance/Fees", link: '/detail', img: "https://www.flaticon.com/svg/static/icons/svg/3101/3101082.svg" },
        { title: "Groups", link: '/cardsgroup', img: "https://www.flaticon.com/svg/static/icons/svg/3588/3588693.svg" },
        { title: "Reports", link: '/reports', img: "https://www.flaticon.com/svg/static/icons/svg/1055/1055644.svg" },
        { title: "AddToGroup", link: '/add', img: "https://www.flaticon.com/svg/static/icons/svg/3658/3658947.svg" },
        {
            title: "Admin", link: '/adminpanel', img: "https://www.flaticon.com/svg/static/icons/svg/2913/2913968.svg"
        },
        { title: "Teachers", link: '/teacherscontainer', img: "https://www.flaticon.com/svg/static/icons/svg/2913/2913968.svg" },

    ]
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: component,
        getOptionLabel: (option) => option.title,
    });

    // const handlePress = (e) => {

    //     document.getElementsByClassName("listbox")[0].style.display = 'block';


    // }


    return (
        <div className="searcher" style={{ width: 400 }}>
            <div {...getRootProps()}>
                <label className={classes.label} {...getInputLabelProps()}>

                </label>
                <input placeholder='Type here to search 🔎' className='inputs' {...getInputProps()} />
            </div>
            {groupedOptions.length > 0 ? (
                <ul id='listbox' className='listbox' {...getListboxProps()}>
                    {groupedOptions.map((option, index) => (
                        <Link className='element' to={option.link} key={index} {...getOptionProps({ option, index })}>
                            <li className='list' {...getOptionProps({ option, index })}>  <img className="img-icon" src={option.img} alt="" />{option.title}</li></Link>
                    ))}
                </ul>

            ) : null
            }

        </div >
    )
}


export default Search
