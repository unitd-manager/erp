import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const Quotation = () => {
  return (
    <div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <ToastContainer></ToastContainer>
        <CommonTable
          title="Quotation List"
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
                <th>Quotation No</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Reference</th>
                <th>Enquiry No</th>
                
                <th>Status</th>
                <th>Net Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {' '}
                  <Link to="/QuotationEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>QT2023117</td>
                <td>23/07/2023</td>
                <td>Ikea Saudi Arabia</td>
                <td>729541</td>
                <td>CSE89</td>

                <td></td>
                <td>SAR 137.50</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {' '}
                  <Link to="/QuotationEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>QT2023116</td>
                <td>19/07/2023</td>
                <td>Saudi Aramco</td>
                <td>917354</td>
                <td>CSE95</td>
                

                <td></td>
                <td>SAR 0.00</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {' '}
                  <Link to="/QuotationEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>QT2023115</td>
                <td>06/07/2023</td>
                <td>Al Azizia Panda United Inc.</td>
                <td>371952</td>
                <td>CSE96</td>
                

                <td></td>
                <td>SAR 396.75</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  {' '}
                  <Link to="/QuotationEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>QT2023114</td>
                <td>05/07/2023</td>
                <td>Dallah Al-baraka</td>
                <td>728163</td>
                <td>CSE87</td>
                

                <td></td>
                <td>SAR 68,750.00</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  {' '}
                  <Link to="/QuotationEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>QT2023113</td>
                <td>19/06/2023</td>
                <td>Taj Holding Group</td>
                <td>821963</td>
                <td>CSE94</td>
                

                <td></td>
                <td>SAR 6,612.50</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  {' '}
                  <Link to="/QuotationEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>QT2023112</td>
                <td>09/06/2023</td>
                <td>Zain Saudi Arabia</td>
                <td>789621</td>
                <td>CSE90</td>
                

                <td></td>
                <td>SAR 396.75</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>
                  {' '}
                  <Link to="/QuotationEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>QT2023111</td>
                <td>07/06/2023</td>
                <td>Bin Zehefa Est.</td>
                <td>237815</td>
                <td>CSE91</td>
                

                <td></td>
                <td>SAR 5,502.50</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>
                  {' '}
                  <Link to="/QuotationEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>QT2023110</td>
                <td>01/06/2023</td>
                <td>Saudi Aramco</td>
                <td>525856</td>
                <td>CSE86</td>
                

                <td></td>
                <td>SAR 6,612.50</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>
                  {' '}
                  <Link to="/QuotationEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>QT2023109</td>
                <td>25/05/2023</td>
                <td>Bin Zehefa Est.</td>
                <td>648215</td>
                <td>CSE85</td>
                

                <td></td>
                <td>SAR 0.00</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>
                  {' '}
                  <Link to="/QuotationEdit">
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>QT2023108</td>
                <td>19/07/2023</td>
                <td>Dallah Al-baraka</td>
                <td>414546</td>
                <td>CSE84</td>
                

                <td></td>
                <td>SAR 7500.00</td>
              </tr>
            </tbody>
            </CommonTable>
            </div>
            </div>
  );
};

export default Quotation;
