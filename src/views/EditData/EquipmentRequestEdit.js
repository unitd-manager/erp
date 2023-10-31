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
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';
import Tab from '../../components/project/Tab';

const EquipmentRequestEdit = () => {
  const [activeTab, setActiveTab] = useState('1');

  //navigation and parameters
  const navigate = useNavigate();
  

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/EquipmentRequest');
  };

  const tabs = [
    { id: '1', name: 'Equipment Request' },
    { id: '2', name: 'Attachment' },
  ];

  const columns1 = [
    {
      name: '#',
    },
    {
      name: 'Description',
    },
    {
      name: 'Brand',
    },
    {
      name: 'Supplier',
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
                    navigate('/EquipmentRequest');
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
                      navigate('/EquipmentRequest');
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
          <ComponentCard title="Equipment Request Details">
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>
                    Request Code <span className="required"> *</span>
                  </Label>
                  <Input type="text" value="ER-1001" name="equipment_request_code" disabled />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Date</Label>
                  <Input type="text" value="24-07-2023" name="request_date" />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>Shipping Method</Label>
                  <Input type="text" value="" name="shipping_method" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Equipment Request Date</Label>
                  <Input type="text" value="14-07-2023" name="equipment_request_date" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Site Reference</Label>
                  <Input type="text" value="" name="site_reference" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Request By</Label>
                  <Input type="text" value="Sahara Petrochemicals	" name="request_by" />
                </FormGroup>
              </Col>
              <Col md="3">
                <Label>Status</Label>
                <Input
                  type="select"
                  value=""
                  name="material_status"
                  // Disable if status is "Approved"
                >
                  <option value="Please Select">Please Select</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Cancelled">Cancelled</option>
                </Input>
              </Col>
            </Row>

            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Approved By</Label>
                  <Input type="text" value="" name="approved_by" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Approved Date</Label>
                  <Input type="date" value="25/07/2023" name="approved_date" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Payment Terms</Label>
                  <Input
                    type="text"
                    value=""
                    name="payment_terms"
                  />
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
              <Col md="3">
                <FormGroup>
                  <Button color="primary" className="shadow-none">
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
                      <td>CNC Machines</td>
                      <td>Brand</td>
                      <td>complex shapes and parts from various materials.</td>
                      <td>50</td>
                      <td>20000</td>
                      <td>1000000</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
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

export default EquipmentRequestEdit;
