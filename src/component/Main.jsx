import React from 'react'
import './Main.css'

export const main = () => {
    const Main = () =>{
        const user = {
            name:'liz',
            isLogin : true
        }
        if(user.isLogin){
            return <button className='logout'>로그아웃</button>
        } else{
            return <button className='login'>로그인</button>
        }
    }
}
