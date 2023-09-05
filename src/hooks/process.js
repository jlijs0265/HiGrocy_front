import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { processAdded, processSet, processRemoved } from "../app/processSlice";
import axios from "axios";

const useProcess = () => {
  const dispatch = useDispatch();

  const addProcess = (Form, url) => {
    const form = {};
    Form.querySelectorAll("input").forEach(
      (input) => (form[input.name] = input.value)
    );
    Form.querySelectorAll("select").forEach(
      (input) => (form[input.name] = input.value)
    );
    axios
      .post(`http://localhost:8081/${url}`, form)
      .then((res) => console.log(res));
    dispatch(processAdded(form));
  };

  const setProcess = (Processes) => {
    dispatch(processSet(Processes));
  };

  const removeProcess = (process) => {
    dispatch(processRemoved(process.id));
  };

  const useProcessSelector = () => {
    return useSelector((state) => state.process.process);
  };

  return {
    addProcess,
    setProcess,
    removeProcess,
    useProcessSelector,
  };
};

export default useProcess;
