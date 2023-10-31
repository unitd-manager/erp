import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';


const Project = () => {
  return (
    <div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="Project List"
          Button={
            <Button color="primary" className="shadow-none">
              Add New
            </Button>
          }
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Code</th>
              <th>Title</th>
              <th>Company</th>
              <th>Contact</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                {' '}
                <Link to="/ProjectEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>
                {' '}
                <Link to="">
                  <Icon.Trash2 />
                </Link>
              </td>
              <td>1001</td>
              <td>Industrial Machineries</td>
              <td>Zain Saudi Arabia</td>
              <td>Hussain</td>
              <td>Project</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                {' '}
                <Link to="/ProjectEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>
                {' '}
                <Link to="">
                  <Icon.Trash2 />
                </Link>
              </td>
              <td>1002</td>
              <td>Structural Materials</td>
              <td>Taj Holding Group</td>
              <td>Nisha</td>
              <td>Project</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                {' '}
                <Link to="/ProjectEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>
                {' '}
                <Link to="">
                  <Icon.Trash2 />
                </Link>
              </td>
              <td>1003</td>
              <td>Masonry and Stone Products</td>
              <td>Isam Kabbani & Partners</td>
              <td>Shafa</td>
              <td>Project</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                {' '}
                <Link to="/ProjectEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>
                {' '}
                <Link to="">
                  <Icon.Trash2 />
                </Link>
              </td>
              <td>1004</td>
              <td>Electrical Components</td>
              <td>Sahara Petrochemicals</td>
              <td>Nisha</td>
              <td>Maintanance</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                {' '}
                <Link to="/ProjectEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>
                {' '}
                <Link to="">
                  <Icon.Trash2 />
                </Link>
              </td>
              <td>1005</td>
              <td>Automotive Parts</td>
              <td>Saudi Aramco</td>
              <td>Shafa</td>
              <td>Maintanance</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>
                {' '}
                <Link to="/ProjectEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>
                {' '}
                <Link to="">
                  <Icon.Trash2 />
                </Link>
              </td>
              <td>1006</td>
              <td>Roofing Materials</td>
              <td>Ikea Saudi Arabia</td>
              <td>Shafa</td>
              <td>Project</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>
                {' '}
                <Link to="/ProjectEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>
                {' '}
                <Link to="">
                  <Icon.Trash2 />
                </Link>
              </td>
              <td>1007</td>
              <td>Building Materials</td>
              <td>Hussein Al Ali Est.</td>
              <td>Shafa</td>
              <td>Project</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>
                {' '}
                <Link to="/ProjectEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>
                {' '}
                <Link to="">
                  <Icon.Trash2 />
                </Link>
              </td>
              <td>1008</td>
              <td>Roofing Materials</td>
              <td>Zain Saudi Arabia</td>
              <td>Hussain</td>
              <td>Project</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>
                {' '}
                <Link to="/ProjectEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>
                {' '}
                <Link to="">
                  <Icon.Trash2 />
                </Link>
              </td>
              <td>1009</td>
              <td>Electrical Components</td>
              <td>Isam Kabbani & Partners</td>
              <td>Hussain</td>
              <td>Maintanance</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>
                {' '}
                <Link to="/ProjectEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>
                {' '}
                <Link to="">
                  <Icon.Trash2 />
                </Link>
              </td>
              <td>1010</td>
              <td>Masonry and Stone Products</td>
              <td>Dallah Al-baraka</td>
              <td>Nisha</td>
              <td>Maintanance</td>
              <td></td>
            </tr>
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};

export default Project;
