import React from 'react'
import Button from './Button'

const Buttons = () => {
 
  return (
    <div>
      <Button inputColor="#1976D2">Primary Button</Button>
      <Button Default="white" border="1px solid black" > Default Button</Button>
      <Button Default="white" borderStyle="null">Dashed Button</Button>
      <Button Default="white">Text Button</Button>
      <Button Default="white" color="#1976D2">Link Button</Button>
    </div>
  )
}

export default Buttons