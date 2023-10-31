import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import {  Col, Table, Card, CardTitle, CardBody,Button } from 'reactstrap';


const PurchaseInvoice = () => {
    return (
<Col lg="12">
            <Col className='d-flex' style={{justifyContent:'flex-end'}} xl={3} sm={12}>
            <Link to="/ProjectInvoice
            Details">
              <Button color="primary" className="shadow-none">
                New Invoice
              </Button>
            </Link>
    </Col>

        
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
           Purchase Invoice List
          </CardTitle>
          <CardBody className="">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th> 
                      Edit
                     </th>
                  <th>Invoice</th>
                  <th>Date</th>
                  <th>Project</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Due Date</th>
                  <th>Age</th>
                  <th>Status</th>
                  <th>Type</th>
                  

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td> <Link to='/PurchaseInvoiceEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>VIR/IN/189</td>
                  <td>10/08/2023</td>
                  <td>Building Materials</td>
                  <td>Zain Saudi Arabia</td>
                  <td>15000</td>
                  <td>15/08/2023</td>
                  <td></td>
                  <td></td>
                  
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td> <Link to='/PurchaseInvoiceEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>VIR/IN/188</td>
                  <td>03/08/2023</td>
                  <td>Lumber and Wood Products</td>
                  <td>Al Azizia Panda United Inc.</td>
                  <td>13000</td>
                  <td>10/08/2023</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td> <Link to='/PurchaseInvoiceEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>VIR/IN/187</td>
                  <td>03/08/2023</td>
                  <td>Structural Materials</td>
                  <td>Ikea Saudi Arabia</td>
                  <td>10000</td>
                  <td>10/08/2023</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td> <Link to='/PurchaseInvoiceEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>VIR/IN/185</td>
                  <td>02/08/2023</td>
                  <td>Automotive Parts</td>
                  <td>Taj Holding Group</td>
                  <td>16000</td>
                  <td>08/08/2023</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td> <Link to='/PurchaseInvoiceEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>VIR/IN/184</td>
                  <td>02/08/2023</td>
                  <td>Roofing Materials</td>
                  <td>Saudi Aramco</td>
                  <td>14000</td>
                  <td>09/08/2023</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td> <Link to='/PurchaseInvoiceEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>VIR/IN/183</td>
                  <td>01/08/2023</td>
                  <td>Masonry and Stone Products</td>
                  <td>Dallah Al-baraka</td>
                  <td>13000</td>
                  <td>08/08/2023</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td> <Link to='/PurchaseInvoiceEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>VIR/IN/182</td>
                  <td>30/07/2023</td>
                  <td>Electrical Components</td>
                  <td>Al Azizia Panda United Inc.</td>
                  <td>11000</td>
                  <td>05/08/2023</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td> <Link to='/PurchaseInvoiceEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>VIR/IN/181</td>
                  <td>28/07/2023</td>
                  <td>Roofing Materials</td>
                  <td>Al Azizia Panda United Inc.</td>
                  <td>17000</td>
                  <td>03/08/2023</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td> <Link to='/PurchaseInvoiceEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>VIR/IN/180</td>
                  <td>25/07/2023</td>
                  <td>Automotive Parts</td>
                  <td>Ikea Saudi Arabia</td>
                  <td>18000</td>
                  <td>30/07/2023</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td> <Link to='/PurchaseInvoiceEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>VIR/IN/179</td>
                  <td>24/07/2023</td>
                  <td>Structural Materials</td>
                  <td>Zain Saudi Arabia</td>
                  <td>20000</td>
                  <td>01/08/2023</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>

);
};

export default PurchaseInvoice;
