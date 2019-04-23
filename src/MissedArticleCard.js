import React, {Component} from 'react';
import ArticleInfoContainer from './ArticleInfoContainer';


class MissedArticleCard extends Component {
    render() {
        return(
            <div class="missed-card card-display">
                <img src={this.props.img} class="missed-article-image"/>
                <ArticleInfoContainer title={this.props.title} descr={this.props.descr} authImg={this.props.authImg} author={this.props.author} date={this.props.date} readTime={this.props.readTime} class="missed-article-details"/>
            </div>
        );
    }
}

export default MissedArticleCard;