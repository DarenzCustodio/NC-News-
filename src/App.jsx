import Homepage from './components/Homepage'
import { Route , Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleManager from './components/ArticleManager';
import CommentManager from './components/CommentManager';
import Header from './components/Header';
import NavBar from './components/NavBar';
import UserManager from './components/UserManager';
import { UserProvider } from './components/UserProvider';


function App() {
  
  return (
    <UserProvider >
    <Header />
    <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" 
        element=
        {<>
          <ArticleManager /> <CommentManager /> 
        </>} />
        <Route path="/users" element={<UserManager /> } />
      </Routes>
    </UserProvider>
   )
}

export default App
