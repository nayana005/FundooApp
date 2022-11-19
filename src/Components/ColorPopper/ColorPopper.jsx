import React from 'react'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { grey } from '@mui/material/colors';
//import { color } from '@mui/system';
import { changeColorNotes } from '../../services/dataService';

function ColorPopper(props) {

    const colors = ["#F28B82", "#FBBC05", "#FFF475", "#CCFF90", "#CCFF90", "#CBF0F8", "#AECBFA", "#D7AEFB", "#FDCFE8", "#E6C9A8", "#E8EAED"]

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const selectColor = (color) => {
        if (props.action === "create") {
            props.listenToColorPopper(color)
            // console.log(color, "Color")
        }else if(props.action === "update"){
            let colorInput = {noteIdList: [props.id], color: color}
            changeColorNotes(colorInput).then((response) => {
                // console.log(response)
                //props.autoRefreshing()
                props.listenToColorUpdate()
            }).catch((error) => console.log(error))
        }
    }

    return (
        <div>
            <PaletteOutlinedIcon fontSize='small' sx={{ color: grey[800] }} onClick={handleClick} />
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex' }}>
                    {
                        colors.map((color) => (
                            <div style={{ width: 25, height: '25px', borderRadius: '100px', backgroundColor: color, marginLeft: '5px' }} onClick={() => selectColor(color)}></div>
                        ))
                    }
                </Box>
            </Popper>
        </div>
    )
}

export default ColorPopper