import "./employees-add-form.css"

const EmployeesAddForm = () =>{
    return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form 
                className="add-form d-flex">
                    <input type="text" 
                        className="form-control new-post-label"
                        placeholder="what is the name"/>
                    <input type="number" 
                        className="form-control new-post-label"
                        placeholder="his income in $"/>
                    <button type="submit"
                    className="btn btn-outline-light">ADD</button>

            </form>
        </div>
    )
}

export default EmployeesAddForm;