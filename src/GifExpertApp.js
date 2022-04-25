import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch','Shaman King','Simpsons'];
    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = ()=>{
    //     setCategories([...categories, 'HunterxHunter']);
    // }


  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>
{/* 
        <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {
            categories.map((category)=>(
                <GifGrid
                key={category}
                category={category}/>
            ))
            
            }
        </ol>
    </div>
  )
}
