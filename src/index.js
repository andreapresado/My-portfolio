//mise en place des import createRoot et css
import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss'
//après avoir préparé la const App l'importer 
import App from './components/App';

//on crée la const du contenant en allant récupéré le document html avec 'document' puis avec getElementById on récupère le nom de id
const container = document.getElementById('App');

//on crée la const qui permettra la connexion qui contiendra notre container #app.
const root = createRoot(container);

//et on renvoi le rendu du composant App
root.render(<App />)