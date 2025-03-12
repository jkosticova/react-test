import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// npm install react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MessageListPage from './components/MessageListPage.jsx';
import NewMessagePage from './components/NewMessagePage.jsx';
import { MESSAGES_STORAGE_KEY, SAMPLE_MESSAGES } from './data/sample_messages.jsx';

localStorage.removeItem(MESSAGES_STORAGE_KEY);
localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(SAMPLE_MESSAGES));

const router = createBrowserRouter([
  {
    path: "/",    
    element: <App>
      <MessageListPage></MessageListPage>
    </App>
  },
  {
    path: "/compose",
    element: <App>
      <NewMessagePage></NewMessagePage>
    </App>
  }
])

// use the ReactDOM API to render the root component of a React application (<App />) 
// into a specific DOM element on the page (identified by id="root").
// <StrictMode> = a wrapper component that adds extra development-time checks
//           - production build is not affected
createRoot(document.getElementById('root')).render(  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
