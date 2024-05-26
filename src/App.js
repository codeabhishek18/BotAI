import './App.css';
import { ChatProvider } from './contextapi/ChatContext';
import { ThemeProvider } from './contextapi/ThemeContext';
import { SnackbarProvider } from 'notistack'
import Home from './pages/homepage/Home';

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <ThemeProvider>
          <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
            <Home/>
          </SnackbarProvider>
        </ThemeProvider>
      </ChatProvider>
    </div>
  );
}

export default App;
