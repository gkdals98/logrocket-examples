import { Link, useParams } from 'react-router-dom'
import { chatRooms } from '../../data/chatRooms'
import { MessageInput } from '../MessageInput'
import { MessageList } from '../MessageList'
import './styles.css'

function ChatRoom() {
    //get routes param. this case, we get param id in route /room/:id which we define in AuthenticatedApp. 
    const params = useParams()

    const room = chatRooms.find((x) => x.id === params.id)

    if(!room){
        //404
    }

    return (
        <>
            <h2>{room.title}</h2>
            <div>
                <Link to='/'>Back to room list</Link>
            </div>
            <div className="messages-container">
                <MessageList roomId={room.id}/>
                <MessageInput roomId={room.id}/>
            </div>
        </>
    )
}

export { ChatRoom }