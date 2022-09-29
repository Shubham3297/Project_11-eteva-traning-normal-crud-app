import React from 'react'

const Buttons = () => {
    return (
        <div class="  d-flex justify-content-center   mx-5 my-2 ">
            <div class="d-flex flex-row border-success border">
                <div class=" d-flex flex-column ">
                    <button type="button" class="btn btn-primary mx-4 my-4">Primary</button>
                    <button type="button" class="btn btn-secondary  mx-4 ">Secondary</button>
                    <button type="button" class="btn btn-success mx-4 my-4">Success</button>
                    <button type="button" class="btn btn-danger mx-4">Danger</button>
                    <button type="button" class="btn btn-warning mx-4 my-4">Warning</button>
                    <button type="button" class="btn btn-info mx-4">Info</button>
                    <button type="button" class="btn btn-light mx-4 my-4">Light</button>
                    <button type="button" class="btn btn-dark mx-4">Dark</button>
                    <button type="button" class="btn btn-link mx-4 my-4">Link</button>
                </div>
                <div class=" d-flex flex-column">
                    <button type="button" class="btn btn-outline-primary mx-4 my-4">Primary</button>
                    <button type="button" class="btn btn-outline-secondary mx-4">Secondary</button>
                    <button type="button" class="btn btn-outline-success  mx-4 my-4">Success</button>
                    <button type="button" class="btn btn-outline-danger mx-4">Danger</button>
                    <button type="button" class="btn btn-outline-warning  mx-4 my-4">Warning</button>
                    <button type="button" class="btn bt-outlinen-outline-info mx-4">Info</button>
                    <button type="button" class="btn btn-outline-light  mx-4 my-4">Light</button>
                    <button type="button" class="btn btn-outline-dark mx-4">Dark</button>
                    <button type="button" class="btn btn-outline-link  mx-4 my-4">Link</button>
                </div>

            </div>

        </div>
    )
}

export default Buttons
