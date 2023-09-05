import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { processAdded, processSet, processRemoved } from "../app/processSlice"
import axios from "axios";

const useProcess = () => {
    const dispatch = useDispatch();

    const addProcess = (Form, url) => {
        const form = {};
        Form.querySelectorAll('input').forEach(input => form[input.name] = input.value);
        Form.querySelectorAll('select').forEach(input => form[input.name] = input.value);
        Form.reset();
        axios.post(`http://localhost:8081/${url}`, form).then((res) =>
            console.log(res)
        );
        dispatch(processAdded(form));
    }

    const updateProcess = (Processes, formId) => {
        for (let key in Processes) {
            if (key != '') {
                if (document.querySelector('#' + formId).querySelector('input[name=' + key + ']') != null) {
                    document.querySelector('#' + formId).querySelector('input[name=' + key + ']').value = Processes[key]
                }
                if (document.querySelector('#' + formId).querySelector('select[name=' + key + ']') != null) {
                    document.querySelector('#' + formId).querySelector('select[name=' + key + ']').value = Processes[key]
                }
            }
        }
        document.querySelector("#" + formId).querySelector('#id').value = Processes.id;
    }

    const setProcess = (Processes) => {
        dispatch(processSet(Processes));
    }

    const removeProcess = (process_id) => {
        dispatch(processRemoved(process_id));
    }

    const useProcessSelector = () => {
        return useSelector(state => state.process.process);
    }


    return {
        addProcess,
        setProcess,
        removeProcess,
        updateProcess,
        useProcessSelector,
    };
}

export default useProcess;