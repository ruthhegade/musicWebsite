import React from 'react'
import { Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiHeartFullOutline } from "react-icons/ti";
import { BsPlayCircleFill } from "react-icons/bs";
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import {Box, ListItem, ListItemButton, ListItemText,List, Collapse,ListItemIcon,TextField} from '@mui/material'

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,

  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



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



const Dashboard = () => {
    const theme = useTheme();
  const [open, setOpen] = React.useState(true);
    return (
        <>
        {/* Header */}
        <Box sx={{background:'linear-gradient(to bottom, rgba(201,106,165,0.71) 0%,rgba(201,106,166,0.71) 1%,rgba(233,60,236,0.76) 100%)'
        ,display:"flex",justifyContent: 'flex-end',gap:'340px',filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))'
    }}
        >
            <img src='https://i.pinimg.com/originals/19/b1/b2/19b1b24066eef9cc6edc3ab3b7f2a74c.png' width={400}/>
            <h1 className='text-text flex justify-end mr-40 py-10 font-sans  '>Let the <span className='ml-2 text-white'>W</span>USIC take  <br/>you AWAY </h1>
  

        </Box>
        <Box>
        <CssBaseline />

<Drawer variant="permanent" open={open } >
  <DrawerHeader sx={{background:'radial-gradient(ellipse at center, rgba(229,121,188,0.74) 0%,rgba(229,121,188,0.74) 1%,rgba(144,56,216,0.84) 100%)'}}>
    <h1 className='mr-16'> <span className=' text-white'>W</span>usic</h1>
    <IconButton onClick={()=>setOpen(!open)}>
      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </IconButton>
  </DrawerHeader>
  <Divider />
            <List sx={{width:300,height:750,background:'radial-gradient(ellipse at center, rgba(229,121,188,0.74) 0%,rgba(229,121,188,0.74) 1%,rgba(144,56,216,0.84) 100%)'}} divider>
                {/* home */}
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <ListItemButton  sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
                                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                                    {/* Home */}
                                <Link to="musicHome" className='flex no-underline gap-2'>   <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                >
                   <GiHamburgerMenu className='text-xl text-black'/> 
                </ListItemIcon><p className='text-black font-semibold'>Music Home</p ></Link>
                                </ListItemText>
                            </ListItemButton >
                        </ListItem>
{/* search */}
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <ListItemButton  sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
                            
                                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                                    {/* Search */}
                                <Link to="search" className='flex items-center no-underline gap-2 text-black font-bold'><ListItemIcon
                   sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <BiSearch className='text-xl text-black font-bold'/> 
                </ListItemIcon>
                {/* <TextField variant='outlined' size='small' label="Search Songs" className='rounded-xl'/> */} 
                <p className='relative top-2'>Search</p>
                </Link>
                                </ListItemText>
                            </ListItemButton >
                        </ListItem>
{/* favourites */}
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <ListItemButton  sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
                                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                                    {/* Favourites */}
                                <Link to="favourites"  className='flex no-underline gap-2'><ListItemIcon
                   sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <TiHeartFullOutline className='text-xl text-black'/>  
                </ListItemIcon><p className='text-black font-semibold'>Favourites</p ></Link>
                                </ListItemText>
                            </ListItemButton >
                        </ListItem>
{/* playlist */}
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <ListItemButton  sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
                                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                                    {/* PlayLists */}
                                <Link to="playlists"  className='flex no-underline gap-2'><ListItemIcon
                 sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                
                   <BsPlayCircleFill className='text-xl text-black'/>  
                </ListItemIcon><p className='text-black font-semibold'>Playlist</p ></Link>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
            </List>
           
            <List>

            </List>
            <Divider />

</Drawer>
          
            <Outlet/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      
      </Box>
        </Box>
        </>
    )
}

export default Dashboard
