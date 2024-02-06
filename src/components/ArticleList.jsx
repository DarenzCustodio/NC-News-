import ArticleCard from "./ArticleCard";
import '/Users/darenz/northcoders/Front-end-portfolio-project/NC-News/styling/ArticleList.css'

export default function ArticleList({articles}){

    return (
        <>
            <h2 className="articleListHeader">Article List</h2>
            <div>{
            articles && articles.article && <ArticleCard articles={articles} />} 
            </div>
        </>
    )
}