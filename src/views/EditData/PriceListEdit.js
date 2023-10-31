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
  Table,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  TabContent,
  Card,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AsyncSelect from 'react-select/async';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';
import Tab from '../../components/project/Tab';

const PriceListEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('1');
  const [editPlanEditModal, setPlanEditModal] = useState(false);
  const applyChanges = () => {};
  const backToList = () => {
    navigate('/PriceList');
  };
  const [addContactModal, setAddContactModal] = useState(false);
  const addContactToggle = () => {
    setAddContactModal(!addContactModal);
  };

  const tabs = [
    { id: '1', name: 'Price List Item' },
    { id: '2', name: 'Attachment' },
  ];
  const toggle = (tab) => {
    setActiveTab(tab);
  };
  const columns = [
    {
      name: 'id',
      selector: 'price_list_item_id',
      grow: 0,
      wrap: true,
      width: '4%',
    },

    // {
    //   name: 'Del',
    //   selector: 'delete',
    //   cell: () => <Icon.Trash />,
    //   grow: 0,
    //   width: 'auto',
    //   wrap: true,
    // },
    {
      name: 'Name',
      selector: 'title',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'Price',
      selector: 'price',
      sortable: true,
      grow: 0,
    },
    {
      name: 'Unit',
      selector: 'unit',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: 'Action',
      selector: 'edit',
      cell: () => <Icon.Edit2 />,
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
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
                    navigate('/PriceList');
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
                      navigate('/PriceList');
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
          <ComponentCard title="PriceList Details">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Customer Name</Label>
                  <Input type="text" value="Hussein Al Ali Est." />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Effective Date</Label>
                  <Input type="text" value="20/08/2023" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Expiry Date</Label>
                  <Input type="text" value="28/08/2023" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Notes</Label>
                  <Input type="textarea" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Status</Label>
                  <Input type="text" value="" />
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
            <Form>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Button
                      color="primary"
                      className="shadow-none"
                      onClick={addContactToggle.bind(null)}
                    >
                      Add New Item{' '}
                    </Button>
                    <Modal size="lg" isOpen={addContactModal} toggle={addContactToggle.bind(null)}>
                      <ModalHeader toggle={addContactToggle.bind(null)}>New Item </ModalHeader>
                      <ModalBody>
                        <Row>
                          <Row>
                            <Col md="3">
                              <Button className="shadow-none" color="primary" type="button">
                                Add Line Item
                              </Button>
                            </Col>
                          </Row>
                          <Card>
                            <table className="lineitem">
                              <thead>
                                <tr>
                                  <th scope="col">Title </th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Unit </th>

                                  <th scope="col"></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <AsyncSelect />
                                    <Input type="hidden" name="product_id"></Input>
                                    <Input type="hidden" name="title"></Input>
                                  </td>
                                  <td>
                                    <Input type="text" name="price" />
                                  </td>
                                  <td>
                                    <Input type="select" name="unit">
                                      <option defaultValue="selected">Please Select</option>
                                      <option value="KGS">KGS</option>
                                      <option value="PCS">PCS</option>
                                      <option value="EA">EA</option>
                                      <option value="NOS">NOS</option>
                                      <option value="BOX">BOX</option>
                                    </Input>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </Card>
                        </Row>
                      </ModalBody>
                      <ModalFooter>
                        <Button className="shadow-none" color="primary">
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
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Table id="example" className="display border border-secondary rounded">
                  <thead>
                    <tr>
                      {columns.map((cell) => {
                        return <td key={cell.name}>{cell.name}</td>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>

                      {/* <td>
                      <div color="primary" className='anchor'>
                        <span onClick={() => deleteRecord(element.contact_id)}>
                          <Icon.Trash2 />
                        </span>
                      </div>
                    </td>  */}
                      <td>TERMINAL BLOCK, UT 2.5-MT, KNIFE DISCONNECT TB, FOR TEL.JACK</td>
                      <td>50</td>
                      <td>Pcs</td>
                      <td>
                        <div className="anchor">
                          <span
                            onClick={() => {
                              setPlanEditModal(true);
                            }}
                          >
                            <Icon.Edit2 />
                          </span>
                          <span className="addline">
                            <Icon.Trash2 />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>

                      {/* <td>
                      <div color="primary" className='anchor'>
                        <span onClick={() => deleteRecord(element.contact_id)}>
                          <Icon.Trash2 />
                        </span>
                      </div>
                    </td>  */}
                      <td>Shielded fore connector,630A,24KV,Class-CEE KQT-24/630-185</td>
                      <td>200</td>
                      <td>Kgs</td>
                      <td>
                        <div className="anchor">
                          <span
                            onClick={() => {
                              setPlanEditModal(true);
                            }}
                          >
                            <Icon.Edit2 />
                          </span>
                          <span className="addline">
                            <Icon.Trash2 />
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Form>
            <Modal size="lg" isOpen={editPlanEditModal}>
              <ModalHeader>
                PriceDetails
                <Button
                  color="secondary"
                  onClick={() => {
                    setPlanEditModal(false);
                  }}
                >
                  X
                </Button>
              </ModalHeader>

              <ModalBody>
                <Row>
                  <Col md="3" className="mb-4 d-flex justify-content-between"></Col>
                </Row>
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <Label>Product Name</Label>
                      <Input
                        type="text"
                        name="title"
                        Value="TERMINAL BLOCK, UT 2.5-MT, KNIFE DISCONNECT TB, FOR TEL.JACK"
                        disabled
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label>Price</Label>
                      <Input type="text" name="price" value="50" />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label>Unit</Label>
                      <Input type="select" name="unit" value="Pcs">
                        <option defaultValue="selected">Please Select</option>
                        <option value="KGS">KGS</option>
                        <option value="PCS">PCS</option>
                        <option value="EA">EA</option>
                        <option value="NOS">NOS</option>
                        <option value="BOX">BOX</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </ModalBody>

              <ModalFooter>
                <Button color="primary">Submit</Button>
                <Button
                  color="secondary"
                  className="shadow-none"
                  onClick={addContactToggle.bind(null)}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </TabPane>
          {/* Attachment */}
          <TabPane tabId="2">
            <Form>
              <FormGroup>
                <Row>
                  <Col xs="12" md="3" className="mb-3">
                    <Button className="shadow-none" color="primary">
                      <Icon.File className="rounded-circle" width="20" />
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </TabPane>
        </TabContent>
      </ComponentCard>
    </>
  );
};

export default PriceListEdit;
