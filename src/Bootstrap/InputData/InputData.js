import React from 'react'

const InputData = () => {
    return (
        <>
            <div class="container my-4 ">
                <div class="input-group mb-3 ">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default"> First Name</span>
                    </div>
                    <input type="text" class="form-control  bg-warning" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default"> Last Name</span>
                    </div>
                    <input type="text" class="form-control  bg-warning" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Username</span>
                    </div>
                    <input type="text" class="form-control bg-warning" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-4 ">
                    <div class="input-group-prepend ">
                        <span class="input-group-text " id="">First and last name</span>
                    </div>
                    <input type="text" class="form-control bg-warning " />
                    <input type="text" class="form-control bg-warning  " />
                </div>
            </div>
        </>
    )
}

export default InputData
