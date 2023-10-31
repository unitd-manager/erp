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

const DocumentEdit = () => {
  const [activeTab, setActiveTab] = useState('1');

  //navigation and parameters
  const navigate = useNavigate();
  

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Document');
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
                    navigate('/Document');
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
                      navigate('/Document');
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
          
      <ComponentCard title="Document Details" >
            <ToastContainer></ToastContainer>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>DOC Code</Label>
                  <Input
                    type="text"
                    
                    value="DOC-501"
                    name="document_code"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>DOC Title<span className='required'>*</span></Label>
                  <Input
                    type="text"
                    
                    value="Roofing Materials Doc"
                    name="document_title"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Project Name </Label>
                    <Input
                          type="text"
                          
                          value="Roofing Materials"
                          name="title"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Project Start Date </Label>
                    <Input
                          type="text"
                          
                          value="2023-06-07"
                          name="start_date"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col md="3">
                <FormGroup>
                  <Label> Budget </Label>
                    <Input
                          type="text"
                         
                          value="40000"
                          name="budget_inhouse"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Company Name</Label>
                  <Input
                    type="text"
                    
                    value="Ikea Saudi Arabia"
                    name="company_name"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Contact Name</Label>
                  <Input
                    type="text"
                    
                    value="Isaac"
                    name="contact_name"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Quote Status </Label>
                    <Input
                          type="text"
                          
                          value="new"
                          name="quote_status"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col md="3">
                <FormGroup>
                  <Label> Project End Date </Label>
                    <Input
                          type="text"
                          
                          value="2023-07-07"
                          name="estimated_finish_date"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              </Row>
          </ComponentCard>
              </FormGroup>
            </Form>
            <Form>
            <ComponentCard title="Client Details">
            <ToastContainer></ToastContainer>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Company Name</Label>
                  <Input
                    type="text"
                    
                    value="Ikea Saudi Arabia"
                    name="company_name"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Website</Label>
                  <Input
                    type="text"
                    
                    value="www.ikeasaudiarabia.com"
                    name="website"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Email</Label>
                    <Input
                          type="text"
                          
                          value="isaac@ikeasaudiarabia.com"
                          name="email"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Address</Label>
                    <Input
                          type="text"
                          
                          value="Makkah Al-Mukaramah Street"
                          name="company_address"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input
                    type="text"
                    
                    value="+966 76 194 8523"
                    name="phone"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>PO Code</Label>
                  <Input
                    type="text"
                    
                    value="31952"
                    name="address_po_code"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> State </Label>
                    <Input
                          type="text"
                          
                          value="Al-Khobar"
                          name="address_state"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Country</Label>
                    <Input
                          type="text"
                          
                          value="Saudi Arabia"
                          name="address_country"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              </Row>
              </ComponentCard>
            </Form>
            <Form>
            <ComponentCard title="Contact Details">
            <ToastContainer></ToastContainer>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Contact Name</Label>
                  <Input
                    type="text"
                    
                    value="Isaac"
                    name="contact_name"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Position</Label>
                  <Input
                    type="text"
                    
                    value="Manager"
                    name="position"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Email</Label>
                    <Input
                          type="text"
                         
                          value="isaac@ikeasaudiarabia.com"
                          name="contact_email"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Address</Label>
                    <Input
                          type="text"
                          
                          value="Fahad Sulaiman Saab Building"
                          name="contact_address"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input
                    type="text"
                    
                    value='+966 3 6670460'
                    name="contact_phone"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>PO Code</Label>
                  <Input
                    type="text"
                    
                    value="216"
                    name="contact_address_po_code"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> State </Label>
                    <Input
                          type="text"
                          
                          value="Riyadh"
                          name="contact_address_state"
                          disabled>
                     </Input>
              </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Country</Label>
                    <Input
                          type="text"
                          
                          value="Saudi Arabia"
                          name="contact_address_country"
                          disabled>
                     </Input>
        </FormGroup>
              </Col>
              </Row>
              </ComponentCard>
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

export default DocumentEdit;
