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
  Table,
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

const PurchaseReturnEdit = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [viewLineModal, setViewLineModal] = useState(false);
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/PurchaseReturn');
  };
  
  const viewLineToggle = () => {
    setViewLineModal(!viewLineModal);
  };
  console.log(viewLineToggle);
  const tabs = [
    { id: '1', name: 'Purchase Return' },
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
                    navigate('/PurchaseReturn');
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
                      navigate('/PurchaseReturn');
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
          <ComponentCard title="Purchase Return Details">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>
                    Purchase Invoice No. <span className="required"> *</span>
                  </Label>
                  <Input type="text" value="PIC-796"></Input>
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>Return Date</Label>
                  <Input type="text" value="2023-08-07"></Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <Label>Status</Label>
                <Input
                  type="select"
                  value=""
                  name=""
                  // Disable if status is "Approved"
                >
                  <option value="Please Select">Please Select</option>
                  <option value="Returned">Returned</option>
                  <option value="Not Returned">Not Returned</option>
                  <option value="Cancelled">Cancelled</option>
                </Input>
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
                      <td data-label="Title">CNC Machines</td>
                      <td data-label="Description">CNC Machines</td>
                      <td data-label="Quantity">10</td>
                      <td data-label="Unit Price">20000</td>
                      <td data-label="Amount">200000</td>
                      <td data-label="Updated By"></td>
                      <td data-label="Actions">
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

export default PurchaseReturnEdit;
