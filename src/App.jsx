import React, { useState } from 'react';
import './index.css';
import List from './List';

const App=()=>{

    const[inputValue, setInputValue]=useState("");
    const[items, setItems]=useState([]);

    const itemsOfList=(event)=>{
        setInputValue(event.target.value);
    };

    const onSubmit=()=>{
        if(inputValue!="")
        {
            setItems((preValues)=>{
                return([...preValues,inputValue]);
            });    
        }

        setInputValue("");
    }

    const deleteItems=(id)=>{
        setItems((oldItems)=>{
            return (oldItems.filter((arr,index)=>{
                return index!==id;
            }));
        });
    };

    return(
        <>
        <div className='main_div'>
            <div className='center_div'>
                <h1>List Of Items</h1>
                <input type="text" placeholder='Add an item' onChange={itemsOfList} value={inputValue}/>
                <button onClick={onSubmit}>+</button>
                <ol>
            
                    {
                        items.map((values, index)=>{
                            
                           return(<List key={index} id={index} listItem={values} onSelect={deleteItems}/>)
                        })
                    }
                   
                </ol>
            </div>
        </div>
        </>
    );
};

export default App;