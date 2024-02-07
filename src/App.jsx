import Homepage from './components/Homepage'
import { Route , Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleManager from './components/ArticleManager';
import CommentManager from './components/CommentManager';
import Header from './components/Header';
import NavBar from './components/NavBar';


function App() {
  
  return (
    <>
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
      </Routes>
    </>
   )
}

export default App
