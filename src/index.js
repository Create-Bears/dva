import dva from 'dva'
import './index.css'
import App from './components/App'
// 1. Initialize
const app = dva()

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/login').default);
app.model(require('./models/allList').default);


// 4. Router
app.router(App)

// 5. Start
app.start('#root')
