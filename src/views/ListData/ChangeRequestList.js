import React from 'react';
import * as Icon from 'react-feather';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const ChangeRequest = () => {
  const columns = [
    {
      name: 'id',
      grow: 0,
      wrap: true,
      width: '4%',
    },
    {
      name: 'Edit',
      selector: 'edit',
      cell: () => (
        <Link to="/">
          <Icon.Edit3 />
        </Link>
      ),
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
    },
    {
      name: 'Title',
      selector: 'change_request_title',
      grow: 0,
      wrap: true,
      width: '4%',
    },
    {
      name: 'Project Title',
      selector: 'title',
      grow: 0,
      wrap: true,
      width: '4%',
    },
    {
      name: 'Submission Date',
      selector: 'submission_date',
      grow: 0,
      wrap: true,
      width: '4%',
    },

    {
      name: 'Implementation Date',
      selector: 'proposed_implementation_date 	',
      sortable: true,
      grow: 0,
      wrap: true,
    },
  ];
  return (
    <div className="container pt-xs-25">
      <BreadCrumbs />
      <ToastContainer></ToastContainer>
      <CommonTable
        title="Change Request"
        Button={
          <Link to="/ChangeRequestDetails">
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
          <tr>
            <td>1</td>
            <td>
              <Link to="/ChangeRequestEdit">
                <Icon.Edit2 />
              </Link>
            </td>
            <td>Add Additional Deveoloper</td>
            <td>Roofing Materials</td>
            <td>2023-06-07</td>
            <td>2023-07-05</td>
          </tr>

          <tr>
            <td>2</td>
            <td>
              <Link to="/ChangeRequestEdit">
                <Icon.Edit2 />
              </Link>
            </td>
            <td>Improve the Time Consumption</td>
            <td>Automotive Parts</td>
            <td>2023-06-10</td>
            <td>2023-07-10</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <Link to="/ChangeRequestEdit">
                <Icon.Edit2 />
              </Link>
            </td>
            <td>Upgrade Database System</td>
            <td>Electrical Components</td>
            <td>2023-06-13</td>
            <td>2023-07-13</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <Link to="/ChangeRequestEdit">
                <Icon.Edit2 />
              </Link>
            </td>
            <td>Upgrade Database System</td>
            <td>Structural Materials </td>
            <td>2023-06-15</td>
            <td>2023-07-15</td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <Link to="/ChangeRequestEdit">
                <Icon.Edit2 />
              </Link>
            </td>
            <td>Improve the System Performance</td>
            <td>Building Materials</td>
            <td>2023-06-25</td>
            <td>2023-07-20</td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <Link to="/ChangeRequestEdit">
                <Icon.Edit2 />
              </Link>
            </td>
            <td>Add Additional Developers</td>
            <td>Masonry and Stone Products</td>
            <td>2023-06-28</td>
            <td>2023-07-28</td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <Link to="/ChangeRequestEdit">
                <Icon.Edit2 />
              </Link>
            </td>
            <td>Improve the System Performance</td>
            <td>Electrical Components </td>
            <td>2023-06-30</td>
            <td>2023-07-30</td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <Link to="/ChangeRequestEdit">
                <Icon.Edit2 />
              </Link>
            </td>
            <td>Improve the Time consumption</td>
            <td>Structural Materials</td>
            <td>2023-07-02</td>
            <td>2023-08-05</td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <Link to="/ChangeRequestEdit">
                <Icon.Edit2 />
              </Link>
            </td>
            <td>Add Additional deveoloper</td>
            <td>Automotive Parts</td>
            <td>2023-07-05</td>
            <td>2023-08-05</td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <Link to="/ChangeRequestEdit">
                <Icon.Edit2 />
              </Link>
            </td>
            <td>Upgrade Database System</td>
            <td>Electrical Components</td>
            <td>2023-08-08</td>
            <td>2023-09-08</td>
          </tr>
        </tbody>
      </CommonTable>
    </div>
  );
};
export default ChangeRequest;
