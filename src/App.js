import logo from './logo.svg';
import './App.css';
import { routes } from './routes';
import { Image, Layout } from 'antd';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Content, Header } from 'antd/es/layout/layout';


function App() {
  return (
    <Layout className="App">
      <Header style={{
        paddingBottom: '5rem',
        background: 'white',
        borderBottom: '2px solid darkblue',
        display: 'flex',
        alignContent: 'start',
        paddingRight: '5rem',
        paddingLeft: '5rem'
      }}>
        <Image
          width={100}
          preview={false}
          src={logo}
        />
      </Header>
      <Content style={{
        background: 'white',
        paddingRight: '5rem',
        paddingLeft: '5rem'
      }}>
        <Router>
          <Routes>
            {routes}
          </Routes>
        </Router>
      </Content>
    </Layout>
  );
}

export default App;
