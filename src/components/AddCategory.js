import React, { useState } from 'react'
import { GifExpertApp } from '../GifExpertApp';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleImputChange= (e) =>{
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }


    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            // console.log('Submit hecho');
        setCategories(cats =>[ inputValue,...cats]);
        setInputValue('');};
    }
  return (

        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value = {inputValue}
                    onChange={handleImputChange}
                />
        </form>

  )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}
