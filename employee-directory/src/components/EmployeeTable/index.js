import React from "react";
import "./style.css";

function EmployeeTable({ filteredList, sortEmployees, getDate }) {
    return (
        <table className="table table-striped table-sortable text-center">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col" data-field="name" >
                    <span className="sort-header" onClick={() => sortEmployees("name")}>
                    Name
                    </span>
                </th>
                <th scope="col">
                    <span className="sort-header" onClick={() => sortEmployees("phone")}>Phone</span>
                </th>
                <th scope="col">
                    <span className="sort-header" onClick={() => sortEmployees("email")}>Email</span>
                </th>
                <th scope="col">
                    <span className="sort-header" onClick={() => sortEmployees("dob")}>Date of Birth</span>
                </th>
                </tr>
            </thead>
            <tbody>
                {filteredList.map((employee) => {
                const { first, last } = employee.name;
                const fullName = `${first} ${last}`;

                return (
                    <tr key={employee.login.uuid}>
                    <td>
                        <img src={employee.picture.thumbnail} alt={fullName} />
                    </td>
                    <td className="align-middle">{fullName}</td>
                    <td className="align-middle">
                    <a href={`tel:+1${employee.phone}`}>{employee.phone}</a></td>
                    <td className="align-middle email">
                        <a href={`mailto:${employee.email}`}>{employee.email}</a>
                    </td>
                    <td className="align-middle">{getDate(employee.dob.date)}</td>
                    </tr>
                );
                })}
            </tbody>
    </table>
    )
}
export default EmployeeTable;