import React,{Component} from 'react';
import {AppContext} from '../Context';

class AddUser extends Component {
    static contextType = AppContext;

    insertUser = (event) => {
        this.context.insertUser(event,this.usernumber.value,this.username.value,this.userservice.value,this.userdate.value);
    }

    render(){
        return (
            <form onSubmit={this.insertUser}>
            <div className="form-row">
                <div className="form-group col-sm-12">
                    <label className="font-weight-bold">Номер телефону</label>
                    <input type="text" name="number" ref={(val) => this.usernumber = val} className="form-control" placeholder="Введіть номер" required/>
                </div>
                <div className="form-group col-sm-12">
                    <label className="font-weight-bold">ПІБ</label>
                    <input type="text" name="name" ref={(val) => this.username = val} className="form-control" placeholder="Введіть ПІБ" required />
                </div>
                <div className="form-group col-sm-12">
                    <label className="font-weight-bold">Послуга</label>
                    <select name="service" ref={(val) => this.userservice = val} className="form-control" placeholder="Введіть вибрану послугу" required >
 <option></option>
  <option>Корт</option>
  <option>Сауна</option>
  <option>Волейбол</option>
  <option>Місце відпочинку</option>
 
  </select>
                </div>
                <div className="form-group col-sm-12">
                    <label className="font-weight-bold">Дата та час</label>
                    <input type="datetime-local" name="date" ref={(val) => this.userdate = val} className="form-control" placeholder="Введіть дату та час" required/>
                </div>
                <div className="form-group col-sm-12 text-center">
                    <button type="submit" className="btn btn-secondary" >Добавити замовлення</button>
                </div>
            </div>
        </form>  
        );
    }
}
export default AddUser;