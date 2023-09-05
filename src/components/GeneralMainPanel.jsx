/*
    main-panel이 들어가는 div 묶은 Component
*/
const GeneralMainPanel = ({ children }) => {
    return (
        <div className='container-fluid page-body-wrapper'>
            <div className='main-panel'>
                <div className='content-wrapper'>
                    {children}
                </div>
            </div>
        </div>

    )
}

export default GeneralMainPanel;