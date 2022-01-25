import {makeStyles} from '@material-ui/core/styles';


export default makeStyles({
    media:{
        height:250,
        wdith:'100%',
        objectFit:'cover',
       
        
        
    },
    body:{
           
    background:'#986D8E',
    },
    container:{
        
        width:'100%',
        margin:0,

    },
    border:{
        border:'solid',
        
    },
    fullHeightCard:{
        height:'100%',
    },
    card:{
        display:'flex',
        flexDirection:'column',
        borderRadius:10,
        borderRight:10,
        backgroundColor:'#11324D',
        justifyContent:'space-between', 

    },
    activeCard:{
        borderBottom:'10px solid red',
        color:' SlateBlue',
        backgroundColor:'Gray',   
    },
    grid:{
        display:'flex',
    },
    details:{
        display:'flex',
        justifyContent:'space-between',
        margin:'10px',
        

    },
    title:{
        padding:'0 16px',
    },
    cardActions:{
        padding:'0 10px 8px 10px',
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'#2A7886',
    },
    infoCard:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
    },
})