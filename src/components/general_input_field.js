import React from 'react';
import '../csss/general_input_field.css';

// InputField component
const GeneralInputField = ({ placeholder, error, large, ...rest }) => {
  // Create a list of CSS classes based on the props
  const inputClasses = ['custom-input'];
  if (error) {
    inputClasses.push('error');
  }
  if (large) {
    inputClasses.push('large');
  }

  // Join the classes into a single string
  const inputClass = inputClasses.join(' ');

  return (
    <div className="input-container">
        <div className='input-label'>{placeholder} :</div>
      <input className={inputClass} placeholder='' {...rest} />
    </div>
  );
};

export default GeneralInputField;
