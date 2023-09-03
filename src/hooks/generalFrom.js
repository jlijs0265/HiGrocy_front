import { useDispatch } from "react-redux";
import {modifyForm, registerForm} from "../features/generalForm/generalFormSlice"

const useGeneralForm = () => {
    const dispatch = useDispatch();
    const register = () =>{
        dispatch(registerForm());
    }

    const modify = () => {
        dispatch(modifyForm());
    }


    return {
        register,
        modify,
    };
}

export default useGeneralForm;