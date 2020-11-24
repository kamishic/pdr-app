import React,{useState} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import { DatePicker } from "@material-ui/pickers";
import Calendar from './calendar'

const Index2 = () => {
  const [date, changeDate] = useState(new Date());

  return (
    <div>
      <Paper>
        <Card>
          <CardContent>
            目標・テーマ
          </CardContent>
          <CardContent>
            Reactの使い方に慣れること
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            目標達成のための行動
          </CardContent>
          <CardContent>
            1時間以上勉強の時間を確保する。
          </CardContent>
        </Card>
        <Card>
          <CardContent >
            あなたの計画した行動回数
          </CardContent>
          <CardContent>
            20回/30日
          </CardContent>
        </Card>
       <Calendar />
      </Paper>
    </div>
  )
}

export default Index2