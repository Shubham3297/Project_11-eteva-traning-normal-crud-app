import React, { useState } from 'react'
import axios from 'axios';
import ApiCrudApplicationGet from './ApiCrudApplicationGet';

function ApiCrudApplication() {

    const [data, setData] = useState({
        id: '',
        name: '',
        address: '',
        contact: ''
    });

    const [user, setUser] = useState([])

    const inputChangeHandler = (event) => {
        // 1st method
        // const name = event.target.name;  
        // const value = event.target.value;
        // setData({ ...data, [name]: value });

        // 2nd method
        setData({ ...data, [event.target.name]: event.target.value })
        // console.log(data)
    }
    // console.log(data)

    const submitHandler = (e) => {
        console.log("event.....", data)
        axios.post("http://localhost:3005/todo", data)
            .then((res) => {
                // console.log("....", res.data)
                // setData(res.data)   after refreshing get data

                //setUser is [] and value also [] so use setUser. setData is {} so not used in this.
                setUser(JSON.parse(res.data))
                // window.alert("Data save successfully.")
            })
            .catch((err) => {
                console.log(err);
                window.alert("Something error.")
            })
    }

    const editHandler = (item) => {

        // this method used for new form (new component) for edit operation
        // axios.get(`http://localhost:3005/todo/${item.id}`,)
        //     .then((res) => {
        //         setData({ ...res.data })
        //         console.log(res);
        //         window.alert("Data save successfully.")
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         window.alert("Something error.")
        //     })

        // this method used for same form for edit operation
        setData({ ...item })
    }

    const updateHandler = (editItem) => {
        // console.log("editItemData......", data);
        axios.put(`${"http://localhost:3005/todo"}`, data)
            .then((res) => {
                // console.log("updated data...", res.data);
                window.alert("Data updated successfully.")
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
                window.alert("Something error.")
            })

    }
    // // destructuring form state Object 
    const { id, name, address, contact } = data;
    return (
        <>
            <form  >
                <div>
                    Employee Id :
                    <input type="text" name='id' onChange={inputChangeHandler} placeholder='Enter employee id' value={id} />
                </div><br />
                <div>
                    Employee name :
                    <input type="text" name='name' onChange={inputChangeHandler} placeholder='Enter employee name' value={name} />
                </div><br />
                <div>
                    Employee address :
                    <input type="text" name='address' onChange={inputChangeHandler} placeholder='Enter employee address' value={address} />
                </div><br />
                <div>
                    Employee contact :
                    <input type="text" name='contact' onChange={inputChangeHandler} placeholder='Enter employee contact' value={contact} />
                </div><br />
                <div>
                    <button type='button' className='btn btn-primary btn-sm' onClick={submitHandler} >Submit</button> ||
                    <button type='button' className='btn btn-primary btn-sm' onClick={() => updateHandler()}  >Update</button>
                </div>
            </form>
            <br></br>
            <div><ApiCrudApplicationGet editForm={editHandler} updatedData={user} /></div>
        </>
    )
}

export default ApiCrudApplication
