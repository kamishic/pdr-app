import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

const New = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const calcDays = () => {
    if (startDate != "" && endDate != "" && endDate >= startDate) {
      var d1 = new Date(startDate)
      var d2 = new Date(endDate)
      return ((d2 - d1) / 86400000) + 1
    } else {
      return ""
    }
  }

  return (
    <contents>
      <List>
        <ListItem>
          <TextField label="目標・テーマを入力しましょう。" fullWidth = "True" margin = "normal" variant="outlined"/>
        </ListItem>
        <ListItem>
          <TextField label="目標・テーマを実現するための具体的な行動を記入しましょう。" multiline rows={4} fullWidth = "True" margin = "normal" variant="outlined"/>
        </ListItem>
        <ListItem>
          <TextField
            id="startDate"
            label="開始日"
            type="date"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            margin = "dense"
            variant="outlined"
            onChange = {(e) => setStartDate(e.target.value)}
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
          <Button color="primary" href = "/pdr/index2">
            作成
          </Button>
        </ListItem>
      </List>
    </contents>
  )
}
export default New