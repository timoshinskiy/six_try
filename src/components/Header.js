import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { ShoppingBasket, Person } from "@mui/icons-material";
import {Link} from "react-router-dom";

function Header({handleCart, orderLen}) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    <Link to={'/'}>
                    My Shop
                    </Link>
                </Typography>
                <Link to={'/profile'}>
                <IconButton
                    color='inherit'>
                    <Person/>
                </IconButton>
                </Link>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <Badge
                        color="secondary"
                        badgeContent={orderLen}
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header