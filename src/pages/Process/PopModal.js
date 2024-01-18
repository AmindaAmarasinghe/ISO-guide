import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';import { ArrowRight } from 'react-bootstrap-icons';

export default function PopModal({content}) {

  return (
    <div>
      <Popup trigger=
          {<Button variant="primary"
          size="sm"><ArrowRight /></Button>}

          position="right center">
          <div style={{backgroundColor:'#ccc', border:'1px solid #777', padding: 10, borderRadius:'10px'}} dangerouslySetInnerHTML={{ __html: `${content}`}} />
      </Popup>
    </div>
  );
}
