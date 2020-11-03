import React from 'react'
import { useDispatch } from "react-redux"
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { red } from '@material-ui/core/colors'
import AddBoxIcon from '@material-ui/icons/AddBox'

import {
  addProduct,
} from "../basket/basketSlice"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    marginBottom: 20,
    ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
      marginRight: 25,
      marginBottom: 30,
      flex: "1 0 320px"
    },
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export const ProductItem = ({ id, title, thumbnailUrl, product }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleAddBasket = product => {
    console.log(id)
    dispatch(addProduct({ product }))
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="product" className={classes.avatar}>
           { id }
          </Avatar>
        }
        title={title.substring(0, 50)}
      />
      <CardMedia
        className={classes.media}
        image={thumbnailUrl}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to basket" onClick={() => handleAddBasket(product)}>
          <AddBoxIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}