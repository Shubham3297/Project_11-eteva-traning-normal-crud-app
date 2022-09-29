import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ApiCrudApplicationGet(props) {

    const [getData, setGetData] = useState([]);

    useEffect(() => {
        setGetData(props.updatedData)
    }, [props.updatedData])

    // for axios not need to convert into json(parse) format but in this use because in node server data convert into string
    const fetchData = () => {
        axios.get("http://localhost:3005/todo")
            .then((result) => {
                // console.log(result.data)
                const data = JSON.parse(result.data)
                setGetData(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`${"http://localhost:3005/todo"}/${id}`)
            .then(() => {
                window.alert("Data deleted successfully.")
                fetchData();
            })
            .catch(() => {
                window.alert("Something error.")
            })
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...getData].map((item, index) => {
                            return <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.contact}</td>
                                <td>
                                    <button type='button' className='btn btn-success btn-sm' onClick={() => props.editForm(item)}>
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </button>
                                    ||
                                    <button type='button' className='btn btn-danger btn-sm' onClick={() => deleteHandler(item.id)}>
                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ApiCrudApplicationGet
