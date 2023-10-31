import React from 'react';
import * as Icon from 'react-feather';
import { Input, Button, Row, Col, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';




function Inventory() {
  //navigate

  // Get All inventories

  const columns = [
    {
      id: 1,
      name: '#',
      selector: 'id',
      sortable: true,
      grow: 0,
      width: 'auto',
    },
    {
      id: 2,
      name: '',
      selector: 'edit',
      sortable: true,
      grow: 0,
      width: 'auto',
      wrap: true,
    },

    {
      id: 3,
      name: 'Inventory Code',
      selector: 'code',
      sortable: true,
    },
    {
      id: 4,
      name: 'Name',
      selector: 'code',
      sortable: true,
    },
    {
      id: 5,
      name: 'Product Type',
      selector: 'project',
      sortable: true,
      cell: (d) => <span>{d.closing.join(', ')}</span>,
    },
    {
      id: 6,
      name: 'Item Code',
      selector: 'ref',
      sortable: true,
    },
    {
      id: 7,
      name: 'UOM',
      selector: 'ref',
      sortable: true,
    },
    {
      id: 8,
      name: 'Stock',
      selector: 'ref',
      sortable: true,
    },
    {
      id: 9,
      name: 'Adjust Stock',
      selector: 'ref',
      sortable: true,
    },
    {
      id: 10,
      name: '',
      selector: 'ref',
      sortable: true,
    },
    {
      id: 11,
      name: 'MOL',
      selector: 'minimum_order_level',
      sortable: true,
    },
  ];

  return (
    <div className="MainDiv">
      <ToastContainer></ToastContainer>
      <div className=" pt-xs-25">
        <BreadCrumbs />

        <CommonTable
          title="Inventory List"
          Button={
            <>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <Input type="file" name="file" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Link to="">
                      <Button color="primary" className="shadow-none mr-2">
                        Import
                      </Button>
                    </Link>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <a href="" download>
                      <Button color="primary" className="shadow-none ">
                        Sample
                      </Button>
                    </a>
                  </FormGroup>
                </Col>
              </Row>
            </>
          }
        >
          <thead>
            <tr>
              {columns.map((cell) => {
                return <th key={cell.id}>{cell.name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 1</td>
              <td>
                <Link to="/InventoryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>STK-3929</td>
              <td>Meter Cover Spindile</td>
              <td></td>
              <td>02111-10310022</td>
              <td>Pcs</td>
              <td>2150</td>

              <td>
                <span>
                  <Link to="">Adjust Stock</Link>
                </span>
              </td>

              <td>
                <span>
                  <Link to="">view</Link>
                </span>
              </td>

              <td></td>
            </tr>
            <tr>
              <td> 2</td>
              <td>
                <Link to="/InventoryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>STK-3930</td>
              <td>MCB, 2P, 20A, 6KA, C CURVE, TYPE ETIMAT6 (2143517)</td>
              <td></td>
              <td>02111-10310031</td>
              <td>Pcs</td>
              <td>0</td>

              <td>
                <span>
                  <Link to="">Adjust Stock</Link>
                </span>
              </td>

              <td>
                <span>
                  <Link to="">view</Link>
                </span>
              </td>

              <td></td>
            </tr>
            <tr>
              <td> 3</td>
              <td>
                <Link to="/InventoryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>STK-3933</td>
              <td>Meter Window Cover Support</td>
              <td></td>
              <td>01199-00000052	</td>
              <td>Pcs</td>
              <td>450</td>

              <td>
                <span>
                  <Link to="">Adjust Stock</Link>
                </span>
              </td>

              <td>
                <span>
                  <Link to="">view</Link>
                </span>
              </td>

              <td></td>
            </tr>
            <tr>
              <td> 4</td>
              <td>
                <Link to="/InventoryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>STK-3944	</td>
              <td>LV Current Transformer,Type MCT-500,2000/5A,CL-0.5,10VA,60Hz</td>
              <td></td>
              <td>01303-01000966</td>
              <td>Pcs</td>
              <td>24</td>

              <td>
                <span>
                  <Link to="">Adjust Stock</Link>
                </span>
              </td>

              <td>
                <span>
                  <Link to="">view</Link>
                </span>
              </td>

              <td></td>
            </tr>
            <tr>
              <td> 5</td>
              <td>
                <Link to="/InventoryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>STK-3949</td>
              <td>LV Current Transformer,Type MCT-400,2000/5A,CL-0.5,10VA,60Hz</td>
              <td></td>
              <td>01303-01001070	</td>
              <td>Pcs</td>
              <td>6</td>

              <td>
                <span>
                  <Link to="">Adjust Stock</Link>
                </span>
              </td>

              <td>
                <span>
                  <Link to="">view</Link>
                </span>
              </td>

              <td></td>
            </tr>
            <tr>
              <td> 6</td>
              <td>
                <Link to="/InventoryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>STK-3975</td>
              <td>MCB, AC Type MBE,6A,2 Pole,20KA (MBE2PC20).</td>
              <td></td>
              <td>01306-01000085</td>
              <td>Pcs</td>
              <td>0</td>

              <td>
                <span>
                  <Link to="">Adjust Stock</Link>
                </span>
              </td>

              <td>
                <span>
                  <Link to="">view</Link>
                </span>
              </td>

              <td></td>
            </tr>
            <tr>
              <td> 7</td>
              <td>
                <Link to="/InventoryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>STK-3977</td>
              <td>HV-FUSE, 40A, 17.5KV</td>
              <td></td>
              <td>02111-10000014</td>
              <td>Pcs</td>
              <td>17</td>

              <td>
                <span>
                  <Link to="">Adjust Stock</Link>
                </span>
              </td>

              <td>
                <span>
                  <Link to="">view</Link>
                </span>
              </td>

              <td></td>
            </tr>
            <tr>
              <td> 8</td>
              <td>
                <Link to="/InventoryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>STK-3982	</td>
              <td>FUSE LINKS, GLASS TYPE, 1.5A</td>
              <td></td>
              <td>02111-10000018</td>
              <td>Pcs</td>
              <td>500</td>

              <td>
                <span>
                  <Link to="">Adjust Stock</Link>
                </span>
              </td>

              <td>
                <span>
                  <Link to="">view</Link>
                </span>
              </td>

              <td></td>
            </tr>
            <tr>
              <td> 9</td>
              <td>
                <Link to="/InventoryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>STK-3985</td>
              <td>SHUNT OPENING RELEASE, 220...240V AC-DC T7-T7M-X1	</td>
              <td></td>
              <td>02111-10010103</td>
              <td>Pcs</td>
              <td>50</td>

              <td>
                <span>
                  <Link to="">Adjust Stock</Link>
                </span>
              </td>

              <td>
                <span>
                  <Link to="">view</Link>
                </span>
              </td>

              <td></td>
            </tr>
            <tr>
              <td> 10</td>
              <td>
                <Link to="/InventoryEdit">
                  <Icon.Edit2 />
                </Link>
              </td>
              <td>STK-3990</td>
              <td>ELECTROMECHANICAL LATCHING RELAY, E290-16-20/230, 2 C/O</td>
              <td></td>
              <td>02111-10010317</td>
              <td>Pcs</td>
              <td>520</td>

              <td>
                <span>
                  <Link to="">Adjust Stock</Link>
                </span>
              </td>

              <td>
                <span>
                  <Link to="">view</Link>
                </span>
              </td>

              <td></td>
            </tr>
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
}

export default Inventory;
