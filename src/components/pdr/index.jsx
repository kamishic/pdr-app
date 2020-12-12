import React,{useState,useEffect} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'

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
  
  useEffect( async ()=> {
    const userId = 15
    const BASE_URL = `http://localhost:8080/api/v1/users/${userId}/pdrs` 
  
    const res = await fetch(BASE_URL)
    
    res.json().then(data => {
      console.log("data")
      let a = [] 
      let i = 0

      const listItems = data.map((x) =>
        <ListItem>{x.thema}</ListItem>
      );
      /*for (i in data) {
        a = [...a,{prepare:data[i].prepare}]
      }*/
      setPrepare(listItems)
    })

  },[])

  return (
    <div>
      <List>
        <Link to= "/pdr/new">
          <ListItem>
            新規作成
          </ListItem>
        </Link>
        { prepare }

      </List>
    </div>
  )
}

export default Index