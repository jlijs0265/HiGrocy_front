import Modal from 'react-bootstrap/Modal';
import RawMaterailListModal from './RawMaterialListModal';
import ProductListModal from './ProductListModal';
import StorageListModal from './StorageListModal';
import OrderListModal from './OrderListModal';
import AccountListModal from './AccountListModal';
import useGeneralTrigger from '../hooks/generalTrigger';
import MechineListModal from './MechineListModal';



const Modals = () => {

    let componentToRender;
    const { useStateModal, toggle, useModalType } = useGeneralTrigger();

    switch (useModalType()) {
        case 'RawMaterailList':
            componentToRender = <RawMaterailListModal />;
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
        case 'AccountList':
            componentToRender = <AccountListModal />;
            break;
        case 'MechineList':
            componentToRender = <MechineListModal />;
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