import React from 'react';
import Contents from './Contents';

import Index from '../pdr/index';
import New from '../pdr/new';
import Index2 from '../pdr/index2';

import Header from './Header';
import Footer from './Footer';
import { withStyles } from '@material-ui/core/styles' 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
})

const Page = (props) => {
  const { classes } = props;
  
  return(
    <>
      <Router>
        <Header/>
        <div className={classes.toolbar} />
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={9}>
            <Route exact path='/' component={Contents}/>
            <Route exact path='/pdr' component={Index}/>
            <Route exact path='/pdr/index2' component={Index2}/>
            <Route path='/pdr/new' component={New}/>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Router>
      <Footer/>
    </>
  )
}

export default withStyles(styles)(Page);
