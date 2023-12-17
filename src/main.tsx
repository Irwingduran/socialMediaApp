import ReactDOM from 'react-dom/client';
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)