import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addMessage } from "../messages";


function NewMessagePage() {
    const navigate = useNavigate();
    const messageText = useRef(null);

    function publishNewMessage() {
        addMessage({
            "id": crypto.randomUUID(),
            "user_id": "sampleUser123",
            "avatar": "person-circle.svg",
            "text": messageText.current.value
        });
        navigate("/");
    }

    return (
        <>
            <textarea
                ref={messageText}
                id="message-text">
            </textarea>
            <br />
            <button onClick={publishNewMessage}>Submit</button>

        </>);
}

export default NewMessagePage;