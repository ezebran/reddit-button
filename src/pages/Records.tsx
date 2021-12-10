import { Layout } from '@/components/layout/Layout'
import { RecordsContainer, RecordHead } from '@/styles/RecordsStyles'
import RecordsLoader from '@/loaders/RecordsLoader'
import Record from '@/components/record/Record'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Records() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const fullUsers: any = []
    // Get the data of the users
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        //Maping each user to extract just the username and add a color
        res.data.map((user: any) => {
          let data = { 
            id: user.id,
            username: user.name, 
            color: Math.floor(Math.random() * 60) + 1 //Get a number between 1 & 60
          }
          fullUsers.push(data)
          // setUsers(fullUsers)
        })
    // If we are on the client side and the userInfo is been created
    if(typeof window !== undefined && window.localStorage.getItem("userInfo") !== undefined){ 
      const saved: any = window.localStorage.getItem("userInfo")
      const parceSaved: any = JSON.parse(saved)

      //If something is saved on the localstorage we set the states adding the new user info
      const userCount: number = parceSaved.count;
      let userData = {
        id: 0,
        username: parceSaved.name,
        color: parceSaved.count
      }

      let newUsers: any = []
      fullUsers.push(userData)
 
      setTimeout(()=>{
        newUsers.push(...fullUsers)
        setUsers(newUsers)
        setIsLoading(false)
      },100)

    }else{
      setUsers(fullUsers)
      setIsLoading(false)
    }
      })
      .catch(err => console.error(err))

  }, []);


  if (isLoading) { // Check if we get the users
    return RecordsLoader();// Return a skelleton css
  } else {
    return ( // Or return the component
      <Layout>
        <RecordsContainer>
          <RecordHead>
            <h3>User rankings colors</h3>
          </RecordHead>
          {users.map((user) => (
            <Record
              key={user.id}
              username={user.username}
              color={user.color}
            />
          ))}

        </RecordsContainer>

      </Layout>
    )
  }
}