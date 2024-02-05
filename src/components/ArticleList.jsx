import ArticleCard from "./ArticleCard";

export default function ArticleList({articles}){

    return (
        <>
            <h2>Article List: </h2>
            <div>{
            articles && articles.article && <ArticleCard articles={articles} />} 
            </div>
        </>
    )
}