import Modal from 'react-bootstrap/Modal';
import RawMaterailListModal from './RawMaterialListModal';
import ProductListModal from './ProductListModal';
import StorageListModal from './StorageListModal';
import OrderListModal from './OrderListModal';
import useGeneralTrigger from '../hooks/generalTrigger';



const Modals = () => {

    let componentToRender;
    const {useStateModal, toggle, useModalType} = useGeneralTrigger();

    switch (useModalType()) {
        case 'RawMaterailList':
            componentToRender = <RawMaterailListModal/>;
            break;
        case 'ProductList':
            componentToRender = <ProductListModal />;
            break;
        case 'StorageList':
            componentToRender = <StorageListModal />;
            break;
        case 'OrderList':
            componentToRender = <OrderListModal />;
            break;
    }

    return (
        <>
            <Modal show={useStateModal()} onHide={toggle}>
                {componentToRender}
            </Modal>
        </>
    );
};

export default Modals;