
import { Toaster } from 'sonner';
import AppRouter from './routes'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <AppRouter />
      <Toaster richColors position="top-right" />
    </BrowserRouter>
  );
}

export default App
