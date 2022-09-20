import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { makeStyles } from '@mui/styles';
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";
import { connect } from 'react-redux'
const styles = styled((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    tool: {
        position: "relative"
    }
}));

function Navbar({ cart = [] }) {
    const [cartCount, setCartCount] = useState(0);
    let navigate = useNavigate();
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);
    const handleClick = () => {
        navigate('\cart')
    }
    const handleHome = () => {
        navigate('\home')
    }
    const classes = styles();
    return (
        <div className={ classes.root }>
            <AppBar style={ { backgroundColor: '#373737' } } position="static">
                <Toolbar className={ classes.tool }>

                    <Typography variant="h6" className={ classes.title } onClick={handleHome} style={{ cursor:"pointer"}}>
                        {/* <Link to='/' style={ { color: '#2f3542' } }></Link>  */ }
                        Redux Shopping   </Typography>
                 
                    {/* <Link to='/cart' style={ { color: '#2f3542' } }></Link> */ }
                    <Button onClick={ handleClick } color="inherit" className={ classes.tool } style={ { marginLeft: '80%' } }>
                        Cart<ShoppingCartIcon style={ { marginLeft: '0%' } } />
                        <span className='cartNumber'> { cartCount } </span>
                    </Button>

                </Toolbar>
            </AppBar>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Navbar)