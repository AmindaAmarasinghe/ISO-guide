import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import 'reactflow/dist/style.css';
import ReactFlow, { Background, MarkerType } from 'reactflow';
import Node from './Node.js';
import { ArrowUp ,ArrowRight } from 'react-bootstrap-icons';
import { ReactFlowProvider } from 'react-flow-renderer';

const nodeTypes = {
  selectorNode: Node,
};
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, type:'selectorNode', data: { label: 'supplier 01 wheat', modal:`<div>
  <ul>
    <li><a href='/worling_ins'>working instructions</a></li>
    <li><a href='/machine_ins'>machine instructions</a></li>
  </ul>
</div>`}, style: { border: '1px solid #777', padding: 10 }},
  { id: '2', position: { x: 0, y: 200 }, type:'selectorNode', data: { label: 'supplier 02 margarine' } , style: { border: '1px solid #777', padding: 10} },
  { id: '3', position: { x: 0, y: 400 }, type:'selectorNode', data: { label: 'supplier 03 sugar' } , style: { border: '1px solid #777', padding: 10 }},
  { id: '4', position: { x: 250, y: 100 }, type:'selectorNode', data: { label: 'unpack' }, style: { border: '1px solid #777', padding: 10 } },
  { id: '5', position: { x: 400, y: 100 }, type:'selectorNode', data: { label: 'weighing' }, style: { border: '1px solid #777', padding: 10 } },
  { id: '6', position: { x: 600, y: 50 }, type:'selectorNode', data: { label: 'manual mixing' }, style: { border: '1px solid #777', padding: 10 } },
  { id: '7', position: { x: 600, y: 200 }, type:'selectorNode', data: { label: 'Auto mixing' }, style: { border: '1px solid #777', padding: 10 } },
];
const initialEdges = [
    { id: 'e1-2', source: '1', target: '4' ,markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },},
    { id: 'e1-2', source: '2', target: '4' },
    { id: 'e1-2', source: '3', target: '4' },
    { id: 'e1-2', source: '4', target: '5' },
    { id: 'e1-2', source: '5', target: '6' },
    { id: 'e1-2', source: '5', target: '7' },
];

export default function Tabs(Pvalue, changeValue) {
  const [value, setValue] = React.useState(Pvalue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //changeValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={<button>item 1</button>} value="1" />
            <Tab label={<>hi<ArrowRight /><button>item 1</button></>} value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div style={{ width: '100vw', height: '100vh' }}>
          <ReactFlowProvider>
            <ReactFlow nodes={initialNodes} edges={initialEdges}  nodeTypes={nodeTypes} />
          </ReactFlowProvider>
          </div>
          
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}