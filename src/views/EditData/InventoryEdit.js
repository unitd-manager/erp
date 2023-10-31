import React from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button,Table } from 'reactstrap';
import { useNavigate,Link } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const InventorytEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Inventory');
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
                    navigate('/Inventory');
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
                      navigate('/Inventory');
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
          <ComponentCard title="Product Details">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Inventory Code</Label>
                  <Input type="text" value="STK-3929" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Product Name</Label>
                  <Input type="text" value="Meter Cover Spindile" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Product Type</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Item Code</Label>
                  <Input type="text" value="02111-10310022" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>UOM</Label>
                  <Input type="text" value="Pcs" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>MOL</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Notes</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
       <Row>
        <Form>
          <ComponentCard title="Stock Details">
            <Row>
              <Col xs="12" md="4">
                <Row>
                  <h5>Total Purchased quantity</h5>
                </Row>
                <span>3000</span>
                <Row></Row>
              </Col>
              <Col xs="12" md="4">
                <Row>
                  <h5>Sold quantity</h5>
                </Row>
                <span>850</span>
                <Row></Row>
              </Col>
              {/* <Col xs="12" md="3">
                  <Row>
                    <h5>Remaining Purchased quantity</h5>
                  </Row>
                  <span>
                    {productQty && productQty.materials_purchased - productQty.materials_used}
                  </span>
                  <Row></Row>
                </Col> */}
              <Col xs="12" md="4">
                <Row>
                  <h5>Available Quantity in Stock</h5>
                </Row>
                <span>2150</span>
                <Row></Row>
              </Col>
            </Row>
          </ComponentCard>
        </Form>
      </Row>
      <div>
        <ComponentCard title="Purchase orders Linked">
          <Table id="example" className="display border border-secondary rounded">
            <thead>
              <tr>
                <td>PO Code</td>
                <td>Date</td>
                <td>Project Title</td>
                <td>Client Name</td>
                <td>Amount</td>
                <td>Qty</td>
                <td>Supplier</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="">Po_197346</Link>
                </td>

                <td>19/07/2023</td>
                <td>Industrial Machineries </td>
                <td>Zain Saudi Arabia</td>
                <td>15000</td>
                <td>100</td>
                <td>Al Asimah Company</td>
              </tr>
              <tr>
                <td>
                  <Link to="">Po_235689</Link>
                </td>

                <td>25/06/2023</td>
                <td>Masonry and Stone Products</td>
                <td>Dallah Al-baraka</td>
                <td>27000</td>
                <td>150</td>
                <td>Al Yamama Company</td>
              </tr>
            </tbody>
          </Table>
        </ComponentCard>

        <ComponentCard title="Projects Linked">
          <Table id="examplepl" className="display border border-secondary rounded">
            <thead>
              <tr>
                <td>Date</td>
                <td>Project Title </td>
                <td>Client Name</td>
                <td>Numbers</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>26/07/2023</td>
                <td>
                  <Link to="">Roofing Materials</Link>
                </td>
                <td>Ikea Saudi Arabia</td>
                <td>50</td>
              </tr>
              <tr>
                <td>15/08/2023</td>
                <td>
                  <Link to="">Building Materials</Link>
                </td>
                <td>Hussein Al Ali Est.</td>
                <td>150</td>
              </tr>
            </tbody>
          </Table>
        </ComponentCard>
      </div>
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

export default InventorytEdit;
