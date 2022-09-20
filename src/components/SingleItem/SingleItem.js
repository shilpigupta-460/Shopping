import React from 'react'
import { connect } from 'react-redux'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from "@mui/material/styles";
import * as actionTypes from '../../redux/action'
import styles from "./SingleItem.css";
import TextField from '@mui/material/TextField';


const SingleItem = ({ current, addToCart }) => {
    return (
        <div className="s-container">
            <div className='img-container'>
                <img
                    className="img"
                    src={ current.image }
                    alt={ current.title }
                />
            </div>
            <div className="details">
                <h1 className='p-name' >{ current.title }</h1>
                <p style={ { color: '#d63031', marginBottom: '5%' } }><span style={ { color: 'grey' } }></span> $&nbsp;  { current.price }</p>
                <h4 style={ { color: '#2d3436', marginBottom: '4%' } }>Description</h4>
                <p className='description'>{ current.description }</p>


                <Button style={ { backgroundColor: '#e67e22', marginTop: '5%' } }
                    onClick={ () => addToCart(current.id) }
                    className={ styles.details__addBtn }
                >
                    <ShoppingCartIcon />&nbsp;
                    Add To Cart
                </Button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        current: state.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch({ type: actionTypes.ADD_TO_CART, payload: { id: id } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);