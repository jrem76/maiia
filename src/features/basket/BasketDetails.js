import React from "react"
import { useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

import {
  useHistory
} from "react-router-dom"

import { selectNumberOfProducts, getProductsInBasket } from "./basketSlice"

import {
  ProductItem,
} from "../products/ProductItem"

import "./basketDetails.css"

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: 15,
  }
}))

const BasketDetails = () => {
  const classes = useStyles()
  const count = useSelector(selectNumberOfProducts)
  const productsInBasket = useSelector(getProductsInBasket)

  const history = useHistory()

  return (<>
    <div className="basketDetails__container">
      {
        productsInBasket.map((product, index) => (
          <ProductItem isBasket key={`${product.title}${index}`} id={index} title={product.title} thumbnailUrl={product.thumbnailUrl} product={product}/>
        ))
      }
    </div>
    <h1>Total product{count > 1 ? "s: " : ": "} { count }</h1>
    <Button classes={classes.button} variant="contained" onClick={() => history.push("/")}>
      Go back to market
    </Button>
  </>)
}

export { BasketDetails }
