import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Col, Table, Card, CardTitle, CardBody } from 'reactstrap';

const PriceList = () => {
  return (
    <Col lg="12">
      {/* <Col className="d-flex" style={{ justifyContent: 'flex-end' }} xl={3} sm={12}>
        <Link to="/EnquiryDetails">
          <Button color="primary" className="shadow-none">
            New PriceList
          </Button>
        </Link>
      </Col> */}

      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-card-text me-2"> </i>
          Price List
        </CardTitle>
        <CardBody className="">
          <Table bordered striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>Edit</th>
                <th>Customer Name</th>
                <th>Effective Date </th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {' '}
                  <Link to="/PriceListEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Hussein Al Ali Est.</td>
                <td>20/08/2023</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {' '}
                  <Link to="/PriceListEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Sahara Petrochemicals</td>
                <td>10/08/2023</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {' '}
                  <Link to="/PriceListEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Dallah Al-baraka</td>
                <td>30/07/2023</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  {' '}
                  <Link to="/PriceListEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Al Azizia Panda United Inc.</td>
                <td>15/07/2023</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  {' '}
                  <Link to="/PriceListEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Ikea Saudi Arabia</td>
                <td>05/07/2023</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  {' '}
                  <Link to="/PriceListEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Ikea Saudi Arabia</td>
                <td>01/07/2023</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>
                  {' '}
                  <Link to="/PriceListEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Taj Holding Group</td>
                <td>28/06/2023</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>
                  {' '}
                  <Link to="/PriceListEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Zain Saudi Arabia</td>
                <td>20/06/2023</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>
                  {' '}
                  <Link to="/PriceListEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Saudi Aramco</td>
                <td>15/06/2023</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>
                  {' '}
                  <Link to="/PriceListEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Isam Kabbani & Partners</td>
                <td>05/06/2023</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PriceList;
