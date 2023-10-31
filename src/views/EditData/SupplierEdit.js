import React from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button,Table } from 'reactstrap';
import { useNavigate,Link } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const SupplierEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Supplier');
  };
  //setting data in enquiryDetails
  const supplierTableColumn = [
    {
      name: 'PO Date',
    },
    {
      name: 'PO CODE',
    },
    {
      name: 'PO value',
    },
    {
      name: 'Balance',
    },
    {
      name: 'Payment Status',
    },
    {
      name: 'History',
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
                    navigate('/Supplier');
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
                      navigate('/Supplier');
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
      {/* Supplier Details */}
      <Form>
      <FormGroup>
        <ComponentCard title="Supplier Details">
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>
                  Name <span className="required"> *</span>
                </Label>
                <Input
                  type="text"
                  
                  value="Al Bayan Holding Group"
                  name="company_name"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  
                  value="admin@albayanholding.com"
                  name="email"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Fax</Label>
                <Input
                  type="text"
                  
                  value="+890987"
                  name="fax"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>Mobile</Label>
                <Input
                  type="text"
                  
                  value="+966 52 741 3296"
                  name="mobile"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Status</Label>
                <Input
                  type="select"
                  name="status"
                  
                  value=""
                >
                  <option defaultValue="selected">Please Select</option>
                  <option value="current">Current</option>
                  <option value="old">Old</option>
                  
                </Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>GST NO</Label>
                <Input
                  type="text"
                  
                  value="786954154123752"
                  name="gst_no"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>Payment Details</Label>
                <Input
                  type="text"
                  
                  value="Online transaction"
                  name="payment_details"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Terms</Label>
                <Input
                  type="text"
                  
                  value=""
                  name="terms"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Contact Person</Label>
                <Input
                  type="text"
                  
                  value="Hussain"
                  name="contact_person"
                />
              </FormGroup>
            </Col>
          </Row>
        </ComponentCard>
      </FormGroup>
      <FormGroup>
        <ComponentCard title="Address">
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>Address 1</Label>
                <Input
                  type="text"
                  
                  value="1234 NW Bobcat Lane,"
                  name="address_flat"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Address 2</Label>
                <Input
                  type="text"
                  
                  value="St. Robert"
                  name="address_street"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>State/Zip</Label>
                <Input
                  type="text"
                  
                  value="Missouri"
                  name="address_state"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>Country</Label>
                <Input
                  type="select"
                  name="address_country"
                  
                  value="United States"
                >
                  <option defaultValue="selected">Please Select</option>
                  
                </Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Pin Code</Label>
                <Input
                  type="text"
                  
                  value="65584"
                  name="address_po_code"
                />
              </FormGroup>
            </Col>
          </Row>
        
              {/* <Row>
                <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                  <Button
                    className="shadow-none"
                    onClick={() => {
                      setEditPurchaseOrderLinked(true);
                    }}
                    color="primary"
                  >
                    Make Supplier Payment
                  </Button>
                </div>
              </Row> */}
              
          
        </ComponentCard>
      </FormGroup>
    </Form>
    <ComponentCard title="Purchase Order Linked">
      <Form>
        <div className="MainDiv">
          <div className="container">
            <Table id="example" className="display border border-secondary rounded">
              <thead>
                <tr>
                  {supplierTableColumn.map((cell) => {
                    return <td key={cell.name}>{cell.name}</td>;
                  })}
                </tr>
              </thead>
              <tbody>
                
                      <tr >
                        <td>2023-09-15</td>
                        <td>
                          <Link to="">
                            5065
                          </Link>
                        </td>
                        <td>15000</td>
                        <td>
                          8000
                        </td>
                        <td>Due</td>
                        <td>
                          <Link to="">
                            View History
                          </Link>
                        </td>
                      </tr>
                      <tr >
                        <td>2023-08-10</td>
                        <td>
                          <Link to="">
                            5050
                          </Link>
                        </td>
                        <td>35000</td>
                        <td>
                          18000
                        </td>
                        <td>Due</td>
                        <td>
                          <Link to="">
                            View History
                          </Link>
                        </td>
                      </tr>
                      <tr >
                        <td>2023-08-05</td>
                        <td>
                          <Link to="">
                            4999
                          </Link>
                        </td>
                        <td>25000</td>
                        <td>
                          0
                        </td>
                        <td>Paid</td>
                        <td>
                          <Link to="">
                            View History
                          </Link>
                        </td>
                      </tr>
                    
              </tbody>
            </Table>
          </div>
        </div>
      </Form>
    </ComponentCard>
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

export default SupplierEdit;
