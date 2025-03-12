// JSX contains simple HTML without CSS (CSS will be added later)
function Message(props) {
    return (
      <div>
        <div>
            <img src={props.message.avatar} width="20px"></img> &nbsp;
            {props.message.user_id}
        </div>
        <div>
            {props.message.text}
        </div>
      </div>  
    )
}

function EmptyMessageList() {
    return (                
        <span>
            No messages yet
        </span>
    )
}

function MessageList({ messages }) {
    if (messages.length === 0) {
        return <EmptyMessageList />;
    }

    return messages.map((message) => <Message key={message.id} message={message} />);
}


export default MessageList;