import React,{useState,useEffect} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import dayjs from 'dayjs'

import styled from 'styled-components';

const StyledButton = styled(Button)`
margin-top:16px;
margin-bottom:16px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "50%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



const getPdrs = async () => {
  console.log("start")
  const userId = 15
  const BASE_URL = `http://localhost:8080/api/v1/users/${userId}/pdrs` 
  const res = await fetch(BASE_URL)
  
  res.json().then(data => {
    console.log(data)
    return data
  })
}

const Index = () => {
  console.log("index")
  const [prepare,setPrepare] = useState([])
  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  useEffect( async ()=> {
    const userId = 15
    const BASE_URL = `http://localhost:8080/api/v1/users/${userId}/pdrs` 
  
    const res = await fetch(BASE_URL)
    
    res.json().then(data => {
      console.log("data")
      let a = [] 
      let i = 0

      const listItems = data.map((x) =>
      <>
        <StyledLink to= {`/`} >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {x.theme}
              </Typography>
              <Typography variant="h5" component="h2">
                {x.prepare}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {dayjs(x.begin_date).format("YYYY-MM-DD")} 〜 {dayjs(x.end_date).format("YYYY-MM-DD")}
              </Typography>
            </CardContent>
          </Card>
        </StyledLink>
        <br />
      </>
      );

      setPrepare(listItems)
    })
  },[])

  return (
    <div>
      <StyledLink to= "/pdr/new">
        <StyledButton variant="contained">新規作成</StyledButton>
      </StyledLink>
      
      { prepare }
    </div>
  )
}

export default Index