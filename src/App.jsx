import { useState, useEffect } from 'react'
import Homepage from './components/Homepage'
import { Route , Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import { getArticles } from '../api';


function App() {
const [articles, setArticle] = useState()

useEffect(()=>{
  getArticles()
  .then((response)=>{
    setArticle(response.data)
  })
  .catch((err)=>{
    console.log(err);
  })
}, [])


  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticleList articles={articles} />} />
      </Routes>
    </>
  )
}

export default App
