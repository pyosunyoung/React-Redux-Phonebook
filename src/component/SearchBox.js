import React, { useState } from 'react';
import { Button, Form, Col, Row, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const [searchName, setSearchName] = useState('');
  const dispatch = useDispatch();

  const textLiveChange = (event) => {
    
    const value = event.target.value;
    setSearchName(value);
    dispatch({ type: 'SEARCHNAME', payload: { searchName: value } });
  };
  const textSubmit = (event) => {
    event.preventDefault()
    dispatch({type:"SEARCHNAME", payload:{searchName}})
  }
  // 실시간과 제출 차이 : 실시간은 input에서 바로 값을 입력하기 때문에 실시간 검색가능,
  // 제출은 input에 입력 후 제출하기 버튼을 눌러야 값이 보여지기 떄문에 실시간은 x 꼭 버튼을 눌러 제출해야함
  return ( 
    <Row>
      <Col lg={12}>
        <Form onSubmit={textSubmit}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={textLiveChange}
              value={searchName}
            />
            <Button variant="success" type="submit" >
              찾기
            </Button>
          </InputGroup>
        </Form>
      </Col>
      <Col>
        <hr />
      </Col>
    </Row>
  );
};

export default SearchBox;
