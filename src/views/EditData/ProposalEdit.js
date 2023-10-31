import React, { useState } from 'react';

import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  TabContent,
  TabPane,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import Select from 'react-select';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';
import CommonTable from '../../components/CommonTable';
import Tab from '../../components/project/Tab';

const ProposalEdit = () => {
  const [activeTab, setActiveTab] = useState('1');
  
  const [addCompanyModal, setAddCompanyModal] = useState(false);
  const [addContactModal, setAddContactModal] = useState(false);
  const [chooseEmp, setChooseEmp] = useState(false);
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Proposal');
  };

  const tabs = [
    { id: '1', name: 'Material Needed' },
    { id: '2', name: 'Project Team' },
    { id: '3', name: 'Attachment' },
  ];

  const toggle = (tab) => {
    setActiveTab(tab);
  };
  const addContactToggle = () => {
    setAddContactModal(!addContactModal);
  };
  const addCompanyToggle = () => {
    setAddCompanyModal(!addCompanyModal);
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
  ];

  const Employeecolumns = [
    {
      name: '#',
      grow: 0,
      wrap: true,
      width: '4%',
    },
    {
      name: 'Name',
      selector: 'name',
    },
    {
      name: 'Position',
      selector: 'position',
    },
  ];
  //setting data in enquiryDetails

  return (
    <>
    {/* Proposal Edit Details */}
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
                    navigate('/Proposal');
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
                      navigate('/Proposal');
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
          <ComponentCard title="Proposal Details">
            {' '}
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Quote Code<span className="required"> *</span>
                  </Label>
                  <Input type="text" value="VIR/QT/193" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Title<span className="required"> *</span>
                  </Label>
                  <Input type="text" value="Industrial Machineries" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Company Name (OR)
                    <span
                      className="anchor"
                      onClick={() => {
                        setAddCompanyModal(true);
                      }}
                    >
                      <b>
                        <u>Add New Company</u>
                      </b>
                    </span>
                  </Label>
                  <Input type="text" value="Zain Saudi Arabia">
                    <option value="Zain Saudi Arabia">Please Select</option>

                    <option> Zain Saudi Arabia</option>
                  </Input>
                </FormGroup>
              </Col>
              {/* Add New Company Modal */}
              <Modal size="lg" isOpen={addCompanyModal} toggle={addCompanyToggle.bind(null)}>
                <ModalHeader toggle={addCompanyToggle.bind(null)}>New Company</ModalHeader>
                <ModalBody>
                  <Row>
                    <Col md="12">
                      <Card>
                        <CardBody>
                          <Form>
                            <Row>
                              <Col md="3">
                                <FormGroup>
                                  <Label>
                                    Company Name <span className="required"> *</span>
                                  </Label>
                                  <Input type="text" name="company_name" />
                                </FormGroup>
                              </Col>
                              <Col md="3">
                                <FormGroup>
                                  <Label>Website</Label>
                                  <Input type="text" name="website" />
                                </FormGroup>
                              </Col>
                              <Col md="3">
                                <FormGroup>
                                  <Label>
                                    Main Phone <span className="required"> *</span>
                                  </Label>
                                  <Input type="text" name="phone" />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="3">
                                <FormGroup>
                                  <Label>Main Fax</Label>
                                  <Input type="text" name="fax" />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </CardBody>
                        <CardBody className="bg-light">
                          <CardTitle tag="h4" className="mb-0">
                            Address
                          </CardTitle>
                        </CardBody>
                        <CardBody>
                          <Row>
                            <Col md="3">
                              <FormGroup>
                                <Label>
                                  Address 1<span className="required"> *</span>
                                </Label>
                                <Input type="text" name="address_street" placeholder=" " />
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <FormGroup>
                                <Label>Address 2</Label>
                                <Input type="text" name="address_town" placeholder="" />
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <FormGroup>
                                <Label>
                                  Post Code<span className="required"> *</span>
                                </Label>
                                <Input type="text" name="address_po_code" placeholder="" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="3">
                              <FormGroup>
                                {' '}
                                <Label>
                                  Country<span className="required"> *</span>
                                </Label>
                                <Input type="select" name="address_country">
                                  <option defaultValue="selected" value="">
                                    Please Select
                                  </option>

                                  <option>Argentina</option>
                                  <option>India</option>
                                  <option>China</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <FormGroup>
                                <Label>Supplier Type</Label>
                                <Input
                                  type="select"
                                  name="supplier_type"
                                  
                                >
                                  <option value="" selected="selected">
                                    Please Select
                                  </option>
                                  <option value="2nd middle man">2nd middle man</option>
                                  <option value="3rd middle man">3rd middle man</option>
                                  <option value="Broker">Broker</option>
                                  <option value="Retailer">Retailer</option>
                                  <option value="Wholesaler">Wholesaler</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <FormGroup>
                                <Label>Industry</Label>
                                <Input type="select" name="industry" >
                                  <option value="" selected="selected">
                                    Please Select
                                  </option>
                                  <option value="Creative">Creative</option>
                                  <option value="Education">Education</option>
                                  <option value="Financial">Financial</option>
                                  <option value="Jewellery">Jewellery</option>
                                  <option value="Legal">Legal</option>
                                  <option value="Management">Management</option>
                                  <option value="Media">Media</option>
                                  <option value="Medical">Medical</option>
                                  <option value="Money Exchange">Money Exchange</option>
                                  <option value="Organisation">Organisation</option>
                                  <option value="Others">Others</option>
                                  <option value="Property">Property</option>
                                  <option value="Real Estate">Real Estate</option>
                                  <option value="Retail b2b">Retail b2b</option>
                                  <option value="Retail b2c">Retail b2c</option>
                                  <option value="Service">Service</option>
                                  <option value="Software">Software</option>
                                  <option value="Technology">Technology</option>
                                  <option value="Telecom">Telecom</option>
                                  <option value="Trading">Trading</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </CardBody>
                        <CardBody>
                          <Form>
                            <Row>
                              <Col md="3">
                                <FormGroup>
                                  <Label>Company Size</Label>
                                  <Input
                                    type="select"
                                    name="company_size"
                                    
                                  >
                                    <option value="" selected="selected">
                                      Please Select
                                    </option>
                                    <option value="Large">Large</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Small">Small</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col md="3">
                                <FormGroup>
                                  <Label>Company Source</Label>
                                  <Input type="select" name="source" >
                                    <option value="" selected="selected">
                                      Please Select
                                    </option>
                                    <option value="Agency">Agency</option>
                                    <option value="Direct">Direct</option>
                                    <option value="Referral">Referral</option>
                                  </Input>
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
                  <Button
                    color="primary"
                    className="shadow-none"
                  
                  >
                    Save & Continue
                  </Button>
                  <Button
                    color="secondary"
                    className="shadow-none"
                    onClick={addCompanyToggle.bind(null)}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
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
                  <Input type="text" value="Hussain">
                    <option value="Hussain" selected>
                      Please Select
                    </option>
                  </Input>
                </FormGroup>
              </Col>
              {/* Add New Contact Modal */}
              <Modal size="lg" isOpen={addContactModal} toggle={addContactToggle.bind(null)}>
        <ModalHeader toggle={addContactToggle.bind(null)}>New Contact</ModalHeader>
        <ModalBody>
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="3">
                        <FormGroup>
                          <Label>
                            Title<span className="required"> *</span>
                          </Label>
                          <Input type="select" name="salutation" >
                            <option value="" selected="selected">
                              Please Select
                            </option>
                            <option value="Ms">Ms</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <Label>
                            Name<span className="required"> *</span>
                          </Label>
                          <Input type="text" name="first_name" />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <Label>Email</Label>
                          <Input type="text" name="email"  />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <Label>Position</Label>
                          <Input type="text" name="position"  />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <Label>Department</Label>
                          <Input type="text" name="department"  />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <Label>Phone (Direct)</Label>
                          <Input type="number" name="phone_direct" />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <Label>Fax (Direct)</Label>
                          <Input type="number" name="fax" />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <Label>Mobile</Label>
                          <Input type="number" name="mobile"  />
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
          <Button
            color="primary"
            className="shadow-none"
            
          >
            Submit
          </Button>
          <Button color="secondary" className="shadow-none" onClick={addContactToggle.bind(null)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
              <Col md="3">
                <FormGroup>
                  <Label>Est Start_Date</Label>
                  <Input type="text" value="02/09/2023" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Est End_Date</Label>
                  <Input type="text" value="02/02/2024" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Budget</Label>
                  <Input type="text" value="150000" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Project Manager</Label>
                  <Input type="text" value="Sanjana" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>No of Employees</Label>
                  <Input type="text" value="8" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Description</Label>
                  <Input type="text" value="Proposal" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>
                    {' '}
                    Status <span className="required"> *</span>
                  </Label>
                  <Input
                    value="Waiting for Approval"
                    type="select"
                    
                    name="status"
                  >
                    <option value="">Please Select</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Waiting for Approval">Waiting for Approval</option>
                    <option value="Submitted">Submitted</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Awarded">Awarded</option>
                    <option value="Not Awarded">Not Awarded</option>
                    <option value="Enquiry">Enquiry</option>
                    <option value="Cancelled">Cancelled</option>
                    <option selected="selected" value="Converted to Project">
                      Converted to Project
                    </option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Date <span className="required"> *</span>
                  </Label>
                  <Input
                    type="text"
                    value="22-09-2023"
                    name="proposal_date"
                  />
                </FormGroup>
              </Col>
              </Row>
              <Row>
            
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      {/* More Details and Tabs */}
      <ComponentCard title="More Details">
        <ToastContainer></ToastContainer>

        <Tab toggle={toggle} tabs={tabs} />
        <TabContent className="p-4" activeTab={activeTab}>
          {/* Material Needed Tab */}
          <TabPane tabId="1">
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
                      <td>Steel</td>
                      <td>Need - 10kg</td>
                      <td>10</td>
                      <td>250</td>
                      <td>2500</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
          </TabPane>
          {/* Project Team - Add Employee */}
          <TabPane tabId="2">
          <Row>
              <Row>
                <Col md="10">
                  <CommonTable
                    title="Add Employee"
                    Button={
                      <Button
                        color="primary"
                        className="shadow-none"
                        onClick={() => {
                          setChooseEmp(true);
                        }}
                      >
                        {' '}
                        Choose{' '}
                      </Button>
                    }
                  >
                    <thead>
                      <tr>
                        {Employeecolumns.map((cell) => {
                          return <td key={cell.name}>{cell.name}</td>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mithran</td>
                        <td>
                          Developer
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>David</td>
                        <td>
                          Project Head
                        </td>
                      </tr>
                    </tbody>
                  </CommonTable>
                </Col>
              </Row>
              {/* Choose Employee Modal */}
              <Modal size="s" isOpen={chooseEmp}>
                <ModalHeader>
                  Add Employee
                  <Button
                    color="secondary"
                    onClick={() => {
                      setChooseEmp(false);
                    }}
                  >
                    X
                  </Button>
                </ModalHeader>

                <ModalBody>
                  <Row>
                    <Col>
                      <Button color="primary" className="shadow-none" type="button">
                        Linked Employee
                      </Button>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <table className="lineitem newemp border border-secondary rounded">
                      <thead>
                        <tr>
                          <th scope="col">Employee Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Employee Name">
                            <Select defaultValue="Sana" />

                            <Input value="" type="hidden" name="employee_id"></Input>
                          </td>
                          <td>
                            <Input type="hidden" name="id" defaultValue=""></Input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Row>
                </ModalBody>

                <ModalFooter>
                  <Button color="primary" className="shadow-none">
                    Save
                  </Button>
                  <Button
                    color="secondary"
                    className="shadow-none"
                    onClick={() => {
                      setChooseEmp(false);
                    }}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
              
              
              <Col xs="12" md="3" className="mb-3">
                <Button className="shadow-none" color="primary">
                  <Icon.File className="rounded-circle" width="20" />
                </Button>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
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

export default ProposalEdit;
