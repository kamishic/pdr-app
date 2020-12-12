import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

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

const createCycle = async (prepare,doing,beginDate,endDate) => {
  console.log("start")
  const body= {
    prepare: prepare,
    doing: doing,
    beginDate: beginDate,
    endDate: endDate
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
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [prepare,setPrepare] = useState("")
  const [doing,setDoing] = useState("")

  const calcDays = () => {
    if (beginDate != "" && endDate != "" && endDate >= beginDate) {
      var d1 = new Date(beginDate)
      var d2 = new Date(endDate)
      return ((d2 - d1) / 86400000) + 1
    } else {
      return ""
    }
  }

  return (
    <div>
      <List>
        <ListItem>
          <TextField onChange = {(e) => setPrepare(e.target.value)} id="prepare" label="目標・テーマを入力しましょう。" fullWidth = "True" margin = "normal" variant="outlined"/>
        </ListItem>
        <ListItem>
          <TextField onChange = {(e) => setDoing(e.target.value)} id="doing" label="目標・テーマを実現するための具体的な行動を記入しましょう。" multiline rows={4} fullWidth = "True" margin = "normal" variant="outlined"/>
        </ListItem>
        <ListItem>
          <TextField
            id="beginDate"
            label="開始日"
            type="date"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            margin = "dense"
            variant="outlined"
            onChange = {(e) => setBeginDate(e.target.value)}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="endDate"
            label="終了日"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            margin = "dense"
            variant="outlined"
            onChange = {(e) => setEndDate(e.target.value)}
            />
        </ListItem>
        <ListItem>
          <TextField label="日数" margin = "dense" variant="outlined" value = {calcDays()}/>
        </ListItem>
        <ListItem>
          <TextField label="目標回数" margin = "dense" variant="outlined"/>
        </ListItem>
        <ListItem>
          <Button color="primary" onClick = {() => createCycle(prepare,doing,beginDate,endDate)}>
            作成
          </Button>
        </ListItem>
      </List>
    </div>
  )
}
export default New