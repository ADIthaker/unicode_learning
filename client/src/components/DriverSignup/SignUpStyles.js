import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    main:{
        height:'700px',
        padding: theme.spacing(3, 2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        ...theme.mixins.toolbar,
        padding: "0",
    },
    root: {
        margin:'8px 0',
        color : 'white',
    },
    formMsg:{
        ...theme.typography.formMsg,
    },
    form: {
        boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.07), 0 3px 30px 0 rgba(0, 0, 0, 0.07)',
        borderRadius :'12px',
        padding: '2rem 3rem',
        marginTop: '3rem',
    },
    line:{
        color:'#ccc',
        alignItems: 'center',
        textAlign: 'center',
        '&::after': {
            flex: '1',
            content: '""',
            border:'0.5px solid #bbb',
            marginLeft:'0.5rem',
        },
        '&::before':{
            flex: '1',
            content: '""',
            border:'0.5px solid #bbb',
            marginRight:'0.5rem',
        }
    },
    inputFields : {
        padding:'3rem',
    },
    gButton :{
        padding : '13px 15px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.07), 0 3px 5px 0 rgba(0, 0, 0, 0.07)', 
        borderRadius :'12px',    
    },
    gImg:{
        marginRight : '1.5rem',
    },
    submitButton : {
        padding:'10px 10px',
        width:'100%',
        marginTop:'1rem',    
    },
    formTitle:{
        ...theme.typography.h4
    },
    emailText: {
        ...theme.typography.h6,
        fontWeight:400,
        marginBottom:'5px',
    }
    
}));

export default useStyles;