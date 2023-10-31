import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const LabourRequest = () => {
  return (
    <div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="Labour Request"
          Button={
            <Button color="primary" className="shadow-none">
              Add New
            </Button>
          }
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Edit</th>
              <th>Project Name</th>
              <th>Project Code</th>
              <th>Requested Date</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Link to="/LabourRequestEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Electrical Components</td>
              <td>1004</td>
              <td>14-07-2023</td>
              <td>15-07-2023</td>
              <td>25-07-2023</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Link to="/LabourRequestEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Raw Material</td>
              <td>1015</td>
              <td>25-07-2023</td>
              <td>26-07-2023</td>
              <td>05-08-2023</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Link to="/LabourRequestEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Plumbing and Electrical</td>
              <td>1018</td>
              <td>28-07-2023</td>
              <td>29-07-2023</td>
              <td>10-08-2023</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <Link to="/LabourRequestEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Industrial Machineries</td>
              <td>1001</td>
              <td>05-08-2023</td>
              <td>08-08-2023</td>
              <td>15-08-2023</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <Link to="/LabourRequestEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Masonry and Stone Products</td>
              <td>1003</td>
              <td>08-08-2023</td>
              <td>09-08-2023</td>
              <td>18-08-2023</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <Link to="/LabourRequestEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Automotive Parts</td>
              <td>1005</td>
              <td>10-08-2023</td>
              <td>13-08-2023</td>
              <td>23-08-2023</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <Link to="/LabourRequestEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Lumber and Wood Products</td>
              <td>1017</td>
              <td>13-08-2023</td>
              <td>15-08-2023</td>
              <td>25-08-2023</td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <Link to="/LabourRequestEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Building Materials</td>
              <td>1007</td>
              <td>16-08-2023</td>
              <td>18-08-2023</td>
              <td>27-08-2023</td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                <Link to="/LabourRequestEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Roofing Materials	</td>
              <td>1008</td>
              <td>19-08-2023</td>
              <td>20-08-2023</td>
              <td>23-08-2023</td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <Link to="/LabourRequestEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Electrical Components</td>
              <td>1004</td>
              <td>25-08-2023</td>
              <td>26-08-2023</td>
              <td>05-09-2023</td>
            </tr>
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};

export default LabourRequest;
