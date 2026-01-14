import axios from 'axios'
import React from 'react'

function Test() {

    axios.get("http://127.0.0.1:8000/api/blog/test/")
    .then((response)=>{
        console.log('jasir response ', response.data)
    })
    .catch((error)=>{
        console.log('jasir error', error)
    })


  return (
    <div>
      <h1>TEst page</h1>
    </div>
  )
}

export default Test
