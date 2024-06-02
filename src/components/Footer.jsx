const Footer = ({commentsUrl, currentUserId}) => {

    return (
        <footer style={{backgroundColor: '#FFF0F5', width: '100%'}}>
            <div className="_container" style={{padding: '36px 0'}}>
                <h3 style={{color: '#Black', marginBottom: '24px'}}>Контакты</h3>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="footerLink">
                        <span className="material-symbols-outlined footerIcon">mail</span>
                        gotour@gmail.com
                    </div>
                    <div className="footerLink">
                        <span className="material-symbols-outlined footerIcon">call</span>
                        +7 (777) 777 77-77
                    </div>
                    <div className="footerLink">
                        <span className="material-symbols-outlined footerIcon">mail</span>
                        support@gotour.kz
                    </div>
                
                </div>
            </div>
        </footer>
    );
};

export default Footer;