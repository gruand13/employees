import {Component} from 'react'
// import "./employees-add-form.css"
import "./employees-add-form.scss";

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if (this.state.name < 3 || !this.state.salary){return}

        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name:'',
            salary:''
        })
    }

    render(){
        const {name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                        <input type="text" 
                            className="form-control new-post-label"
                            placeholder="what is the name"
                            name="name"
                            value={name}
                            onChange={this.onValueChange}/>
                        <input type="number" 
                            className="form-control new-post-label"
                            placeholder="his income in $"
                            name="salary"
                            value={salary}
                            onChange={this.onValueChange}/>
                        <button type="submit"
                        className="btn btn-outline-light"
                        // onClick={this.onSubmit}
                        >ADD</button>
    
                </form>
            </div>
        )
    }
}
    


export default EmployeesAddForm;