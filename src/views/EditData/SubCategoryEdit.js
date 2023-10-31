import React from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const SubCategoryEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/SubCategory');
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
                    navigate('/SubCategory');
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
                      navigate('/SubCategory');
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
          <ComponentCard title="Sub Category Details">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Title</Label>
                  <Input type="text" value="Elevators and Escalators" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Category</Label>
                  <Input type="text" value="Automotive and Transport" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Sub Category</Label>
                  <Input type="text" value="Product" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>External Link</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Internal Link</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      <ComponentCard title="Page Meta Data">
        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Page Title</Label>
              <Input value="" type="text" />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Page Description</Label>
              <Input value="" type="textarea" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Page Keywords</Label>
              <Input value="" type="textarea" />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>SEO Title</Label>
              <Input value="" type="text" />
            </FormGroup>
          </Col>
        </Row>
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

export default SubCategoryEdit;
