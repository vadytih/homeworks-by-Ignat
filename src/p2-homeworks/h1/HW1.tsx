import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Мама',
    message: 'У меня для тебя есть сюрприз, как поешь скажу где твой ноутбук спрятан.',
    time: '22:00',

}

const messageDatalLast = {
    avatar: 'https://pp.userapi.com/c834200/v834200414/e2d7b/1wo3NKZnh0s.jpg',
    name: '999 Evol 666',
    message: 'Мама, можно я не буду есть суп?енеаенанеаенанеанеа',
    time: '22:01',
}


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={messageDatalLast.avatar}
                name={messageDatalLast.name}
                message={messageDatalLast.message}
                time={messageDatalLast.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
