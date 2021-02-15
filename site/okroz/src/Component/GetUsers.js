import React, {Component} from 'react';
import {AppContext} from '../Context';
class GetUsers extends Component{
    static contextType = AppContext;

    componentDidMount(){
        this.context.get_users();
    }

    handleUpdate = (id) => {
        this.context.handleUpdate(id,this.Number.value,this.Name.value,this.Service.value,this.Date.value);
    }

    render(){
        let allUsers;
        let mainData;
        
        allUsers = this.context.all_users.map(({id, number, name, service, date,isEditing}) => {
            return isEditing === true ? (
                <tr key={id}>
                <td><input className="form-control" type="text" ref={(item) => this.Number = item} defaultValue={ number}/></td>
                <td><input className="form-control" type="text" ref={(item) => this.Name = item} defaultValue={ name}/></td>
                <td><input className="form-control" type="text" ref={(item) => this.Service = item} defaultValue={ service}/></td>
                <td><input className="form-control" type="text" ref={(item) => this.Date = item} defaultValue={ date}/></td>
                <td>
                    <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id)}>Save</button>
                    <button onClick={() => this.context.cancelEdit(id)} className="btn btn-light">Cancel</button>
                </td>
            </tr>
            ) : (
                <tr key={id}>
                    <td>{number}</td>
                    <td>{name}</td>
                    <td>{service}</td>
                    <td>{date}</td>
                    <td>
                        <button className="btn btn-dark mr-2" onClick={() => this.context.editMode(id)}>Edit</button>
                        
                        <button className="btn btn-danger" onClick={() => this.context.handleDelete(id)} >Delete</button>
                    </td>
                </tr>
            );
        });

        if(this.context.all_users.length > 0){
            mainData = (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Телефон</th>
                            <th>ПІБ</th>
                            <th>Послуга</th>
                            <th>Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers}
                    </tbody>
                </table>
            );
        }
        else{
            mainData = (
                <div className="alert alert-light" role="alert">
                    <h4 className="alert-heading">No User Found!</h4>
                    <hr/>
                    <p>Please Insert Some Users.</p>
                </div>
            );
        }
        return(
            <>
            {mainData}
            </>
        );
    }

}
export default GetUsers;