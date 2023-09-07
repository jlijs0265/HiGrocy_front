import { Form } from "react-bootstrap";
import useGeneralTrigger from "../hooks/generalTrigger";
import { PropTypes } from "prop-types";
import useModal from "../hooks/modal";
/*
    Redux로 관리하는 customHook인 useModal를 사용하는 Form (ModalList Component에서 사용)
    prop = {
        formId : form contorl에 사용할 id String,
        url : backend단에서 컨트롤러에 사용할 url
    }
*/

const ReduxModalForm = ({children, formId, url}) => {

    const {
        addModal,
        removeModal,
        changeModal,
    } = useModal();

    const { useStateRegister, register } = useGeneralTrigger();
    return (<>
        <Form className='p-2' id={formId}>
            <input type="hidden" id="id"></input>
            {children}
        </Form>
        <button className='btn btn-primary me-2' hidden={useStateRegister() ? '' : 'hidden'} id='registerBtn' onClick={() => addModal(document.querySelector('#'+formId), url)}>등록</button>
        <button className='btn btn-success me-2' hidden={useStateRegister() ? 'hidden' : ''} id='updateBtn' onClick={() => changeModal(document.querySelector('#'+formId), url)}>수정</button>
        <button className='btn btn-danger me-2' hidden={useStateRegister() ? 'hidden' : ''} id='deleteBtn'
            onClick={() => {
                removeModal(document.querySelector('#'+formId),url);
                document.querySelector('#'+formId).reset();
                register();
            }}>삭제</button>
    </>)
}

ReduxModalForm.defaultProps = {
    formId: 'rawForm',
    url : 'raw_material'
}

ReduxModalForm.prototype = {
    formId: PropTypes.string,
    url : PropTypes.string
}

export default ReduxModalForm;