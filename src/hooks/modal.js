import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Added, Set, Removed, Changed } from "../app/modalSlice"
import axios from "axios";

const useModal = () => {
    const dispatch = useDispatch();

    const addModal = (Form, url) => {
        const form = {};
        Form.querySelectorAll('input').forEach(input => form[input.name] = input.value);
        Form.querySelectorAll('select').forEach(input => form[input.name] = input.value);
        Form.reset();
        // axios.post(`http://localhost:8081/${url}`, form).then((res) =>
        //     console.log(res)
        //     //TODO res에서 code가져와서 form에 넣어줘야함
        // );
        dispatch(Added(form));
    }

    const updateModal = (Modales, formId) => {
        for (let key in Modales) {
            if (key != '') {
                if (document.querySelector('#' + formId).querySelector('input[name=' + key + ']') != null) {
                    document.querySelector('#' + formId).querySelector('input[name=' + key + ']').value = Modales[key]
                }
                if (document.querySelector('#' + formId).querySelector('select[name=' + key + ']') != null) {
                    document.querySelector('#' + formId).querySelector('select[name=' + key + ']').value = Modales[key]
                }
            }
        }
        document.querySelector("#" + formId).querySelector('#id').value = Modales.id;
    }

    const setModal = (Modales) => {
          //TODO 컨트롤러 만들어서 get 해야함. res를 Modales로 바꿔서 넣어야함
        // axios.get(`http://localhost:8081/${url}`, form).then((res) =>
        //     console.log(res)
        // );
        dispatch(Set(Modales));
    }

    const changeModal = (Form, url) => {
        const form = {};
        Form.querySelectorAll('input').forEach(input => form[input.name] = input.value);
        Form.querySelectorAll('select').forEach(input => form[input.name] = input.value);
        //TODO 컨트롤러 만들어서 put 해야함.
        // axios.put(`http://localhost:8081/${url}`, form).then((res) =>
        //     console.log(res)
        // );
        form['id'] = Form.querySelector('#id').value;
        Form.reset();
        dispatch(Changed(form));
    }

    const removeModal = (Modal_id, url) => {
         //TODO 컨트롤러 만들어서 delete 해야함.
        // axios.delete(`http://localhost:8081/${url}`, form).then((res) =>
        //     console.log(res)
        // );
        dispatch(Removed(Modal_id));
    }

    const useModalSelector = () => {
        return useSelector(state => state.modal.modal_data);
    }


    return {
        addModal,
        setModal,
        removeModal,
        updateModal,
        changeModal,
        useModalSelector,
    };
}

export default useModal;