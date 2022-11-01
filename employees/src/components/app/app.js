import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

const data = [
    {name: "Alex G.", salary: 2500, increase:true},
    {name: "Mike K.", salary: 500, increase: false},
    {name: "Slava G.", salary: 18000, increase: true},
    {name: "Sergey G.", salary: 1000, increase: false}
]
  

function App(){
    return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                <EmployeesList data={data}/>
                <EmployeesAddForm/>
            </div>

        </div>
    );
}

export default App;