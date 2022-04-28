import React from 'react'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: MessageType) {
    return (
        <div className="message-alt">


            <div className="message-alt__wrapp">
                <div className="message__name">
                    {props.name}
                </div>
                <div className="message-alt__text-box">
                    <div className="message__text">
                        {props.message}
                    </div>
                </div>
                <div className="message__time">
                    {props.time}
                </div>
                <div className="message-alt__triangle"></div>
                <div className="message-alt__ball"></div>

            </div>
            <div className="message-alt__avatar">
                <img src={props.avatar}/>
            </div>
        </div>
    )
}

export default AlternativeMessage
