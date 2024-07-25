import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './component/ContactForm';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import ContactList from './component/ContactList';
import { FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ContactItem from './component/ContactItem';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const starredContacts = useSelector(state => state.starredContacts);
  const contactList = useSelector(state => state.contactList);
  const favoriteContacts = contactList.filter(contact => starredContacts.includes(contact.name));

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className='container-centered'>
      <div className='phonebook-container'>
        <img
          src='https://img.freepik.com/premium-vector/phone-icon_874723-59.jpg'
          alt=''
          width='150'
        />
        <h1 className='title'>
          연락처
        </h1>
        <Container>
          <Row>
            <Col className="contact-list-column" style={{ maxHeight: '80vh' }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  저장된 연락처 : {`${contactList.length}개`}
                </div>
                <Button variant="link" onClick={() => setShowFavorites(true)}>
                  <FaStar className='starSearch' color="gold" size={24} />즐겨찾기
                </Button>
              </div>
              <ContactList />
            </Col>
          </Row>
        </Container>
        <Button
          variant='dark'
          className='floating-button'
          onClick={handleShowForm}
          style={{ fontSize: '40px' }}
        >
          +
        </Button>
        <Modal
          show={showForm}
          onHide={handleCloseForm}
          dialogClassName='modal-90w'
          aria-labelledby='example-custom-modal-styling-title'
        >
          <Modal.Body>
            <ContactForm handleClose={handleCloseForm} />
          </Modal.Body>
        </Modal>
        <Modal
          show={showFavorites}
          onHide={() => setShowFavorites(false)}
          dialogClassName='modal-90w'
          aria-labelledby='favorite-contacts-modal-title'
        >
          <Modal.Header closeButton>
            <Modal.Title id="favorite-contacts-modal-title">
              즐겨찾기 목록
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {favoriteContacts.length > 0 ? (
              favoriteContacts.map((item, index) => (
                <ContactItem item={item} key={index} isFavorite={true} />
              ))
            ) : (
              <p>즐겨찾기된 연락처가 없습니다.</p>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default App;
