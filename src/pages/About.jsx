import React from "react";
import Header from "../components/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Header/>
            <div className="_container">
                <Container style={{marginTop: 100, marginBottom: 100}}>
                    <Row>
                        <Col sm={8}><img width={700} style={{borderRadius: 20}}
                                         src="https://avatars.mds.yandex.net/i?id=b441ae60572173c3d9d6c86d8afafd64b917ad5a-11032733-images-thumbs&n=13" alt=""/></Col>
                        <Col sm={4}><p style={{fontSize: 16.55, fontFamily: 'Roboto', wordSpacing: 2}}>Открывая двери
                            мира и
                            вдохновляя приключения, наша туристическая компания - источник неизгладимых впечатлений и
                            незабываемых путешествий. Мы не просто предлагаем места для посещения, мы создаем
                            путешествия,
                            которые оставляют след в сердцах наших клиентов. Наше мастерство и профессионализм лежат в
                            основе каждого аспекта наших услуг, начиная от тщательно разработанных маршрутов и
                            заканчивая
                            заботой о каждой детали вашего путешествия. Мы гордимся тем, что наши эксперты знают все
                            уголки
                            планеты, помогая вам выбрать идеальный маршрут, отвечая на ваши вопросы и обеспечивая
                            комфорт и
                            безопасность во время путешествия. Наша миссия - сделать мир доступным и незабываемым для
                            каждого путешественника, открывая двери к новым культурам, природным чудесам и неповторимым
                            впечатлениям.</p></Col>
                    </Row>
                    <Row style={{marginTop: 100}}>
                        <Col sm><Image width={389} height={390}
                                       src="https://avatars.mds.yandex.net/i?id=1c12cd922e7b3887bdf410e3970ee0f8-5869592-images-thumbs&n=13"
                                       thumbnail alt=""/></Col>
                        <Col sm><Image width={389} height={390}
                                       src="https://yandex-images.clstorage.net/Iu9RV5399/a46170ZTx/uPE86XIMZscY80WSoSqH6YeRS6Or5uJk9WJfrHWgF0LFfIpwgi8A2FgxAly5YvG7c_XUTTQzW9n7pbZxMAHoqai4fLBDAWK6fbpdy6Qam82X7GfWi-f-Fb1OA8EpgUtHbOVK7BrbrXGx-OrtgX-U5jLFjHQJjuONMlC2vcHAYeXo4Wzppkw73xy7vHphcrvJJ9w3ozMv7iVBnsoBqDCuG4SF4ngGB1kNUWziGWFbxLIWAPQMbaYGIfaUhiU9fDEpcCFY5XqcNytEO8COCTr_cTfM66ebLxYlUWIGbTQ0mrMYQS7A-p9JXSVUak1BZ_hWcpyg-Ok6PukmLO5pwVT9XVjtFFmWrCN7MMMcnm0-k80buFuzI2fO_anmWn005LJHtAXGKAZv2RW9yEb5hVf02uZAeJx5NqbNMljGHUFk6R2kQZy91tCvL3yrlMqROv91v6B7ozeb4hkxBkaVJHzqh1yFdkxKK81ZzSwK4dVLpEq6hCD0AXYqFf48tj2pQJlBtMn0YUbc97ek8yTOYTp_3ddYMzcTk9p5EW4aObgs0qMEWWasOp-5HcFw5j1BZwzeRnS8bDlWLoECNLZxMdjpBSAx7Nmm_G9HqAM4HuUG9y2PdMcLbwfCcUXm9sm0PKJjsJ2qLF7HzWUtIMKFAT-MJjIM7MTBriI5AljyJfHALQkAweAlssxLd6CvHOLZTiMhL7xTS2MbGtkNdkZRAGAquxx9KsguR6lhCaiOSUmnzBKqgCBIyTo2nTrQhq2lXHFdOGGggUbk83cwo0DqVXp7SUco9zuDi1ZtUYqaOSiwnr8gnaYA9os9eZ1giulRkzhynnQUzAn-_qEuKPZpsQh9YQydbO1-SPcv7D9syq12Y823RNOrF-dS4WFqJs1M-IpfIDlWQBaThT0lvCYxwcd0cmqM1BwF4i4VoqRSJY3Y_Y0QsVjtFnDjR4QrICaNopdFC6Rbg3-rFtHhhlZhqDxA"
                                       thumbnail alt=""/></Col>
                        <Col sm><Image width={389} height={390}
                                       src="https://avatars.mds.yandex.net/i?id=518879dd1086a0e8f9e38b757bf16ef9-5220345-images-thumbs&n=13"
                                       thumbnail alt=""/></Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default About
