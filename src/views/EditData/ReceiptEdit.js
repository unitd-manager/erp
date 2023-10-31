import React from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const ReceiptEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Receipt');
  };
  //setting data in enquiryDetails

  return (
    <>
      <BreadCrumbs />
      <Form>
        <FormGroup>
          <ComponentCardV2>
            <Row>
              <Col>
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    navigate('/Receipt');
                  }}
                >
                  Save
                </Button>
              </Col>
              <Col>
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    applyChanges();
                  }}
                >
                  Apply
                </Button>
              </Col>
              <Col>
                <Button
                  type="submit"
                  className="btn btn-dark shadow-none"
                  onClick={(e) => {
                    if (window.confirm('Are you sure you want to cancel? ')) {
                      navigate('/Receipt');
                    } else {
                      e.preventDefault();
                    }
                  }}
                >
                  Cancel
                </Button>
              </Col>

              <Col>
                <Button
                  className="shadow-none"
                  color="dark"
                  onClick={() => {
                    backToList();
                  }}
                >
                  Back to List
                </Button>
              </Col>
            </Row>
          </ComponentCardV2>
        </FormGroup>
      </Form>
      {/* Enquiry Details */}
      <Form>
        <FormGroup>
          <ComponentCard title="Receipt Details">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Receipt Code</Label>
                  <Input type="text" value="Rec-11" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Status</Label>
                  <Input type="text" value="Paid" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Receipt Date</Label>
                  <Input type="text" value="05-08-2023" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Mode Of Payment</Label>
                  <Input type="text" value="Cash" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Receipt Amount </Label>
                  <Input type="text" value="5000" />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <ComponentCard title="Attachments">
            <Row>
              <Col xs="12" md="3" className="mb-3">
                <Button className="shadow-none" color="primary">
                  <Icon.File className="rounded-circle" width="20" />
                </Button>
              </Col>
              <Label>File Name</Label>
              
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
    </>
  );
};

export default ReceiptEdit;
