import React, { useState } from 'react';
import { Col, Row, Button, Dropdown } from 'react-bootstrap';
import { FaRegStar, FaStar, FaPhone, FaEnvelope, FaVideo, FaCog } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const ContactItem = ({ item, isFavorite }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const isStarred = useSelector(state => state.starredContacts.includes(item.name));

  const toggleStar = () => {
    dispatch({ type: 'TOGGLE_STAR', payload: { name: item.name } });
  };

  const removeContact = () => {
    dispatch({ type: 'REMOVE_CONTACT', payload: { name: item.name } });
  };

  return (
    <Row
      className='contact-item'
      onClick={() => setShowDropdown(!showDropdown)}
    >
      {!isFavorite && (
        <Col lg={1}>
          <Button variant="link" onClick={(e) => { e.stopPropagation(); toggleStar(); }}>
            {isStarred ? <FaStar color="gold" /> : <FaRegStar />}
          </Button>
        </Col>
      )}
      <Col lg={1} className='item-text-margin'>
        <img
          width={50}
          src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'
          alt=''
        />
      </Col>
      <Col lg={9} className='item-text-margin1' >
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
      {isFavorite ? (
        <Col lg={1}>
          <Button variant="link" onClick={(e) => { e.stopPropagation(); toggleStar(); }}>
            <FaStar color="gold" />
          </Button>
        </Col>
      ) : (
        <Col lg={1}>
          <Button variant="link" onClick={(e) => { e.stopPropagation(); removeContact(); }}>
            <span style={{ color: 'red' }}>X</span>
          </Button>
        </Col>
      )}
      {showDropdown && (
        <Col lg={12}>
          <Dropdown.Menu show className="custom-dropdown-menu w-100">
            <Dropdown.Item href="#/action-1"><FaPhone /> 전화</Dropdown.Item>
            <Dropdown.Item href="#/action-2"><FaEnvelope /> 메시지</Dropdown.Item>
            <Dropdown.Item href="#/action-3"><FaVideo /> 영상통화</Dropdown.Item>
            <Dropdown.Item href="#/action-4"><FaCog /> 설정</Dropdown.Item>
          </Dropdown.Menu>
        </Col>
      )}
      <hr />
    </Row>
  );
};

export default ContactItem;
