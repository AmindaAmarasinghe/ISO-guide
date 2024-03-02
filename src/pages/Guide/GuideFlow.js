import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from "react-bootstrap";
import 'reactflow/dist/style.css';
import ReactFlow, { Background, MarkerType } from 'reactflow';
import Node from './Node.js';
import { ArrowUp ,ArrowRight } from 'react-bootstrap-icons';
import { ReactFlowProvider } from 'react-flow-renderer';
import ReverseNode from './ReverseNode.js';

const nodeTypes = {
  selectorNode: Node,
  reverseSelectorNode : ReverseNode
};
const initialNodes = [
  { id: '1', position: { x: 0, y: 100 }, type:'selectorNode', data: { label: 'Scope', link: 'scope'}, style: { border: '1px solid #777', padding: 10 }},
  { id: '2', position: { x: 300, y: 100 }, type:'selectorNode', data: { label: 'Normative References', link: 'normativeReferences'}, style: { border: '1px solid #777', padding: 10 } },
  { id: '3', position: { x: 600, y: 100 }, type:'selectorNode', data: { label: 'Terms and Definitions', link: 'normativeReferences'}, style: { border: '1px solid #777', padding: 10 } },
  { id: '4', position: { x: 1000, y: 100 }, type:'selectorNode', data: { label: 'Context of the Organization', link: 'orgContext' }, style: { border: '1px solid #777', padding: 10 } },
  { id: '5', position: { x: 1400, y: 100 }, type:'selectorNode', data: { label: 'Leadership', link: 'leadership' }, style: { border: '1px solid #777', padding: 10 } },
  { id: '6', position: { x: 0, y: 400 }, type:'reverseSelectorNode', data: { label: 'Improvement', link: 'improvement'}, style: { border: '1px solid #777', padding: 10 }},
  { id: '7', position: { x: 300, y: 400 }, type:'reverseSelectorNode', data: { label: 'Performance Evaluation', link: 'evaluation' }, style: { border: '1px solid #777', padding: 10 } },
  { id: '8', position: { x: 600, y: 400 }, type:'reverseSelectorNode', data: { label: 'Operation', link: 'operation' }, style: { border: '1px solid #777', padding: 10 } },
  { id: '9', position: { x: 1000, y: 400 }, type:'reverseSelectorNode', data: { label: 'Support', link: 'support' }, style: { border: '1px solid #777', padding: 10 } },
  { id: '10', position: { x: 1400, y: 400 }, type:'reverseSelectorNode', data: { label: 'Planning', link: 'planning' }, style: { border: '1px solid #777', padding: 10 } },
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
    },},
    { id: 'e2-3', source: '2', target: '3',markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    } },
    { id: 'e3-4', source: '3', target: '4',markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    } },
    { id: 'e4-5', source: '4', target: '5',markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    } },
    { id: 'e5-10', source: '5', target: '10',markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    } },
    { id: 'e10-9', source: '10', target: '9',markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    } },
    { id: 'e9-8', source: '9', target: '8',markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    } },
    { id: 'e8-7', source: '8', target: '7',markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    } },
    { id: 'e7-6', source: '7', target: '6',markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    } },
];

export default function GuideFlow(Pvalue, changeValue) {
  const [value, setValue] = React.useState(Pvalue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //changeValue(newValue);
  };

  return (
    
    <div style={{ width: '100vw', height: '100vh', paddingLeft:'5%' }}>
        <ReactFlowProvider>
        <ReactFlow nodes={initialNodes} edges={initialEdges}  nodeTypes={nodeTypes} />
        </ReactFlowProvider>
    </div>

  );
}