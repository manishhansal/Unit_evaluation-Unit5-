import React from "react";

export const EmployeesCreate = () => {

    const [inputName, setInputName] = React.useState("");
    const [inputGender, setInputGender] = React.useState("");
    const [inputDepartment, setInputDepartment] = React.useState("");
    const [inputRole, setInputRole] = React.useState("");
    const [inputSalary, setInputSalary] = React.useState("");

    const [employees, setEmployees] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);

    const handleAdd = () => {
        console.log(inputName);
        console.log(inputGender);
        console.log(inputDepartment);
        console.log(inputRole);
        console.log(inputSalary);
        if(inputName!=="" && inputGender!=="" && inputDepartment!=="" && inputRole!=="" && inputSalary!==""){
            const payload = {
                name: inputName,
                gender: inputGender,
                department: inputDepartment,
                role: inputRole,
                salary: inputSalary,
                status: false
            };

            const payloadjson = JSON.stringify(payload);

            fetch(`http://localhost:3005/allData`, {
                method: "POST",
                body: payloadjson,
                headers: {
                    "content-type" : "application/json"
                }
            }).then((res) => {
                console.log(res)
                console.log(res.data)
                // getEmployees();
            })
            .catch((err) => setIsError(true))
            .finally(() => setIsLoading(false));
        }
        // setInputValue("")
    };

    return (
        <>
            <div>
                <input 
                    placeholder="Name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                ></input>
                <br></br>
                <input 
                    placeholder="Gender"
                    value={inputGender}
                    onChange={(e) => setInputGender(e.target.value)}
                ></input>
                <br></br>
                <input 
                    placeholder="Department"
                    value={inputDepartment}
                    onChange={(e) => setInputDepartment(e.target.value)}
                ></input>
                <br></br>
                <input 
                    placeholder="Role"
                    value={inputRole}
                    onChange={(e) => setInputRole(e.target.value)}
                ></input>
                <br></br>
                <input 
                    placeholder="Salary"
                    value={inputSalary}
                    onChange={(e) => setInputSalary(e.target.value)}
                ></input>
                <br></br>
                <button onClick={handleAdd}>ADD EMPLOYEE</button>
            </div>
            {/* <hr></hr>

            {
                employees.map((item) => {
                    return <div className="employees">
                        <h3>Name : {item.name}</h3>
                        <h3>Gender : {item.gender}</h3>
                        <h3>Department : {item.department}</h3>
                        <h3>Role : {item.role}</h3>
                        <h3>Salary : {item.salary}</h3>
                    </div>
                })
            } */}
        </>
    )
}