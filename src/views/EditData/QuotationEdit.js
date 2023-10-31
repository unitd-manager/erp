import React, { useState } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
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
import { ToastContainer } from 'react-toastify';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';
import Tab from '../../components/project/Tab';

const QuotationEdit = () => {
  const [addLineItemModal, setAddLineItemModal] = useState(false);
  const [editLineModal, setEditLineModal] = useState(false);
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Quotation');
  };
  //setting data in enquiryDetails
  const [activeTab, setActiveTab] = useState('1');
  const toggle = (tab) => {
    setActiveTab(tab);
  };
  const addQuoteItemsToggle = () => {
    setAddLineItemModal(!addLineItemModal);
  };

  const tabs = [
    { id: '1', name: 'Quotation ' },
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
      name: 'Unit Price',
    },
    {
      name: 'Amount',
    },
    {
      name: 'Updated By ',
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
                <Button className="shadow-none" color="primary">
                  Pdf Quote
                </Button>
              </Col>
              <Col>
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    navigate('/Quotation');
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
          <ComponentCard title="Quotation Details">
            {' '}
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Quotation No</Label>
                  <Input type="text" value="QT2023117"></Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Date</Label>
                  <Input type="text" value="23/07/2023" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Company Name</Label>
                  <Input type="text" value="Ikea Saudi Arabia" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Contact (OR){' '}
                    <span className="anchor">
                      <b>
                        <u>Add New Contact</u>
                      </b>
                    </span>
                  </Label>
                  <Input type="select">
                    <option value="" selected>
                      Please Select
                    </option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Reference</Label>
                  <Input type="text" value="729541" />
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label>Enquiry No</Label>
                  <Input type="text" value="CSE89"></Input>
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label>Status</Label>
                  <Input type="text" value="	"></Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Net Amount</Label>
                  <Input type="text" value="SAR 137.50"></Input>
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
              <Col md="6">
                <Button
                  className="shadow-none"
                  color="primary"
                  to=""
                  onClick={addQuoteItemsToggle.bind(null)}
                >
                  Add Quote Items
                </Button>
              </Col>
            </Row>
            <br />
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
                      <td data-label="Title">CNC Machines</td>
                      <td data-label="Description">
                        complex shapes and parts from various materials.
                      </td>
                      <td data-label="Quantity">50</td>
                      <td data-label="Unit Price">20000</td>
                      <td data-label="Amount">1000000</td>
                      <td data-label="Updated By"></td>
                      <td data-label="Actions">
                        <span className="addline" onClick={() => {
                            setEditLineModal(true);
                          }}>
                          <Icon.Edit2 />
                        </span>
                        <span className="addline" >
                          <Icon.Trash2 />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td data-label="Title">Engines</td>
                      <td data-label="Description">Engines</td>
                      <td data-label="Quantity">60</td>
                      <td data-label="Unit Price">25000</td>
                      <td data-label="Amount">1500000</td>
                      <td data-label="Updated By"></td>
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
                      <Input type="text" name="title" defaultValue="CNC Machines" />
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
                        defaultValue="complex shapes and parts from various materials.	"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label sm="2">Qty</Label>
                    <Col sm="10">
                      <Input type="text" name="quantity" defaultValue="50" />
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
                      <Input type="text" name="unit_price" defaultValue="20000" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label sm="2">Total Price</Label>
                    <Col sm="10">
                      <Input type="text" name="amount" value="1000000" disabled />
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
        </TabContent>
      </ComponentCard>
    </>
  );
};

export default QuotationEdit;
