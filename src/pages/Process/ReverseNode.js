import React, { memo, useState } from 'react';

import { Handle } from 'react-flow-renderer';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import { ArrowUp ,ArrowDown } from 'react-bootstrap-icons';
import Collapsible from './Collapsible'

export default memo(({ data }) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  
  return (
    <>
      <Handle
        type="source"
        position="left"
        style={{ background: '#555' }}
      />
      <div className='row'>
        <div className='col-7'>
        {data.label}
        </div>
        <div className='col-3'>
        <Button variant="primary" onClick={toggle}
          size="sm">{!open && <ArrowDown />}{open && <ArrowUp/>}</Button>
        </div>
        
        
        {/* <PopModal content={data.modal} /> */}
      </div>
      <div className='row'>{open && (<><div style={{padding: 10, borderRadius:'10px'}} dangerouslySetInnerHTML={{ __html: `${data.modal}`}}></div></>)}</div>
      <Handle
        type="target"
        position="right"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
    </>
  );
});