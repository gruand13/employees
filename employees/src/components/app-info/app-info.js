import './app-info.css';

const AppInfo = ({employees, increased})=>{
    return (
        <div className="app-info">
            <h1>Employees table</h1>
            <h2>Amount of employees: {employees}</h2>
            <h2>Bonus recieve: {increased}</h2>
        </div>
    )
}

export default AppInfo;