import React from 'react';
import useInputState from '../hooks/useInputState';

export default function BasicItemNew({addFunction, itemLabel}){
    const [name, nameHandleChange, nameReset] = useInputState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {'name':name};
        addFunction(data);
        nameReset();      
    };
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <span>{itemLabel}: <input value={name} label={itemLabel} onChange={nameHandleChange} /></span>
                <button>Add</button>
            </form>
        </div>
    );
}
