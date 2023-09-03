import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RawMaterailListModal from './RawMaterialListModal';
import ProductListModal from './ProductListModal';
import StorageListModal from './StorageListModal';


const Modals = ({ showModal, toggleModal, innerModal }) => {

    let componentToRender;

    switch (innerModal) {
        case 'RawMaterailList':
            componentToRender = <RawMaterailListModal toggleModal={toggleModal} />;
            break;
        case 'ProductList':
            componentToRender = <ProductListModal toggleModal={toggleModal} />;
            break;
        case 'StorageList':
            componentToRender = <StorageListModal toggleModal={toggleModal} />;
            break;
    }

    return (
        <>
            <Modal show={showModal} onHide={toggleModal}>
                {componentToRender}
            </Modal>
        </>
    );
};

export default Modals;