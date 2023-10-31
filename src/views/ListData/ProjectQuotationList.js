import React from 'react';
import * as Icon from 'react-feather';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
// import 'datatables.net-buttons/js/buttons.html5';
// import 'datatables.net-buttons/js/buttons.print';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const ProjectQuotation = () => {
  

  

  const columns = [
    {
      name: '#',
      selector: 'project_quote_id',
      grow: 0,
      wrap: true,
      width: '4%',
    },
    {
      name: 'Edit',
      selector: 'edit',
      cell: () => <Icon.Edit2 />,
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
    },
    {
      name: 'Quotation No',
      selector: 'quote_code',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Date',
      selector: 'quote_date',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: 'Customer',
      selector: 'company_name',
      sortable: true,
      grow: 0,
    },
    {
      name: 'Reference',
      selector: 'ref_no_quote',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: 'Enquiry No',
      selector: 'enquiry_code',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
    {
      name: 'Status',
      selector: 'quote_status',
      sortable: true,
      width: 'auto',
    },
    {
        name: 'Net Amount',
        selector: 'total_amount',
        sortable: true,
        width: 'auto',
      },
  ];

  return (
    <div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />
        <CommonTable
          
          title="QuotationList"
          Button={
            <Link to="">
              <Button color="primary" className="shadow-none">
                Add New
              </Button>
            </Link>
          }
        >
          <thead>
            <tr>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            
                  <tr >
                    <td>1</td>
                    <td>
                      <Link to="/ProjectQuotationEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>VIR/PQT/1</td>
                    <td>2023-09-20</td>
                    <td>Dallah Al-baraka</td>
                    <td>RF6688</td>
                    <td>PE92</td>
                    <td></td>
                    <td>22000</td>
                  </tr>
                  <tr >
                    <td>2</td>
                    <td>
                      <Link to="/ProjectQuotationEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>VIR/PQT/2</td>
                    <td>2023-09-10</td>
                    <td>Zain Saudi Arabia</td>
                    <td>RF5088</td>
                    <td>PE94</td>
                    <td></td>
                    <td>24000</td>
                  </tr>
                  <tr >
                    <td>3</td>
                    <td>
                      <Link to="/ProjectQuotationEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>VIR/PQT/3</td>
                    <td>2023-09-08</td>
                    <td>Saudi Aramco	</td>
                    <td>RF5085</td>
                    <td>PE91</td>
                    <td></td>
                    <td>14000</td>
                  </tr>
                  <tr >
                    <td>4</td>
                    <td>
                      <Link to="/ProjectQuotationEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>VIR/PQT/4</td>
                    <td>2023-09-08</td>
                    <td>Al Azizia Panda United Inc.	</td>
                    <td>RF5085</td>
                    <td>PE94</td>
                    <td></td>
                    <td>13000</td>
                  </tr>
                  <tr >
                    <td>5</td>
                    <td>
                      <Link to="/ProjectQuotationEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>VIR/PQT/5</td>
                    <td>2023-09-05</td>
                    <td>Taj Holding Group	</td>
                    <td>RF5086</td>
                    <td>PE90</td>
                    <td></td>
                    <td>55000</td>
                  </tr>
                  <tr >
                    <td>6</td>
                    <td>
                      <Link to="/ProjectQuotationEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>VIR/PQT/6</td>
                    <td>2023-09-02</td>
                    <td>Ikea Saudi Arabia		</td>
                    <td>RF6688</td>
                    <td>PE87</td>
                    <td></td>
                    <td>35000</td>
                  </tr>
                  <tr >
                    <td>7</td>
                    <td>
                      <Link to="/ProjectQuotationEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>VIR/PQT/7</td>
                    <td>2023-09-02</td>
                    <td>Bin Zehefa Est.</td>
                    <td>RF6688</td>
                    <td>PE83</td>
                    <td></td>
                    <td>38000</td>
                  </tr>
                  <tr >
                    <td>8</td>
                    <td>
                      <Link to="/ProjectQuotationEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>VIR/PQT/8</td>
                    <td>2023-09-01</td>
                    <td>Hussein Al Ali Est.	</td>
                    <td>RF5086</td>
                    <td>PE85</td>
                    <td></td>
                    <td>82000</td>
                  </tr>
                  <tr >
                    <td>9</td>
                    <td>
                      <Link to="/ProjectQuotationEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>VIR/PQT/9</td>
                    <td>2023-08-28</td>
                    <td>Dallah Al-baraka</td>
                    <td>RF5085</td>
                    <td>PE88</td>
                    <td></td>
                    <td>62000</td>
                  </tr>
                  <tr >
                    <td>10</td>
                    <td>
                      <Link to="/ProjectQuotationEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>VIR/PQT/10</td>
                    <td>2023-08-18</td>
                    <td>Saudi Aramco</td>
                    <td>RF5045</td>
                    <td>PE98</td>
                    <td></td>
                    <td>44000</td>
                  </tr>
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};

export default ProjectQuotation;
