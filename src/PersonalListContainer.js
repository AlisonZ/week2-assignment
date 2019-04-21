import React, {Component} from 'react';
import PersonalArticleCard from './PersonalArticleCard';
import yourArticles from './your-articles.json';


class PersonalListContainer extends Component {
    render() {
        //map through the yourArticles to make the vars passed below as props
        const personalArticles = yourArticles.map((article, index) => <PersonalArticleCard title={article.title} descr={article.description} img={article.image} authImg={article.author.image} author={article.author.name} date={article.postedDate} readTime={article.minutesToRead} key={index}/>);

        return (
            <div>
                <div>For you</div>
                <ul>{personalArticles}</ul>
            </div>
        );
    }
}

export default PersonalListContainer;