import React from 'react'
import { useDispatch } from "react-redux"
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

import {
  addProduct,
  removeProduct
} from "../basket/basketSlice"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    marginBottom: 20,
    ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
      marginRight: 25,
      marginBottom: 30,
      flex: "0 0 320px"
    },
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  title: {
    minHeight: 72,
  }

}))

export const ProductItem = ({ id, title, thumbnailUrl, product, isBasket}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleAddBasket = () => {
    dispatch(addProduct({ product }))
  }

  const handleRemoveBasket = () => {
    dispatch(removeProduct({ product, id }))
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={thumbnailUrl}
      />
      <CardContent className={classes.title}>
        <Typography variant="body2" color="textSecondary" component="p">
          { title }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        { !isBasket && (
          <IconButton aria-label="add to basket" onClick={handleAddBasket}>
            <AddShoppingCartIcon/>
          </IconButton>
          )
        }
        { isBasket && (
          <IconButton aria-label="remove from basket" onClick={handleRemoveBasket}>
            <RemoveShoppingCartIcon/>
          </IconButton>
          )
        }
      </CardActions>
    </Card>
  );
}