import React from "react"
import { useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import {
  useHistory
} from "react-router-dom"

import { selectNumberOfProducts } from "./basketSlice"

import "./basket.css"

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: 15,
  }
}))

const Basket = () => {
  const classes = useStyles()
  const count = useSelector(selectNumberOfProducts)

  let history = useHistory()

  return (<div className="basket__container">
    <div>
      <Button className={classes.button} variant="contained" onClick={() => history.push("/basket")}>
        See my basket
      </Button>
      {
        count !== 0 && <Badge badgeContent={count} color="primary">
        <ShoppingBasketIcon />
      </Badge>
      }
      { count === 0 && <ShoppingBasketIcon />}
    </div>
  </div>
  )
}

export { Basket }
