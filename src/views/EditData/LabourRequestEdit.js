import React, {  useState } from 'react';
import * as Icon from 'react-feather';
import { Row, Col, Button, TabPane, TabContent, Label, Form,FormGroup,Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ComponentCardV2 from '../../components/ComponentCardV2';
import ComponentCard from '../../components/ComponentCard';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import CommonTable from '../../components/CommonTable';

import Tab from '../../components/project/Tab';

const LabourRequestEdit = () => {
  //Const Variables
  const [activeTab, setActiveTab] = useState('1');

  const navigate = useNavigate();

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/LabourRequest');
  };

  // Start for tab refresh navigation #Renuka 1-06-23
  const tabs = [{ id: '1', name: 'Attachment' }];

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
                    navigate('/LabourRequest');
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
                      navigate('/LabourRequest');
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

      <ComponentCard title=" Project Planning Edit">
        <Form>
          <FormGroup>
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Project Nmae</Label>
                  <br />
                  <Input
                    type="text"
                    value="Electrical Components"
                    name="proj_title"
                    disabled
                  />{' '}
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Code</Label>
                  <br />
                  <Input type="text" value="1004" name="project_code" disabled />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Request Date</Label>
                  <Input type="date" value="14-07-2023" name="request_date" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Start Date</Label>
                  <Input type="date" value="15-07-2023" name="request_start_date" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>End Date</Label>
                  <Input type="date" value="25-07-2023" name="request_end_date" />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>Request By</Label>
                  <Input type="text" value="" name="request_by" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Label>Request Urgency</Label>
                <Input type="select" value="" name="request_urgency">
                  <option defaultValue="selected">Please Select</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Input>
              </Col>
              <Col md="4">
                <Label>Request Type</Label>
                <Input type="select" value="" name="request_type">
                  <option defaultValue="selected">Please Select</option>
                  <option value="Skilled">Skilled</option>
                  <option value="UnSkilled">UnSkilled</option>
                  <option value="Temporary">Temporary</option>
                </Input>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>Department</Label>
                  <Input type="text" value="" name="department" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>No Of Employee</Label>
                  <Input type="text" value="" name="no_of_employees" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Job Description</Label>
                  <Input
                  
                    value=""
                    name="job_description"
                    rows="4" // You can adjust the number of rows as needed
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Skills Required</Label>
                  <Input
                  
                    value=""
                    name="skills_required"
                    rows="4" // You can adjust the number of rows as needed
                  />
                </FormGroup>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </ComponentCard>

      {/* Nav tab */}
      <ComponentCard title="More Details">
        <ToastContainer></ToastContainer>

        <Tab toggle={toggle} tabs={tabs} />

        <TabContent className="p-4" activeTab={activeTab}>
          {/* Start Tab Content 10 */}
          <TabPane tabId="1">
            <Row>
              <Col md="10">
                <CommonTable
                  title="Add Employee"
                  Button={
                    <Button color="primary" className="shadow-none">
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
                      <td>Tara</td>
                      <td style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button color="primary" className="shadow-none">
                          {' '}
                          New Timesheet{' '}
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </CommonTable>
              </Col>
              <Col xs="12" md="3" className="mb-3">
                <Button className="shadow-none" color="primary">
                  <Icon.File className="rounded-circle" width="20" />
                </Button>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </ComponentCard>
    </>
  );
};
export default LabourRequestEdit;
