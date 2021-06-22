import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable";
import { getEmployees } from "../../utils/API"
import Search from "../Search";

class ListingContainer extends Component {
    state = {
        employees: [],
        search: "",
        filteredList: [],
        sortKey: ""
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

    sortEmployees = (key) => {
        let sortedList = this.state.filteredList;
        if (this.state.sortKey === key) {
            this.setState({
                filteredList: sortedList.reverse()
            });
        } else {
            sortedList = sortedList.sort((a,b) => {
                a = a[key];
                b = b[key];
                return a.toString().localeCompare(b.toString());
            });
            this.setState({
                filteredList: sortedList,
                sortKey: key
            });
        }
    }

    getDate = (date) => {
        let newDate = new Date(date);
        return (`${ ("0" + (newDate.getMonth() + 1)).slice(-2) }-${ ( "0" + newDate.getDate()).slice(-2) }-${newDate.getFullYear()}`)
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
                    sortEmployees={this.sortEmployees}
                    getDate={this.getDate}
                />
            </React.Fragment>
        )
    }
}
export default ListingContainer;