import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';

import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';
import ComponentCard from '../../components/ComponentCard';

// import PdfCreateListReceipt from '../../components/PDF/PdfCreateListReciept';
//geting data from invoice
const SupplierPayments = () => {
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  //Structure of Invoice list view
  const columns = [
    {
      name: '#',
      grow: 0,
      wrap: true,
      width: '4%',
    },

    {
      name: 'Order No',
      selector: 'order_code',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Receipt Code',
      selector: 'receipt_code',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Mode of Payment',
      selector: 'mode_of_payment',
      sortable: true,
      grow: 0,
    },
    {
      name: 'Status',
      selector: 'receipt_status',
      sortable: true,
      grow: 2,
      wrap: true,
    },

    {
      name: 'Amount',
      selector: 'amount',
      sortable: true,
      width: 'auto',
      grow: 3,
    },

    {
      name: 'Date',
      selector: 'receipt_date',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    // {
    //   name: 'Print',
    //   sortable: true,
    //   width: 'auto',
    //   grow: 3,
    // },
  ];

  return (
    <div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />

        <CommonTable
          title="Receipt List"
          Button={
            // Open the modal on button click
            <Button color="primary" className="shadow-none" onClick={toggleModal}>
              Add New
            </Button>
          }
        >
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

              <td>OR-170</td>
              <td>REC-148 </td>
              <td>Cash</td>
              <td>Paid</td>
              <td>12000</td>
              <td>2023-06-06</td>
            </tr>
            <tr>
              <td>2</td>

              <td>OR-169</td>
              <td>REC-130 </td>
              <td>Cheque</td>
              <td>Paid</td>
              <td>23000</td>
              <td>2023-06-09</td>
            </tr>
            <tr>
              <td>3</td>

              <td>OR-168</td>
              <td>REC-124</td>
              <td>Cash</td>
              <td>Paid</td>
              <td>14000</td>
              <td>2023-06-09</td>
            </tr>
            <tr>
              <td>4</td>

              <td>OR-167</td>
              <td>REC-120</td>
              <td>Cash</td>
              <td>Paid</td>
              <td>32000</td>
              <td>2023-06-15</td>
            </tr>
            <tr>
              <td>5</td>

              <td>OR-166</td>
              <td>REC-119</td>
              <td>Cheque</td>
              <td>Paid</td>
              <td>18000</td>
              <td>2023-06-20</td>
            </tr>
            <tr>
              <td>6</td>

              <td>OR-165</td>
              <td>REC-114</td>
              <td>Cash</td>
              <td>Paid</td>
              <td>18000</td>
              <td>2023-06-30</td>
            </tr>
            <tr>
              <td>7</td>

              <td>OR-163</td>
              <td>REC-113</td>
              <td>Cheque</td>
              <td>Paid</td>
              <td>45000</td>
              <td>2023-07-05</td>
            </tr>
            <tr>
              <td>8</td>

              <td>OR-162</td>
              <td>REC-110</td>
              <td>Cash</td>
              <td>Paid</td>
              <td>25000</td>
              <td>2023-07-15</td>
            </tr>
            <tr>
              <td>9</td>

              <td>OR-161</td>
              <td>REC-105</td>
              <td>Cash</td>
              <td>Paid</td>
              <td>15000</td>
              <td>2023-07-25</td>
            </tr>
            <tr>
              <td>10</td>

              <td>OR-160</td>
              <td>REC-100</td>
              <td>Cash</td>
              <td>Paid</td>
              <td>13000</td>
              <td>2023-07-05</td>
            </tr>
          </tbody>
        </CommonTable>
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Add New Receipt</ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                <ComponentCard title="Receipt Details">
                  <Form>
                    <FormGroup>
                      <Row>
                        <Col md="10">
                          <Label>Orders</Label>
                          <Input type="select" name="order_id">
                            <option>Select Customer</option>
                            <option>OR-100</option>
                            <option>OR-101</option>
                            <option>OR-102</option>
                            <option>OR-103</option>
                            <option>OR-104</option>
                            <option>OR-105</option>
                          </Input>
                        </Col>
                        <br />
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                          <Button
                            color="primary"
                            onClick={() => {
                              setSecondModalOpen(true);
                            }}
                            type="button"
                            className="btn mr-2 shadow-none"
                          >
                            Save & Continue
                          </Button>
                          <Button
                            onClick={() => {
                              navigate(-1);
                            }}
                            type="button"
                            className="btn btn-dark shadow-none"
                          >
                            Go to List
                          </Button>
                        </div>
                      </Row>
                    </FormGroup>
                  </Form>
                </ComponentCard>
              </Col>
            </Row>
          </ModalBody>
        </Modal>

        <Modal isOpen={secondModalOpen} toggle={() => setSecondModalOpen(!secondModalOpen)}>
          <ModalHeader toggle={() => setSecondModalOpen(!secondModalOpen)}>
            MakeSupplierPayment
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                <Form>
                  <Row>
                    <Col md="12">
                      <FormGroup check>
                        <Input name="invoice_code" type="checkbox" />
                        <span>INV/148 (150000)</span>
                      </FormGroup>
                    </Col>
                  </Row>

                  <p>No unpaid invoices available.</p>
                  <br></br>
                  {/* { invoiceReceipt && invoiceReceipt.length>0? */}
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Amount</Label>
                        <Input type="text" value="" name="amount" />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label>Date</Label>
                        <Input type="date" name="receipt_date" />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label>
                          {' '}
                          Mode Of Payment <span className="required">*</span>{' '}
                        </Label>
                        <Input type="select" name="mode_of_payment">
                          <option value="" selected="selected">
                            Please Select
                          </option>
                          <option value="cash">Cash</option>
                          <option value="cheque">Cheque</option>
                          <option value="giro">Giro</option>
                        </Input>
                      </FormGroup>
                    </Col>

                    <Col md="12">
                      <FormGroup>
                        <Label>Notes</Label>
                        <Input type="text" name="remarks" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Button type="button" className="btn btn-dark shadow-none">
                      Save
                    </Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};
export default SupplierPayments;
