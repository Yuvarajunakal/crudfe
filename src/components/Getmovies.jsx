import React, { useEffect, useState } from 'react'

function Getmovies() {

    const [movies,setMovies] = useState([])

    useEffect(()=>{
        try{
            fetch("http://localhost:4000/getmovies",{
               method:"GET",
               headers:{
                 "Access-control-Allow-Origin":true,
                 "Content-Type":"application/json"
               },
              
            })
            .then((res)=>{
                // console.log(res)
                return res.json()
            })
            .then((data)=>{
            //  console.log(data)
             setMovies(data)
            //  console.log(data)
            })
      
           
         }catch(err){
           console.log(err)
         }
          
       
    })
    function handleClick(id){
      try{
        fetch("http://localhost:4000/movies/"+ id , {
          method:"DELETE",
          headers:{
            "Access-control-Allow-Origin":true,
            "Content-Type":"application/json"
          },
         
       })
      //  .then((res)=>{
      //      // console.log(res)
      //      return res.json()
      //  })
       .then((data)=>{
        console.log(data)
       })
 
      
    }catch(err){
      console.log(err)
    }
  
        
  }

    function handleclicku(id){    
    
    try{
      fetch("http://localhost:4000/movies"+ id,{
         method:"PUT",
         headers:{
           "Access-control-Allow-Origin":true,
           "Content-Type":"application/json"
         },
         body:JSON.stringify({
          
           title:movies.title,
           gener:movies.gener,
           rating:movies.rating,
           language:movies.language
         }),
      })
      .then((data)=>{
       console.log('yes')
      })
  
     
   }catch(err){
     console.log(err)
   }
  }
  
    

  return (
    <div>
         <table className="table table-striped mt-5">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Gener</th>
      <th scope="col">Language</th>
      <th scope="col">Ratings</th>
    </tr>
  </thead>
 

      {movies.title}
      {movies.map((x)=>{
       return  <tbody>
       <tr>
         <th>{x.title}</th>
         <td>{x.gener}</td>
         <td>{x.rating}</td>
         <td>{x.language}</td>
         <td><button className='btn btn-danger' style={{cursor:"pointer"}}onClick={()=>handleClick(x._id)}>delete</button>{"-"}<button className='btn btn-primary' style={{cursor:"pointer"}} onClick={()=>handleclicku(x._id)}>edit</button></td>
       </tr>
      
     </tbody>
     
      
    })}
    </table>
    </div>
  )
}

export default Getmovies
