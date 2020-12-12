import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Grid from '@material-ui/core/Grid';
import dayjs from 'dayjs'

const headers = new Headers()
headers.set("Content-Type","application/json")

const getUser = async () => {
  const BASE_URL = "http://localhost:8080/api/v1/users" 
  console.log("start")
  const r = await fetch(BASE_URL)
  r.json().then(data => {
    console.log(data)
  })
  console.log("test")
}

const createCycle = async (theme,prepare,doing,beginDate,endDate,term,doTimes) => {
  console.log("start")
  const body= {
    theme: theme,
    prepare: prepare,
    doing: doing,
    beginDate: beginDate,
    endDate: endDate,
    term:term,
    doTimes: doTimes
  }
  const BASE_URL = "http://localhost:8080/api/v1/users/15/pdrs" 

  const res = await fetch(BASE_URL,{
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
    }
  )
  
  /*res.json().then(data => {
    console.log(data)
  })*/
  console.log("test-end")
  alert(body.prepare)
  window.location.href = '/pdr'; 
}


const New = () => {
  const [theme,setTheme] = useState("")
  const [prepare,setPrepare] = useState("")
  const [doing,setDoing] = useState("")
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [doTimes,setDoTimes] = useState(0)
  const [term,setTerm] = useState(0)

  const calcDays = () => {
    if (beginDate != "" && endDate != "" && endDate >= beginDate) {
      var d1 = new Date(beginDate)
      var d2 = new Date(endDate)
      const termCalc =  ((d2 - d1) / 86400000) + 1
      alert(termCalc)
      setTerm(termCalc)
    } else {
      alert("else")
      return ""
    }
  }

  const getDays = (e) => {
    const [begin,end] = e
    const beginDayjs = dayjs(begin)
    const endDayjs = dayjs(end)
    const termDayjs = endDayjs.diff(beginDayjs,'day') + 1
    setBeginDate(beginDayjs.format("YYYY-MM-DD"))
    setEndDate(endDayjs.format("YYYY-MM-DD"))
    setTerm(termDayjs)
  }


  return (
      <Grid container>
        <Grid item xs= {6}>
        <List>
          <ListItem>
            <TextField onChange = {(e) => setTheme(e.target.value)} id="theme" label="テーマを入力しましょう。" placeholder ="例．収入を増やす、ITスキル習得" fullWidth = "True" margin = "normal" variant="outlined"/>
          </ListItem>
          <ListItem>
            <TextField onChange = {(e) => setPrepare(e.target.value)} id="prepare" label="テーマに基づく目標を設定しましょう。" placeholder ="例．アフィリエイトブログを作成する、Web技術の勉強をする。" fullWidth = "True" margin = "normal" variant="outlined"/>
          </ListItem>
          <ListItem>
            <TextField onChange = {(e) => setDoing(e.target.value)} id="doing" label="目標を実現するための具体的な行動を記入しましょう。"  placeholder ="例．週に○回記事を作成する　○○を読み込む" multiline rows={4} fullWidth = "True" margin = "normal" variant="outlined"/>
          </ListItem>
          <ListItem>
                <Calendar 
                  calendarType = "US"
                  maxDate = {new Date("2020","11","30")}
                  minDate = {new Date("2020","10","0")}
                  selectRange = {true}
                  onChange = {(e)=>getDays(e,setBeginDate,setEndDate)}
                />
              <Grid item xs = {6}>
                <ListItem>
                  <TextField id="beginDate"　label="開始日"　margin = "dense"　variant="outlined"　value = {beginDate}/>
                </ListItem>
                <ListItem>
                  <TextField id="endDate" label="終了日" placeholder="カレンダーで範囲を指定してください。" margin = "dense" variant="outlined" value = {endDate} />
                </ListItem>
                <ListItem>
                  <TextField id="term" label="日数" margin = "dense" variant="outlined" value = {term}/>
                </ListItem>
                <ListItem>
                 <TextField id="doTimes" onChange = {(e) => setDoTimes(e.target.value)} label="目標回数" margin = "dense" variant="outlined"/>
                </ListItem>
            </Grid>
          </ListItem>
          <ListItem>
            <Button variant="contained" color="primary" onClick = {() => createCycle(theme,prepare,doing,beginDate,endDate,term,doTimes)}>
              作成
            </Button>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={5}>
      </Grid>
    </Grid>
  )
}
export default New