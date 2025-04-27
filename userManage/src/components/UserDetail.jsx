import { useLocation, useNavigate  } from 'react-router-dom'
import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import { useUser } from './UserContext'
const Body = styled.div`
  background :  linear-gradient(135deg, #EA5C54 0%, #bb6dec 100%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items:center;
  `

const Wrapper = styled.div`
  border-top: 3px solid red;
  background :  #242734;
  width: 400px;
  height: 700px;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
  margin: 20px 0px;
  color: #afb1be;
`

const Image = styled.img`
  margin-top:20px;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  padding: 0, auto;
`

const Line  = styled.div`
  width:100%;
  border:2px solid #393d52;
  box-sizing: border-box;
  background: #32364a;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ::placeholder {
  color: #b0b0b0;
  font-size: 14px;
  }
`

const Input = styled.input`
height:100%;
width:75%;
background: none;
border:none;
border-left: 1px solid #424557;
color:#b0b0b0;
font-size: 20px;
letter-spacing: 2px;
&:focus {
  outline: none; /* 포커스 시 외곽선 제거 */
  background: #4a4c5a;
}
`

const Form = styled.form`
width: 100%;
`

const Title =styled.div`
width: 25%;
`

const Footer = styled.div`
height:100px;
width: 100%;
display: flex;
align-items:center;
position: relative;
justify-content: space-around;
`

const Submit = styled.button`
width: 150px;
height: 50px;
background: none;
border: 3px solid #DC6180;
border-radius: 50px;
position : absolute;
left: 20px;
color: #DC6180;

&:hover{
  background: #424557;
  border: 3px solid #c78595;
}
`

const Delete = styled.button`
width: 150px;
height: 50px;
background: none;
border: 3px solid #DC6180;
border-radius: 50px;
position : absolute;
right: 20px;
color: #DC6180;

&:hover{
  background: #424557;
  border: 3px solid #c78595;
}
`

const Textarea = styled.textarea`
  width:75%;
  height:100%;
  background: none;
  color:#b0b0b0;
  resize: none;
  border:2px solid #393d52;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 600;
  &:focus{
    outline: none;
  }
    &:hover{
    background: #424557;
  }
`

const Floot = styled.div`

`


const UserDetail = () => {
  const location = useLocation();
  const {users, setUsers} = useUser();
  const { user } = location.state
  const [imgSrc, setImgSrc] = useState(user.image);
  const navigate = useNavigate();

  const handleClick = () => {
    fileInputRef.current.click(); 
  };

  const goToList = () => {
    navigate('/');
  };

  const handleDelete = () => {
    const updatedUsers = users.filter((u) => u.id !== user.id);
    setUsers(updatedUsers); 
    navigate('/');
  }
    return (
    <Body>
      <Wrapper>
        <Image 
          src={user.image || "/src/images/default.png"} 
          alt="미리보기"
          onClick={handleClick}
          />
          
          <Form>
            <Line>
              <Title>
                이름
              </Title>
              <Input value={user.name} readOnly/>
            </Line>
            <Line>
              <Title>
                아이디
              </Title>
              <Input value={user.id} readOnly/>
            </Line>
            <Line>
              <Title>
                주소
              </Title>
              <Input value={user.address} readOnly/>
            </Line>
            <Line>
              <Title>
                나이
              </Title>
              <Input value={user.age} readOnly/>
            </Line>
            <Line>
              <Title>
                연락처
              </Title>
              <Input value={user.phone} readOnly/>
            </Line>
            <Line style={{height:"100px"}}>
              <Title>
                자기소개
              </Title>
              <Textarea value={user.info}/>
            </Line>
            <Footer>
              <Submit type="button" onClick={goToList}>
                목록으로
              </Submit>
              <Delete type="button" onClick={handleDelete}>
                삭제하기
              </Delete>
            </Footer>
          </Form>
      </Wrapper>
    </Body>
  )
}

export default UserDetail