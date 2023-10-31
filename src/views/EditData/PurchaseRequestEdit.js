import React from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const PurchaseRequestEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/PurchaseRequest');
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
                    navigate('/PurchaseRequest');
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
                      navigate('/PurchaseRequest');
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
          <ComponentCard title="Purchase Request Details">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>PR Code</Label>
                  <Input type="text" value="PR_852147" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Date</Label>
                  <Input type="text" value="19/07/2023" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Delivery Date</Label>
                  <Input type="text" value="22/07/2023" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Product Id</Label>
                  <Input type="text" value="PROD1021" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Company</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Department</Label>
                  <Input type="text" value="PRODUCTION" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Creation Date</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Modification Date</Label>
                  <Input type="text" value="19/07/2023" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Created By</Label>
                  <Input type="text" value="26/07/2023" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Modified By</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <ComponentCard title="Add Product Items">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Product Id</Label>
                  <Input type="text" value="PROD1069" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Unit</Label>
                  <Input type="text" value="Pcs" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Qty</Label>
                  <Input type="text" value="10" />
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

export default PurchaseRequestEdit;
