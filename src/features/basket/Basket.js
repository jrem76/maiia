import React from "react"
import Badge from '@material-ui/core/Badge'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import "./basket.css"

const Basket = () => {

  const count = 0

  return (<div className="basket__container">
    {
      count !== 0 && <Badge badgeContent={count} color="primary">
      <ShoppingBasketIcon />
    </Badge>
    }

    { count === 0 && <ShoppingBasketIcon />}
  </div>
  )
}

export { Basket }
