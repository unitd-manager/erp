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
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const SalesInvoiceEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();
  const [editModal, setEditModal] = useState(false);

  const [editInvoiceItemData, setEditInvoiceItemData] = useState(false);

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/SalesInvoice');
  };

  const invoiceTableColumns = [
    { name: 'Item' },
    { name: 'Quantity' },
    { name: 'Unit Price' },
    { name: 'Total' },
    { name: 'Edit' },
    { name: 'Delete' },
  ];

  const orderItemsTableColumns = [
    { name: 'Item' },
    { name: 'Quantity' },
    { name: 'Unit Price' },
    { name: 'Total' },
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
                <Button className="shadow-none" color="primary">
                  Generate Data
                </Button>
              </Col>

              <Col>
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    navigate('/SalesInvoice');
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
              <Col></Col>

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
          <ComponentCard title="Sales Invoice Details">
            {' '}
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Order Code</Label>
                  <Input type="text" value="OR-100" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Invoice Code</Label>
                  <Input type="text" value="INV/147	" />
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
                  <Label>Invoice Date</Label>
                  <Input type="text" value="2023-09-14" />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Invoice Terms</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      <Modal size="xl" isOpen={editInvoiceItemData}>
        <ModalHeader>
          Create Invoice Item
          <Button
            className="shadow-none"
            color="secondary"
            onClick={() => {
              setEditInvoiceItemData(false);
            }}
          >
            X
          </Button>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Row>
                <Col md="12">
                  <Form>
                    <Row>
                      <Col md="3">
                        <Button className="shadow-none" color="primary" type="button">
                          Add Line Item
                        </Button>
                      </Col>
                      {/* Invoice Detail */}
                      <Row>
                        {/* Description form */}
                        {/* <ComponentCard title="Description">
                      <Editor
                        editorState={paymentTerms}
                        wrapperClassName="demo-wrapper mb-0"
                        editorClassName="demo-editor border mb-4 edi-height"
                        onEditorStateChange={(e) => {
                          handleDataEditor(e, 'payment_terms');
                          setPaymentTerms(e);
                        }}
                      />
                    </ComponentCard> */}
                      </Row>
                      {/* Invoice Item */}
                      <Row>
                        <Col>
                          <table className="lineitem">
                            <thead>
                              <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Description </th>
                                <th scope="col">UoM</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Remarks</th>
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="Item">
                                  <Input value="" type="text" name="item_title" />
                                </td>
                                <td data-label="Description">
                                  <Input value="" type="text" name="description" />
                                </td>
                                <td data-label="UoM">
                                  <Input value="" type="text" name="unit" />
                                </td>
                                <td data-label="Qty">
                                  <Input value="" type="number" name="qty" />
                                </td>
                                <td data-label="Unit Price">
                                  <Input
                                    value=""
                                    onBlur={() => {
                                      //calculateTotal();
                                    }}
                                    type="number"
                                    name="unit_price"
                                  />
                                </td>
                                <td data-label="Total Price">
                                  <Input value="" type="text" name="total_cost" disabled />
                                </td>
                                <td data-label="Remarks">
                                  <Input value="" type="text" name="remarks" />
                                </td>
                                <td data-label="Action">
                                  <div className="anchor">
                                    <span>Clear</span>
                                  </div>
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
                            // setEditInvoiceData(false);
                          }}
                        >
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      <ComponentCard title="Invoice Items">
        <Col>
          <Button
            className="shadow-none"
            color="primary"
            onClick={() => {
              setEditInvoiceItemData(true);
            }}
          >
            Add Items
          </Button>
        </Col>
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
                      <td>CNC Machines</td>
                      <td>50</td>
                      <td>20000</td>
                      <td>1000000 </td>

                      <td>
                        <div className="anchor">
                          <span
                            onClick={() => {
                              setEditModal(true);
                            }}
                          >
                            Edit
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="anchor">
                          <span>Delete</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Machinery</td>
                      <td>50</td>
                      <td>3000</td>
                      <td>150000</td>

                      <td>
                        <div className="anchor">
                          <span
                            onClick={() => {
                              setEditModal(true);
                            }}
                          >
                            Edit
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="anchor">
                          <span>Delete</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Engine</td>
                      <td>50</td>
                      <td>1000</td>
                      <td>50000</td>

                      <td>
                        <div className="anchor">
                          <span
                            onClick={() => {
                              setEditModal(true);
                            }}
                          >
                            Edit
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="anchor">
                          <span>Delete</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  {/* <tbody>
              {itemDetails &&
                itemDetails.map((element) => {
                 
                })}
            </tbody> */}
                </Table>
              </div>
            </div>
            <Modal size="xl" isOpen={editModal}>
              <ModalHeader>
                Edit Invoice Item
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
                  <FormGroup>
                    <Row>
                      <Col md="12">
                        <Form>
                          <Row>
                            <Row>
                              <Col>
                                <table className="lineitem">
                                  <thead>
                                    <tr>
                                      <th scope="col">Item</th>
                                      <th scope="col">Description </th>
                                      <th scope="col">UoM</th>
                                      <th scope="col">Qty</th>
                                      <th scope="col">Unit Price</th>
                                      <th scope="col">Total Price</th>
                                      <th scope="col">Remarks</th>
                                      <th scope="col"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td data-label="Item">
                                        <Input
                                          value="CNC Machines "
                                          type="text"
                                          name="item_title"
                                        />
                                      </td>
                                      <td data-label="Description">
                                        <Input value="" type="text" name="description" />
                                      </td>
                                      <td data-label="UoM">
                                        <Input value="Kgs" type="text" name="unit" />
                                      </td>
                                      <td data-label="Qty">
                                        <Input value="50" type="number" name="qty" />
                                      </td>
                                      <td data-label="Unit Price">
                                        <Input
                                          value="20000"
                                          onBlur={() => {
                                            // calculateTotal();
                                          }}
                                          type="number"
                                          name="unit_price"
                                        />
                                      </td>
                                      <td data-label="Total Price">
                                        <Input
                                          value="1000000"
                                          type="text"
                                          name="total_cost"
                                          disabled
                                        />
                                      </td>
                                      <td data-label="Remarks">
                                        <Input value="" type="text" name="remarks" />
                                      </td>
                                      <td data-label="Action">
                                        <div className="anchor">
                                          <span>Clear</span>
                                        </div>
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
                                  // setEditInvoiceData(false);
                                }}
                              >
                                Cancel
                              </Button>
                            </ModalFooter>
                          </Row>
                        </Form>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              </ModalBody>
            </Modal>
          </Form>
        </Row>
      </ComponentCard>
      <ComponentCard title="Order Items">
        <Row className="border-bottom mb-3">
          <Form>
            <div className="MainDiv">
              <div className="container">
                <Table id="example">
                  <thead>
                    <tr>
                      {orderItemsTableColumns.map((cell) => {
                        return <td key={cell.name}>{cell.name}</td>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CNC Machines </td>
                      <td>50</td>
                      <td>20000</td>
                      <td>1000000</td>
                    </tr>
                    <tr>
                      <td>Machinery </td>
                      <td>50</td>
                      <td>3000</td>
                      <td>150000</td>
                    </tr>
                    <tr>
                      <td>Engine</td>
                      <td>50</td>
                      <td>1000</td>
                      <td>50000</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Form>
        </Row>
      </ComponentCard>
    </>
  );
};

export default SalesInvoiceEdit;
