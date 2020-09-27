import React , {Fragment, useEffect, useContext, useState} from 'react';
import {userContext} from '../../contexts/userContext';
import useStyles from './HomeStyles';
import {AppBar, Button, Toolbar,Typography, Box, Grid} from '@material-ui/core';
import bgImg from '../../assets/images/624_gold.jpg';

const Home = (props) => {
    const classes = useStyles();
    const context = useContext(userContext);
    console.log(context);
    const user = context.getUser('token');
    console.log(user,"in home from sessionstorage");
    if(user === null || !user.success ){
        return ( 
        <div className={classes.main} my={2} >
            <img src={bgImg} className={classes.img}/>
    </div>
    );
    } else {
        return(
            <div className={classes.main} my={2} >
                    <img src={bgImg} className={classes.img}/>
                    <p>{user.user.email}</p>
            </div>
        );
    }
    
}
export default Home;