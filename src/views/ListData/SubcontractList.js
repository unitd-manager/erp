import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const Subcontract = () => {
  return (
<div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="Subcontract List"
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
                <th>Name</th>
                <th>Website</th>
                <th>Telephone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {' '}
                  <Link to="/SubcontractEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Zoofi Tech Company Limited</td>
                <td>www.zoofitech.com</td>
                <td>+966 12 789 3654</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {' '}
                  <Link to="/SubcontractEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Iris Maintenance Technologies</td>
                <td>www.iristechnolies.com</td>
                <td>+966 74 852 9632</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {' '}
                  <Link to="/SubcontractEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Shade Corporation Limited</td>
                <td>www.shadecorporation.com</td>

                <td>+966 64 825 8019</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  {' '}
                  <Link to="/SubcontractEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Al Humaidi Est.</td>
                <td>www.alhumaidiest.com</td>

                <td>+966 32 145 1478 </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  {' '}
                  <Link to="/SubcontractEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Jawaher Metals Factory</td>
                <td>www.jawahermetals.com</td>

                <td>+966 65 891 7531 </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  {' '}
                  <Link to="/SubcontractEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>United Business Group for Contracting</td>
                <td>www.unitedbusinessgroup.com</td>
                <td>+966 32 475 8196</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>
                  {' '}
                  <Link to="/SubcontractEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Ramz Al Awael United Contracting Company</td>
                <td>www.ramzalawaelunited.com</td>

                <td>+966 72 816 9458</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>
                  {' '}
                  <Link to="/SubcontractEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Raytheon Technologies</td>
                <td>www.raytheontechnologies.com</td>

                <td>+966 85 245 7982</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>
                  {' '}
                  <Link to="/SubcontractEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Al-Kuthban Engineering Services</td>
                <td>www.alkuthbanengineering.com</td>
                <td>+966 85 325 9473</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>
                  {' '}
                  <Link to="/SubcontractEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>

                <td>Al Yousuf Enterprises</td>
                <td>www.alyousufenterprises.com</td>
                <td>+966 19 826 5479</td>
              </tr>
            </tbody>
            </CommonTable>
            </div>
    </div>

  );
};

export default Subcontract;
