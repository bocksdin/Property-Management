import React from 'react';

export const FormTitle = (props) => {
    const { className, text } = props;
   return (
       <h1 className={`${className} form-title`}>{text}</h1>
   )
}