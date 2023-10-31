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
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
} from 'reactstrap';
import Select from 'react-select';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';
import Tab from '../../components/project/Tab';

const JobOrderEdit = () => {
  const [addLineItemModal, setAddLineItemModal] = useState(false);
  const [activeTab, setActiveTab] = useState('1');
  const [editLineModal, setEditLineModal] = useState(false);

  //navigation and parameters
  const navigate = useNavigate();
  const addQuoteItemsToggle = () => {
    setAddLineItemModal(!addLineItemModal);
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/JobOrder');
  };

  const tabs = [
    { id: '1', name: 'JobOrder' },
    { id: '2', name: 'Attachment' },
  ];

  const columns1 = [
    {
      name: '#',
    },
    {
        name: 'Title',
      },
    {
      name: 'Description',
    },
    
    
    {
      name: 'Qty',
    },
    {
      name: 'Unit Price	',
    },
    {
      name: 'Amount	',
    },
    {
      name: 'Updated By',
    },
    {
      name: 'Action ',
    },
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
                    navigate('/JobOrder');
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
                      navigate('/JobOrder');
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
          <ComponentCard title="Job Details">
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>
                    Job Number <span className="required"> *</span>
                  </Label>
                  <Input type="text" value="JBO-01" name="" disabled />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Date</Label>
                  <Input type="text" value="05-08-2023" name="" />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>Customer</Label>
                  <Input type="text" value="Saudi Aramco" name="" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Col md="4">
                <FormGroup>
                  <Label>
                    Contact (OR){' '}
                    <span className="anchor" >
                      <b>
                        <u>Add New Contact</u>
                      </b>
                    </span>
                  </Label>
                  <Input
                    type="select"
                    
                  >
                    <option value="" selected>
                      Please Select
                    </option>
                    
                  </Input>
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Reference</Label>
                  <Input type="text" value="REF0011" name="" />
                </FormGroup>
              </Col>
             
              <Col md="4">
                <Label>Status</Label>
                <Input
                  type="select"
                  value=""
                  name=""
                  // Disable if status is "Approved"
                >
                  <option value="Please Select">Please Select</option>
                  <option value="Quoted">Quoted</option>
                  <option value="Awarded">Awarded</option>
                  <option value="Not Awarded">Not Awarded</option>
                  <option value="Cancelled">Cancelled</option>
                </Input>
              </Col>
            </Row>

            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Net Total</Label>
                  <Input type="text" value="20000" name="" />
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
            <br />
            <Row>
              <Col md="4">
                <FormGroup>
                  <Button color="primary" className="shadow-none"onClick={addQuoteItemsToggle.bind(null)}>
                    Add Quote Items
                  </Button>
                </FormGroup>
              </Col>
            </Row>
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
                      <td>1</td>
                      <td>Safety Glasses</td>
                      <td>Construction work equipment</td>
                      <td>50</td>
                      <td>200</td>
                      <td>10000</td>
                      <td></td>
                      <td data-label="Actions">
                        <span className="addline" onClick={() => {
                            setEditLineModal(true);
                          }}>
                          <Icon.Edit2 />
                        </span>
                        <span className="addline">
                          <Icon.Trash2 />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
            <Modal isOpen={editLineModal}>
              <ModalHeader>Line Items</ModalHeader>
              <ModalBody>
                <FormGroup>
                  <Row>
                    <Label sm="2">Title</Label>
                    <Col sm="10">
                      <Input type="text" name="title" defaultValue="Safety Glasses" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label sm="2">Description</Label>
                    <Col sm="10">
                      <Input
                        type="textarea"
                        name="description"
                        defaultValue="Construction work equipment"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label sm="2">Qty</Label>
                    <Col sm="10">
                      <Input type="text" name="quantity" defaultValue="50	" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label sm="2">UOM</Label>
                    <Col sm="10">
                      <Input type="select" name="unit" defaultValue="Pcs">
                        <option defaultValue="selected">Pcs</option>
                      </Input>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label sm="2">Unit Price</Label>
                    <Col sm="10">
                      <Input type="text" name="unit_price" defaultValue="200" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label sm="2">Total Price</Label>
                    <Col sm="10">
                      <Input type="text" name="amount" value="10000" disabled />
                    </Col>
                  </Row>
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  className="shadow-none"
                  type="button"
                  onClick={() => {
                    setEditLineModal(false);
                  }}
                >
                  Save & Continue
                </Button>
                <Button
                  color="secondary"
                  className="shadow-none"
                  onClick={() => {
                    setEditLineModal(false);
                  }}
                >
                  {' '}
                  Cancel{' '}
                </Button>
              </ModalFooter>
            </Modal>
            {/* Add Line Item Modal */}
            {addLineItemModal && (
              <Modal size="xl" isOpen={addLineItemModal}>
                <ModalHeader>
                  Add Quote Items
                  <Button
                    className="shadow-none"
                    color="secondary"
                    onClick={() => {
                      setAddLineItemModal(false);
                    }}
                  >
                    X
                  </Button>
                </ModalHeader>
                <ModalBody>
                  <Row>
                    <Col md="12">
                      <Form>
                        <Row>
                          <Row>
                            <Col md="3">
                              <Button className="shadow-none" color="primary" type="button">
                                Add Line Item
                              </Button>
                            </Col>
                          </Row>
                          {/* Invoice Item */}
                          <Card>
                            <table className="lineitem">
                              <thead>
                                <tr>
                                  <th scope="col">Title </th>
                                  <th scope="col">Description </th>
                                  <th scope="col">Unit </th>
                                  <th scope="col">Qty</th>
                                  <th scope="col">Unit Price</th>
                                  <th scope="col">Amount</th>
                                  <th scope="col">Remarks</th>
                                  <th scope="col"></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td data-label="Title">
                                    <Input Value="" type="text" name="title" />
                                  </td>
                                  <td data-label="Description">
                                    <Input Value="" type="text" name="description" />
                                  </td>
                                  <td data-label="Unit">
                                    <Select name="unit" />
                                  </td>
                                  <td data-label="Qty">
                                    <Input Value="" type="number" name="quantity" />
                                  </td>
                                  <td data-label="Unit Price">
                                    <Input Value="" type="number" name="unit_price" />
                                  </td>
                                  <td data-label="Amount">
                                    <Input Value="" type="text" name="amount" disabled />
                                  </td>
                                  <td data-label="Remarks">
                                    <Input Value="" type="text" name="remarks" />
                                  </td>
                                  <td data-label="Action">
                                    <Input type="hidden" name="id" Value=""></Input>
                                    <span className="addline">Clear</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </Card>
                          <ModalFooter>
                            <Button className="shadow-none" color="primary">
                              {' '}
                              Submit{' '}
                            </Button>
                            <Button
                              className="shadow-none"
                              color="secondary"
                              onClick={() => {
                                setAddLineItemModal(false);
                              }}
                            >
                              Cancel
                            </Button>
                          </ModalFooter>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </ModalBody>
              </Modal>
            )}
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col xs="12" md="4" className="mb-3">
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

export default JobOrderEdit;
