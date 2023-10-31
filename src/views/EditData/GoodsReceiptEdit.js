import React, { useState } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
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

const GoodsReceiptEdit = () => {
  const [editModal, setEditModal] = useState(false);
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/GoodsDelivery');
  };
  //setting data in enquiryDetails
  const tabs = [
    { id: '1', name: 'Goods received Items' },
    { id: '2', name: 'Attachment' },
  ];

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    setActiveTab(tab);
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
                    navigate('/GoodsDelivery');
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
                      navigate('/GoodsDelivery');
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
          <ComponentCard title="Goods Receipt Details">
            {' '}
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label> PO Code </Label>
                  <Input
                    type="text"
                    
                    value="Po_235689"
                    name="po_code"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Supplier Name </Label>
                  <Input
                    type="text"
                    
                    value="Al Yamama Company"
                    name="company_name"
                    disabled
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Goods Received Date <span className="required"> *</span> </Label>
                  <Input
                    type="date"
                    
                    // value={goodsreceipteditdetails && goodsreceipteditdetails.goods_received_date}
                    value="2023-08-08"
                    name="goods_received_date"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Received By</Label>
                  <Input
                    type="select"
                    
                    value="Arshad"
                    name="employee_id"
                  >
                    <option defaultValue="selected">Please Select</option>
                    
                          <option >
                            
                          </option>
                        
                  </Input>
                </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col md="3">
                <FormGroup>
                  <Label> Total Amount </Label>
                  <Input
                    type="text"
                    
                    value="50000"
                    name="total_amount"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Status </Label>
                  <Input
                    value=""
                    type="select"
                    
                    name="status"
                  >
                    <option value="">Please Select</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </Input>
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
              <Col md="3">
                <FormGroup>
                  <Button className="shadow-none" color="primary">
                    Create Receipt Items
                  </Button>
                </FormGroup>
              </Col>
                               
              <Col md="3">
                <FormGroup>
                  <Button
                    className="shadow-none"
                    color="primary"
                    onClick={() => {
                      setEditModal(true);
                    }}
                  >
                    Edit
                  </Button>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
    <Table bordered className="lineitem">
      <thead>
        <tr>
        <th scope="col"> S.No </th>
        <th scope="col"> PO Code </th>
        <th scope="col">Title </th>
        <th scope="col">Unit </th>
        <th scope="col">Ordered Quantity </th>
        <th scope="col">Received Date </th>
        <th scope="col">Received Quantity</th>
        <th scope="col"> Unit Price</th>
        <th scope="col"> Total Cost </th>
        </tr>
        </thead>
        <tbody>
        
            <tr>
              <td>1</td>
              <td >Po_316497</td>
              <td >Goods Received from Esab Saudi Trading Company</td>
              <td >Nos</td>
              <td >150</td>
              <td >19-09-2023</td>
              <td >125</td>
              <td >100</td>
              <td >12500</td>
            </tr>
          
          </tbody>
           </Table>
            </FormGroup>
            <>
            <Modal size="xl" isOpen={editModal}>
              <ModalHeader>
              Goods Receipt Items
                <Button
                  className="shadow-none"
                  color="secondary"
                  onClick={() => {
                    setEditModal(false);
                  }}
                >
                  X
                </Button>
              </ModalHeader>
              <ModalBody>
                <Form>
                  <Row>
                    <Col>
                      <table className="lineitem">
                        <thead>
                          <tr>
                            <th scope="col">PO Code	</th>
                            <th scope="col">Title </th>
                            <th scope="col">Unit</th>
                            <th scope="col">Ordered Quantity</th>
                            <th scope="col">Received Date</th>
                            <th scope="col">Received Quantity</th>
                            <th scope="col">Unit Price	</th>
                            <th scope="col">Total Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                        
                      <tr >
                        <td data-label="PO_Code">
                          <Input
                            defaultValue="Po_235682"	
                            type="text"
                            name="po_code"
                            
                            disabled
                          />
                        </td>
                        <td data-label="Title">
                          <Input
                            defaultValue="Goods Received from Al Asimah Company"
                            type="text"
                            name="item_title"
                            
                            disabled
                          />
                        </td>
                        <td data-label="Unit">
                          <Input
                            defaultValue="Nos"
                            type="text"
                            name="unit"
                            
                            disabled
                          />
                        </td>
                        <td data-label="Ordered_Quantity">
                          <Input
                            defaultValue="150"
                            type="number"
                            name="ordered_quantity"
                            
                            disabled
                          />
                        </td>
                        <td data-label="Received_Date">
                          <Input
                            defaultValue="19-09-2023"
                            type="text"
                            name="goods_received_date"
                            
                          />
                        </td> 
                        <td data-label="Received_Quantity">
                          <Input
                            defaultValue="125"
                            type="number"
                            name="goods_received_qty"
                              
                          />
                        </td> 
                        <td data-label="Unit Price">
                          <Input
                            defaultValue="100"
                            type="number"
                            name="unit_price"
                            
                          />
                        </td>        
                        <td data-label="Total Cost">
                          <Input
                            defaultValue="12500"
                            type="number"
                            name="total_cost"
                            
                            disabled
                          />
                        </td>                    
                      </tr>
                    
                        </tbody>
                      </table>
                    </Col>
                  </Row>
                  <ModalFooter>
                    <Button className="shadow-none" color="primary">
                      {' '}
                      Submit{' '}
                    </Button>
                    <Button
                      className="shadow-none"
                      color="secondary"
                      onClick={() => {
                        setEditModal(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Form>
              </ModalBody>
            </Modal>
            </>
          </TabPane>
          
          <TabPane tabId="2">
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

export default GoodsReceiptEdit;
