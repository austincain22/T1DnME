import React from 'react'
// import ReactDOM from 'react-dom';
//import './Styles/index.css'
import { Switch, Redirect, Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import Home from '../Pages/HomePage';
// import Register from '../Pages/RegisterPage';
// import Login from '../Pages/LoginPage';
// import Forums from '../Pages/ForumsPage';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

//import indexRoutes from '../Routes/index.jsx';
import Home from '../Pages/HomePage.jsx';
import Register from '../Pages/RegisterPage.jsx';
import Login from '../Pages/LoginPage.jsx';
import Forums from '../Pages/ForumsPage.jsx';
import DMing from '../Pages/DmPage.jsx';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    //marginRight: 0
  },
});



class sideBar extends React.Component {
  state = {
    open: true
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }


  render() {
    const { classes, theme } = this.props;
    const { open } = this.state
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Router>
          <div>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                <div>
                  <Link to="/">
                    <ListItem button>
                      <ListItemText primary="Home" />
                    </ListItem>
                  </Link>
                  <Link to="/forums">
                    <ListItem button>
                      <ListItemText primary="Forums" />
                    </ListItem>
                  </Link>
                  <Link to="/faq">
                    <ListItem button>
                      <ListItemText primary="FAQ" />
                    </ListItem>
                  </Link>
                  <Link to="/register">
                    <ListItem button>
                      <ListItemText primary="Register" />
                    </ListItem>
                  </Link>
                  <Link to="/login">
                    <ListItem button>
                      <ListItemText primary="Login" />
                    </ListItem>
                  </Link>
                  <Link to="/dms">
                    <ListItem button>
                      <ListItemText primary="DM" />
                    </ListItem>
                  </Link>
                </div>
              </List>
              <Divider />
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
              style={{ backgroundColor: 'Grey' }}
            >
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/forums" component={Forums} />
              <Route path="/dms" component={DMing} />
            </main>
          </div>
        </Router>
      </div>
    )
  }
}

sideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(sideBar)
// const routing = (
//   <Router>
//     <div className="sideBar">
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/register">Registration</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/forums">Forums</Link>
//         </li>
//       </ul>
//       <Route exact path="/" component={Home} />
//       <Route path="/register" component={Register} />
//       <Route path="/login" component={Login} />
//       <Route path="/forums" component={Forums} />
//     </div>
//   </Router>
// )
// }

// ReactDOM.render(
//   routing, document.getElementById('root')
// );
