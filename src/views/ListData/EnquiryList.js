import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const Enquiry = () => {
  return (
    <div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="Enquiry List"
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
              <th>Enquiry Date</th>
              <th>Enquiry Number</th>
              <th>Customer</th>
              <th>Reference</th>
              <th>Due Date</th>
              <th>Service</th>
              <th>Enquiry Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                {' '}
                <Link to="/EnquiryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>19/07/2023</td>
              <td>CSE97</td>
              <td>Hussein Al Ali Est.</td>
              <td>789456</td>
              <td>19/07/2023</td>
              <td>Project and Maintenance</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                {' '}
                <Link to="/EnquiryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>19/07/2023</td>
              <td>CSE96</td>
              <td>Al Azizia Panda United Inc.</td>
              <td>452186</td>
              <td>19/07/2023</td>
              <td>Maintenance</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                {' '}
                <Link to="/EnquiryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>19/07/2023</td>
              <td>CSE95</td>
              <td>Saudi Aramco</td>
              <td>125478</td>
              <td>23/06/2023</td>
              <td>Maintenance and project</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                {' '}
                <Link to="/EnquiryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>15/06/2023</td>
              <td>CSE94</td>
              <td>Taj Holding Group</td>
              <td>972153</td>
              <td>15/06/2023</td>
              <td>Service Provided</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                {' '}
                <Link to="/EnquiryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>11/05/2023</td>
              <td>CSE92</td>
              <td>Ikea Saudi Arabia</td>
              <td>714563</td>
              <td>30/05/2023</td>
              <td>Service Provided</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>
                {' '}
                <Link to="/EnquiryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>16/05/2023</td>
              <td>CSE91</td>
              <td>Bin Zehefa Est.</td>
              <td>852147</td>
              <td>25/05/2023</td>
              <td>Project and Maintenance</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>
                {' '}
                <Link to="/EnquiryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>20/04/2023</td>
              <td>CSE90</td>
              <td>Zain Saudi Arabia</td>
              <td>785436</td>
              <td>30/04/2023</td>
              <td>Maintenance</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>
                {' '}
                <Link to="/EnquiryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>10/04/2023</td>
              <td>CSE89</td>
              <td>Ikea Saudi Arabia</td>
              <td>127896</td>
              <td>10/04/2023</td>
              <td>Maintenance</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>
                {' '}
                <Link to="/EnquiryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>11/03/2023</td>
              <td>CSE88</td>
              <td>Al Azizia Panda United Inc.</td>
              <td>362745</td>
              <td>30/03/2023</td>
              <td>Maintenance and project	</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>
                {' '}
                <Link to="/EnquiryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>08/03/2023</td>
              <td>CSE87</td>
              <td>Dallah Al-baraka</td>
              <td>549235</td>
              <td>30/03/2023</td>
              <td>Service Provided</td>
              <td></td>
            </tr>
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};

export default Enquiry;
