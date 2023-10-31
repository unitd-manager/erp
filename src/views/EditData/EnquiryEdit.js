import React from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const EnquiryEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Enquiry');
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
                    navigate('/Enquiry');
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
          <ComponentCard title="Enquiry Details">
            {' '}
            <Row>
            <Col md="3">
                <FormGroup>
                  <Label>Title<span className="required"> *</span></Label>
                  <Input type="text" value="Construction" />
                </FormGroup>
              </Col>
              
              <Col md="3">
                <FormGroup>
                  <Label>Enquiry Number</Label>
                  <Input type="text" value="CSE97" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Enquiry Date</Label>
                  <Input type="text" value="19/07/2023" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Company</Label>
                  <Input type="text" value="Hussein Al Ali Est." />
                </FormGroup>

              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Reference</Label>
                  <Input type="text" value="789456" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Due Date</Label>
                  <Input type="text" value="19/07/2023" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Service</Label>
                  <Input type="text" value="Project and Maintenance" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Enquiry Status</Label>
                  <Input type="select" value="" >
                    <option value="">Please Select</option>
                    <option value="Estimated">Estimated</option>
                    <option value="Approved">Approved</option>
                    <option value="Awarded">Awarded</option>
                    <option value="Converted to Project">Converted to Project</option>
                    <option value="Proposal Approved">Proposal Approved</option>
                    </Input>
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

export default EnquiryEdit;
