import React  from 'react';

import { Row, Col } from 'reactstrap';

// import message from '../Message';
// import api from '../../constants/api';

function AddNote() {
  
  return (
    <>
      <Row>
        <textarea id="note" name="comments" rows="4" cols="50"  />
      </Row>
      <Row className="mb-2"></Row>
      <Row className="mb-1">
        <Col md="1">
          <button type="button" className="btn btn-primary btn-sm shadow-none" >
            Submit
          </button>
        </Col>
        <Col md="1">
          <button type="button" className="btn btn-dark btn-sm shadow-none">
            Cancel
          </button>
        </Col>
      </Row>
    </>
  );
}

export default AddNote;
