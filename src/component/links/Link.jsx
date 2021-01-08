import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '';


export default function Links(props) {
    return (
        <Breadcrumbs style={{ margin: "100px" }} aria-label="breadcrumb">
            <Link color="primary" href={props.link1}>
                {props.text1}
            </Link>
            <Link color="primary" href={props.link2} >
                {props.text2}
            </Link>
            <Link
                color="textPrimary"
                aria-current="page"
            >
                {props.text3}
            </Link>
        </Breadcrumbs>
    );
}
