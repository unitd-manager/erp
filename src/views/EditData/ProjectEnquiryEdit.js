import React from 'react';
import { Row, Col, Form, FormGroup, Input, Label,Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const ProjectEnquiryEdit = () => {
  const navigate = useNavigate();
  const applyChanges = () => {};
  const backToList = () => {
    navigate('/ProjectEnquiry');
  };

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
                    
                    navigate('/ProjectEnquiry');
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
      <Form>
        <FormGroup>
          <ComponentCard title="Enquiry Details">
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Enquiry Date <span className="required"> *</span>
                  </Label>
                  <Input type="Date" value="23/06/2023" name="enquiry_date" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Enquiry No</Label>
                  <Input type="text" value="PE97" name="enquiry_code" disabled />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Reference</Label>
                  <Input type="text" value="789456" name="office_ref_no" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Services</Label>
                  <Input type="text" value="Project and Maintenance	" name="services" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Due Date</Label>
                  <Input type="date" value="19/07/2023" name="project_end_date" />
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label>Enquiry Status</Label>
                  <Input type="select" value="" name="status">
                    <option defaultValue="selected"> Please Select </option>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>

      <ComponentCard title="More Details">
        <ToastContainer></ToastContainer>

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
      </ComponentCard>
    </>
  );
};

export default ProjectEnquiryEdit;
