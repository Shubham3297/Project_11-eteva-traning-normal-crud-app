import React, { useState, useEffect } from 'react';
import data from './Product.json'
// import ReactPaginate from 'react-paginate';
import Pagination from '@mui/material/Pagination'
// import SearchBar from "material-ui-search-bar";
import SearchField from "react-search-field";

// let PageSize = 10;

function ProductData1() {
    // const recordsPerPage = 5;
    const [products, setProducts] = useState([]);
    // const [filterProduct, setFilterProduct] = useState([])
    const [page, setPage] = useState(1);
    // const [newList, setNewList] = useState([]);
    // const [lastIndex, setLastIndex] = useState(page * recordsPerPage);
    // const [firstIndex, setFirstIndex] = useState(lastIndex - recordsPerPage);

    // const [lastIndex, setLastIndex] = useState();
    // const [firstIndex, setFirstIndex] = useState(lastIndex - recordsPerPage);


    // pagination Logic---------------------------------------------
    const recordsPerPage = 5;
    const lastIndex = page * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const paginationCount = Math.ceil((filterProduct.length) / recordsPerPage)
    const handlePaginationChange = (event, value) => {
        setPage(value);
    };

    // const recordsPerPage = 5;

    // const firstIndex = lastIndex - recordsPerPage;
    // const paginationCount = Math.ceil((products.length) / recordsPerPage)
    // const handlePaginationChange = (event, value) => {
    //     setPage(value);
    // };

    useEffect(() => {
        setProducts(data.product)
        // setFilterProduct(data.product)


    }, [])


    const onChangeSearch = (input) => {
        // debugger
        // console.log(input)
        // setProducts([input]);

        let newList = []
        if (input !== "") {
            console.log(data.product)
            data.product && data.product[0] && data.product.forEach(element => {
                const { id, name, comapny, price } = element
                // debugger
                const isContentInclude = name.toLowerCase().includes(input.toLowerCase(), 0)
                if (isContentInclude) {
                    newList.push(element)
                    // setNewList(newList.push(element));

                }
            });
            console.log(newList)
            // setProducts(newList)
            setFilterProduct(newList)

            // setNewList(newList)
        } else {
            setFilterProduct(data.product)
            setProducts(data.product)

        }
        setPage(1)
    }

    console.log("Produts", [...products].slice(firstIndex, lastIndex), firstIndex, lastIndex);

    return (
        <>
            <SearchField
                placeholder="Search..."
                onChange={onChangeSearch}
                searchText=""
                classNames="test-class"
            />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">COMPANY</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...Products] && [...Products].slice(firstIndex, lastIndex).map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.comapny}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {products.length > 0 &&
                <div className="d-flex justify-content-end mb-6">
                    <Pagination size="medium" shape="rounded" count={paginationCount} page={page} onChange={handlePaginationChange} />
                </div>
            }
        </>
    )
}

export default ProductData1
