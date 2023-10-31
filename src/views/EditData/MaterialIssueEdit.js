import React, { useState } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  TabPane,
  TabContent,
  
} from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';
import Tab from '../../components/project/Tab';

const MaterialIssueEdit = () => {
  const [activeTab, setActiveTab] = useState('1');

  //navigation and parameters
  const navigate = useNavigate();
  

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/MaterialIssue');
  };

  const tabs = [
    
    { id: '1', name: 'Attachment' },
  ];

  

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
                    navigate('/MaterialIssue');
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
                      navigate('/MaterialIssue');
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

      <Form>
        <FormGroup>
          <ComponentCard title="Material Issue Details">
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>
                    Project Name <span className="required"> *</span>
                  </Label>
                  <Input type="text" value="Electrical Components" name="material_request_code" disabled />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Code</Label>
                  <Input type="text" value="MI-001" name="request_date" />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>Issue Date</Label>
                  <Input type="text" value="14-07-2023" name="shipping_method" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Reason For Issue</Label>
                  <Input type="text" value="" name="material_request_date" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Authorized By</Label>
                  <Input type="text" value="" name="site_reference" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Notes</Label>
                  <Input type="text" value="" name="request_by" />
                </FormGroup>
              </Col>
              
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>

      <ComponentCard title="More Details">
        <ToastContainer></ToastContainer>

        <Tab toggle={toggle} tabs={tabs} />
        <TabContent className="p-4" activeTab={activeTab}>
          

          <TabPane tabId="1">
            <Row>
              <Col xs="12" md="3" className="mb-3">
                <Button className="shadow-none" color="primary">
                  <Icon.File className="rounded-circle" width="20" />
                </Button>
              </Col>
              <Label>File Name</Label>
            </Row>
          </TabPane>
        </TabContent>
      </ComponentCard>
    </>
  );
};

export default MaterialIssueEdit;
