import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Col, Table, Card, CardTitle, CardBody, Button } from 'reactstrap';

const Product = () => {
  return (
    <Col lg="12">
      <Col className="d-flex" style={{ justifyContent: 'flex-end' }} xl={3} sm={12}>
        <Link to="/ProductDetails">
          <Button color="primary" className="shadow-none">
            New Product
          </Button>
        </Link>
      </Col>

      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-card-text me-2"> </i>
          Product List
        </CardTitle>
        <CardBody className="">
          <Table bordered striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Edit</th>
                <th>Item Code</th>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>List Price</th>
                <th>Unit</th>
                <th>Stock</th>
                <th>Updated By</th>
                <th>Published</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {' '}
                  <Link to="/ProductEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PROD1140</td>
                <td>Rotary Actuator</td>
                <td></td>
                <td>26756</td>
                <td>PCS</td>
                <td>50</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {' '}
                  <Link to="/ProductEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PROD1127</td>
                <td>Dump Valve , 3 VDC</td>
                <td></td>
                <td>670</td>
                <td>PCS</td>
                <td>100</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {' '}
                  <Link to="/ProductEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PROD1135</td>
                <td>P1A cylinder 16mm dia and 10mm Stroke</td>
                <td></td>
                <td>2266</td>
                <td>PCS</td>
                <td>70</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  {' '}
                  <Link to="/ProductEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PROD1134</td>
                <td>Series 1 valve, 3/2 way Teflon Valve, 24 VDC</td>
                <td></td>
                <td>15890</td>
                <td>PCS</td>
                <td>40</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  {' '}
                  <Link to="/ProductEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PROD1069</td>
                <td>Parker Single Head BTC pump</td>
                <td></td>
                <td>5840</td>
                <td>PCS</td>
                <td>75</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  {' '}
                  <Link to="/ProductEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PROD1055</td>
                <td>Solenoid Valve Coil 230 VAC</td>
                <td></td>
                <td>658</td>
                <td>EA</td>
                <td>20</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>
                  {' '}
                  <Link to="/ProductEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PROD1024</td>
                <td>Parker Coil ZB09</td>
                <td></td>
                <td>929</td>
                <td>PCS</td>
                <td>45</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>
                  {' '}
                  <Link to="/ProductEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PROD1021</td>
                <td>MDPRO-6-V-FF10</td>
                <td></td>
                <td>4840</td>
                <td>PCS</td>
                <td>70</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>
                  {' '}
                  <Link to="/ProductEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PROD1031</td>
                <td>Pressure Switch - 250 PSI PNP/4-20MA</td>
                <td></td>
                <td>28938</td>
                <td>PCS</td>
                <td>10</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>
                  {' '}
                  <Link to="/ProductEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PROD1089</td>
                <td>Parker Coil, 24 V DC, 304070</td>
                <td></td>
                <td>32</td>
                <td>PCS</td>
                <td>100</td>
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

export default Product;
