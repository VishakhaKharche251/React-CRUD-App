import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Read() {
    const [data, setData] = useState([]);

    function getData() {
        axios.get("https://659fa4d55023b02bfe8a10cc.mockapi.io/crud-operations")
            .then((res) => {
                //console.log(res.data);
                setData(res.data);

            });
    }

    function handleDelete(id) {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");

        if (confirmDelete) {
            axios.delete(`https://659fa4d55023b02bfe8a10cc.mockapi.io/crud-operations/${id}`).then(() => {

                getData();
            });
        }
    }

    const setLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <div className='d-flex justify-content-between m-2'>
                <h2 className='text-primary fw-bold' style={{ fontSize: "24px" }}>USERS</h2>
                <Link to="/">
                    <button className='btn btn-primary'>Create</button>
                </Link>
            </div>
            <table className="table" style={{ textAlign: "center" }}>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {data.map((eachData) => (
                    <tbody key={eachData.id}>
                        <tr>
                            <th scope="row">{eachData.id}</th>
                            <td>{eachData.name}</td>
                            <td>{eachData.email}</td>
                            <td>
                                <Link to="/update">
                                    <button className='btn btn-success mx-2' onClick={() => setLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit{""}</button>
                                </Link>
                                <button className='btn btn-danger mx-2' onClick={() => handleDelete(eachData.id)}>Delete</button></td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>
    );
};

export default Read