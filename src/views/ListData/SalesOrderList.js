import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Col, Table, Card, CardTitle, CardBody, Button } from 'reactstrap';

const SalesOrder = () => {
  return (
    <Col lg="12">
      <Col className="d-flex" style={{ justifyContent: 'flex-end' }} xl={3} sm={12}>
        <Link to="/SalesOrderDetails">
          <Button color="primary" className="shadow-none">
            New Sales Order
          </Button>
        </Link>
      </Col>

      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-card-text me-2"> </i>
          Sales Order List
        </CardTitle>
        <CardBody className="">
          <Table bordered striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Edit</th>
                <th>Order No</th>
                <th>Quote Code</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Reference</th>

                

                <th>Status</th>
                <th>Net Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {' '}
                  <Link to="/SalesOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>SO2023148 </td>
                <td>VIR/QT/110</td>
                <td>23/07/2023</td>
                <td>Al Azizia Panda United Inc.</td>
                <td>371952</td>

                

                <td></td>
                <td>SAR 137.50</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {' '}
                  <Link to="/SalesOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>SO2023147 </td>
                <td>VIR/QT/109</td>
                <td>18/07/2023</td>
                <td>Zain Saudi Arabia</td>
                <td>728163</td>

                

                <td></td>
                <td>SAR 72.62</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {' '}
                  <Link to="/SalesOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>SO2023146 </td>
                <td>VIR/QT/108</td>
                <td>06/07/2023</td>
                <td>Taj Holding Group</td>
                <td>789621</td>

                

                <td></td>
                <td>SAR 396.75</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  {' '}
                  <Link to="/SalesOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>SO2023145 </td>
                <td>VIR/QT/107</td>
                <td>05/07/2023</td>
                <td>Dallah Al-baraka</td>
                <td>648215</td>

                
                
                <td></td>
                <td>SAR 34,375.00</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  {' '}
                  <Link to="/SalesOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>SO2023144 </td>
                <td>VIR/QT/106</td>
                <td>19/06/2023</td>
                <td>Bin Zehefa Est.</td>
                <td>729541</td>

                

                <td></td>
                <td>SAR 6,612.50</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  {' '}
                  <Link to="/SalesOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>SO2023143</td>
                <td>VIR/QT/105</td>
                <td>09/06/2023</td>
                <td>Taj Holding Group</td>
                <td>728163</td>

                

                <td></td>
                <td>SAR 396.75</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>
                  {' '}
                  <Link to="/SalesOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>SO2023142</td>
                <td>VIR/QT/104</td>
                <td>01/06/2023</td>
                <td>Al Azizia Panda United Inc.</td>
                <td>917354</td>

                

                <td></td>
                <td>SAR 137.50</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>
                  {' '}
                  <Link to="/SalesOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>SO2023141</td>
                <td>VIR/QT/103</td>
                <td>28/05/2023</td>
                <td>Al Azizia Panda United Inc.</td>
                <td>821963</td>

                

                <td></td>
                <td>SAR 137.50</td>
              </tr>

              <tr>
                <th scope="row">9</th>
                <td>
                  {' '}
                  <Link to="/SalesOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>SO2023140</td>
                <td>VIR/QT/102</td>
                <td>18/05/2023</td>
                <td>Bin Zehefa Est.</td>
                <td>525856</td>

                

                <td></td>
                <td>SAR 6,612.50</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>
                  {' '}
                  <Link to="/SalesOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>SO2023139</td>
                <td>VIR/QT/101</td>
                <td>06/07/2023</td>
                <td>Taj Holding Group</td>
                <td>371952</td>

                

                <td></td>
                <td>SAR 396.75</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesOrder;
