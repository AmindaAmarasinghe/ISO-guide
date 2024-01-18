
import React, { Component, useState } from "react"; 
import Tabs from './Tabs.js'
import { ArrowUp ,ArrowRight } from 'react-bootstrap-icons';
import 'reactflow/dist/style.css';
import ReactFlow, { Background, MarkerType } from 'reactflow';
import Node from './Node.js';
import { ReactFlowProvider } from 'react-flow-renderer';
import { Button } from "react-bootstrap";


const nodeTypes = {
  selectorNode: Node,
};
const initialNodes = [
  { id: '1', position: { x: 0, y: 200 }, data: { label: 'manual mixing' }, style: { border: '1px solid #777', padding: 10} },
  { id: '2', position: { x: 300, y: 200 }, data: { label: 'manual mixing' }, style: { border: '1px solid #777', padding: 10 } },
  { id: '3', position: { x: 600, y: 200 }, data: { label: 'manual mixing' }, style: { border: '1px solid #777', padding: 10 } },
  { id: '4', position: { x: 800, y: 200 }, data: { label: 'manual mixing' }, style: { border: '1px solid #777', padding: 10 } },
];
const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' ,markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    }},
    { id: 'e2-3', source: '2', target: '3' ,markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    }},
    { id: 'e3-4', source: '3', target: '4',markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    } },
];

export default function Process (){
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div>
        <div className="row bg-info">
        <div className="col-4"><Button>process 1</Button></div>
        <div className="col-4"><Button>process 2</Button></div>
        </div>
        
        <Tabs Pvalue={value} changeValue={handleChange}/>
      </div>
    </>
  );
    
}
