import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import {  Col, Table, Card, CardTitle, CardBody,Button } from 'reactstrap';


const PurchaseOrder = () => {
    return (
<Col lg="12">
            <Col className='d-flex' style={{justifyContent:'flex-end'}} xl={3} sm={12}>
            <Link to="/PurchaseOrderDetails">
              <Button color="primary" className="shadow-none">
                New Order
              </Button>
            </Link>
    </Col>

        
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Purchase Order List
          </CardTitle>
          <CardBody className="">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th> 
                      Edit
                     </th>
                  <th>Po Code</th>
                  <th>Title</th>
                  <th>Po Value</th>
                  <th>Status</th>
                  <th>Po Date</th>
                  <th>Supplier Invoice Code</th>
                  <th>Creation Date</th>
                  

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td> <Link to='/PurchaseOrderEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>Po_197346</td>
                  <td>Purchase from Al Asimah Company</td>
                  <td>10000</td>
                  <td></td>
                  <td>19/07/2023</td>
                  <td>2023/INV/1010</td>
                  <td>19/07/2023</td>
                  
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td> <Link to='/PurchaseOrderEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>Po_316497</td>
                  <td>Purchase from Esab Saudi Trading Company</td>
                  <td>25000</td>
                  <td></td>
                  <td>15/07/2023</td>
                  <td>2023/INV/1009</td>
                  <td>15/07/2023</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td> <Link to='/PurchaseOrderEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>Po_895623</td>
                  <td>Purchase from Al Bayan Holding Group</td>
                  <td>22000</td>
                  <td></td>
                  <td>06/07/2023</td>
                  <td>2023/INV/1008</td>
                  <td>06/07/2023</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td> <Link to='/PurchaseOrderEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>Po_794613</td>
                  <td>Purchase from Rezayat Trading Company Limited</td>
                  <td>11000</td>
                  <td></td>
                  <td>30/06/2023</td>
                  <td>2023/INV/1007</td>
                  <td>30/06/2023</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td> <Link to='/PurchaseOrderEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>Po_235689</td>
                  <td>Purchase from Al Yamama Company</td>
                  <td>27000</td>
                  <td></td>
                  <td>25/06/2023</td>
                  <td>2023/INV/1006</td>
                  <td>25/06/2023</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td> <Link to='/PurchaseOrderEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>Po_235688</td>
                  <td>Purchase from Assad Said for Contracting Co Ltd</td>
                  <td>23000</td>
                  <td></td>
                  <td>12/06/2023</td>
                  <td>2023/INV/1005</td>
                  <td>12/06/2023</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td> <Link to='/PurchaseOrderEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>Po_235685</td>
                  <td>Purchase from Midan Al Barkh Trading Est.</td>
                  <td>13000</td>
                  <td></td>
                  <td>05/06/2023</td>
                  <td>2023/INV/1004</td>
                  <td>05/06/2023</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td> <Link to='/PurchaseOrderEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>Po_235682</td>
                  <td>Purchase from Fahad Saleh Al Thwaini Trading Est</td>
                  <td>32000</td>
                  <td></td>
                  <td>29/05/2023</td>
                  <td>2023/INV/1003</td>
                  <td>29/05/2023</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td> <Link to='/PurchaseOrderEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>Po_235675</td>
                  <td>Purchase from Abdullah Al-Othaim Markets</td>
                  <td>36000</td>
                  <td></td>
                  <td>14/05/2023</td>
                  <td>2023/INV/1002</td>
                  <td>14/05/2023</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td> <Link to='/PurchaseOrderEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>Po_235672</td>
                  <td>Purchase from Modern Arab Enterprises Co. Ltd.</td>
                  <td>16000</td>
                  <td></td>
                  <td>08/05/2023</td>
                  <td>2023/INV/1001</td>
                  <td>08/05/2023</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>

);
};

export default PurchaseOrder;
