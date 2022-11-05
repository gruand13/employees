import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

const data = [
    {name: "Alex G.", salary: 2500, increase:true, id: 1},
    {name: "Mike K.", salary: 500, increase: false, id: 2},
    {name: "Slava G.", salary: 18000, increase: true, id: 3},
    {name: "Sergey G.", salary: 1000, increase: false, id: 4
}
]
  

function App(){
    return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
                <EmployeesList data={data}/>
                <EmployeesAddForm/>
            

        </div>
    );
}

export default App;