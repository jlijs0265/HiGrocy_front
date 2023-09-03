import { useDispatch, useSelector } from "react-redux";
import {modifyForm, registerForm} from "../features/generalForm/generalFormSlice"

const useGeneralForm = () => {
    const dispatch = useDispatch();
    const register = () =>{
        dispatch(registerForm());
    }

    const modify = () => {
        dispatch(modifyForm());
    }
    
    const useStateSelector = () => {
        return useSelector(state => state.generalFrom.register);
    }


    return {
        register,
        modify,
        useStateSelector
    };
}

export default useGeneralForm;