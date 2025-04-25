import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import { useUser } from './UserContext'
import useInput from './customHook/useInput'
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

const HiddenImage = styled.input`
  display:none;
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

const Reset = styled.button`
  border: none;
  background: none;
  color:#b0b0b0;
  font-size: 15px;
  position : absolute;
  right: 50px;

  &:focus{
    outline: none;
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

const UserRegistration = () => {
  const { users, setUsers } = useUser();
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const name = useInput('');
  const id = useInput('');
  const password = useInput('');
  const phone = useInput('');
  const passwordCheck = useInput('');
  const address = useInput('');
  const age = useInput('');
  const info = useInput('');
  const [passwordError, setPasswordError] = useState(false);
  const newUser = {
    index: Date.now(),
    id: id.value,
    name: name.value,
    age: age.value,
    phone: phone.value,
    password: password.value,
    address: address.value,
    info: info.value,
    image: preview,
  }
  
  const handleSubmit = () => {
    setUsers([...users, newUser]);
  }

  const handleClick = () => {
    fileInputRef.current.click(); 
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file); 

    reader.onload = () => {
      setPreview(reader.result); 
    };
  };

  const handleReset = () => {
  };

  const handlePasswordCheck = (e) => {
    setPasswordError(passwordCheck.value === password.value);
  }

  return (
    <Body>
      <Wrapper>
        <HiddenImage
          type="file"
          accept="image/*"
          ref={fileInputRef}
          />
        <Image 
          src={preview || "/src/images/default.png"} 
          alt="미리보기"
          onClick={handleClick}
          />
          
          <Form onSubmit={handleSubmit}>
            <Floot>
            {passwordCheck.value ? (
              passwordError ? (
                <span style={{ color: 'lightgreen' }}>비밀번호가 일치합니다</span>
              ) : (
                <span style={{ color: 'red' }}>비밀번호가 일치하지 않습니다</span>
              )
            ) : (
              ""
            )}
            </Floot>
            <Line>
              <Title>
                이름
              </Title>
              <Input {...name} required/>
            </Line>
            <Line>
              <Title>
                아이디
              </Title>
              <Input {...id} required/>
            </Line>
            <Line>
              <Title>
                비밀번호
              </Title>
              <Input type='password' {...password} required/>
            </Line>
            <Line>
              <Title>
                비밀번호 확인
              </Title>
              <Input 
                type='password' 
                {...passwordCheck} 
                required 
                />
            </Line>
            <Line>
              <Title>
                주소
              </Title>
              <Input {...address} required/>
            </Line>
            <Line>
              <Title>
                나이
              </Title>
              <Input {...age} required/>
            </Line>
            <Line>
              <Title>
                연락처
              </Title>
              <Input {...phone} required/>
            </Line>
            <Line style={{height:"100px"}}>
              <Title>
                자기소개
              </Title>
              <Textarea {...info}/>
            </Line>
            <Footer>
              <Submit
                type='submit'>
                회원 등록
              </Submit>
              <Reset
                type='reset'
                onClick={handleReset}>
                Reset ...
              </Reset>
            </Footer>
          </Form>
      </Wrapper>
    </Body>
  )
}

export default UserRegistration