import React,{useState} from 'react'
import useStyles from './style1.js'
import { fontSize } from '@mui/system'
import { ReactVideo } from "reactjs-media"
import {Grow,Grid,Card,CardContent,Button,CardActionArea,CardMedia,Typography,CardActions} from '@material-ui/core';
const Trending =  ({movies}) => {
     
    const classes=useStyles();

    
    return (
        <>
        <Grow in>
            < Grid className={classes.container} container alignItems="stretch" spacing={1}>
            {
                movies?.map((movie,i)=>{
                    console.log(movie.key)
                    return(
                        <Grid xs={12} md={4} lg={3} sm={6} spacing={5} style={{display:'flex'}} >
                        <Card className={classes.card} style={{margin:'10px',boxShadow:'4px 7px 10px #9E9E9E'}}>
            <CardActionArea href='#' target="_blank">
                <CardMedia className={classes.media}image={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`|| 'https://static.toiimg.com/thumb/msid-80067386,width-1070,height-580,imgsize-127229,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'}/>
                
                <div className={classes.details}>
                    <Typography variant="h5" style={{color:'#DAA520'}} component="h2"> <b>Title</b><br/>{movie.original_title}</Typography>
                    <Typography variant="h4" style={{color:'red'}} component="h2">{movie.original_language}</Typography>
                </div>
                {/* <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography> */}
                <CardContent>
                    <Typography variant="body2" style={{color:'#D2691E' ,fontSize:'16px'}}  component="p">{movie.overview}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                
            <Typography variant="h6" style={{color:'#D2691E'}}><b>{movie.vote_average}</b></Typography>
            
                <Typography variant="h6" style={{color:'#FF7878'}}><b>Released</b><br/>{(new Date(movie.release_date)).toDateString()}</Typography>
                <Typography variant="h5"color="textSecondary"><b>{i+1}</b></Typography>
            </CardActions>
        </Card>
        </Grid>

                    )
                } )
            }

        
        </Grid>
        </Grow>
        </>
        
    )
    
   
}

export default Trending;
