import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from "react";


function ApiJson() {

    const [data, setData] = useState([]);
    const [customError, setcustomError] = useState([]);



    // useEffect(() => {
    //     // debugger
    //     fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
    //         result.json().then((res) => {
    //             console.log(res);
    //             setData(res);
    //         })
    //     })
    // }, [])

    // console.log(data)

    // const fetchData = () => {
    //     fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
    //         result.json().then((res) => {
    //             console.log(res);
    //             setData(res);
    //         })
    //     })
    // }

    // const fetchData = () => {
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //         .then((result) => {
    //             result.json().then((res) => {
    //                 console.log(res)
    //                 setData(res)
    //             })
    //         })
    // }

    let api = "http://localhost:3005/todo"
    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((result) => {
                // console.log(result.data)
                console.log(result)
                setData(result.data);
            })
            .catch((err) => {
                console.log(err);
                setcustomError("Database Error");

            })
    }

    const deleteHandler = (id) => {
        console.log("Id", id);
        axios.delete(`${"https://jsonplaceholder.typicode.com/users"}/${id}`)
            .then((result) => {
                console.log(result)
                window.alert("Data deleted successfully.");
                fetchData();
            })
            .catch((error) => {
                console.log(error);
                window.alert("Something Wrong");
            })
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            // debugger
                            return <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button type='button' className='btn btn-danger btn-sm' onClick={() => deleteHandler(item.id)} >
                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
            {customError ? <strong>{customError}</strong> : null}
        </>
    )
}

export default ApiJson
