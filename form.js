import React, { useState } from 'react'
import Select from 'react-select'
import './form.css'

function Form() {
  var colors=[
    {
       value:1,
       label:"red"
    },
    {
       value:2,
       label:"blue"
    },
    {
       value:3,
       label:"orange"
    },
    {
       value:1,
       label:"green"
    },
  ];
  var [setbgcolor,ddlvalue]=useState(colors.label);
  var ddlhandle = (e) => {
    ddlvalue(e.label);
  }
  return (
    <>

          
      {/* <style>{'div {background-color:'+setbgcolor+';}'}</style> */}
      <div className='st'>

      <style>{'. {background-color:'+setbgcolor+';}'}</style> 
        <Select options={colors} onChange={ddlhandle} className="sl">
         {/* <center>
             <h3>BACKGROUND COLOR CHANGER : {setbgcolor}</h3>
            </center> */}
        </Select>
            </div>
        
        <div className='dk'>
            <style>{'.dk {background-color:'+setbgcolor+';}'}</style>

          <h3>{setbgcolor}</h3>
        </div>
             </>
    
  )
}

export default Form