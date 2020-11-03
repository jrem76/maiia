import React, { useEffect, useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import TablePagination from '@material-ui/core/TablePagination'

import { ProductItem } from "./ProductItem"

import {
  addProducts,
  getProducts,
  getCount,
  selectCount,
} from './productsSlice'

import "./products.css"


const ProductsTable = () => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const products = useSelector(getProducts)
  const count = useSelector(selectCount)

  const [rowsPerPage, setRowsPerPage] = useState(10)

  const getDatas = useCallback(async () => {
    await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${rowsPerPage}`)
      .then(res => {
        return res.json()
      })
      .then(
        (result) => {
          dispatch(addProducts({ products: result }))
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          console.error(error)
        }
      )
  }, [page, rowsPerPage, dispatch])

  useEffect(() => dispatch(getCount()), [dispatch])

  useEffect(() => getDatas(), [getDatas, page, rowsPerPage])

  return (<div>
    <h1>Products Table</h1>
    <div className="products__container">
      {
        products.map(
          (product, index) => (
            <ProductItem key={product.title} id={product.id} title={product.title} thumbnailUrl={product.thumbnailUrl} product={product}/>
          )
        )
      }
    </div>
    <TablePagination
      component="div"
      count={count}
      page={page}
      labelRowsPerPage="Products per page: "
      onChangePage={(event, newPage) => setPage(newPage)}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={(event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(1)
      }}
    />
  </div>)
}

export { ProductsTable }
