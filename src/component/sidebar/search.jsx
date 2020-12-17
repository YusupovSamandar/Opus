import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { Link } from 'react-router-dom';
import './search.css'
const useStyles = makeStyles((theme) => ({
    label: {
        display: 'block',
    },
    input: {
        width: 400,
    },
    listbox: {
        marginLeft: 10,
        width: 230,
        marginLeft: 114,
        padding: 15,
        zIndex: 1,
        listStyle: "none",
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
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
const Search = (props) => {
    const classes = useStyles();

    let component = [
        { title: "Registration", link: '/register', img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" },
        { title: "Attendance/Fees", link: '/detail', img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" },
        { title: "Groups", link: '/cardsgroup', img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" },
        { title: "Reports", link: '/reports', img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" },
        { title: "AddToGroup", link: '/add', img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" },
        { title: "Admin", link: '/adminpanel', img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" },
        { title: "Teachers", link: '/teacherscontainer', img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" },

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

    return (
        <div style={{ width: 400 }}>
            <div {...getRootProps()}>
                <label className={classes.label} {...getInputLabelProps()}>

                </label>
                Type to search🧐<input className='inputs' {...getInputProps()} />
            </div>
            {groupedOptions.length > 0 ? (
                <ul className={classes.listbox} {...getListboxProps()}>
                    {groupedOptions.map((option, index) => (
                        <Link className='element' to={option.link} key={index} {...getOptionProps({ option, index })}>
                            <li className='list' {...getOptionProps({ option, index })}> {option.title}</li></Link>))}
                </ul>

            ) : null
            }

        </div >
    )
}

export default Search
