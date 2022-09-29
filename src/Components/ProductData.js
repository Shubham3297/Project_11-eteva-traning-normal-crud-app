import React, { Component } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';

class ProductData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: [],
            offset: 0,
            perPage: 2,
            currentPage: 0,
            orgTableData: [],
            tableData: []
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selectedPage;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        })
    }

    loadMoreData() {
        const data = this.state.orgTableData;
        var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);

        this.setState(
            {
                pageCount: Math.ceil(data.length / this.state.perPage),
                tableData: slice
            }
        )

    }
    componentDidMount() {
        axios.get("http://localhost:4444/product")
            .then((res) => {
                console.log(res);
                var data = res.data;
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
                this.setState({ product: slice })
                this.setState(
                    { pageCount: Math.ceil(data.length / this.state.perPage) }
                )

            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { product } = this.state;
        return (
            <div>
                <div className="p-3 mb-2 bg-dark text-white">
                    <h2 className="text-center" >Product Details</h2>
                    <hr></hr>
                </div>

                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Company</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((data, index) => {
                                return < tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.comapny}</td>
                                    <td>{data.price}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <ReactPaginate
                    previousLabel={"Previous"}
                    breakLabel={"..."}
                    nextLabel={"Next"}
                    onPageChange={this.handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={this.state.pageCount}

                    renderOnZeroPageCount={null}
                />
                {/* <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav> */}
            </div >
        )
    }
}

export default ProductData
