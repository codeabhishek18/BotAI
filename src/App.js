import './App.css';
import { ChatProvider } from './contextapi/ChatContext';
import Home from './pages/homepage/Home';
import { SnackbarProvider } from 'notistack'

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
          <Home/>
        </SnackbarProvider>
      </ChatProvider>
    </div>
  );
}

export default App;
