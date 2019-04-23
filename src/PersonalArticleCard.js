import React, {Component} from 'react';
import ArticleInfoContainer from './ArticleInfoContainer';
import './App.css';

class PersonalArticleCard extends Component {
    render() {
        return(
            <div class="personal-article-card">
                <img src={this.props.img} class="article-image" alt=""/>
                <ArticleInfoContainer title={this.props.title} descr={this.props.descr} authImg={this.props.authImg} author={this.props.author} date={this.props.date} readTime={this.props.readTime} class="article-info-container"/>
            </div>
        );
    }
}

export default PersonalArticleCard;



