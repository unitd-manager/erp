import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';


const Task = () => {
    return (
<div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="Task List"
          Button={
            <Button color="primary" className="shadow-none">
              Add New
            </Button>
          }
        >
              <thead>
                <tr>
                  <th>Id</th>
                  <th> 
                      Edit
                     </th>
                  <th>Title</th>
                  <th>Staff</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Actual Complete Date</th>
                  <th>Status</th>
                  

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td> <Link to='/TaskEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td>Industrial Machineries</td>
                  <td>Rehan</td>
                  <td>03/07/2023</td>
                  <td>03/08/2023</td>
                  <td>05/08/2023</td>
                  <td></td>
                  
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td> <Link to='/TaskEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>Electrical Components</td>
                  <td>Sana</td>
                  <td>01/07/2023</td>
                  <td>25/07/2023</td>
                  <td>28/07/2023</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td> <Link to='/TaskEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>Building Materials</td>
                  <td>Sameer</td>
                  <td>22/06/2023</td>
                  <td>10/07/2023</td>
                  <td>15/07/2023</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td> <Link to='/TaskEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>Masonry and Stone Products</td>
                  <td>Ayesha</td>
                  <td>22/06/2023</td>
                  <td>10/07/2023</td>
                  <td>15/07/2023</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td> <Link to='/TaskEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>Automotive Parts</td>
                  <td>Sana</td>
                  <td>21/06/2023</td>
                  <td>25/07/2023</td>
                  <td>28/07/2023</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td> <Link to='/TaskEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>Structural Materials</td>
                  <td>Rehan</td>
                  <td>10/06/2023</td>
                  <td>20/06/2023</td>
                  <td>23/06/2023</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td> <Link to='/TaskEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>Structural Materials</td>
                      <td>Ayesha</td>
                  <td>08/06/2023</td>
                  <td>15/06/2023</td>
                  <td>15/06/2023</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td> <Link to='/TaskEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>Structural Materials</td>
                      <td>Sana</td>
                  <td>08/06/2023</td>
                  <td>15/06/2023</td>
                  <td>15/06/2023</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td> <Link to='/TaskEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>Electrical Components</td>
                      <td>Rehan</td>
                  <td>01/06/2023</td>
                  <td>10/06/2023</td>
                  <td>13/06/2023</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td> <Link to='/TaskEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td>Structural Materials</td>
                      <td>Sameer</td>
                  <td>25/05/2023</td>
                  <td>10/06/2023</td>
                  <td>13/06/2023</td>
                </tr>
              </tbody>
              </CommonTable>
              </div>
    </div>
);
};

export default Task;
