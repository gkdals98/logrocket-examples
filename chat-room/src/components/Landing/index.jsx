import { Link } from 'react-router-dom'
import { chatRooms } from '../../data/chatRooms'
import './styles.css'
// Chat Room Topic List Page
function Landing () {
    return (
        <>
            <h2>Choose a Chat Room</h2>
            <ul className="chat-room-list">
                {chatRooms.map((room) => {
                    return (
                        <li key={room.id}>
                            <Link to={`/room/${room.id}`}>{room.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export { Landing }