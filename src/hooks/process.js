import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { processAdded, processSet, processRemoved }from "../app/processSlice"
import axios from "axios";

const useProcess = () => {
    const dispatch = useDispatch();
    
    const addProcess = (Form) =>{
        const form = {};
        Form.querySelectorAll('input').forEach(input => form[input.name]=input.value);
        Form.querySelectorAll('select').forEach(input => form[input.name]=input.value);
        dispatch(processAdded(form));
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

    const useRegisterProcess = async (url) => {
        const data = useSelector(state => state.process.process[0]);
        try {
            const res = await axios.post(`http://localhost:8081/${url}`, data);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        addProcess,
        setProcess,
        removeProcess,
        useProcessSelector,
        useRegisterProcess
    };
}

export default useProcess;