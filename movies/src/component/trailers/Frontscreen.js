import React, {useState,useEffect } from 'react'
import './style.css';

import ReactPlayer from 'react-player/youtube';

const datass=[];
const _=require("lodash")
const Frontscreen = ({movie2}) => {
console.log(movie2);
  movie2?.slice(0,1).map((movie)=>{
      return(

        datass.push({'name':movie.key,'title':movie.name,'type':movie.type})
      )
  })
  
  var foos =_.map(_.groupBy(datass,function(i){
      return JSON.stringify(i);

  }),function(gr){
      return gr[0];
  
  }
  );
  
 
  
  
      
      return (
        foos?.map((data)=>{
              return(
                <div class="card card-1">
                    <div class="top">
                        <ReactPlayer
                        playsinline
                        url={`https://youtu.be/${data.name}`}
                        
                        
                        volume='0.2'
                        width='100%'
                        height="100%"
                        
                        />
                    </div>
                    <div>
                        <h5>{data.title}</h5>
                    </div>

                    
                </div>

              )
          })
       
      )
      
  
  
}

export default Frontscreen
