import React from 'react'
import {Grow,Grid,Card,CardContent,Button,CardActionArea,Divider,CardMedia,Typography,CardActions} from '@material-ui/core';

import './style2.css';

const info=[{url:'https://lumiere-a.akamaihd.net/v1/images/hb_20cs_freeguy_mobile_21435_4db552ec.jpeg?region=0,0,640,480',title:'Free Guy' ,type:'Trending',Say:'Show me Trending movies',overview:"When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",Released:'13 August 2021'

},
{url:'https://images-na.ssl-images-amazon.com/images/I/61NVfk2uAXL.jpg',title:'Little Women' ,type:'Trailers',Say:'Show me Trailers',overview:"When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",Released:'13 August 2021'

},
{url:'https://m.media-amazon.com/images/M/MV5BZThjMTA5YjgtZmViZi00YjY0LTk5MzQtMjUwMGEzZGVlYzFjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
title:'GUCCI' ,
type:'Upcoming',
Say:' show me Upcoming movies',
overview:"When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel the family legacy and triggers a reckless spiral of betrayal, decadence, revenge -- and ultimately murder.",
Released:' 24 November 2021'

},
    {url:'https://images-na.ssl-images-amazon.com/images/I/A1sm-Z9jifL._RI_.jpg',
title:'The Suicidal Squard' ,
type:'Latest',
Say:' show me Latest movies',
overview:"The government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons, they trek through the dangerous jungle on a search-and-destroy mission, with only Col. Rick Flag on the ground to make them behave.",
Released:'6 August 2021'

}
]

const Frontscreens = () => {
    return (
      <Grid  container alignItems="stretch">
        {

        info.map((movie)=>(
            
              <Grid item lg={3} xs={12} sm={6} md={3}>
                <Card  class="card1">
                  <CardMedia
                  component="img"
                  src={movie.url} 
                  />
                  <CardContent>
                  <Typography class="typos" variant="h3">
                    {movie.title}
                  </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="secondary">{movie.type}</Button>
                    <Button variant="contained" color="secondary">{movie.Released}</Button>

                  </CardActions>
                  <Divider/>
                  <CardContent class="content">
                  <Typography class="typos" variant="h3">
                   <Button variant="contained" color="primary">Say:</Button> {movie.Say}
                  </Typography>
                  </CardContent>

                  




                  







                </Card>





              </Grid>
                

            
        ))
      }
      </Grid>
        
        
        
    
    )
}

export default Frontscreens
