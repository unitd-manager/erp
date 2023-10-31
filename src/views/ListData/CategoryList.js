import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Col, Table, Card, CardTitle, CardBody, Button } from 'reactstrap';

const Category = () => {
  return (
    <Col lg="12">
      <Col className="d-flex" style={{ justifyContent: 'flex-end' }} xl={3} sm={12}>
        <Link to="/EnquiryDetails">
          <Button color="primary" className="shadow-none">
            New Category
          </Button>
        </Link>
      </Col>

      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-card-text me-2"> </i>
          Category List
        </CardTitle>
        <CardBody className="">
          <Table bordered striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>Edit</th>
                <th>Title</th>
                <th>Order</th>
                <th>Category Type</th>
                <th>Section</th>
                <th>ID</th>
                <th>Published</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {' '}
                  <Link to="/CategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Automotive and Transport</td>
                <td>5</td>
                <td>Product</td>
                <td>Project</td>
                <td>100</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {' '}
                  <Link to="/CategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Business and Finance</td>
                <td>10</td>
                <td>Product</td>
                <td>Inventory</td>
                <td>99</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {' '}
                  <Link to="/CategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Chemicals and Materials</td>
                <td>20</td>
                <td>Product</td>
                <td>Supplier</td>
                <td>98</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  {' '}
                  <Link to="/CategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Consumer Goods and Services</td>
                <td>12</td>
                <td>Product</td>
                <td>Product</td>
                <td>97</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  {' '}
                  <Link to="/CategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Energy and Natural Resources</td>
                <td>15</td>
                <td>Product</td>
                <td>Inventory</td>
                <td>96</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  {' '}
                  <Link to="/CategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Food and Beverage</td>
                <td>25</td>
                <td>Product</td>
                <td>Project</td>
                <td>95</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>
                  {' '}
                  <Link to="/CategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Healthcare</td>
                <td>25</td>
                <td>Product</td>
                <td>Product</td>
                <td>94</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>
                  {' '}
                  <Link to="/CategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Manufacturing and Construction</td>
                <td>20</td>
                <td>Product</td>
                <td>Project</td>
                <td>93</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>
                  {' '}
                  <Link to="/CategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Pharmaceuticals</td>
                <td>30</td>
                <td>Product</td>
                <td>Supplier</td>
                <td>92</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>
                  {' '}
                  <Link to="/CategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Telecommunications and Computing</td>
                <td>25</td>
                <td>Product</td>
                <td>Supplier</td>
                <td>91</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Category;
