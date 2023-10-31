import React, { useState } from 'react';
import {
  TabPane,
  TabContent,
  Col,
  Button,
  Table,
  Row,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Card,
  CardBody,
  
} from 'reactstrap';
import Select from 'react-select';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import Tab from '../../components/project/Tab';
import ComponentCardV2 from '../../components/ComponentCardV2';

const ProjectQuotationEdit = () => {
  const [addLineItemModal, setAddLineItemModal] = useState(false);

  const [viewLineModal, setViewLineModal] = useState(false);
  const [addContactModal, setAddContactModal] = useState(false);

  const [editLineModal, setEditLineModal] = useState(false);
  //const [quoteLine, setQuoteLine] = useState();

  //const [contact, setContact] = useState();
  //   const [addContactModal, setAddContactModal] = useState(false);
  //   const [addCompanyModal, setAddCompanyModal] = useState(false);

  const [activeTab, setActiveTab] = useState('1');

  const navigate = useNavigate();
  const applyChanges = () => {};
  const backToList = () => {
    navigate('/ProjectQuotation');
  };
  const addQuoteItemsToggle = () => {
    setAddLineItemModal(!addLineItemModal);
  };
  const addContactToggle = () => {
    setAddContactModal(!addContactModal);
  };
  const viewLineToggle = () => {
    setViewLineModal(!viewLineModal);
  };
  console.log(viewLineToggle);
  const tabs = [
    { id: '1', name: 'Quotation ' },
    { id: '2', name: 'Attachment' },
  ];
  const toggle = (tab) => {
    setActiveTab(tab);
  };

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
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    navigate('/ProjectQuotation');
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
          <ComponentCard title="Quotation Details" >
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Quotation Number <span className="required"> *</span>
                  </Label>
                  <Input type="text" value="VIR/PQT/1" name="quote_code" disabled />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Date</Label>
                  <Input type="date" value="2023-09-20	" name="quote_date" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Customer</Label>
                  <Input type="select" value="Dallah Al-baraka" name="company_id">
                    <option value="selected">Bin Zehefa Est.</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Contact (OR){' '}
                    <span className="anchor" onClick={addContactToggle.bind(null)}>
                      <b>
                        <u>Add New Contact</u>
                      </b>
                    </span>
                  </Label>
                  <Input type="select" value="" name="contact_id">
                    <option value="" selected>
                      Please Select
                    </option>

                    <Modal size="lg" isOpen={addContactModal} toggle={addContactToggle.bind(null)}>
                      <ModalHeader toggle={addContactToggle.bind(null)}>New Contact</ModalHeader>
                      <ModalBody>
                        <Row>
                          <Col md="12">
                            <Card>
                              <CardBody>
                                <Form>
                                  <Row>
                                    <Col md="4">
                                      <FormGroup>
                                        <Label>
                                          Title<span className="required"> *</span>
                                        </Label>
                                        <Input type="select" name="salutation">
                                          <option value="" selected="selected">
                                            Please Select
                                          </option>
                                          <option value="Ms">Ms</option>
                                          <option value="Mr">Mr</option>
                                          <option value="Mrs">Mrs</option>
                                        </Input>
                                      </FormGroup>
                                    </Col>
                                    <Col md="4">
                                      <FormGroup>
                                        <Label>
                                          Name<span className="required"> *</span>
                                        </Label>
                                        <Input type="text" name="first_name" />
                                      </FormGroup>
                                    </Col>
                                    <Col md="4">
                                      <FormGroup>
                                        <Label>Email</Label>
                                        <Input type="text" name="email" />
                                      </FormGroup>
                                    </Col>
                                    <Col md="4">
                                      <FormGroup>
                                        <Label>Position</Label>
                                        <Input type="text" name="position" />
                                      </FormGroup>
                                    </Col>
                                    <Col md="4">
                                      <FormGroup>
                                        <Label>Department</Label>
                                        <Input type="text" name="department" />
                                      </FormGroup>
                                    </Col>
                                    <Col md="4">
                                      <FormGroup>
                                        <Label>Phone (Direct)</Label>
                                        <Input type="number" name="phone_direct" />
                                      </FormGroup>
                                    </Col>
                                    <Col md="4">
                                      <FormGroup>
                                        <Label>Fax (Direct)</Label>
                                        <Input type="number" name="fax" />
                                      </FormGroup>
                                    </Col>
                                    <Col md="4">
                                      <FormGroup>
                                        <Label>Mobile</Label>
                                        <Input type="number" name="mobile" />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </Form>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" className="shadow-none">
                          Submit
                        </Button>
                        <Button
                          color="secondary"
                          className="shadow-none"
                          onClick={addContactToggle.bind(null)}
                        >
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Reference</Label>
                  <Input type="text" value="RF6688" name="ref_no_quote" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Enquiry Number</Label>
                  <Input type="text" value="PE92" name="enquiry_code" disabled />
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label>Status</Label>
                  <Input type="select" value="" name="quote_status">
                    <option selected="selected" value="New">
                      New
                    </option>
                    <option value="Quoted">Quoted</option>
                    <option value="Awarded">Awarded</option>
                    <option value="Not Awarded">Not Awarded</option>
                    <option value="Cancelled">Cancelled</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Net Total</Label>
                  <Input type="text" value="" name="total_amount" />
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
                      <td data-label="Quantity">10</td>
                      <td data-label="Unit Price">2000</td>
                      <td data-label="Amount">20000</td>
                      <td data-label="Updated By"></td>

                      <td data-label="Actions">
                        <span
                          className="addline"
                          onClick={() => {
                            setEditLineModal(true);
                          }}
                        >
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
            {/* End View Line Item Modal */}
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
                      <Input type="text" name="quantity" defaultValue="10" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label sm="2">UOM</Label>
                    <Col sm="10">
                      <Input type="select" name="unit" defaultValue="Pcs">
                        <option defaultValue="selected">Please Select</option>
                      </Input>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label sm="2">Unit Price</Label>
                    <Col sm="10">
                      <Input type="text" name="unit_price" defaultValue="2000" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Label sm="2">Total Price</Label>
                    <Col sm="10">
                      <Input type="text" name="amount" value="20000" disabled />
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
                              <Button
                                className="shadow-none"
                                color="primary"
                                type="button"
                                
                              >
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
          </TabPane>
        </TabContent>
      </ComponentCard>
    </>
  );
};

export default ProjectQuotationEdit;
