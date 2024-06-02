const Footer = ({commentsUrl, currentUserId}) => {

    return (
        <footer style={{backgroundColor: '#FFF', width: '100%'}}>
            <div className="_container" style={{padding: '36px 0'}}>
                <h3 style={{color: '#Black', marginBottom: '24px'}}>Контакты</h3>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="footerLink">
                        <span className="material-symbols-outlined footerIcon">mail</span>
                        example@gmail.com
                    </div>
                    <div className="footerLink">
                        <span className="material-symbols-outlined footerIcon">call</span>
                        example@gmail.com
                    </div>
                    <div className="footerLink">
                        <span className="material-symbols-outlined footerIcon">mail</span>
                        example@gmail.com
                    </div>
                    <div className="footerLink">
                        <span className="material-symbols-outlined footerIcon">mail</span>
                        example@gmail.com
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
