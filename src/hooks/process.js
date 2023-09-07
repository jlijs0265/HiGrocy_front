import { useDispatch, useSelector } from "react-redux";
import {
  processAdded,
  processSet,
  processRemoved,
  processChanged,
  ListAdded,
  ListRemoved,
  paginationSet,
  bomRemoved,
} from "../app/processSlice";
import axios from "axios";
import { async } from "q";
import qs from "qs";
let id = 0;

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
    Form.reset();
    axios.post(`http://localhost:8081/${url}`, form).then((res) => {
      const key = Object.keys(res.data);
      form[key[0]] = res.data[key[0]];
      form["id"] = id++;

      dispatch(processAdded(form));
    });
  };
  const addEmptyList = (form) => {
    dispatch(ListAdded(form));
  };

  const addList = (Form) => {
    const form = {};
    Form.querySelectorAll("input").forEach(
      (input) => (form[input.name] = input.value)
    );
    Form.querySelectorAll("select").forEach(
      (input) => (form[input.name] = input.value)
    );
    Form.reset();
    dispatch(ListAdded(form));
  };

  const updateProcess = (Processes, formId) => {
    for (let key in Processes) {
      if (key != "") {
        if (
          document
            .querySelector("#" + formId)
            .querySelector(`input[name=${key}]`) != null
        ) {
          document
            .querySelector("#" + formId)
            .querySelector("input[name=" + key + "]").value = Processes[key];
        }
        if (
          document
            .querySelector("#" + formId)
            .querySelector("select[name=" + key + "]") != null
        ) {
          document
            .querySelector("#" + formId)
            .querySelector("select[name=" + key + "]").value = Processes[key];
        }
      }
    }
    document.querySelector("#" + formId).querySelector("#id").value =
      Processes.id;
  };

  const setProcess = async (url, params) => {
    axios.defaults.paramsSerializer = (params) => {
      return qs.stringify(params);
    };
    let result = [];
    let pagination = {};
    await axios.get(`http://localhost:8081/${url}`, { params }).then((res) => {
      result = res.data["list"];
      result.forEach((i) => (i["id"] = id++));
      pagination = res.data["pageDto"];
    });
    dispatch(processSet(result));
    dispatch(paginationSet(pagination));
  };

  const changeProcess = (Form, url) => {
    const form = {};
    Form.querySelectorAll("input").forEach(
      (input) => (form[input.name] = input.value)
    );
    Form.querySelectorAll("select").forEach(
      (input) => (form[input.name] = input.value)
    );
    axios
      .put(`http://localhost:8081/${url}`, form)
      .then((res) => console.log(res));
    form["id"] = Form.querySelector("#id").value;
    Form.reset();
    dispatch(processChanged(form));
  };

  const removeProcess = (Form, url) => {
    const deleteTargetNum = Form.querySelector("#pk").value;
    const process_id = Form.querySelector("#id").value;
    axios
      .delete(`http://localhost:8081/${url}/${deleteTargetNum}`)
      .then((res) => console.log(res));
    dispatch(processRemoved(process_id));
  };
  const removeList = (process_id, url) => {
    dispatch(ListRemoved(process_id));
  };

  const removeBomList = (key) => {
    dispatch(bomRemoved(key));
  };

  const useProcessSelector = () => {
    return useSelector((state) => state.process.table_data);
  };

  const useListSelector = () => {
    return useSelector((state) => state.process.bomtags);
  };

  const usePaginationSelector = () => {
    return useSelector((state) => state.process.pagination);
  };

  return {
    addProcess,
    addList,
    addEmptyList,
    removeList,
    setProcess,
    removeProcess,
    updateProcess,
    changeProcess,
    useProcessSelector,
    useListSelector,
    usePaginationSelector,
    removeBomList,
  };
};

export default useProcess;
