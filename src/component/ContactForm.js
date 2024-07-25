import React, { useState } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap';

import { useDispatch } from 'react-redux';

const ContactForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  // const getName = (event) => { // 굳이 함수를 만들긴 귀찮아서 바로 익명함수로 호출떄림
  //   setName(event.target.value);
  // } // onChange함수는 input창 안에 어떤 값이 입력되었을 때마다 호출해주는 함수임
  const addContact = (event) => {
    event.preventDefault() // from이 새로고침되어지는것을 막음음
    dispatch({type:'ADD_CONTACT', payload : {name, phoneNumber}});
  } // name, phoneNumber는 name : name, phoneNumber : phoneNumber 줄인것임
  return (
    <div>
      <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event) => setName(event.target.value)} /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요"onChange={(event) => setPhoneNumber(event.target.value)} />
      </Form.Group>

      <Row>
        <Col lg={10}>
          <Button variant="success" type="submit">
            추가
          </Button>
        </Col>
        <Col lg={2} >
          <Button className='close-button' variant="dark" onClick={handleClose}>
          닫기
          </Button>
        </Col>
      </Row>
    </Form> 
    </div>// type submit은 onsubmit이 onclick과 같은느낌임
  )
}// 이제 contactForm에서 값을 contactList로 넘겨줘야함 근데 형제관계 이때 리덕스 스토어 쓰면 됨

export default ContactForm
