import { Link, useParams } from 'react-router-dom'
import { chatRooms } from '../../data/chatRooms'
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
                {/* TODO */}
            </div>
        </>
    )
}

export { ChatRoom }