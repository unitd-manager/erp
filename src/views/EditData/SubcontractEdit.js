import React from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const SubcontractEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Subcontract');
  };
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
                    navigate('/Subcontract');
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
                      navigate('/Subcontract');
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
          <ComponentCard title="Subcontract Details">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Name<span className="required"> *</span></Label>
                  <Input type="text" value="Zoofi Tech Company Limited" />
                </FormGroup>
              </Col>
              
              <Col md="4">
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="text" value="admin@zoofitech.com" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Fax</Label>
                  <Input type="text" value="+214587963" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Mobile</Label>
                  <Input type="text" value="+966 12 789 3654" />
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
      <Form>
        <FormGroup>
          <ComponentCard title="Address">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Address 1</Label>
                  <Input type="text" value="Kurias Road,Near Car Showroom" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Address 2</Label>
                  <Input type="text" value="Riyadh" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Country</Label>
                  <Input type="text" value="Saudi Arabia" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Postal Code</Label>
                  <Input type="text" value="11496" />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <ComponentCard title="Work Order Linked">
            <Form>
              <div className="MainDiv">
                <div className="container">
                  <Table id="example" className="display border border-secondary rounded">
                    <thead title=" Work Order Linked ">
                      <tr>
                        <td>Date</td>
                        <td>Project</td>
                        <td>WO Code</td>
                        <td>Amount</td>
                        <td>Status</td>
                        <td>Balance</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2023-08-08</td>
                        <td>Industrial Machineries</td>
                        <td>SUB/WR/14</td>
                        <td>27000</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2023-08-15</td>
                        <td>Electrical Components</td>
                        <td>SUB/WR/19</td>
                        <td>18000</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Form>
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

export default SubcontractEdit;
