import { PropTypes } from "prop-types";
import useGeneralTrigger from "../hooks/generalTrigger";


const GeneralCard = ({size, children, useResiger}) => {
    const {register} = useGeneralTrigger();

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