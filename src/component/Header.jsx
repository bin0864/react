import React from 'react'

const Header = () => {
    const isLoggedIn=false
  return (
    <div>Header
        <p>
            {isLoggedIn ? 
            <strong>hello</strong>:
            <strong>goodbye</strong>}
        </p>
    </div>
  )
}

export default Header