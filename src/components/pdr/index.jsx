import React,{useState} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <List>
        <Link to= "/pdr/new">
          <ListItem>
            新規作成
          </ListItem>
        </Link>
      </List>
    </div>
  )
}

export default Index