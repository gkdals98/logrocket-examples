import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { sendMessage } from '../../services/firebase'
import './styles.css'

function MessageInput({roomId}) {
    const { user } = useAuth()
    const [message,setMessage] = React.useState('');

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        sendMessage(roomId, user, message)
        setMessage('')
    }

    return (
        <form onSubmit={handleSubmit} className="message-input-container">
            <input
                type="text"
                placeholder="Enter a message"
                value={message}
                onChange={handleChange}
                className="message-input"
                required
                minLength={1}
            />
            <button type="submit" disabled={message < 1} className="send-message">
                Send
            </button>
        </form>
    )
}
export {MessageInput}