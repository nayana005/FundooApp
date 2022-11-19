import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
//import MuiAppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { connect } from 'react-redux';

const drawerWidth = 250;

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: 65,
    borderRight: 'none',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 65,
    borderRight: 'none',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function Drawer1(props) {

    const selectNotes = (noteOption) => {
        props.listenToDrawer(noteOption)
        props.dispatch({
            type: `${noteOption}`
        })
    }

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <Drawer variant="permanent" open={props.drawerToggle}>
                <List>

                    <ListItem button onClick={() => selectNotes('Notes')} sx={{ display: 'flex', borderRadius: '0 25px 25px 0', '&:hover': {backgroundColor: '#feefc3'}}}>
                        <ListItemIcon
                            // sx={{
                            //     minWidth: 0,
                            //     mr: open ? 3 : 'auto',
                            //     justifyContent: 'center',
                            //     display: 'flex',
                            //     position: 'absolute', 
                            //     left: 20, 
                            // }}
                        >
                            <LightbulbOutlinedIcon sx={{ width: 28, height: 28,}}/>
                        </ListItemIcon>
                        <ListItemText primary='Notes'/>
                    </ListItem>

                    <ListItem button onClick={() => selectNotes('Reminders')}sx={{ display: 'flex', borderRadius: '0 25px 25px 0', '&:hover': {backgroundColor: '#feefc3'}}}>
                        <ListItemIcon
                            // sx={{
                            //     minWidth: 0,
                            //     mr: open ? 3 : 'auto',
                            //     justifyContent: 'center',
                            //     display: 'flex',
                            //     position: 'absolute', 
                            //     left: 20,
                            //     top:30
                            // }}
                        >
                            <NotificationsNoneOutlinedIcon sx={{ width: 28, height: 28,}}/>
                        </ListItemIcon>
                        <ListItemText primary='Reminders' />
                    </ListItem>

                    <ListItem button onClick={() => selectNotes('Edit')} sx={{ display: 'flex', borderRadius: '0 25px 25px 0', '&:hover': {backgroundColor: '#feefc3'}}}>
                        <ListItemIcon
                            // sx={{
                            //     minWidth: 0,
                            //     mr: open ? 3 : 'auto',
                            //     justifyContent: 'center',
                            //     display: 'flex',
                            //     position: 'absolute', 
                            //     left: 20,
                            //     top:60
                            // }}
                        >
                            <EditOutlinedIcon sx={{ width: 28, height: 28,}}/>
                        </ListItemIcon>
                        <ListItemText primary='Edit labels' s/>
                    </ListItem>

                    <ListItem button onClick={() => selectNotes('Archive')} sx={{ display: 'flex', borderRadius: '0 25px 25px 0', '&:hover': {backgroundColor: '#feefc3'}}}>
                        <ListItemIcon
                            // sx={{
                            //     minWidth: 0,
                            //     mr: open ? 3 : 'auto',
                            //     justifyContent: 'center',
                            //     display: 'flex',
                            //     position: 'absolute', 
                            //     left: 20,
                            //     top:90
                            // }}
                        >
                            <ArchiveOutlinedIcon sx={{ width: 28, height: 28,}}/>
                        </ListItemIcon>
                        <ListItemText primary='Archive'/>
                    </ListItem>

                    <ListItem button onClick={() => selectNotes('Trash')} sx={{ display: 'flex', borderRadius: '0 25px 25px 0', '&:hover': {backgroundColor: '#feefc3'}}}>
                        <ListItemIcon
                            // sx={{
                            //     minWidth: 0,
                            //     mr: open ? 3 : 'auto',
                            //     justifyContent: 'center',
                            //     display: 'flex',
                            //     position: 'absolute', 
                            //     left: 20,
                            //     top:120
                            // }}
                        >
                            <DeleteOutlinedIcon sx={{ width: 28, height: 28}}/>
                        </ListItemIcon>
                        <ListItemText primary='Trash' />
                    </ListItem>

                </List>
            </Drawer>
        </Box>
    );
}

export default connect()(Drawer1)
