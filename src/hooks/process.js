import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { processAdded, processSet, processRemoved, processChanged, ListAdded, ListRemoved } from "../app/processSlice"
import axios from "axios";

const useProcess = () => {
    const dispatch = useDispatch();

    const addProcess = (Form, url) => {
        const form = {};
        Form.querySelectorAll('input').forEach(input => form[input.name] = input.value);
        Form.querySelectorAll('select').forEach(input => form[input.name] = input.value);
        Form.reset();
        // axios.post(`http://localhost:8081/${url}`, form).then((res) =>
        //     console.log(res)
        //     //TODO res에서 code가져와서 form에 넣어줘야함
        // );
        dispatch(processAdded(form));
    }

    const addList = () => {
        const form = {};
        dispatch(ListAdded(form));
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
          //TODO 컨트롤러 만들어서 get 해야함. res를 Processes로 바꿔서 넣어야함
        // axios.get(`http://localhost:8081/${url}`, form).then((res) =>
        //     console.log(res)
        // );
        dispatch(processSet(Processes));
    }

    const changeProcess = (Form, url) => {
        const form = {};
        Form.querySelectorAll('input').forEach(input => form[input.name] = input.value);
        Form.querySelectorAll('select').forEach(input => form[input.name] = input.value);
        //TODO 컨트롤러 만들어서 put 해야함.
        // axios.put(`http://localhost:8081/${url}`, form).then((res) =>
        //     console.log(res)
        // );
        form['id'] = Form.querySelector('#id').value;
        Form.reset();
        dispatch(processChanged(form));
    }

    const removeProcess = (process_id, url) => {
         //TODO 컨트롤러 만들어서 delete 해야함.
        // axios.delete(`http://localhost:8081/${url}`, form).then((res) =>
        //     console.log(res)
        // );
        dispatch(processRemoved(process_id));
    }
    const removeList = (process_id, url) => {
        //TODO 컨트롤러 만들어서 delete 해야함.
       // axios.delete(`http://localhost:8081/${url}`, form).then((res) =>
       //     console.log(res)
       // );
       dispatch(ListRemoved(process_id));
   }

    const useProcessSelector = () => {
        return useSelector(state => state.process.table_data);
    }


    return {
        addProcess,
        addList,
        removeList,
        setProcess,
        removeProcess,
        updateProcess,
        changeProcess,
        useProcessSelector,
    };
}

export default useProcess;
