import React from 'react'


const Cards = () => {
    return (
        <>
            <div class="  d-flex justify-content-center  mx-5 my-2 ">
                <div class="d-flex flex-row">

                    <div className="card mx-4 my-4" style={{ width: "25rem" }}>
                        <img className="card-img-top" src="./Images/Rose1.jpg" alt="Rose1" />
                        <div className="card-body">
                            <h5 className="card-title text-danger text-center">Rose 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className=" text-center">
                                <a href="https://www.npmjs.com/package/bootstrap" className="btn btn-primary ">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="card mx-4 my-4" style={{ width: "25rem" }}>
                        <img className="card-img-top" src="./Images/Rose2.jpg" alt="Rose2" />
                        <div className="card-body">
                            <h5 className="card-title text-danger text-center">Rose 2</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card mx-4 my-4" style={{ width: "25rem" }}>
                        <img className="card-img-top " src="./Images/Nature.jpg" alt="Nature" />
                        <div className="card-body">
                            <h5 className="card-title text-success">Nature</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">First </li>
                            <li className="list-group-item">Second</li>
                            <li className="list-group-item">Third</li>
                            <li className="list-group-item">Fourth</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards
