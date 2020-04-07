import React from 'react';
import { Switch, Route, Redirect, Link, } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useStyles from '../_styles/styles';

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div >
      <div>
        <Link to="/" >Home page</Link>
        <span> | </span>
        <Link to="/about">About page</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <h1>Home page</h1>
        </Route>
        <Route exact path="/about">
          <h1>About page</h1>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
    </div>
  );
}


export default App;
