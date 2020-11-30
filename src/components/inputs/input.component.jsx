import React,{ Fragment } from 'react';

const Input = ({ title, type, placeholder, value, handleChange}) => {
    return ( 
        <Fragment>
            <label htmlFor={`form-${title}`} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {title}
            </label>
            <input type={type} id={`form-${title}`} placeholder={placeholder} onChange={handleChange} value={value} required className="appearance-none block w-full bg-gray-200 text-gray-700  border border-gray-400 rounded px-4 py-3 mb-3 leading-tight focus:outline-none focus:bg-white" />
        </Fragment>
     );
}
 
export default Input;