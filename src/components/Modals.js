import Modal from 'react-bootstrap/Modal';
import RawMaterailListModal from './RawMaterialListModal';
import useGeneralTrigger from '../hooks/generalTrigger';

const Modals =({ showModal, toggleModal }) => {
    const {useStateModal, toggle} = useGeneralTrigger();
    return (
        <>
            <Modal show={useStateModal()} onHide={toggle}>
                <RawMaterailListModal toggleModal={toggle} />
            </Modal>
        </>
    );
};

export default Modals;