import React, { useState } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Table,
  TabPane,
  TabContent,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';
import Tab from '../../components/project/Tab';


const RequestForQuoteEdit = () => {
  

  const [requestForQuoteEdit, setRequestForQuoteEdit] = useState(false);
  // const [editRequestForQuoteLineInsert, setEditRequestForQuoteLineInsert] = useState(false);

  const handleEditButtonClick = () => {
    setRequestForQuoteEdit(true);
  };
  //navigation and parameters
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    setActiveTab(tab);
  };

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/RequestForQuote');
  };

  
  //setting data in enquiryDetails

  const tabs = [{ id: '1', name: 'Request For Quotation' }];

  const columns1 = [
    { name: 'Item Code' },
    { name: 'Item' },
    { name: 'Description' },
    { name: 'Unit' },
    { name: 'quantity' },
    { name: 'Amount' },
    { name: 'Total Amount ' },
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
                    navigate('/RequestForQuote');
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
                      navigate('/RequestForQuote');
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
          <ComponentCard title="Quote Request Details">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Purchase Request Code</Label>
                  <Input type="text" value="PR_852151" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Title</Label>
                  <Input type="text" value="Purchase from Fahad Saleh Al Thwaini Trading Est" />
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
                  <Label>Date Issued</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Due Date</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Supplier Name</Label>
                  <Input type="text" value="Fahad Saleh Al Thwaini Trading Est" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Total Amount</Label>
                  <Input type="text" value="20000" />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      <Tab toggle={toggle} tabs={tabs} />
      <TabContent className="p-4" activeTab={activeTab}>
        <TabPane tabId="1" eventkey="MoreDetails">
          <Button onClick={handleEditButtonClick}>Edit Table</Button>

          <Row>
            <div className="container">
              <Table id="example" className="display border border-secondary rounded">
                <thead>
                  <tr>
                    {columns1.map((cell) => {
                      return <td key={cell.name}>{cell.name}</td>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PROD-1008</td>
                    <td>MCCB,MF1-Series,Type,MF1-225,200A,3Pole,with Push to Trip, I</td>
                    <td></td>
                    <td>kg</td>
                    <td>70</td>
                    <td>100</td>
                    <td>7000</td>
                  </tr>
                  <tr>
                    <td>PROD-1008</td>
                    <td>MCCB,MF1-Series,Type,MF1-225,200A,3Pole,with Push to Trip, I</td>
                    <td></td>
                    <td>kg</td>
                    <td>50</td>
                    <td>100</td>
                    <td>5000</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row>
         
            <Modal size="xl" isOpen={requestForQuoteEdit}>
              <ModalHeader>Edit PO Line Items</ModalHeader>

              <ModalBody>
                <FormGroup>
                  <Row>
                    <Col md="12" className="mb-4">
                      <Row>
                        <Col md="3">
                          <Label>Supplier</Label>
                          <Input
                            disabled
                            type="text"
                            name="supplier"
                            
                          />
                        </Col>
                        <Col md="3">
                          <Label>PR No.</Label>
                          <Input
                            disabled
                            type="text"
                            name="purchase_request_code"
                            
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <table className="lineitem">
                    <thead>
                      <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="ProductName">
                          <Input type="text" name="title" />
                        </td>
                        <td data-label="unit">
                          <Input type="text" name="unit" />
                        </td>
                        <td data-label="quantity">
                          <Input type="text" name="quantity" />
                        </td>
                        <td data-label="Amount">
                          <Input type="text" name="amount" />
                        </td>
                        <td data-label="Total Price">
                          <Input type="text" name="total_cost" />
                        </td>
                        <td data-label="Remarks">
                          <Input type="textarea" name="description" />
                        </td>
                        <td data-label="Action">
                          <div className="anchor">
                            <span>Clear</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" className="shadow-none"
                onClick={() => {
                  setRequestForQuoteEdit(false);
                }}>
                  Submit
                </Button>
                <Button color="secondary" className="shadow-none">
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            
        </TabPane>
      </TabContent>
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

export default RequestForQuoteEdit;
