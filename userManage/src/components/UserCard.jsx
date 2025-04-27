import React, {useState} from 'react'
import styled from 'styled-components'
import { useUser } from './UserContext'

const Card = styled.div`
  background: #fff;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  margin-top: 40px;
  box-shadow:10px 10px 20px rgba(0, 0, 0, 0.3);
  display: flex; /* Flexbox로 설정 */
  flex-direction: column; /* 수직으로 배치 */
  align-items: center;
  justify-content: space-between;
  &:hover{
    box-shadow:none;
    transform: translate(2px, 2px);
    box-shadow: 0 0 5px 2px rgba(255, 255, 255, 1);
    transition: all 0.3s ease;
  }
`

const Head = styled.div`
  color: black;
  font-weight: 600;
  width: 100%;
  border-bottom: 1px solid #333333;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center; 
`

const Image = styled.img`
  margin-top:20px;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  padding: 0, auto;
`

const Name = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: #006199;
`
const Phone = styled.div`
  margin-bottom: 10px;
`
const Address = styled.div`
  
`
const Age = styled.div`
  font-weight: 700;
`
const Info = styled.div`
  text-decoration: underline;
  height: 30px;
`

const UserCard = ({ user }) => {
  const [imgSrc, setImgSrc] = useState(user.image);

  return (
    <Card>
      <Head>
        {user.id}
      </Head>
      <Image 
        src={imgSrc || '/src/images/default.png'} 
        alt={`${user.name}의 이미지`}
        />
      <Name>
        {user.name}
      </Name>
      <Info>
        {user.info}
      </Info>
      <Age>
        나이 : {user.age}
      </Age>
      <Address>
        <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_22_4991)">
          <path d="M11.5 5C11.5 8 7 11.5 7 11.5C7 11.5 2.5 8 2.5 5C2.5 2.549 4.549 0.5 7 0.5C9.451 0.5 11.5 2.549 11.5 5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 6.5C7.82843 6.5 8.5 5.82843 8.5 5C8.5 4.17157 7.82843 3.5 7 3.5C6.17157 3.5 5.5 4.17157 5.5 5C5.5 5.82843 6.17157 6.5 7 6.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.0773 10H12L13.5 13.5H0.5L2 10H2.9227" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_22_4991">
          <rect width="20" height="20" fill="white"/>
          </clipPath>
          </defs>
          </svg>       {user.address}
      </Address>
      <Phone>
        <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_22_8764)">
          <path d="M5.24782 12.9817C4.63328 13.3781 3.90097 13.5509 3.17402 13.471C2.44708 13.391 1.76983 13.0632 1.25617 12.5426L0.807105 12.1035C0.610232 11.9021 0.5 11.6317 0.5 11.3501C0.5 11.0685 0.610232 10.798 0.807105 10.5967L2.71312 8.71061C2.91281 8.51437 3.18158 8.40441 3.46156 8.40441C3.74153 8.40441 4.01031 8.51437 4.20999 8.71061C4.41136 8.90749 4.6818 9.01772 4.96342 9.01772C5.24504 9.01772 5.51547 8.90749 5.71684 8.71061L8.71058 5.71687C8.81045 5.61845 8.88976 5.50116 8.94389 5.37182C8.99802 5.24248 9.0259 5.10366 9.0259 4.96345C9.0259 4.82323 8.99802 4.68442 8.94389 4.55507C8.88976 4.42573 8.81045 4.30844 8.71058 4.21002C8.51434 4.01034 8.40438 3.74156 8.40438 3.46159C8.40438 3.18161 8.51434 2.91284 8.71058 2.71315L10.6066 0.817115C10.808 0.620241 11.0784 0.51001 11.36 0.51001C11.6417 0.51001 11.9121 0.620241 12.1135 0.817115L12.5526 1.26618C13.0731 1.77984 13.4009 2.45709 13.4809 3.18403C13.5609 3.91098 13.3881 4.64329 12.9916 5.25783C10.9259 8.3022 8.29751 10.9238 5.24782 12.9817Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_22_8764">
          <rect width="20" height="20" fill="white"/>
          </clipPath>
          </defs>
          </svg>      {user.phone}
      </Phone>
    </Card>
  )
}

export default UserCard