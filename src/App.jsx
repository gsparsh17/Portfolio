import React from 'react'
import Pattern from './Pattern.jsx'
import Start from './Start.jsx'
import Content from './Content.jsx'


const text="This is Sparsh Gupta & Here is My Portfolio".split(" ")

function App (){
  return (
    <div className="h-screen bg-[url('colorkit.png')] brightness-75">
      <Start/>
      <Pattern/>
      <Content/>
    </div>
  )
}

export default App