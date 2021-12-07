import React from 'react'
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={s.chat}>
            <img alt={''} src={props.avatar}/>
            <div className={s.message}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message_content}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
