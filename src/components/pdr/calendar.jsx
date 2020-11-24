import React,{useState,useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


//const uuid = require('uuid');

const weekdays = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
const cardStyle = { margin: 1 }

const Calendar = (props)=>{
  const begining = new Date(2019, 10, 1);

  const [card,setCard] = useState({})
  const [count,setCount] = useState(0)

  const calendar = []

  const checkDate = (e,setState,i) => {
    if (typeof card[e.target.innerHTML] === "undefined") {
      const x = {[e.target.innerHTML]:{check:true,s:"○"}}
      setState( {...card, ...x }  )
    } else if ( card[e.target.innerHTML].check == true) {
      const x = {[e.target.innerHTML]:{check:false,s:""}}
      setState( {...card, ...x }  )

    } else {
      const y = {[e.target.innerHTML]:{check:true,s:"○"}}
      setState({...card,...y})
    }
  }

  const countData = () => {
    if (Object.keys(card).length > 0) {
      let counter = 0
      for(let key in card) {
        if(card.hasOwnProperty(key)) {
          let val = card[key];
          console.log("key=", key, ", value=", val);
          if (val.s == "○"){
            counter = counter +1
          }
        }
      }
      return counter
    }
  }

  useEffect(() => setCount(countData))
  

//  Array.apply(null, {length: begining.getDay()}).map(Number.call, Number).forEach((e)=>{
//    calendar.push(<GridListTile key={uuid()}><Card /></GridListTile>);
//  });
  Array.apply(null, {length: 32}).map(Number.call, Number).forEach((i)=>{
    const day = new Date(begining.getFullYear(), begining.getMonth(), 1+i);
    const dayKey = day.toLocaleDateString()

    if(day.getMonth() === begining.getMonth()){
      calendar.push(
        <GridListTile>
          <Card style={cardStyle}>
            <CardContent>
              <Typography onClick = {(e) => checkDate(e,setCard,i)}>{dayKey}</Typography>
            </CardContent>
            <CardContent>
            <Typography>
              {typeof card[dayKey] === "undefined" ? "" : card[dayKey].s }
            </Typography>
            </CardContent>
            <CardActions>メモ</CardActions>
          </Card>
        </GridListTile>
      );
    }
  });

  return( 
    <Paper>
      <Card>
        <CardContent>
            現在の行動回数
        </CardContent>
        <CardContent>
          {count}
        </CardContent>
      </Card>
      <GridList cols={7} cellHeight='auto'>
        {
          weekdays.map((w)=>{
            const styles = {};
            if(w == 'Sun.'){styles.color = 'red'}
            if(w == 'Sat.'){styles.color = 'blue'}
            return (
              <GridListTile key={w}>
                <Card style={cardStyle}>
                  <CardContent>
                    <Typography style={styles}> {w} </Typography>
                  </CardContent>
                </Card>
              </GridListTile>
            )
          })
        }
        {calendar}
      </GridList>
    </Paper>
  )
}

export default Calendar