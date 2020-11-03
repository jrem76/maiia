import React, { useEffect, useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

import Pagination from '@material-ui/lab/Pagination'

import {
  addProducts,
  getProducts,
  getCount,
} from './productsSlice'

import "./products.css"


const ProductsTable = () => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const products = useSelector(getProducts)

  const [limit, setLimit] = useState(10)

  const getDatas = useCallback(async () => {
    await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`)
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
  }, [page, limit, dispatch])

  useEffect(() => dispatch(getCount()), [dispatch])

  useEffect(() => getDatas(), [getDatas])

  console.log({
    test: page === 1 ? 0 : (page - 1) * limit
  })

  return (<div>
    <h1>Products Table</h1>
    <div className="products__container">
      {
        products.slice(page === 1 ? 0 : (page - 1) * limit, page * limit).map((product, index) => {

          return <>
           <img src={product.thumbnailUrl} alt={product.title}/>
          </>
        })
      }
    </div>
    <Pagination showFirstButton showLastButton variant="outlined" shape="rounded" page={page} onChange={ (event, page) => setPage(page)}/>
  </div>)
}

export { ProductsTable }
