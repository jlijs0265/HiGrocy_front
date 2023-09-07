import { useDispatch, useSelector } from "react-redux";
import {
  processAdded,
  processSet,
  processRemoved,
  processChanged,
  ListAdded,
  ListRemoved,
  paginationSet,
} from "../app/processSlice";
import axios from "axios";
import { async } from "q";
import qs from "qs";

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
    console.log(form);
    axios.post(`http://localhost:8081/${url}`, form).then((res) => {
        const key = Object.keys(res.data);
        form[key[0]] = res.data[key[0]];
    dispatch(processAdded(form));
    }
    );
  };
  const addEmptyList = () => {
    const form = {};
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
            .querySelector("input[name=" + key + "]") != null
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
        //TODO 컨트롤러 만들어서 get 해야함. res를 Processes로 바꿔서 넣어야함
        axios.defaults.paramsSerializer = params => {
            return qs.stringify(params);
          }
        console.log(params);
        let result = [];
        let pagination = {};
        await axios.get(`http://localhost:8081/${url}`, {params}).then((res) => {
            result = res.data['list'];
            console.log(result);
            pagination = res.data['pageDto'];
        }
        );
        dispatch(processSet(result));
        dispatch(paginationSet(pagination));
    }

  const changeProcess = (Form, url) => {
    const form = {};
    Form.querySelectorAll("input").forEach(
      (input) => (form[input.name] = input.value)
    );
    Form.querySelectorAll("select").forEach(
      (input) => (form[input.name] = input.value)
    );
    //TODO 컨트롤러 만들어서 put 해야함.
    axios
      .put(`http://localhost:8081/${url}`, form)
      .then((res) => console.log(res));
    form["id"] = Form.querySelector("#id").value;
    Form.reset();
    dispatch(processChanged(form));
  };

  const removeProcess = (process_id, url) => {
    //TODO 컨트롤러 만들어서 delete 해야함.
    // axios.delete(`http://localhost:8081/${url}`, form).then((res) =>
    //     console.log(res)
    // );
    dispatch(processRemoved(process_id));
  };
  const removeList = (process_id, url) => {
    dispatch(ListRemoved(process_id));
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
  };
};

export default useProcess;
