import React, {Component} from 'react';
import missedArticles from './missed-articles.json';
import MissedArticleCard from './MissedArticleCard'

class MissedListContainer extends Component {
    render() {
        console.log('missed', missedArticles);
        const missedArticleSuggestions = missedArticles.map((article, index) => <MissedArticleCard title={article.title} descr={article.description} img={article.image} authImg={article.author.image} author={article.author.name} date={article.postedDate} readTime={article.minutesToRead} key={index} />);

        return (
            <div>
                <div class="header primary-text">In case you missed it</div>
                <div class="missed-container"> 
                    {missedArticleSuggestions}
                </div>
            </div>
        );
    }
}

export default MissedListContainer;