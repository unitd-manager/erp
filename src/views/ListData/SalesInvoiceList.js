import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import {  Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const SalesInvoice = () => {

  const columns = [
    {
      name: '#',
      selector: '',
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
      name: 'Order No',
      selector: 'order_code',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Invoice No',
      selector: 'invoice_code',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Customer',
      selector: 'company_name',
      sortable: true,
      grow: 0,
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: 'Date',
      selector: 'invoice_date',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
    {
      name: 'Amount',
      selector: 'InvoiceAmount',
      sortable: true,
      width: 'auto',
    },
    {
      name: 'Due Date',
      selector: 'invoice_due_date',
      sortable: true,
      width: 'auto',
    },
  ];


    return (
<div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />
        <CommonTable
          
          title="Sales Invoice List"
          Button={
            <Link to="/InvoiceDetails">
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
                    <td> 1</td>
                    <td>
                      <Link to="/SalesInvoiceEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>OR-100</td>
                    <td>INV/147	</td>
                    <td>Isam Kabbani & Partners</td>
                    <td></td>
                    <td>2023-09-14</td>
                    <td>11000</td>
                    <td>2023-09-20</td>
                  </tr>
                  <tr >
                    <td> 2</td>
                    <td>
                      <Link to="/SalesInvoiceEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>OR-101</td>
                    <td>INV/172</td>
                    <td>Sahara Petrochemicals</td>
                    <td></td>
                    <td>2023-09-10</td>
                    <td>31000</td>
                    <td>2023-09-13</td>
                  </tr>
                  <tr >
                    <td> 3</td>
                    <td>
                      <Link to="/SalesInvoiceEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>OR-102</td>
                    <td>INV/124</td>
                    <td>Hussein Al Ali Est.</td>
                    <td></td>
                    <td>2023-09-07</td>
                    <td>24000</td>
                    <td>2023-09-13</td>
                  </tr>
                  <tr >
                    <td> 4</td>
                    <td>
                      <Link to="/SalesInvoiceEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>OR-104</td>
                    <td>INV/145</td>
                    <td>Taj Holding Group</td>
                    <td></td>
                    <td>2023-09-03</td>
                    <td>50000</td>
                    <td>2023-09-08</td>
                  </tr>
                  <tr >
                    <td> 5</td>
                    <td>
                      <Link to="/SalesInvoiceEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>OR-105</td>
                    <td>INV/146</td>
                    <td>Zain Saudi Arabia</td>
                    <td></td>
                    <td>2023-08-30</td>
                    <td>36000</td>
                    <td>2023-09-03</td>
                  </tr>
                  <tr >
                    <td> 6</td>
                    <td>
                      <Link to="/SalesInvoiceEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>OR-115</td>
                    <td>INV/136</td>
                    <td>Saudi Aramco	</td>
                    <td></td>
                    <td>2023-08-20</td>
                    <td>24000</td>
                    <td>2023-08-30</td>
                  </tr>
                  <tr >
                    <td> 7</td>
                    <td>
                      <Link to="/SalesInvoiceEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>OR-125</td>
                    <td>INV/166</td>
                    <td>Ikea Saudi Arabia</td>
                    <td></td>
                    <td>2023-08-15</td>
                    <td>25000</td>
                    <td>2023-08-18</td>
                  </tr>
                  <tr >
                    <td> 8</td>
                    <td>
                      <Link to="/SalesInvoiceEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>OR-153</td>
                    <td>INV/177</td>
                    <td>Taj Holding Group</td>
                    <td></td>
                    <td>2023-08-12</td>
                    <td>33000</td>
                    <td>2023-08-21</td>
                  </tr>
                  <tr >
                    <td> 8</td>
                    <td>
                      <Link to="/SalesInvoiceEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>OR-183</td>
                    <td>INV/187</td>
                    <td>Sahara Petrochemicals</td>
                    <td></td>
                    <td>2023-08-01</td>
                    <td>11000</td>
                    <td>2023-08-10</td>
                  </tr>
                  <tr >
                    <td> 9</td>
                    <td>
                      <Link to="/SalesInvoiceEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>OR-193</td>
                    <td>INV/196</td>
                    <td>Hussein Al Ali Est.</td>
                    <td></td>
                    <td>2023-08-01</td>
                    <td>44000</td>
                    <td>2023-08-10</td>
                  </tr>
                  <tr >
                    <td> 10</td>
                    <td>
                      <Link to="/SalesInvoiceEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>OR-198</td>
                    <td>INV/200</td>
                    <td>Isam Kabbani & Partners</td>
                    <td></td>
                    <td>2023-07-15</td>
                    <td>28000</td>
                    <td>2023-08-08</td>
                  </tr>
                
          </tbody>
        </CommonTable>
      </div>
    </div>

);
};

export default SalesInvoice;
