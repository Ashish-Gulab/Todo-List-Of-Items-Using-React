import React from 'react';

const List=(props)=>{
    return(<>
    <div className='list_style'>
        {/* <i className="fa-solid fa-trash" /> */}
        <i className='fa fa-times' arial-hidden="true" onClick={()=>{props.onSelect(props.id)}}/>
        <li>{props.listItem}</li>
    </div>
    </>);
};

export default List;