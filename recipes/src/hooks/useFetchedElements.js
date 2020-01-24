import useElements from '../hooks/useElements';
export default (fetchFunction, testFunction=null) => {
    testFunction=(testFunction)?testFunction: (res) => {
        return (res.status <400);
    }
    const [elements, setElements, addElement] = useElements([]);
    const refresh = async () => {
        let res = await fetchFunction();
        setElements(
            testFunction(res)? res.data : []
        );
    }

    return [elements, addElement, refresh];
}