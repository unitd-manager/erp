import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Col, Table, Card, CardTitle, CardBody } from 'reactstrap';

const RequestForQuote = () => {
  return (
    <Col lg="12">
      {/* <Col className="d-flex" style={{ justifyContent: 'flex-end' }} xl={3} sm={12}>
        <Link to="/QuotationDetails">
          <Button color="primary" className="shadow-none">
            New Quotation
          </Button>
        </Link>
      </Col> */}

      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-card-text me-2"> </i>
          Request for Quote
        </CardTitle>
        <CardBody className="">
          <Table bordered striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Edit</th>
                <th>Purchase Request Code</th>
                <th>Title</th>
                <th>Status</th>
                <th>Date Issued</th>
                <th>Due Date</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {' '}
                  <Link to="/RequestForQuoteEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852151</td>
                <td>Purchase from Fahad Saleh Al Thwaini Trading Est</td>
                <td></td>
                <td>27/07/2023</td>
                <td>30/07/2023</td>
                <td>20000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {' '}
                  <Link to="/RequestForQuoteEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852154</td>
                <td>Purchase from Esab Saudi Trading Company</td>
                <td></td>
                <td>30/07/2023</td>
                <td>02/08/2023</td>
                <td>18000</td>

              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {' '}
                  <Link to="/RequestForQuoteEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852150</td>
                <td>Purchase from Al Bayan Holding Group</td>
                <td></td>
                <td>02/08/2023</td>
                <td>04/08/2023</td>
                <td>15000</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  {' '}
                  <Link to="/RequestForQuoteEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852148</td>
                <td>Purchase from Abdullah Al-Othaim Markets</td>
                <td></td>
                <td>02/08/2023</td>
                <td>05/08/2023</td>
                <td>17000</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  {' '}
                  <Link to="/RequestForQuoteEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852149</td>
                <td>Purchase from Al Yamama Company</td>
                <td></td>
                <td>05/08/2023</td>
                <td>06/08/2023</td>
                <td>6000</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  {' '}
                  <Link to="/RequestForQuoteEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852153</td>
                <td>Purchase from Assad Said for Contracting Co Ltd</td>
                <td></td>
                <td>05/08/2023</td>
                <td>06/08/2023</td>
                <td>6000</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>
                  {' '}
                  <Link to="/RequestForQuoteEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852147</td>
                <td>Purchase from Modern Arab Enterprises Co. Ltd.</td>
                <td></td>
                <td>08/08/2023</td>
                <td>10/08/2023</td>
                <td>18000</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>
                  {' '}
                  <Link to="/RequestForQuoteEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852152</td>
                <td>Purchase from Rezayat Trading Company Limited</td>
                <td></td>
                <td>08/08/2023</td>
                <td>10/08/2023</td>
                <td>11000</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>
                  {' '}
                  <Link to="/RequestForQuoteEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852155</td>
                <td>Purchase from Midan Al Barkh Trading Est.</td>
                <td></td>
                <td>10/08/2023</td>
                <td>14/08/2023</td>
                <td>13000</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>
                  {' '}
                  <Link to="/RequestForQuoteEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852156</td>
                <td>Purchase from Al Asimah Company</td>
                <td></td>
                <td>10/08/2023</td>
                <td>14/08/2023</td>
                <td>13000</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RequestForQuote;
