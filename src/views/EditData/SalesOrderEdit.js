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
  NavLink,
  NavItem,
  Nav,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const SalesOrderEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('1');
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/SalesOrder');
  };
  //setting data in enquiryDetails

  const invoiceTableColumns = [
    { name: 'Invoice No' },
    { name: 'Invoice Date' },
    { name: 'Status' },
    { name: 'Amount' },
    { name: 'Due Date' },
  ];

  const receiptTableColumns = [
    { name: 'Invoice No' },
    { name: 'Receipt No' },
    { name: 'Receipt Date' },
    { name: 'Status' },
    { name: 'Mode of Payment' },
    { name: 'Receipt Amount' },
  ];

  const ordersItemTableColumns = [
    { name: 'Order No' },
    { name: 'Item Title' },
    { name: 'Unit' },
    { name: 'Price' },
    { name: 'Quantity' },
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
                    navigate('/SalesOrder');
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
                      navigate('/SalesOrder');
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
          <ComponentCard title="Sales Order Details">
            {' '}
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Order Code<span className="required"> *</span>
                  </Label>
                  <Input type="text" value="SO2023148"></Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Quote Code</Label>
                  <Input type="text" value="VIR/QT/110"></Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Company</Label>
                  <Input type="text" value="Al Azizia Panda United Inc." />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Reference</Label>
                  <Input type="text" value="371952" />
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
                  <Label>Status</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Net Amount</Label>
                  <Input type="text" value="SAR 137.50" />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <ComponentCard title="More Details">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={activeTab === '1' ? 'active' : ''}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  Invoice
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '2' ? 'active' : ''}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  Receipt
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '3' ? 'active' : ''}
                  onClick={() => {
                    toggle('3');
                  }}
                >
                  Order Items
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="p-4" activeTab={activeTab}>
              {/* Description form */}
              <TabPane tabId="1">
                <Row className="border-bottom mb-3">
                  <Form>
                    <div className="MainDiv">
                      <div className="container">
                        <Table id="example">
                          <thead>
                            <tr>
                              {invoiceTableColumns.map((cell) => {
                                return <td key={cell.name}>{cell.name}</td>;
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>INV/001</td>
                              <td>08-08-2023</td>
                              <td>Cancelled</td>
                              <td>100000</td>
                              <td>14-08-2023</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </Form>
                </Row>
              </TabPane>

              {/* attachments */}
              <TabPane tabId="2">
                <Form>
                  <div className="MainDiv">
                    <div className="container">
                      <Table id="example">
                        <thead>
                          <tr>
                            {receiptTableColumns.map((cell) => {
                              return <td key={cell.name}>{cell.name}</td>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>INV/100</td>
                            <td>Rec-222</td>
                            <td>11-08-2023</td>
                            <td>Cancelled</td>
                            <td>Cheque</td>
                            <td>100000</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Form>
              </TabPane>
              {/* ADD NODE */}
              <TabPane tabId="3">
                <Form>
                  <div className="MainDiv">
                    <div className="container">
                      <Table id="example">
                        <thead>
                          <tr>
                            {ordersItemTableColumns.map((cell) => {
                              return <td key={cell.name}>{cell.name}</td>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>OR-110</td>
                            <td>Machinery</td>
                            <td>Nos</td>
                            <td>20000</td>
                            <td>10</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Form>
              </TabPane>
            </TabContent>
          </ComponentCard>
        </FormGroup>
      </Form>
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
    </>
  );
};

export default SalesOrderEdit;
