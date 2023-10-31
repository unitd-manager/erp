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
} from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { useNavigate,useParams } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';
import Tab from '../../components/project/Tab';
import AddNote from '../../components/Tender/AddNote';
import ViewNote from '../../components/Tender/ViewNote';

const CustomerEdit = () => {
  const [activeTab, setActiveTab] = useState('1');

  //navigation and parameters
  const navigate = useNavigate();
  const { id } = useParams();

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Customer');
  };

  const tabs = [
    { id: '1', name: 'Contacts Linked' },
    { id: '2', name: 'Invoice Linked' },
    { id: '3', name: 'Add notes' },
    { id: '4', name: 'Attachment' },
  ];

  const columns1 = [
    {
      name: 'id',
    },
    {
      name: 'Edit',
    },
    {
      name: 'Del',
    },
    {
      name: 'Name ',
    },
    {
      name: 'Email',
    },
    {
      name: 'Phone(Direct)',
    },
    {
      name: 'Mobile ',
    },
    {
      name: 'Position ',
    },
    {
      name: 'Dept ',
    },
  ];

  const columns2 = [
    {
      name: 'Invoice Code',
    },
    {
      name: 'Title',
    },
    {
      name: 'Invoice Amount',
    },

    {
      name: 'Invoice Date ',
    },
    {
      name: 'Invoice Due Date ',
    },
    {
      name: 'Status ',
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
                    navigate('/Customer');
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
                      navigate('/Customer');
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
          <ComponentCard title="Customer Details">
            {' '}
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label><span className="required"> *</span>Customer Name</Label>
                  <Input type="text" value="Zain Saudi Arabia" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Phone</Label>
                  <Input type="text" value="8602507976" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Website</Label>
                  <Input type="text" value="www.zainsaudiarabia.com" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="text" value="admin@zainsaudiarabia.com" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Fax</Label>
                  <Input type="text" value="+567890" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Address 1</Label>
                  <Input type="text" value="Kurias Road,Near Car Showroom" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Address 2</Label>
                  <Input type="text" value="Riyadh" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Country</Label>
                  <Input type="select">
                    <option value="" selected>
                      Please Select
                    </option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Status</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Postal Code</Label>
                  <Input type="text" value="11496" />
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
                      <td>
                        <div className="anchor">
                          <span>
                            <Icon.Edit2 />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div color="primary" className="anchor">
                          <span>
                            <Icon.Trash2 />
                          </span>
                        </div>
                      </td>
                      <td>Jamal</td>
                      <td>jamal@zainsaudiarabia.com</td>
                      <td>+966 78 965 4123</td>
                      <td>8652147920</td>
                      <td>HR</td>
                      <td>HR</td>
                    </tr>
                  </tbody>
                </Table>
                <Row>
                  <Col md="3">
                    <FormGroup>
                      <Button color="primary" className="shadow-none">
                        Add New Contact{' '}
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <div className="container">
                <Table id="example" className="display border border-secondary rounded">
                  <thead>
                    <tr>
                      {columns2.map((cell) => {
                        return <td key={cell.name}>{cell.name}</td>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>VIR/IN/115</td>
                      <td>Structural Materials</td>
                      <td>10700</td>
                      <td>2023-08-08</td>
                      <td>2023-09-07</td>
                      <td>Paid</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <AddNote recordId={id} roomName="AccountEdit" />
            <ViewNote recordId={id} roomName="AccountEdit" />
          </TabPane>

          <TabPane tabId="4">
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

export default CustomerEdit;
