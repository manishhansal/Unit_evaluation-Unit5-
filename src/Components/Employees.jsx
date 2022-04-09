import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

export const Employees = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        let isSubscribed = true;
        fetch(`http://localhost:3005/allData`)
            .then((res) => res.json())
            .then((res) => isSubscribed && setData(res))
            .catch((err) => console.log(err));

        return () => {
            isSubscribed = false;
        }
    }, []);


  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Role</th>
                <th>Salary</th>
                <th>More Details</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item) => (
                    <tr key={item.id}>
                        <td>Name : {item.name}</td>
                        <td>Gender : {item.gender}</td>
                        <td>Department : {item.department}</td>
                        <td>Role : {item.role}</td>
                        <td>Salary : {item.salary}</td>
                        <td>
                            <Link to={`/all_products/${item.id}`}>More Details..</Link>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}
