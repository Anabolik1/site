import React from 'react';
import {Provider} from '../Context';
import AllUsers from '../Component/GetUsers';
import AddUser from '../Component/AddUser';
import Actions from '../Actions/Actions';

class Admin extends Actions {
  render(){
    const contextValue = {
        all_users:this.state.users,
        get_users:this.fetchUsers,
        editMode:this.editMode,
        cancelEdit:this.cancelEdit,
        handleUpdate:this.handleUpdate,
        handleDelete:this.handleDelete,
        insertUser:this.insertUser
    }
    return (
     
      <Provider value={contextValue}>
         <div className="page">
        <div className="mt-5">
              <div className="container p-5">
                  <div className="card shadow-sm">
                      <h1 className="card-header text-center text-uppercase text-muted">Сторінка Адміністратора</h1>
                      <br></br>
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-4">
                                  <AddUser/>
                              </div>
                              <div className="col-md-8">
                                <AllUsers/>
                              </div>
                          </div>
                      </div>
                  </div>
      
              </div>
              </div>
              </div>
      </Provider>
      
    );
  }
}

export default Admin;