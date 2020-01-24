import {useState} from 'react';
export default (initValue=[]) => {
    const [elements, setElements] = useState(initValue);
    const addElement = (element) => {
        setElements([element, ...elements]);
    }
    return [elements, setElements, addElement];
}