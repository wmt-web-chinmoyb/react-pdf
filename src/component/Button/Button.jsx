import React from 'react'
import { Button } from 'antd'
import "./Button.css"

const BtnCreate = ({onclick}) => {
  return (
    <div className='btn'>
      <Button type="primary" onClick={onclick}>Create</Button>
    </div>
  )
}

export default BtnCreate
