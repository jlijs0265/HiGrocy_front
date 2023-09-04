import { useDispatch, useSelector } from "react-redux";
import { processAdded, processSet, processRemoved }from "../app/processSlice"

const useProcess = () => {
    const dispatch = useDispatch();
    
    const addProcess = () =>{
        dispatch(processAdded());
    }

    const setProcess = (Processes) => {
        dispatch(processSet(Processes));
    }

    const removeProcess = (process) => {
        dispatch(processRemoved(process.id));
    }
    
    const useProcessSelector = () => {
        return useSelector(state => state.process.process);
    }


    return {
        addProcess,
        setProcess,
        removeProcess,
        useProcessSelector
    };
}

export default useProcess;