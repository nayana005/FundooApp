import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import { lightBlue, grey } from '@mui/material/colors';
import InputBase from '@mui/material/InputBase';
import './Header.css';
import Box from '@mui/material/Box';
import {connect} from 'react-redux';

function Header(props) {

    const openMenu = () => {
        props.listenToHeader()
    }

    return (
        <Box>
            <Box className="NavBarMainContainer">
                <Box className="HamBurger">
                    <MenuIcon fontSize='medium' onClick = {openMenu}/>
                </Box>

                <Box className="KeepLogo">
                    <img src='./KeepLogo.png' alt='logo' style={{width: '40px'}}/>
                </Box>

                <Box className="KeepName">
                    <span id='keep'>
                        {props.title}
                        </span>
                </Box>

                <Box className="Blank1"></Box>
                
                <Box className="SearchBox">
                    <SearchIcon fontSize='large' id='search' sx={{color: grey[600] }}/>
                    {/* <TextField id="filled-search" label="Search" type="search" /> */}
                    <InputBase id="filled-search" placeholder="Search" />
                </Box>

                <Box className="Blank2"></Box>
                <Box className='SearchIcon2'><SearchIcon fontSize='large' id='search' sx={{color: grey[600] }}/></Box>
                <Box className="MenuIcons">
                    <RefreshIcon fontSize='medium' sx={{color: grey[600] }}/>
                    <ViewStreamOutlinedIcon fontSize='medium' sx={{color: grey[600] }}/>
                    <SettingsOutlinedIcon fontSize='medium' sx={{color: grey[600] }}/>
                </Box>
                <Box className="Avatar">
                    <AppsIcon fontSize='medium' sx={{color: grey[600] }}/>
                    <Avatar sx={{ width: 35, height: 35,  bgcolor: lightBlue[500] }}>NS</Avatar>
                </Box>
                
            </Box>
        </Box>
    )
}
const mapStateToProps = (state) => {
    return{
        title: state.drawerReducer.title
    } 
}

export default connect(mapStateToProps)(Header)