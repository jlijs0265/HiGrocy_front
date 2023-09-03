import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RawMaterailListModal from './RawMaterialListModal';

const Modals =({ showModal, toggleModal }) => {
    return (
        <>
            <Modal show={showModal} onHide={toggleModal}>
                <RawMaterailListModal toggleModal={toggleModal} />
            </Modal>
        </>
    );
};

export default Modals;