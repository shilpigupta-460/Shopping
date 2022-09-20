import React from 'react'
import { styled } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Product.css'
import { useNavigate } from 'react-router';
import * as actionTypes from '../../../redux/action'
import { connect } from 'react-redux';
const styles = styled(() => ({
    root: {
        maxWidth: 345,
        marginBottom: '5%'
    },
    media: {
        height: '40vh',
    },
}));
function product({ product, addToCart, loadCurrentItem }) {

    const navigate = useNavigate();
    const handleOnClick = () => {
        loadCurrentItem(product);
        navigate(`/product/${product.id}`)
    }
    const classes = styles();
    return (<>
        <Card sx={ { maxWidth: 345 } } className={ styles.root } >
            <CardMedia
                component="img"
                height="300"
                image={ product.image }

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    { product.title }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { product.description }
                </Typography>
                <Typography variant="h5" align='center' color="textPrimary" >
                    &nbsp;${ product.price }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={ handleOnClick }> View Item</Button>
                <Button size="small" onClick={ () => addToCart(product.id) }>Add to Cart</Button>
            </CardActions>
        </Card>
    </>
    )
}
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return {
        loadCurrentItem: (item) => dispatch({ type: actionTypes.LOAD_CURRENT_ITEM, payload: { item: item } }),
        addToCart: (id) => dispatch({ type: actionTypes.ADD_TO_CART, payload: { id: id } })
    }
}

export default connect(null, mapDispatchToProps)(product)