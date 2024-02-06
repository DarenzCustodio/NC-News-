import Homepage from './components/Homepage'
import { Route , Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleInfo from './components/ArticleInfo';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticleInfo />} />
      </Routes>
    </>
   )
}


export default App
