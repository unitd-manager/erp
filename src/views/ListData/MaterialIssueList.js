import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const MaterialIssue = () => {
  return (
    <div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="Material Issue"
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
              <th>Material Code</th>
              <th>Issue Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Link to="/MaterialIssueEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Electrical Components</td>
              <td>MI-001</td>
              <td>14-07-2023</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Link to="/MaterialIssueEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Raw Material</td>
              <td>MI-002</td>
              <td>25-07-2023</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Link to="/MaterialIssueEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Plumbing and Electrical</td>
              <td>MI-003</td>
              <td>28-07-2023</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <Link to="/MaterialIssueEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Industrial Machineries</td>
              <td>MI-004</td>
              <td>05-08-2023</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <Link to="/MaterialIssueEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Masonry and Stone Products</td>
              <td>MI-005</td>
              <td>08-08-2023</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <Link to="/MaterialIssueEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Automotive Parts</td>
              <td>MI-006</td>
              <td>10-08-2023</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <Link to="/MaterialIssueEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Lumber and Wood Products</td>
              <td>MI-007</td>
              <td>13-08-2023</td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <Link to="/MaterialIssueEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Building Materials</td>
              <td>MI-008</td>
              <td>16-08-2023</td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                <Link to="/MaterialIssueEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Roofing Materials	</td>
              <td>MI-009</td>
              <td>19-08-2023</td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <Link to="/MaterialIssueEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>Electrical Components</td>
              <td>MI-010</td>
              <td>25-08-2023</td>
            </tr>
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};

export default MaterialIssue;
