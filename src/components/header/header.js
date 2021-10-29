import React from 'react';
import './header.scss';
import HeaderSearch from "../header-search";
import HeaderContainer from 'Containers/header-container';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Stack from '@mui/material/Stack';
import Logout from "@mui/icons-material/Logout";

import imageResource from 'Utils/get-image-resource';

const AccountMenu = ({ user, onLogout }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = !!anchorEl;
    const { name, avatar } = user;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Stack direction="row" onClick={handleClick} sx={{alignItems: "center", cursor: "pointer", }}>
                    <Tooltip title="Profile">
                        <IconButton size="small" sx={{ ml: 2, mr: 1, }}>
                            <Avatar sx={{ width: 40, height: 40 }}>
                                <img className="header__profile-img" src={`${imageResource}${avatar}`} alt={name} />
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                    <Typography>{name}</Typography>
                </Stack>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0
                        }
                    }
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem>
                    Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => onLogout()}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}


const HeaderLogo = ({ history }) => (
    <div
        className="header__logo"
        onClick={() => history.push('/')}>
        USOF
    </div>
);

const HeaderNav = (props) => (
    <nav>
        <HeaderSearch />
        <HeaderContent {...props} />
    </nav>
);

const HeaderContent = ({ user: { isLogged, data }, onLogout, history }) => {
    if (!isLogged || !data) {
        return (
            <div className="header__links">
                <button className="btn btn-mini btn-green" onClick={() => history.push('/login')}>Sign In</button>
                <button className="btn btn-mini btn-blue" onClick={() => history.push('/register')}>Sign Up</button>
            </div>
        );
    }

    return (
        <div className="header__profile">
            <AccountMenu user={data} onLogout={onLogout} />
        </div>
    );
};

const Header = () => (
    <HeaderContainer>
        <HeaderLogo />
        <HeaderNav />
    </HeaderContainer>
);

export default Header;