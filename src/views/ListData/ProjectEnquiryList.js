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

const ProjectEnquiry = () => {
  

  

  const columns = [
    {
      name: '#',
      selector: 'project_enquiry_id',
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
      name: 'Enquiry code',
      selector: 'enquiry_code',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Services',
      selector: 'services',
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
      selector: 'office_ref_no',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: 'Due Date',
      selector: 'project_end_date',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      grow: 2,
      wrap: true,
    },
   
  ];

  return (
    <div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />
        <CommonTable
          
          title="Project Enquiry List"
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
                      <Link to="/ProjectEnquiryEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>PE97</td>
                    <td>Project and Maintenance</td>
                    <td>Hussein Al Ali Est.	</td>
                    <td>789456</td>
                    <td>19/07/2023	</td>
                    <td></td>
                  </tr>
                  <tr >
                    <td>2</td>
                    <td>
                      <Link to="/ProjectEnquiryEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>PE96</td>
                    <td>Maintenance	</td>
                    <td>Al Azizia Panda United Inc.</td>
                    <td>452186</td>
                    <td>19/07/2023	</td>
                    <td></td>
                  </tr>
                  <tr >
                    <td>3</td>
                    <td>
                      <Link to="/ProjectEnquiryEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>PE95</td>
                    <td>Service Provided</td>
                    <td>Saudi Aramco</td>
                    <td>125478</td>
                    <td>23/06/2023</td>
                    <td></td>
                  </tr>
                  <tr >
                    <td>4</td>
                    <td>
                      <Link to="/ProjectEnquiryEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>PE94</td>
                    <td>Maintenance and project</td>
                    <td>Taj Holding Group</td>
                    <td>972153</td>
                    <td>15/06/2023</td>
                    <td></td>
                  </tr>
                  <tr >
                    <td>5</td>
                    <td>
                      <Link to="/ProjectEnquiryEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>PE93</td>
                    <td>Maintenance</td>
                    <td>Ikea Saudi Arabia</td>
                    <td>714563</td>
                    <td>30/05/2023</td>
                    <td></td>
                  </tr>
                  <tr >
                    <td>6</td>
                    <td>
                      <Link to="/ProjectEnquiryEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>PE92</td>
                    <td>Project and Maintenance</td>
                    <td>Bin Zehefa Est.	</td>
                    <td>852147</td>
                    <td>25/05/2023</td>
                    <td></td>
                  </tr>
                  <tr >
                    <td>7</td>
                    <td>
                      <Link to="/ProjectEnquiryEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>PE91</td>
                    <td>Maintenance</td>
                    <td>Ikea Saudi Arabia</td>
                    <td>785436</td>
                    <td>30/04/2023</td>
                    <td></td>
                  </tr>
                  <tr >
                    <td>8</td>
                    <td>
                      <Link to="/ProjectEnquiryEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>PE90</td>
                    <td>Maintenance</td>
                    <td>Ikea Saudi Arabia</td>
                    <td>785436</td>
                    <td>10/04/2023</td>
                    <td></td>
                  </tr>
                  <tr >
                    <td>9</td>
                    <td>
                      <Link to="/ProjectEnquiryEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>PE89</td>
                    <td>Project and Maintenance</td>
                    <td>Al Azizia Panda United Inc.	</td>
                    <td>362745</td>
                    <td>30/03/2023</td>
                    <td></td>
                  </tr>
                  <tr >
                    <td>10</td>
                    <td>
                      <Link to="/ProjectEnquiryEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>PE88</td>
                    <td>Service Provided</td>
                    <td>Dallah Al-baraka</td>
                    <td>362745</td>
                    <td>30/03/2023</td>
                    <td></td>
                  </tr>
                
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};

export default ProjectEnquiry;
