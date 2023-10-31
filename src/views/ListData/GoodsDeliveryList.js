import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import {  Col, Table, Card, CardTitle, CardBody,Button } from 'reactstrap';


const GoodsDelivery = () => {
    return (
<Col lg="12">
            <Col className='d-flex' style={{justifyContent:'flex-end'}} xl={3} sm={12}>
            <Link to="/GoodsDeliveryDetails">
              <Button color="primary" className="shadow-none">
                New Delivery
              </Button>
            </Link>
    </Col>

        
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
           Goods Delivery
          </CardTitle>
          <CardBody className="">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th> 
                      Edit
                     </th>
                     <th>Delivery No.</th>
                  <th>Order No.</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Department</th>
                  <th>Salesman</th>
                  <th>Reference</th>
                  <th>Po No.</th>
                  <th>Status</th>
                  

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td> <Link to='/GoodsDeliveryEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>GDN364</td>
                  <td>SO2023143 </td>
                  <td>06/07/2023</td>
                  <td>Taj Holding Group</td>
                  <td>Management</td>
                  <td>Shalu</td>
                  <td></td>
                  <td>Po_316497	</td>
                  <td></td>
                  
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td> <Link to='/GoodsDeliveryEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>GDN362</td>
                  <td>SO2023140 </td>
                  <td>30/05/2023</td>
                  <td>Bin Zehefa Est.</td>
                  <td>ENGINEERING</td>
                  <td>Shajith</td>
                  <td>RFQ59565</td>
                  <td>Po_728416	</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td> <Link to='/GoodsDeliveryEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>GDN361</td>
                  <td>SO2023138 </td>
                  <td>30/05/2023</td>
                  <td>Bin Zehefa Est.</td>
                  <td>Accounts</td>
                  <td>Sana</td>
                  <td></td>
                  <td>Po_768793</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td> <Link to='/GoodsDeliveryEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>GDN359</td>
                  <td>SO2023137 </td>
                  <td>24/05/2023</td>
                  <td>Zain Saudi Arabia</td>
                  <td>Management</td>
                  <td>Shalu</td>
                  <td></td>
                  <td>Po_412936</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td> <Link to='/GoodsDeliveryEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>GDN356</td>
                  <td>SO2023135 </td>
                  <td>16/05/2023</td>
                  <td>Isam Kabbani & Partners</td>
                  <td>HUMAN RESOURCE</td>
                  <td>Shalu</td>
                  <td>RFQ554 </td>
                  <td>Po_448217</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td> <Link to='/GoodsDeliveryEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>GDN355</td>
                  <td>SO2023133</td>
                  <td>08/05/2023</td>
                  <td>Taj Holding Group</td>
                  <td>HUMAN RESOURCE</td>
                  <td>Sana</td>
                  <td></td>
                  <td>Po_450780</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td> <Link to='/GoodsDeliveryEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>GDN354</td>
                  <td>SO2023132</td>
                  <td>01/05/2023</td>
                  <td>Bin Zehefa Est.</td>
                  <td>Accounts</td>
                  <td>Shajith</td>
                  <td>RFQ554 </td>
                  <td>Po_210458</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td> <Link to='/GoodsDeliveryEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>GDN353</td>
                  <td>SO2023130</td>
                  <td>15/04/2023</td>
                  <td>Ikea Saudi Arabia</td>
                  <td>Management</td>
                  <td>Sana</td>
                  <td></td>
                  <td>Po_963147</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td> <Link to='/GoodsDeliveryEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>GDN352</td>
                  <td>SO2023125</td>
                  <td>06/04/2023</td>
                  <td>Taj Holding Group</td>
                  <td>ENGINEERING</td>
                  <td>Sana</td>
                  <td></td>
                  <td>Po_321728</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td> <Link to='/GoodsDeliveryEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>GDN350</td>
                  <td>SO2023120</td>
                  <td>30/03/2023</td>
                  <td>Bin Zehefa Est.</td>
                  <td>ENGINEERING</td>
                  <td>Sana</td>
                  <td></td>
                  <td>Po_129734</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>

);
};

export default GoodsDelivery;
