import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';


const Customer = () => {
    return (
<div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="Customer List"
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
                  <th>Flag</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td> <Link to='/CustomerEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                  <td><Icon.Flag /></td>
                  <td>Zain Saudi Arabia</td>
                  <td>zainsaudiarabia@gmail.com</td>
                  <td></td>
                  <td>+966 74 521 9632</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td> <Link to='/CustomerEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td><Icon.Flag /></td>
                  <td>Dallah Al-baraka</td>
                  <td>dallahalbaraka@gmail.com</td>
                  <td></td>
                  <td>+966 98 765 4321</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td> <Link to='/CustomerEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td><Icon.Flag /></td>
                  <td>Bin Zehefa Est.</td>
                  <td>binzehefaest@gmail.com</td>
                  <td></td>
                  <td>+966 85 462 8109</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td> <Link to='/CustomerEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td><Icon.Flag /></td>
                  <td>Al Azizia Panda United Inc.</td>
                  <td>alaziziapandaunited@gmail.com</td>
                  <td></td>
                  <td>+966 93 214 5678 </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td> <Link to='/CustomerEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td><Icon.Flag /></td>
                  <td>Hussein Al Ali Est.</td>
                  <td>husseinalaliest@gmail.com</td>
                  <td></td>
                  <td>+966 78 965 4123</td>
                </tr>
                <tr>
                <th scope="row">6</th>
                  <td> <Link to='/CustomerEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td><Icon.Flag /></td>
                  <td>Saudi Aramco</td>
                  <td>saudiaramco@gmail.com</td>
                  <td></td>
                  <td>+966 97 865 4123</td>
                </tr>
                <tr>
                <th scope="row">7</th>
                  <td> <Link to='/CustomerEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td><Icon.Flag /></td>
                  <td>Isam Kabbani & Partners</td>
                  <td>isamkabbaniandpartners@gmail.com</td>
                  <td></td>
                  <td>+966 88 608 8403</td>
                </tr>
                <tr>
                <th scope="row">8</th>
                  <td> <Link to='/CustomerEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td><Icon.Flag /></td>
                  <td>Sahara Petrochemicals</td>
                  <td>saharapetrochemicals@gmail.com</td>
                  <td></td>
                  <td>+966 85 479 6324</td>
                </tr>
                <tr>
                <th scope="row">9</th>
                  <td> <Link to='/CustomerEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td><Icon.Flag /></td>
                  <td>Ikea Saudi Arabia</td>
                  <td>ikeasaudiarabia@gmail.com</td>
                  <td></td>
                  <td>+966 76 194 8523</td>
                </tr>
                <tr>
                <th scope="row">10</th>
                  <td> <Link to='/CustomerEdit'>
                        <Icon.Edit2 />
                      </Link></td>
                      <td><Icon.Flag /></td>
                  <td>Taj Holding Group</td>
                  <td>tajholdinggroup@gmail.com</td>
                  <td></td>
                  <td>+966 91 754 2836</td>
                </tr>
              </tbody>
</CommonTable>
</div>
</div>

);
};

export default Customer;
