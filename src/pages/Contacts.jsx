import React from "react";
import Header from "../components/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../components/Footer";

const Contacts = () => {
    return(
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col style={{fontSize: 24, marginTop: 100}}><b>Почта для контакта с нами:</b><br/><br/>example.example@gmail.com<br/><br/>example.example@corp.kz</Col>
                    <Col style={{fontSize: 24, marginTop: 100}}><b>Телефоны для контакта с нами:</b><br/><br/>+7 (777) 777 77 77<br/><br/>+7 (727) 777 77 77</Col>
                </Row>
                <Row style={{fontSize: 24, marginTop: 100}}>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.9612431155897!2d76.93546647683785!3d43.25223407112406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836fb73bea53fd%3A0x971ecfa0c833fb6d!2zSnVzdENvZGUgLSBJVCDQkNC60LDQtNC10LzQuNGPLCDQmtGD0YDRgdGLINC_0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNGP!5e0!3m2!1sru!2skz!4v1714336592587!5m2!1sru!2skz"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    height={400}
                    style={{borderRadius: 15, border: '1px solid black'}}
                ></iframe>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Contacts
