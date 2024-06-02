import React, { useState } from 'react';
import { Form, InputGroup, Button, Modal } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: { icon: <SentimentVeryDissatisfiedIcon color="error" />, label: 'Very Dissatisfied' },
  2: { icon: <SentimentDissatisfiedIcon color="error" />, label: 'Dissatisfied' },
  3: { icon: <SentimentSatisfiedIcon color="warning" />, label: 'Neutral' },
  4: { icon: <SentimentSatisfiedAltIcon color="success" />, label: 'Satisfied' },
  5: { icon: <SentimentVerySatisfiedIcon color="success" />, label: 'Very Satisfied' },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

function FormContacts() {
  const [nickname, setNickname] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [wishes, setWishes] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    const data = { nickname, name, surname, email, wishes };

    fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((message) => {
        alert(`Здравствуйте, ${name}! Мы записали ваши данные, и свяжемся с вами в ближайшее время.`);
        setNickname('');
        setName('');
        setSurname('');
        setEmail('');
        setWishes('');
        setShowModal(true); // Показать модальное окно
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Произошла ошибка при отправке данных.');
      });
  };

  const handleClose = () => setShowModal(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      <div
        style={{
          padding: '40px 40px',
          marginTop: 80,
          marginBottom: 80,
          backgroundColor: '#f1e9e9',
          width: 1000,
          height: 600,
          border: '1px solid black',
          borderRadius: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <h3>Свяжитесь с нами!!!</h3>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Никнейм</InputGroup.Text>
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Имя</InputGroup.Text>
          <Form.Control
            aria-label="Name"
            aria-describedby="basic-addon2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Фамилия</InputGroup.Text>
          <Form.Control
            aria-label="Surname"
            aria-describedby="basic-addon3"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Ваша почта"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
        </InputGroup>

        <InputGroup>
          <InputGroup.Text>Ваши пожелания</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            value={wishes}
            style={{ resize: 'none' }}
            onChange={(e) => setWishes(e.target.value)}
          />
        </InputGroup>
        <Button variant="dark" size="lg" style={{ marginTop: 20 }} onClick={handleSubmit}>
          Отправить
        </Button>
      </div>
      <Footer />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Оцените качество обслуживания</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StyledRating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Отправить оценку
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormContacts;
