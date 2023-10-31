import React  from 'react';
import { Row, Media } from 'reactstrap';
// import Swal from 'sweetalert2';
import * as Icon from 'react-feather';

import img1 from '../../assets/images/users/user1.jpg';
import img2 from '../../assets/images/users/user2.jpg';
// import message from '../Message';
// import api from '../../constants/api';

function ViewNote() {
  

  return (
    <>
      <Row style={{ marginTop: 20 }}>
        
              <>
                
                  <Media className="d-flex" >
                    <Media left href="#">
                      <Media
                        object
                        src={img1}
                        alt="Generic placeholder image"
                        width="40"
                        style={{ borderRadius: 50 }}
                      />
                    </Media>

                    <Media body className="ms-3" >
                    <Media heading>
                          <div style={{ position: 'relative' }}>
                            Hello User
                            <p
                              style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                fontSize: 12,
                              }}
                            > 11/09/2023
                              
                              <button
                                type="button"
                                className="btn"
                                >
                                <Icon.Trash2 style={{ width: 20 }} />{' '}
                              </button>
                            </p>
                          </div>
                        </Media>
                        Update your comments here
                    </Media>
                  </Media>
                 
                  <Media className="ms-3" >
                    <Media className="d-flex my-4">
                      <Media left href="#">
                        <Media
                          object
                          src={img2}
                          alt="Generic placeholder image"
                          width="40"
                          style={{ borderRadius: 50 }}
                        />
                      </Media>
                      <Media body className="ms-3" style={{ width: '100%' }}>
                        <Media heading>
                          <div style={{ position: 'relative' }}>
                            Hello User
                            <p
                              style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                fontSize: 12,
                              }}
                            >
                              11/09/2023
                              <button
                                type="button"
                                className="btn"
                                
                              >
                                <Icon.Trash2 style={{ width: 20 }} />{' '}
                              </button>
                            </p>
                          </div>
                        </Media>
                        Update your comments here
                      </Media>
                    </Media>
                  </Media>
                
              </>
           

        {/* { getNote &&  getNote.map((e) => {
                return  <>
                <tr>
                    <td style={tableStyle}> <p style={{marginBottom:0,fontSize:12}}>{e.name}{e.creation_date}</p> {e.comments} </td>
                    <td width="5%" style={tableStyle}> <button type="button" className="btn" onClick={() => { deleteNotes(e.comment_id) }}><Icon.Trash2/> </button> </td>
                </tr>
            </>
                })} */}
      </Row>
    </>
  );
}

export default ViewNote;
