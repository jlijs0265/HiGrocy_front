const GeneralCard = ({ size, children }) => {
    return (
    <div className={`col-md-${size} stretch-card`}>
        <div className='card'>
            <div className='card-body list-body'>
                {children}
            </div>
        </div>
    </div>
    );
}

export default GeneralCard;