import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
import { getEmployees } from "../../utils/API"
import Search from "../Search";
// import "./style.css";

class ListingContainer extends Component {
    state = {
        employees: [],
        search: "",
        filteredList: []
    }

    componentDidMount() {
        getEmployees()
            .then((res) =>
                this.setState({ 
                    employees: res.data.results,
                    filteredList: res.data.results
                })
            )
            .catch((err) => console.log(err));
    }

    handleFormSubmit = e => {
        e.preventDefault();
    }

    handleInputChange = e => {
        this.setState({ search: e.target.value });
        if (e.target.value === "") {
            this.setState( {
                filteredList: this.state.employees
            })
        } else {
            this.filterEmployees(e.target.value);
        }
    }

    filterEmployees = function(input) {
        if (input) {
            this.setState({
                filteredList: this.state.employees.filter((employee) => {
                    return (
                        employee.name.first.toLowerCase().includes(input.toLowerCase()) ||
                        employee.name.last.toLowerCase().includes(input.toLowerCase()) || 
                        employee.phone.includes(input) || 
                        employee.email.includes(input) ||
                        employee.dob.date.includes(input)
                    );
                })
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Search 
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeTable 
                    filteredList={this.state.filteredList}
                />
            </React.Fragment>
        )
    }
}
export default ListingContainer;