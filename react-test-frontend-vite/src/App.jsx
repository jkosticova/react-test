import { getMessages } from './messages'
import { cloneElement, useEffect, useState } from 'react'
import './App.css'

// functional component App
function App({ children }) {

  // "useState" hook 
  // - enables component re-rendering when the state value changes
  // - parameters
  //      state initial value ([])
  // - returns
  //      current state value (message) 
  //      state setter function (setMessage)  
  const [messages, setMessages] = useState([]);

  // "useEffect" hook
  // - enables side effects after the component renders
  //   (fetching data, subscribing to a service, timer, ... )
  // - parameters
  //      effect function
  //      dependency array (optional)
  //           - not provided - hook runs after each re-render
  //           - empty [] - hook runs only ONCE after the first render (component mount)
  //           - nonempty - hook runs after the first render and then if some of the dependencies changes  
  // - returns
  //       cleanup function (optional)   
  useEffect(() => {
    setMessages(getMessages());
    const fetchMessagesInterval = setInterval(() => {
      setMessages(getMessages()); // messages are refreshed each second
    }, 1000);
    return () => clearInterval(fetchMessagesInterval); // cleanup when the component unmounts
  }, []);  

  return cloneElement(children, { "messages": messages });
}

// export the App component so that it can be imported and used in other files
export default App;
