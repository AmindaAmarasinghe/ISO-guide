import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import { ArrowRight } from 'react-bootstrap-icons';

const Collapsible = ({data}) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  
  return (
    <div>
      <Button variant="primary" onClick={toggle}
          size="sm"><ArrowRight /></Button>
      {open && (
        <div className="toggle">
          <div style={{padding: 10, borderRadius:'10px'}} dangerouslySetInnerHTML={{ __html: `${data}`}} />
        </div>
      )}
    </div>
  );

};
export default Collapsible;