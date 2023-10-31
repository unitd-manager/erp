import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Col, Table, Card, CardTitle, CardBody, Button } from 'reactstrap';

const SubCategory = () => {
  return (
    <Col lg="12">
      <Col className="d-flex" style={{ justifyContent: 'flex-end' }} xl={3} sm={12}>
        <Link to="/SubCategoryDetails">
          <Button color="primary" className="shadow-none">
            New SubCategory
          </Button>
        </Link>
      </Col>

      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-card-text me-2"> </i>
          SubCategory List
        </CardTitle>
        <CardBody className="">
          <Table bordered striped>
            <thead>
              <tr>
                <th>Id</th>
                <th>Edit</th>
                <th>Title</th>
                <th>Order</th>
                <th>SubCat Child Type</th>
                <th>Section</th>
                <th>Category</th>
                <th>ID</th>
                <th>Published</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {' '}
                  <Link to="/SubCategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Elevators and Escalators</td>
                <td>5</td>
                <td>Product</td>
                <td>Project</td>
                <td>Automotive and Transport</td>
                <td>50</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {' '}
                  <Link to="/SubCategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Baby and Child Products</td>
                <td>10</td>
                <td>Product</td>
                <td>Inventory</td>
                <td>Consumer Goods and Services</td>
                <td>49</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {' '}
                  <Link to="/SubCategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Computer Accessories</td>
                <td>20</td>
                <td>Product</td>
                <td>Supplier</td>
                <td>Consumer Goods and Services</td>
                <td>48</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  {' '}
                  <Link to="/SubCategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Biomaterials</td>
                <td>12</td>
                <td>Product</td>
                <td>Product</td>
                <td>Healthcare</td>
                <td>47</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  {' '}
                  <Link to="/SubCategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Residential Construction</td>
                <td>15</td>
                <td>Product</td>
                <td>Inventory</td>
                <td>Manufacturing and Construction</td>
                <td>46</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  {' '}
                  <Link to="/SubCategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Ceramics</td>
                <td>25</td>
                <td>Product</td>
                <td>Project</td>
                <td>Chemicals and Materials</td>
                <td>45</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>
                  {' '}
                  <Link to="/SubCategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Hair Care Chemicals</td>
                <td>25</td>
                <td>Product</td>
                <td>Product</td>
                <td>Chemicals and Materials</td>
                <td>44</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>
                  {' '}
                  <Link to="/SubCategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Electricity</td>
                <td>20</td>
                <td>Product</td>
                <td>Project</td>
                <td>Energy and Natural Resources</td>
                <td>43</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>
                  {' '}
                  <Link to="/SubCategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Biometrics</td>
                <td>30</td>
                <td>Product</td>
                <td>Supplier</td>
                <td>Telecommunications and Computing</td>
                <td>42</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>
                  {' '}
                  <Link to="/SubCategoryEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>Video Surveillance</td>
                <td>25</td>
                <td>Product</td>
                <td>Supplier</td>
                <td>Telecommunications and Computing</td>
                <td>41</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SubCategory;
