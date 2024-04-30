import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Demo = () => {

    const [state,setState] =useState({
        data:null,
        error:null
    })

    const getData = async () =>{
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            setState({data:data})
          } catch (error) {
            setState({error:error})
          }
    }
    useEffect(()=>{
        getData()
    },[])

    const {data,error} = state;

    if (error) {
        return <h1>Error: {error}</h1>
    }


  return (
    <h1>{data}</h1>
  )
}

export default Demo