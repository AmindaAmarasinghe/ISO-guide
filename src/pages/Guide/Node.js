import React, { memo, useState } from 'react';

import { Handle } from 'react-flow-renderer';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import { ArrowUp ,ArrowDown } from 'react-bootstrap-icons';

export default memo(({ data }) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        
      />
      <div className='row d-flex justify-content-center align-items-center text-center'
      style={{cursor:'pointer', width:'150px', height:'100px'}} onClick={()=>{window.location.assign(data.link)}}>
        <div className='col-7'>
        {data.label}
        </div>
        {/* <PopModal content={data.modal} /> */}
      </div>
      <Handle
        type="source"
        position="right"
        style={{ background: '#555' }}
      
      />
    </>
  );
});