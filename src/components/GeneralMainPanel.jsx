
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