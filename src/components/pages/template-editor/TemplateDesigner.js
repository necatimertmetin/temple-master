import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs
import '../../../assets/css/templateDesigner.css';
import FlexRowPart from '../../template-components/flex-parts/row-part/flexRowPart';

const TemplateDesigner = () => {
  const [parts, setParts] = useState([]); // Initialize parts as an empty array

  // Add part with a unique id using uuid
  const addPart = () => {
    setParts([...parts, { id: uuidv4() }]);
  };

  // Delete part by filtering out the one with the matching id
  const deletePart = (id) => {
    setParts(parts.filter(part => part.id !== id));
  };

  const onDataChange = (data) => {
    console.log(data)
  }
  return (
    <div className='template-designer-container'>
    
      
      {/* Render parts dynamically */}
      {parts.map((part, index) => (
        <div className='flex-row-part-edit-container' key={part.id}>
       
          <FlexRowPart test={part.id} part={part} onDataChange={onDataChange} deletePart={deletePart}/>
        </div>
      ))}
        <div className='flex-row-part-iter' onClick={addPart}>Add Part</div>
    </div>
  );
};

export default TemplateDesigner;
