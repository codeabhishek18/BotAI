import './App.css';
import { ChatProvider } from './contextapi/ChatContext';
import Home from './pages/homepage/Home';

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <Home/>
      </ChatProvider>
    </div>
  );
}

export default App;
