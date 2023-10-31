import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const Supplier = () => {
  return (
    <div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="Supplier List"
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
                <th>Supplier Name</th>
                <th>Website</th>
                <th>Telephone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {' '}
                  <Link to="/SupplierEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Al Bayan Holding Group</td>
                <td>www.albayanholding.com</td>
                <td>+966 52 741 3296</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {' '}
                  <Link to="/SupplierEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Modern Arab Enterprises Co. Ltd.</td>
                <td>www.modernarabenterprises.com</td>
                <td>+966 21 765 4398</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {' '}
                  <Link to="/SupplierEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Esab Saudi Trading Company</td>
                <td>www.esabtrading.com</td>

                <td>+966 46 852 8109</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  {' '}
                  <Link to="/SupplierEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Al Yamama Company</td>
                <td>www.alyamama.com</td>

                <td>+966 56 789 3214 </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  {' '}
                  <Link to="/SupplierEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Rezayat Trading Company Limited</td>
                <td>www.rezayattrading.com</td>

                <td>+966 41 237 8965 </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  {' '}
                  <Link to="/SupplierEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Assad Said for Contracting Co Ltd</td>
                <td>www.assadsaidcontracting.com</td>
                <td>+966 49 786 5123</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>
                  {' '}
                  <Link to="/SupplierEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Midan Al Barkh Trading Est.</td>
                <td>www.midanalbarkhtrading.com</td>

                <td>+966 60 888 8403</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>
                  {' '}
                  <Link to="/SupplierEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Abdullah Al-Othaim Markets</td>
                <td>www.alothaimmarkets.com</td>

                <td>+966 63 479 8524</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>
                  {' '}
                  <Link to="/SupplierEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Fahad Saleh Al Thwaini Trading Est</td>
                <td>www.fahadsalehtrading.com</td>
                <td>+966 94 176 8523</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>
                  {' '}
                  <Link to="/SupplierEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Al Asimah Company</td>
                <td>www.alasimahcompany.com</td>
                <td>+966 36 754 2891</td>
              </tr>
            </tbody>
</CommonTable>
</div>
</div>
          
  );
};

export default Supplier;
