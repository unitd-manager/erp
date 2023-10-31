import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const GoodsReceipt = () => {

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
      name: 'PO Code',
      selector: 'po_code',
      grow: 0,
      wrap: true,
      width: '4%',
    },

    {
      name: 'Supplier Name',
      selector: 'company_name',
      grow: 0,
      wrap: true,
      width: '4%',
    },

    {
      name: 'Goods Received Date',
      selector: 'goods_received_date',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: 'Total Amount',
      selector: 'total_amount',
      sortable: true,
      grow: 0,
    },
  ];

  
  return (
    <div className="container pt-xs-25">
      <BreadCrumbs />
      <ToastContainer></ToastContainer>
      <CommonTable
        
        title="Goods received List"
        Button={
          <Link to="/GoodsReceiptDetails">
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
                    <Link to="/GoodsReceiptEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>Po_235689</td>
                  <td>Al Yamama Company	</td>
                  <td>2023-08-08</td>
                  <td>50000</td>
                </tr>
                <tr >
                  <td>2</td>
                  <td>
                    <Link to="/GoodsReceiptEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>Po_794613	</td>
                  <td>Rezayat Trading Company Limited	</td>
                  <td>2023-08-10</td>
                  <td>72000</td>
                </tr>
                <tr >
                  <td>3</td>
                  <td>
                    <Link to="/GoodsReceiptEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>Po_235688	</td>
                  <td>Assad Said for Contracting Co Ltd</td>
                  <td>2023-08-13</td>
                  <td>38000</td>
                </tr>
                <tr >
                  <td>4</td>
                  <td>
                    <Link to="/GoodsReceiptEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>Po_316497</td>
                  <td>Esab Saudi Trading Company</td>
                  <td>2023-08-15</td>
                  <td>35000</td>
                </tr>
                <tr >
                  <td>5</td>
                  <td>
                    <Link to="/GoodsReceiptEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>Po_197346</td>
                  <td>Al Asimah Company</td>
                  <td>2023-08-19</td>
                  <td>25000</td>
                </tr>
                <tr >
                  <td>6</td>
                  <td>
                    <Link to="/GoodsReceiptEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>Po_235672	</td>
                  <td>Modern Arab Enterprises Co. Ltd.</td>
                  <td>2023-08-23</td>
                  <td>16000</td>
                </tr>
                <tr >
                  <td>7</td>
                  <td>
                    <Link to="/GoodsReceiptEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>Po_235682</td>
                  <td>Fahad Saleh Al Thwaini Trading Est</td>
                  <td>2023-08-25</td>
                  <td>32000</td>
                </tr>
                <tr >
                  <td>8</td>
                  <td>
                    <Link to="/GoodsReceiptEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>Po_895623	</td>
                  <td>Al Bayan Holding Group</td>
                  <td>2023-08-28</td>
                  <td>11000	</td>
                </tr>
                <tr >
                  <td>9</td>
                  <td>
                    <Link to="/GoodsReceiptEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>Po_235675</td>
                  <td>Abdullah Al-Othaim Markets</td>
                  <td>2023-09-05</td>
                  <td>24000</td>
                </tr>
                <tr >
                  <td>10</td>
                  <td>
                    <Link to="/GoodsReceiptEdit">
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>Po_235685</td>
                  <td>Midan Al Barkh Trading Est.</td>
                  <td>2023-09-15</td>
                  <td>13000</td>
                </tr>
              
        </tbody>
      </CommonTable>
    </div>
      );
};

export default GoodsReceipt;
