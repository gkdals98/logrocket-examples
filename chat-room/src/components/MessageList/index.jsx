import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useMessages } from '../../hooks/useMessages'
import './styles.css'

function MessageList({roomId}) {
    const containerRef = React.useRef(null)
    const { user } = useAuth()
    const messages = useMessages(roomId)

    React.useLayoutEffect(() => {
        if(containerRef.current) {
            containerRef.current.scrollToop = containerRef.current.scrollHeight
        }
    })

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
                {messages.map((message) => (
                    <Message
                        key={message.id}
                        message={message}
                        isOwnMessage={message.uid === user.uid}
                    />
                ))}
            </ul>
        </div>
    )
}
function Message ({message, isOwnMessage}) {
    const { displayName, text } = message 
    return (
        <li className={['message', isOwnMessage && 'own-message'].join(' ')}>
            <h4 className="sender">{isOwnMessage ? 'You' : displayName}</h4>
            <div>{text}</div>
        </li>
    )
}

export { MessageList }