import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react"
import '/Users/darenz/northcoders/Front-end-portfolio-project/NC-News/styling/ArticleList.css'
import { getArticles } from "../../api"

export default function ArticleList(){

    const [articles, setArticles] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      getArticles()
      .then((response)=>{
        setArticles(response.data)
        setLoading(false)
    })
    .catch((err)=>{
        console.log(err);
    })
    }, [])

    if (loading) return <p>page loading...</p>
    else{
    return (
        <>
            <h2 className="articleListHeader">Article List</h2>
            <div>
                <ArticleCard articles={articles} />
            </div>
        </>
        )
    }
}