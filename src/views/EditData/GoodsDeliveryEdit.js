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
  Table,
  TabPane,
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

const GoodsDeliveryEdit = () => {
  const [editModal, setEditModal] = useState(false);
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/GoodsDelivery');
  };
  //setting data in enquiryDetails
  const tabs = [
    { id: '1', name: 'Goods Delivery ' },
    { id: '2', name: 'Attachment' },
  ];

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    setActiveTab(tab);
  };

  const columns1 = [
    { name: 'SN.No' },
    { name: 'Item Title' },
    { name: 'Description' },
    { name: 'Unit' },
    { name: 'quantity' },
    { name: 'Unit Price' },
    { name: 'Total Amount ' },
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
                    navigate('/GoodsDelivery');
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
                      navigate('/GoodsDelivery');
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
          <ComponentCard title="Goods Delivery Details">
            {' '}
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Delivery No.</Label>
                  <Input type="text" value="GDN364" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Order No.</Label>
                  <Input type="text" value="SO2023143" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Date</Label>
                  <Input type="text" value="06/07/2023" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Company</Label>
                  <Input type="text" value="Taj Holding Group" />
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label>Department</Label>
                  <Input type="text" value="Management" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Salesman</Label>
                  <Input type="text" value="Shalu" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Reference</Label>
                  <Input type="text" value="RFQ59565" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Po No. </Label>
                  <Input type="text" value="Po_316497" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Status </Label>
                  <Input type="select" value="">
                    <option selected="selected" value="New">
                      New
                    </option>
                    <option value="Invoiced">Invoiced</option>
                    <option value="Delivered">Delivered</option>
                  </Input>
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
              <Col md="3">
                <FormGroup>
                  <Button className="shadow-none" color="primary">
                    Generate Delivery Item
                  </Button>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Button
                    className="shadow-none"
                    color="primary"
                    onClick={() => {
                      setEditModal(true);
                    }}
                  >
                    Edit
                  </Button>
                </FormGroup>
              </Col>
            </Row>
            <Modal size="xl" isOpen={editModal}>
              <ModalHeader>
                Edit Delivery Items
                <Button
                  className="shadow-none"
                  color="secondary"
                  onClick={() => {
                    setEditModal(false);
                  }}
                >
                  X
                </Button>
              </ModalHeader>
              <ModalBody>
                <Form>
                  <Row>
                    <Col>
                      <table className="lineitem">
                        <thead>
                          <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Description </th>
                            <th scope="col">UoM</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Item">
                              <Input defaultValue="CNC Machines" type="text" name="title" />
                            </td>
                            <td data-label="Description">
                              <Input defaultValue="" type="text" name="description" />
                            </td>
                            <td data-label="UoM">
                              <Input defaultValue="Nos" type="text" name="unit" />
                            </td>
                            <td data-label="Qty">
                              <Input defaultValue="50" type="number" name="quantiy" />
                            </td>
                            <td data-label="Amount">
                              <Input defaultValue="1000000" type="number" name="amount" />
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Item">
                              <Input defaultValue="Machinery" type="text" name="title" />
                            </td>
                            <td data-label="Description">
                              <Input defaultValue="" type="text" name="description" />
                            </td>
                            <td data-label="UoM">
                              <Input defaultValue="Nos" type="text" name="unit" />
                            </td>
                            <td data-label="Qty">
                              <Input defaultValue="30" type="number" name="quantiy" />
                            </td>
                            <td data-label="Amount">
                              <Input defaultValue="30000" type="number" name="amount" />
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Item">
                              <Input defaultValue="Engine" type="text" name="title" />
                            </td>
                            <td data-label="Description">
                              <Input defaultValue="" type="text" name="description" />
                            </td>
                            <td data-label="UoM">
                              <Input defaultValue="Nos" type="text" name="unit" />
                            </td>
                            <td data-label="Qty">
                              <Input defaultValue="50" type="number" name="quantiy" />
                            </td>
                            <td data-label="Amount">
                              <Input defaultValue="1250000" type="number" name="amount" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                  </Row>
                  <ModalFooter>
                    <Button className="shadow-none" color="primary">
                      {' '}
                      Submit{' '}
                    </Button>
                    <Button
                      className="shadow-none"
                      color="secondary"
                      onClick={() => {
                        setEditModal(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Form>
              </ModalBody>
            </Modal>
            <FormGroup>
              <div className="container">
                <Table id="example" className="lineitem border border-secondary rounded">
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
                      <td>cnc machines</td>
                      <td>Nos</td>
                      <td>50</td>
                      <td>20000</td>
                      <td>1000000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Machinery</td>
                      <td></td>
                      <td>Nos</td>
                      <td>30</td>
                      <td>1000</td>
                      <td>30000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Engine</td>
                      <td></td>
                      <td>Nos</td>
                      <td>50</td>
                      <td>25000</td>
                      <td>1250000</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </FormGroup>
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

export default GoodsDeliveryEdit;
