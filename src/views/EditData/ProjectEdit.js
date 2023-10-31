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
  TabContent,
  TabPane,
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
import Tab from '../../components/project/Tab';
import CommonTable from '../../components/CommonTable';

const ProjectEdit = () => {
  const [timesheet, setTimesheet] = useState(false);
  const [chooseEmp, setChooseEmp] = useState(false);
  const [activeTab, setActiveTab] = useState('1');

  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Project');
  };

  const tabs = [{ id: '1', name: 'Attachment' }];

  const toggle = (tab) => {
    setActiveTab(tab);
  };

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
  ];

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
                    navigate('/Project');
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
                      navigate('/Project');
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
          <ComponentCard title="Project Details">
            {' '}
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Title</Label>
                  <Input type="text" value="Industrial Machineries" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Category<span className="required"> *</span>
                  </Label>

                  <Input type="select" name="category" value="Project">
                    <option value="">Please Select</option>
                    <option value="Project">Project</option>
                    <option defaultValue="selected" value="Maintenance">
                      Maintenance
                    </option>
                    <option value="Tenancy Project">Tenancy Project</option>
                    <option value="Tenancy Work">Tenancy Work</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Status</Label>
                  <Input type="select" value="">
                    <option value="">Please Select</option>
                    <option defaultValue="selected" value="WIP">
                      WIP
                    </option>
                    <option value="Billable">Billable</option>
                    <option value="Billed">Billed</option>
                    <option value="Complete">Complete</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Latest">Latest</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Company</Label>
                  <Input type="text" value="Zain Saudi Arabia" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Contact</Label>
                  <Input type="select" name="contact_id" value="Hussain">
                    <option value="selected">Please Select</option>

                    <option>Hussain</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Start Date</Label>
                  <Input type="text" value="10-07-2023" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Estimated Finish Date</Label>
                  <Input type="text" value="10-08-2023" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Description</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Project Manager</Label>
                  <Input type="text" value="Jaffer" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Company</Label>
                  <Input type="select" value="" name="company_invoice">
                    <option defaultValue="selected">Please Select</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      <ComponentCard title="More Details">
        <ToastContainer></ToastContainer>

        {/* Call Modal's */}
        <Tab toggle={toggle} tabs={tabs} />
        {/* Tab 1 */}
        <TabContent className="p-4" activeTab={activeTab}>
          {/* Start Tab Content 1 */}
          <TabPane tabId="1" eventkey="addEmployee">
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
                          <Button color="primary" className="shadow-none">
                            {' '}
                            New Timesheet{' '}
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>David</td>
                        <td>
                          <Button color="primary" className="shadow-none">
                            {' '}
                            New Timesheet{' '}
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </CommonTable>
                </Col>
              </Row>
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
              <Modal size="xl" isOpen={timesheet}>
                <ModalHeader>
                  Add Timesheet
                  <Button
                    color="secondary"
                    onClick={() => {
                      setTimesheet(false);
                    }}
                  >
                    X
                  </Button>
                </ModalHeader>

                <ModalBody>
                  <Row>
                    <Col md="12" className="mb-4">
                      <Row>
                        <Col md="4">Employee Name: Mithran</Col>
                        <Col md="2">Total Cost: </Col>
                        <Col md="2">
                          <FormGroup>
                            <Label>Year: </Label>
                            <Input type="select" name="year" defaultValue="2023">
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md="2">
                          <FormGroup>
                            <Label>Month: </Label>
                            <Input type="select" defaultValue="September" name="month">
                              <option value="1">January</option>
                              <option value="2">February</option>
                              <option value="3">March</option>
                              <option value="4">April</option>
                              <option value="5">May</option>
                              <option value="6">June</option>
                              <option value="7">July</option>
                              <option value="8">August</option>
                              <option value="9">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md="2">
                          <FormGroup>
                            <Label>Timesheet Sign * </Label>
                            <Input type="select" name="month">
                              <option defaultValue="selected">Please Select</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <table className="lineitem" id="myTable">
                    <thead>
                      <tr>
                        <th scope="col" colSpan="2">
                          Normal Rate / HR:
                          <Input
                            type="text"
                            name="normal_hourly_rate"
                            id="totalNormalRate"
                            value=""
                          />
                        </th>
                        <th scope="col" colSpan="2">
                          OT Rate / HR:
                          <Input type="text" name="ot_hourly_rate" id="totalOtRate" value="" />
                        </th>
                        <th scope="col" colSpan="2">
                          PH Rate / HR:
                          <Input type="text" name="ph_hourly_rate" id="totalPhRate" value="" />
                        </th>
                        <th scope="col" colSpan="2">
                          Total Normal HRS:
                          <Input type="text" name="Total_Normal_HRS" disabled value="" />
                        </th>
                        <th scope="col" colSpan="2">
                          Total OT HRS:
                          <Input type="text" name="Total_OT_HRS" disabled value="" />
                        </th>
                        <th scope="col" colSpan="2">
                          Total PH HRS:
                          <Input
                            type="text"
                            name="Total_PH_HRS"
                            disabled
                            // value={salary?.total_ph_hours}
                            value=""
                          />
                        </th>
                        <th scope="col">Normal Rate</th>
                        <th scope="col">OT Rate Row 2</th>
                        <th scope="col">PH Rate Row 3</th>
                        <th scope="col">
                          <Button color="primary">Save</Button>
                        </th>
                      </tr>
                    </thead>
                  </table>

                  <Row>
                    <Col size={1} lg={1} style={{ textAlign: 'center', marginBottom: 20 }}>
                      <br></br>

                      <Input
                        className="mb-1"
                        id="totalNormalHr"
                        name="normal_hours"
                        value=""
                      ></Input>
                      <Input className="mb-1" id="totalOTHr" name="ot_hours"></Input>
                      <Input className="mb-1" id="totalPHHr" name="ph_hours"></Input>
                    </Col>
                  </Row>
                </ModalBody>

                <ModalFooter>
                  <Button
                    color="secondary"
                    className="shadow-none"
                    onClick={() => {
                      setTimesheet(false);
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

          {/* End Tab Content 12 */}
        </TabContent>
      </ComponentCard>
    </>
  );
};

export default ProjectEdit;
