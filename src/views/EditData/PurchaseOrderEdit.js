import React from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const PurchaseOrderEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/PurchaseOrder');
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
                    navigate('/PurchaseOrder');
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
                      navigate('/PurchaseOrder');
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
          <ComponentCard title="Purchase Order Details">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Po Code</Label>
                  <Input type="text" value="Po_197346" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Title</Label>
                  <Input type="text" value="Purchase from Al Asimah Company" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Po Value</Label>
                  <Input type="text" value="10000" />
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
                  <Label>Supplier Name</Label>
                  <Input type="text" value="Al Asimah Company" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Priority</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>PO Date</Label>
                  <Input type="text" value="19/07/2023" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Follow Up Date</Label>
                  <Input type="text" value="26/07/2023" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Notes To Supplier</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Delivery Terms</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Payment Terms</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Payment Status</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>supplier Invoice Code</Label>
                  <Input type="text" value="2023/INV/1010" />
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

export default PurchaseOrderEdit;
