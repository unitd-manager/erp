import React from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const PurchaseInvoiceEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/PurchaseInvoice');
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
                    navigate('/PurchaseInvoice');
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
                      navigate('/PurchaseInvoice');
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
          <ComponentCard title="Purchase Invoice Details">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Invoice</Label>
                  <Input type="text" value="VIR/IN/189" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Date</Label>
                  <Input type="text" value="10/08/2023" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Project</Label>
                  <Input type="text" value="Building Materials" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Customer</Label>
                  <Input type="text" value="Zain Saudi Arabia" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Amount</Label>
                  <Input type="text" value="15000" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Due Date</Label>
                  <Input type="text" value="15/08/2023" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Age</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Status</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Type</Label>
                  <Input type="text" value="" />
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

export default PurchaseInvoiceEdit;
