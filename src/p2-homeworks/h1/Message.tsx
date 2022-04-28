import React from 'react'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className="message">
            <div className="message__avatar">
                <img src={props.avatar}/>
            </div>


            <div className="message__wrapp">
                <div className="message__name">
                    {props.name}
                </div>
                <div className="message__text-box">
                    <div className="message__text">
                        {props.message}
                    </div>
                </div>
                <div className="message__time">
                    {props.time}
                </div>
                <div className="message__triangle"></div>
                <div className="message__ball"></div>

            </div>
        </div>
    )
}

export default Message
