
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
        {
            title: "Admin", link: '/adminpanel', img: "https://www.flaticon.com/svg/static/icons/svg/2913/2913968.svg"
        },
        { title: "Teachers", link: '/teacherscontainer', img: "https://www.flaticon.com/svg/static/icons/svg/2913/2913968.svg" },
        { title: "Qarzdorlik", link: '/reports/qarzdorlik', img: "https://www.flaticon.com/svg/static/icons/svg/3399/3399165.svg" },
        { title: "Shartnomalar", link: '/contracts', img: "https://www.flaticon.com/svg/static/icons/svg/748/748504.svg" },
        { title: "Reklama", link: '/adverts', img: "https://www.flaticon.com/svg/static/icons/svg/3800/3800402.svg" },
        { title: "Payments", link: '/reports/reportpayment', img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135706.svg" },
        { title: "Archive", link: '/reports/Archive', img: "https://www.flaticon.com/svg/static/icons/svg/716/716820.svg" },
        { title: "Staff", link: '/teachers', img: "https: //www.flaticon.com/svg/static/icons/svg/2795/2795229.svg" },
        { title: "Add a New Employee", link: '/addnewemployee', img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256628.svg" },
        { title: "Rekvizits", link: '/rekvizits ', img: "https://www.flaticon.com/svg/static/icons/svg/2897/2897980.svg" },
        { title: "Guruh Jurnali", link: '/teacherscontainer/groupjournal ', img: "https://www.flaticon.com/svg/static/icons/svg/2795/2795229.svg" },
        { title: "Tulovlar", link: '/teachers-fees ', img: "https://www.flaticon.com/svg/static/icons/svg/2921/2921222.svg " },

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
