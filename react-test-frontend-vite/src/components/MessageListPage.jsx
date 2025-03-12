import MessageList from "./MessageList";

function MessageListPage({ messages }) {
    return (
        <div>
            <h3>Not Twitter</h3>
            <div>
                Unread: {messages.length}
            </div>
            <div align="left">
                <MessageList messages={messages}></MessageList>
            </div>
            <div>
                <a href="compose" role="button">
                    +
                </a>
            </div>
        </div>

    );
}

export default MessageListPage;