import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const Proposal = () => {
  return (
    <div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="Proposal List"
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

              <th>Title</th>
              <th>Quote Code</th>
              <th>Company</th>
              <th>Contact</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                {' '}
                <Link to="/ProposalEdit">
                  <Icon.Edit2 />
                </Link>
              </td>

              <td>Industrial Machineries</td>
              <td>VIR/QT/193</td>
              <td>Zain Saudi Arabia</td>
              <td>Hussain</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                {' '}
                <Link to="/ProposalEdit">
                  <Icon.Edit2 />
                </Link>
              </td>

              <td>Structural Materials</td>
              <td>VIR/QT/194</td>
              <td>Taj Holding Group</td>
              <td>Nisha</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                {' '}
                <Link to="/ProposalEdit">
                  <Icon.Edit2 />
                </Link>
              </td>

              <td>Masonry and Stone Products</td>
              <td>VIR/QT/195</td>
              <td>Isam Kabbani & Partners</td>
              <td>Shafa</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                {' '}
                <Link to="/ProposalEdit">
                  <Icon.Edit2 />
                </Link>
              </td>

              <td>Electrical Components</td>
              <td>VIR/QT/195</td>
              <td>Sahara Petrochemicals</td>
              <td>Nisha</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                {' '}
                <Link to="/ProposalEdit">
                  <Icon.Edit2 />
                </Link>
              </td>

              <td>Automotive Parts</td>
              <td>VIR/QT/196</td>
              <td>Saudi Aramco</td>
              <td>Shafa</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>
                {' '}
                <Link to="/ProposalEdit">
                  <Icon.Edit2 />
                </Link>
              </td>

              <td>Roofing Materials</td>
              <td>VIR/QT/197</td>
              <td>Ikea Saudi Arabia</td>
              <td>Shafa</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>
                {' '}
                <Link to="/ProposalEdit">
                  <Icon.Edit2 />
                </Link>
              </td>

              <td>Building Materials</td>
              <td>VIR/QT/198</td>
              <td>Hussein Al Ali Est.</td>
              <td>Shafa</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>
                {' '}
                <Link to="/ProposalEdit">
                  <Icon.Edit2 />
                </Link>
              </td>

              <td>Roofing Materials</td>
              <td>VIR/QT/199</td>
              <td>Zain Saudi Arabia</td>
              <td>Hussain</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>
                {' '}
                <Link to="/ProposalEdit">
                  <Icon.Edit2 />
                </Link>
              </td>

              <td>Electrical Components</td>
              <td>VIR/QT/204</td>
              <td>Isam Kabbani & Partners</td>
              <td>Hussain</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>
                {' '}
                <Link to="/ProposalEdit">
                  <Icon.Edit2 />
                </Link>
              </td>

              <td>Masonry and Stone Products</td>
              <td>VIR/QT/205</td>
              <td>Dallah Al-baraka</td>
              <td>Nisha</td>
              <td></td>
            </tr>
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};

export default Proposal;
