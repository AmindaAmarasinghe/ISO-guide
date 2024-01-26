
import React, { useState } from 'react';

import { Document, Page, View, StyleSheet, Annotation, TextField } from 'react-pdf';
import { Text } from '@react-pdf/renderer';
const SamplePdf1=()=>{
const [annotations, setAnnotations]=useState([]);
const [formValues, setFormValues] = useState({});
const handleAnnotationAdded = (annotation) => { setAnnotations([...annotations, annotation]);};
const handleFormValueChange =(name, value) => {
setFormValues({ ...formValues, [name]: value });
}
return (
<Document file="my-document.pdf"> 
{/* <Page pageNumber={1}> */}
{/* <View style={styles.container}>
{annotations.map((annotation, index) => ( <Annotation key={index} {...annotation} />
))}
<Annotation
type="text"
position={[100, 100]}
content="This is my annotation!" color="#FF0000"
onAdded={handleAnnotationAdded} />
<TextField/>
name="my-form-field"
value={formValues['my-form-field']}
onChange={(e) => handleFormValueChange('my-form-field', e.target.value)}

</View> */}

{/* </Page> */}
<Page wrap>
      <Text style={{ padding: 40 }}>value</Text>
    </Page>
</Document>

);

};

// const styles=StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column', 
//         alignItems: 'center',
//     },
// });
export default SamplePdf1;