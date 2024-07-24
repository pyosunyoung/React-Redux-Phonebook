import React, { useState } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const [searchName, setsearchName] = useState("");
  
  const dispatch = useDispatch();
  const searchNamef = (event) => {
    event.preventDefault()
    dispatch({type:"SEARCHNAME", payload:{searchName}})
  }
  const textChange = (event) => {
    setsearchName(event.target.value);
    
  }
  return (
    <Row>
      <Form onSubmit={searchNamef}>
      <Col lg={10}>
      <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={textChange}/>
      </Col>
      <Col lg={2}>
        <Button type="submit">찾기</Button>
      </Col>
      </Form>
    </Row>
  )
}

export default SearchBox
