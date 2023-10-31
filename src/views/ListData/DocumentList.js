import React  from 'react';
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

const Document = () => {
  
  
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
      name: 'DOC Code',
      selector: 'document_code',
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
        name: 'Project Start Date',
        selector: 'start_date',
        sortable: true,
        grow: 0,
        wrap: true,
      },
    {
      name: 'Quote Status',
      selector: 'quote_status',
      grow: 0,
      wrap: true,
      width: '4%',
    },

    {
      name: 'Budget',
      selector: 'budget_inhouse 	',
      sortable: true,
      grow: 0,
      wrap: true,
    },
      {
        name: 'Project End Date',
        selector: 'estimated_finish_date',
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
        
        title="Document"
        Button={
          <Link to="/DocumentDetails">
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
                    <Link to="/DocumentEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>DOC-501</td>
                  <td>Roofing Materials</td>
                  <td>2023-06-07</td>
                  <td>new</td>
                  <td>40000</td>
                  <td>2023-07-07</td>
                </tr>

                <tr >
                  <td>2</td>
                  <td>
                    <Link to="/DocumentEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>DOC-502</td>
                  <td>Automotive Parts</td>
                  <td>2023-06-10</td>
                  <td>new</td>
                  <td>32000</td>
                  <td>2023-06-30</td>
                </tr>
                <tr >
                  <td>3</td>
                  <td>
                    <Link to="/DocumentEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>DOC-503</td>
                  <td>Electrical Components</td>
                  <td>2023-06-13</td>
                  <td>new</td>
                  <td>37000</td>
                  <td>2023-07-05</td>
                </tr>
                <tr >
                  <td>4</td>
                  <td>
                    <Link to="/DocumentEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>DOC-504</td>
                  <td>Structural Materials	</td>
                  <td>2023-06-15</td>
                  <td>new</td>
                  <td>27000</td>
                  <td>2023-07-15</td>
                </tr>
                <tr >
                  <td>5</td>
                  <td>
                    <Link to="/DocumentEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>DOC-505</td>
                  <td>Building Materials</td>
                  <td>2023-06-25</td>
                  <td>new</td>
                  <td>47000</td>
                  <td>2023-07-25</td>
                </tr>
                <tr >
                  <td>6</td>
                  <td>
                    <Link to="/DocumentEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>DOC-506</td>
                  <td>Masonry and Stone Products</td>
                  <td>2023-06-28</td>
                  <td>new</td>
                  <td>37000</td>
                  <td>2023-07-28</td>
                </tr>
                <tr >
                  <td>7</td>
                  <td>
                    <Link to="/DocumentEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>DOC-507</td>
                  <td>Electrical Components	</td>
                  <td>2023-06-30</td>
                  <td>new</td>
                  <td>52000</td>
                  <td>2023-07-30</td>
                </tr>
                <tr >
                  <td>8</td>
                  <td>
                    <Link to="/DocumentEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>DOC-508</td>
                  <td>Structural Materials</td>
                  <td>2023-07-02</td>
                  <td>new</td>
                  <td>33000</td>
                  <td>2023-07-30</td>
                </tr>
                <tr >
                  <td>9</td>
                  <td>
                    <Link to="/DocumentEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>DOC-509</td>
                  <td>Automotive Parts</td>
                  <td>2023-07-05</td>
                  <td>new</td>
                  <td>55000</td>
                  <td>2023-08-03</td>
                </tr>
                <tr >
                  <td>10</td>
                  <td>
                    <Link to="/DocumentEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>DOC-510</td>
                  <td>Electrical Components</td>
                  <td>2023-08-08</td>
                  <td>new</td>
                  <td>55000</td>
                  <td>2023-08-30</td>
                </tr>
              
        </tbody>
      </CommonTable>
    </div>
  );
};
export default Document;
