import React from 'react'
import Rose2 from "../Image/Rose2.jpg"

function Button() {
    return (
        <div>
            <div><span class="badge badge-pill badge-primary">Primary</span></div>
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr />
                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
            <button type="button" class="btn btn-primary">
                Profile <span class="badge badge-light">9</span>
                <span class="sr-only">unread messages</span>
            </button>

            <div className="card" style={{ width: "18rem" }}>
                {/* <img className="card-img-top" src="./Images/Rose1.jpg" alt="Rose1" /> */}
                <img className="card-img-top" src={Rose2} alt="Card image cap" />
                {/* <img className="card-img-top" src="https://picsum.photos/seed/picsum/200/100" alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title">React</h5>
                    <p className="card-text">Wellcome all of you !!!!.</p>
                    <a href="https://www.npmjs.com/package/bootstrap" className="btn btn-primary">Go npm</a>
                </div>
            </div>
            <button className="btn btn-primary">Normal Button</button>
        </div >
    )
}

export default Button
