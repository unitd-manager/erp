import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const PurchaseReturn = () => {
  return (
    <div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="Purchase Return List"
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
              <th>Purchase No.</th>
              <th>Purchase Invoice Date</th>
              <th>Return Date</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                {' '}
                <Link to="/PurchaseReturnEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>PIC-796 </td>
              <td>2023-08-27</td>
              <td>2023-08-07</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                {' '}
                <Link to="/PurchaseReturnEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>PIC-795 </td>
              <td>2023-09-25</td>
              <td>2023-10-05</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                {' '}
                <Link to="/PurchaseReturnEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>PIC-794</td>
              <td>2023-09-20</td>
              <td>2023-09-25</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                {' '}
                <Link to="/PurchaseReturnEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>PIC-793</td>
              <td>2023-09-25</td>
              <td>2023-09-28</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                {' '}
                <Link to="/PurchaseReturnEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>PIC-792</td>
              <td>2023-09-10</td>
              <td>2023-09-15</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>
                {' '}
                <Link to="/PurchaseReturnEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>PIC-791</td>
              <td>2023-09-05</td>
              <td>2023-09-10</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>
                {' '}
                <Link to="/PurchaseReturnEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>PIC-790</td>
              <td>2023-09-05</td>
              <td>2023-09-12</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>
                {' '}
                <Link to="/PurchaseReturnEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>PIC-789</td>
              <td>2023-09-01</td>
              <td>2023-09-05</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>
                {' '}
                <Link to="/PurchaseReturnEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>PIC-788</td>
              <td>2023-09-20</td>
              <td>2023-09-05</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>
                {' '}
                <Link to="/PurchaseReturnEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>PIC-787</td>
              <td>2023-08-17</td>
              <td>2023-08-25</td>
            </tr>
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};

export default PurchaseReturn;
