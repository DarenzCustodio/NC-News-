import { useState, useEffect } from 'react'
import Homepage from './components/Homepage'
import { Route , Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import { getArticles } from '../api';
import IndividualArticle from './components/ArticleInfo';


function App() {
const [articles, setArticle] = useState()
const [loading, setLoading] = useState(true)

useEffect(()=>{
  getArticles()
  .then((response)=>{
    setArticle(response.data)
    setLoading(false)
  })
  .catch((err)=>{
    console.log(err);
  })
}, [])

if(loading){
  return (
    <p>page loading...</p>
  )
}else{
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<ArticleList articles={articles} />} />
        <Route path="/articles/:article_id" element={<IndividualArticle articles={articles}/>} />
      </Routes>
    </>
   )
}
}

export default App
