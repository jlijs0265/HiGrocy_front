import { Form } from "react-bootstrap";
import useGeneralTrigger from "../hooks/generalTrigger";
import useProcess from "../hooks/process";

const ReduxForm = ({children, formId, url}) => {

    const {
        addProcess,
        removeProcess,
        changeProcess
    } = useProcess();

    const { useStateRegister, register } = useGeneralTrigger();

    return (<>
        <Form className='p-2' id={formId}>
            <input type="hidden" id="id"></input>
            {children}
        </Form>
        <button className='btn btn-primary me-2' hidden={useStateRegister() ? '' : 'hidden'} id='registerBtn' onClick={() => addProcess(document.querySelector('#'+formId), url)}>등록</button>
        <button className='btn btn-success me-2' hidden={useStateRegister() ? 'hidden' : ''} id='updateBtn' onClick={() => changeProcess(document.querySelector('#'+formId), url)}>수정</button>
        <button className='btn btn-danger me-2' hidden={useStateRegister() ? 'hidden' : ''} id='deleteBtn'
            onClick={() => {
                removeProcess(document.querySelector('#'+formId).querySelector('#id').value);
                document.querySelector('#'+formId).reset();
                register();
            }}>삭제</button>
    </>)
}

ReduxForm.defaultProps = {
    formId: 'rawForm',
    url : 'raw_material'

}

export default ReduxForm;