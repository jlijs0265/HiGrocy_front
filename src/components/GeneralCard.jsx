import useGeneralForm from "../hooks/generalFrom";
import { PropTypes } from "prop-types";


const GeneralCard = ({size, children, useResiger}) => {
    const {register} = useGeneralForm();

    return (
    <div className={`col-md-${size} stretch-card`}>
        <div className='card'>
            <div className='card-body list-body' onClick={useResiger?register:null}>
                {children}
            </div>
        </div>
    </div>
    );
}

GeneralCard.defaultProps ={
    useResiger : true
}

export default GeneralCard;