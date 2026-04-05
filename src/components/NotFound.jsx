import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h2>페이지를 찾을 수 없습니다</h2>
      <Link to='/'>
        <button>메인 홈</button>
      </Link>
    </>
  )
}

export default NotFound