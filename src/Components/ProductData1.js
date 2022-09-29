import React, { useState, useEffect } from 'react';
import data from './Product.json'
import Pagination from '@mui/material/Pagination';
import SearchField from "react-search-field";


function ProductData1() {
    const [filterProduct, setFilterProduct] = useState([])
    const [page, setPage] = useState(1);

    // pagination Logic---------------------------------------------
    const recordsPerPage = 5;
    const lastIndex = page * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const paginationCount = Math.ceil((filterProduct.length) / recordsPerPage)
    const handlePaginationChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setFilterProduct(data.product)
    }, [])


    const onChangeSearch = (input) => {
        let newList = []
        if (input !== "") {
            // console.log(data.product)
            data.product && data.product[0] && data.product.forEach(element => {
                const { id, name, comapny, price } = element
                const isContentInclude = name.toLowerCase().includes(input.toLowerCase(), 0)
                if (isContentInclude) {
                    newList.push(element)
                }
            });
            // debugger
            setFilterProduct(newList)
        } else {
            setFilterProduct(data.product)
        }

        setPage(1) // after filter see from 1st page
    }


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
                        // [...filterProduct] && [...filterProduct].slice(firstIndex, lastIndex).map((item, index) => (
                        filterProduct && filterProduct[0] && filterProduct.slice(firstIndex, lastIndex).map((item, index) => (
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
            {filterProduct.length > 0 &&
                <div className="d-flex justify-content-end mb-6">
                    <Pagination size="medium" shape="rounded" count={paginationCount} page={page}
                        onChange={handlePaginationChange} />
                </div>
            }
        </>
    )
}

export default ProductData1
