import React from 'react'
import UserCard from './UserCard'
import styled from 'styled-components'
import { useUser } from './UserContext'
import {Link} from 'react-router-dom'
import UserDetail from './UserDetail'

const Body = styled.div`
  background: linear-gradient(135deg, #9b78fe,#adb4ff, #e3a2ff);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items:center;
`

const Wrapper = styled.div`
  width: 1000px;
  position: relative;
  display: flex;
  gap: 50px;
  justify-content: center;
  flex-wrap: wrap;
`

const Header = styled.header`
  height: 100px;
  width:100%; 
  position:relative;
`

const Register = styled.div`
  position : absolute;
  right:30px;
  top: 20px;
  width: 150px;
  height: 50px;
  background: #fff;
  border-radius: 25px;
  display:flex;
  font-size:20px;
  font-weight: 700;
  align-items:center;
  justify-content:center;
  box-shadow:5px 5px 5px rgba(0, 0, 0, 0.7);
  &:hover{
    box-shadow:none;
    transform: translate(2px, 2px);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 1);
    transition: all 0.3s ease;
  }
`

const UserList = () => {
  const {users, setUsers} = useUser();
  return (
    <Body>
      <Header>
        <Link to="/user">
          <Register>
            회원 등록
          </Register>
        </Link>
      </Header>
      <Wrapper>
        {users.map((user) => (
          <Link key={user.index} to={`/user/${user.id}`} style={{ color: 'inherit', textDecoration: 'none' }} state={{user}}>
              <UserCard
                user={user}
                />
          </Link>
        ))}
      </Wrapper>
    </Body>
  )
}

export default UserList