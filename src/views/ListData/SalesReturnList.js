import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import {  Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';


const SalesReturn = () => {

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
      name: 'Invoice No',
    
    },
   
    {
      name: 'Date',
    
    },
    {
      name: 'Status',
    
    },

  ];
    return (
<>
<div className=" pt-xs-25">
        <BreadCrumbs />
        <CommonTable
          
          title="Sales Return List"
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
                      <Link to="/SalesReturnEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>SI220283</td>
                   <td>10/08/2023</td>
                    <td>In Progress</td>
                   
                  </tr>
                  <tr >
                    <td>2</td>
                    <td>
                      <Link to="/SalesReturnEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>SI220282</td>
                   <td>10/08/2023</td>
                    <td>In Progress</td>
                   
                  </tr>
                  <tr >
                    <td>3</td>
                    <td>
                      <Link to="/SalesReturnEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>SI220281</td>
                   <td>10/08/2023</td>
                    <td>In Progress</td>
                   
                  </tr>
                  <tr >
                    <td>4</td>
                    <td>
                      <Link to="/SalesReturnEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>SI220280</td>
                   <td>03/08/2023</td>
                    <td>In Progress</td>
                   
                  </tr>
                  <tr >
                    <td>5</td>
                    <td>
                      <Link to="/SalesReturnEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>SI220279</td>
                   <td>25/07/2023</td>
                    <td>In Progress</td>
                   
                  </tr>
                  <tr >
                    <td>6</td>
                    <td>
                      <Link to="/SalesReturnEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>SI220274</td>
                   <td>15/07/2023</td>
                    <td>In Progress</td>
                   
                  </tr>
                  <tr >
                    <td>7</td>
                    <td>
                      <Link to="/SalesReturnEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>SI220278</td>
                   <td>05/07/2023</td>
                    <td>In Progress</td>
                   
                  </tr>
                  <tr >
                    <td>8</td>
                    <td>
                      <Link to="/SalesReturnEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>SI220275</td>
                   <td>15/06/2023</td>
                    <td>In Progress</td>
                   
                  </tr>
                  <tr >
                    <td>9</td>
                    <td>
                      <Link to="/SalesReturnEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>SI220276</td>
                   <td>05/06/2023</td>
                    <td>In Progress</td>
                   
                  </tr>
                  <tr >
                    <td>9</td>
                    <td>
                      <Link to="/SalesReturnEdit">
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>SI220277</td>
                   <td>05/06/2023</td>
                    <td>In Progress</td>
                   
                  </tr>
                
          </tbody>
        
        
        </CommonTable>
        </div>
        </>

);
};

export default SalesReturn;
