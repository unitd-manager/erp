import React,{useState} from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button,Nav,
  NavItem,
  NavLink,Tooltip,TabPane,TabContent,Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';

const SalesReturnEdit = () => {
  //navigation and parameters
  const navigate = useNavigate();

  const applyChanges = () => {};
  const backToList = () => {
    navigate('/SalesReturn');
  };

  const [activeTab, setActiveTab] = useState('1');
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleTooltip = () => {
    setTooltipOpen(!tooltipOpen);
  };

  const invoiceTableColumns = [
    { name: 'Item' },
    { name: 'Quantity' },
    { name: 'Unit Price' },
    { name: 'Total' },
    { name: 'Remove' },
  ];

  const returnInvoiceTableColumns = [
    { name: 'Item' },
    { name: 'Quantity' },
    { name: 'Price' },
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
                    navigate('/SalesReturn');
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
          <ComponentCard title="Invoice Details">
            {' '}
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label>Invoice Code</Label>
                  <Input type="text" value="SI220283" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Status</Label>
                  <Input type="text" value="" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Date</Label>
                  <Input type="text" value="10/08/2023" />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      <ComponentCard title="Invoice Items">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === '1' ? 'active' : ''}
              onClick={() => {
                toggle('1');
              }}
              id="invoiceItemLink"
            >
              Invoice Item
            </NavLink>
            <Tooltip
              placement="right"
              isOpen={tooltipOpen}
              target="invoiceItemLink"
              toggle={toggleTooltip}
            >
              Remove the invoice item if you do not wish to return it.
            </Tooltip>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '2' ? 'active' : ''}
              onClick={() => {
                toggle('2');
              }}
            >
              Return History
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
        
              <tr >
               <td>Machinery product</td>
               <td>45	</td>
               <td>2000</td>
                <td>90000</td>
                           
            
                <td>
                  <div className="anchor">
                    <span
                        onClick={() => {
                          console.log("removed");
                      
                          
                        }}
                      >
                      Remove
                    </span>
                  </div>
                </td>
              </tr>
            
      </tbody>
           
          </Table>
        
        </div>
      </div>
     
    </Form>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Form>
      <div className="MainDiv">
        <div className="container">
          <Table id="example">
            <thead>
              <tr>
                {returnInvoiceTableColumns.map((cell) => {
                  return <td key={cell.name}>{cell.name}</td>;
                })}
              </tr>
            </thead>
            <tbody>
        
              <tr >
               <td>Machinery product</td>
               <td>45</td>
               <td>90000</td>
              </tr>
             
      </tbody>
           
          </Table>
        
        </div>
      </div>
     
    </Form>
          </TabPane>
          {/* ADD NODE */}
        </TabContent>
      </ComponentCard>
    </>
  );
};

export default SalesReturnEdit;
