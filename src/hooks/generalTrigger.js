import { useDispatch, useSelector } from "react-redux";
import {modifyForm, registerForm, toggleModal} from "../app/generalTriggerSlice"

const useGeneralTrigger = () => {
    const dispatch = useDispatch();
    const register = () =>{
        dispatch(registerForm());
    }

    const modify = () => {
        dispatch(modifyForm());
    }
    
    const toggle = () => {
        dispatch(toggleModal());
    }
    
    const useStateRegister = () => {
        return useSelector(state => state.generalTrigger.register);
    }

    const useStateModal = () => {
        return useSelector(state => state.generalTrigger.modal);
    }


    return {
        register,
        modify,
        toggle,
        useStateRegister,
        useStateModal
    };
}

export default useGeneralTrigger;