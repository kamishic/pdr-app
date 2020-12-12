import React,{useState} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import MyCalendar from './calendar'
import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: '#654321',
  padding: "10px",
  m: 1,
  border: 1,
  style: { width: '80%', height: '5rem' },
};

const Index2 = () => {
  const [date, changeDate] = useState(new Date());

  return (
    <div>
      <Paper>
        <h2>計画</h2>
        <Grid container>
          <Grid item xs={6}>
          <Box display="flex" justifyContent="center" flexDirection= 'column' align-items='flex-start'>
            <Box borderRadius={12} {...defaultProps} >
              設定した目標
            </Box> 
            <Box borderRadius={12} {...defaultProps} >
              設定した行動
            </Box> 
            <Box borderRadius={12} {...defaultProps} >
              設定した行動回数
            </Box> 
          </Box>
        </Grid>
        <Grid item xs={6}> 
          <MyCalendar />
        </Grid>
      </Grid>
      </Paper>
    </div>
  )
}

export default Index2