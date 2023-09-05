import { PropTypes } from "prop-types";
import useGeneralTrigger from "../hooks/generalTrigger";

/*
   일반 stretch-card가 들어가는 div 묶은 Component 
   prop = {
    size : strech-card의 col-size, default : 6
    useResiger : card 빈 배경 클릭시 form의 버튼을 등록 / 수정, 삭제 버튼을 변경하는 이벤트 핸들러 활성여부, default : true
   }
*/

const GeneralCard = ({size, children, useResiger}) => {
    const {register} = useGeneralTrigger();

    return (
    <div className={`col-md-${size} stretch-card mb-3`}>
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

GeneralCard.prototype = {
    size : PropTypes.number,
    useResiger : PropTypes.boolean

}


export default GeneralCard;