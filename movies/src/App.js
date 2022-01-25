
import './App.css';

import {useEffect,useState} from 'react';
 import alanBtn from '@alan-ai/alan-sdk-web';
import Trending from './component/trending/Trending';
import Frontscreen from './component/trailers/Frontscreen';
import Frontscreens from './component/frontscreen/Frontscreens';
 const alankey="a43f13f3ec44376cfbe33b07d62fc9a02e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  let [movies,setMovies]=useState([]);
  let[movie2,setmovie2]=useState([]);
  const moviess=[];
  
  
  useEffect(  () => {
    alanBtn({
      key:alankey,
      onCommand:({command,finalss})=>{
        if(command==='Genress')
        {
          setMovies(finalss);
          console.log(movies);
          setmovie2(moviess);
          
          
        }
        else if(command==='upcoming')
        {
          setMovies(finalss);
          setmovie2(moviess);
          
          
        }
        else if(command==="latest")
        {
          console.log(finalss);
          setMovies(finalss);
          setmovie2(moviess);
          
          
        }
        else if(command==='back')
        {
          setMovies(finalss);
          
        }
         else if(command==='all')
        {
         console.log(finalss);
         if(finalss.length>0)
         {
          setmovie2(finalss);
          console.log(movies);
          
         }
          
          //  console.log(finalss);
           
        }
      }
      })
    

    
  }, [movies,movie2])

  return (
    

        movies.length!==0?(movie2.length>0?<Frontscreen movie2={movie2}/>:<Trending movies={movies}/>):<Frontscreens/>
      // <Frontscreen/>
      
    
    
  );
  
}

export default App;
