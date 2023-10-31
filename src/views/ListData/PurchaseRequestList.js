import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Col, Table, Card, CardTitle, CardBody, Button } from 'reactstrap';

const PurchaseRequest = () => {
  return (
    <Col lg="12">
      <Col className="d-flex" style={{ justifyContent: 'flex-end' }} xl={3} sm={12}>
        <Link to="/EnquiryDetails">
          <Button color="primary" className="shadow-none">
            New Request
          </Button>
        </Link>
      </Col>

      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-card-text me-2"> </i>
          Purchase Request List
        </CardTitle>
        <CardBody className="">
          <Table bordered striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>Edit</th>
                <th>Code</th>
                <th>Date</th>
                <th>Delivery Date</th>
                <th>Status</th>
                <th>Product Id</th>
                <th>Department</th>
                <th>Creation Date</th>
                <th>Modification Date</th>
                <th>Created By</th>
                <th>Modified By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {' '}
                  <Link to="/PurchaseRequestEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852147</td>
                <td>19/07/2023</td>
                <td>22/07/2023</td>
                <td></td>
                <td>PROD1021</td>
                <td>PRODUCTION</td>
                <td>19/07/2023</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {' '}
                  <Link to="/PurchaseRequestEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852148</td>
                <td>20/07/2023</td>
                <td>25/07/2023</td>
                <td></td>
                <td>PROD1031</td>
                <td>Management</td>
                <td>20/07/2023</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {' '}
                  <Link to="/PurchaseRequestEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852149</td>
                <td>22/07/2023</td>
                <td>25/07/2023</td>
                <td></td>
                <td>PROD1024</td>
                <td>ENGINEERING</td>
                <td>22/07/2023</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  {' '}
                  <Link to="/PurchaseRequestEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852150</td>
                <td>25/07/2023</td>
                <td>28/07/2023</td>
                <td></td>
                <td>PROD1040</td>
                <td>Management</td>
                <td>25/07/2023</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  {' '}
                  <Link to="/PurchaseRequestEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852151</td>
                <td>27/07/2023</td>
                <td>30/07/2023</td>
                <td></td>
                <td>PROD1055</td>
                <td>HUMAN RESOURCE</td>
                <td>27/07/2023</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  {' '}
                  <Link to="/PurchaseRequestEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852152</td>
                <td>28/07/2023</td>
                <td>30/07/2023</td>
                <td></td>
                <td>PROD1069</td>
                <td>ENGINEERING</td>
                <td>28/07/2023</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>
                  {' '}
                  <Link to="/PurchaseRequestEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852153</td>
                <td>30/07/2023</td>
                <td>02/08/2023</td>
                <td></td>
                <td>PROD1127</td>
                <td>PRODUCTION</td>
                <td>30/07/2023</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>
                  {' '}
                  <Link to="/PurchaseRequestEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852154</td>
                <td>01/08/2023</td>
                <td>03/08/2023</td>
                <td></td>
                <td>PROD1134</td>
                <td>PRODUCTION</td>
                <td>01/08/2023</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>
                  {' '}
                  <Link to="/PurchaseRequestEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852155</td>
                <td>05/08/2023</td>
                <td>08/08/2023</td>
                <td></td>
                <td>PROD1140</td>
                <td>Management</td>
                <td>05/08/2023</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>
                  {' '}
                  <Link to="/PurchaseRequestEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>PR_852156</td>
                <td>08/08/2023</td>
                <td>10/08/2023</td>
                <td></td>
                <td>PROD1135</td>
                <td>ENGINEERING</td>
                <td>08/08/2023</td>
                <td></td>
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

export default PurchaseRequest;
