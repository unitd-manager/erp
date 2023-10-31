import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const JobOrder = () => {
  return (
    <div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="JobOrder List"
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
                <th>Job Order No</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Reference</th>
                <th>Status</th>
                <th>Net Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {' '}
                  <Link to="/JobOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>JBO-01</td>
                <td>05-08-2023</td>
                <td>Saudi Aramco</td>
                <td>REF0011</td>
                <td>new</td>
                <td>20000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {' '}
                  <Link to="/JobOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>JBO-02</td>
                <td>08-08-2023</td>
                <td>Bin Zehefa Est.</td>
                <td>REF0022</td>
                <td>new</td>
                <td>51000</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {' '}
                  <Link to="/JobOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>JBO-03</td>
                <td>08-08-2023</td>
                <td>Zain Saudi Arabia</td>
                <td>REF0032</td>
                <td>new</td>
                <td>44000</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  {' '}
                  <Link to="/JobOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>JBO-04</td>
                <td>18-08-2023</td>
                <td>Sahara Petrochemicals</td>
                <td>REF0055</td>
                <td>new</td>
                <td>34000</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  {' '}
                  <Link to="/JobOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>JBO-05</td>
                <td>19-08-2023</td>
                <td>Sahara Petrochemicals</td>
                <td>REF0035</td>
                <td>new</td>
                <td>46000</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  {' '}
                  <Link to="/JobOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>JBO-06</td>
                <td>29-08-2023</td>
                <td>Hussein Al Ali Est.</td>
                <td>REF0035</td>
                <td>new</td>
                <td>64000</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>
                  {' '}
                  <Link to="/JobOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>JBO-07</td>
                <td>05-09-2023</td>
                <td>Ikea Saudi Arabia</td>
                <td>REF0033</td>
                <td>new</td>
                <td>64500</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>
                  {' '}
                  <Link to="/JobOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>JBO-08</td>
                <td>10-09-2023</td>
                <td>Taj Holding Group	</td>
                <td>REF0044</td>
                <td>new</td>
                <td>72500</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>
                  {' '}
                  <Link to="/JobOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>JBO-09</td>
                <td>13-09-2023</td>
                <td>Zain Saudi Arabia	</td>
                <td>REF0016</td>
                <td>new</td>
                <td>32800</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>
                  {' '}
                  <Link to="/JobOrderEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>JBO-09</td>
                <td>18-09-2023</td>
                <td>Dallah Al-baraka</td>
                <td>REF0066</td>
                <td>new</td>
                <td>22500</td>
              </tr>
            </tbody>
            </CommonTable>
            </div>
    </div>
          
  );
};

export default JobOrder;
