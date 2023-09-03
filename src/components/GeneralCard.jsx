const GeneralCard = ({ size, children, bodyClick}) => {

    return (
    <div className={`col-md-${size} stretch-card`}>
        <div className='card'>
            <div className='card-body list-body' onClick={bodyClick}>
                {children}
            </div>
        </div>
    </div>
    );
}

export default GeneralCard;