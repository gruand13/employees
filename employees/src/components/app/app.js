import {Component} from "react"
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';


  

class App  extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {name: "Alex G.", salary: 2500, increase:true, id: 1},
                {name: "Karl K.", salary: 500, increase: false, id: 2},
                {name: "Slava G.", salary: 18000, increase: true, id: 3},
                {name: "Sveta G.", salary: 1000, increase: false, id: 4}
            ]
        }
        this.maxId = 5;
    }
    deleteItem=(id)=>{
        this.setState(({data})=>{
            
            // const index = data.findIndex(elem=>elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index+1);
            // const newArr =[...before, ...after];
            // and in return insert 'data: newArr'
            
            return {
                data: data.filter(item=> item.id !== id)
            }
            
        })
    }

    addNew= (name, salary)=>{
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) =>{
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }


   render(){
    
    return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm
                onAdd={this.addNew}/>
        </div>
    );
   }
}

export default App;