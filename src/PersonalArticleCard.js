import React, {Component} from 'react';
import ArticleInfoContainer from './ArticleInfoContainer';
import './App.css';
import PropTypes from 'prop-types';

class PersonalArticleCard extends Component {
    static propTypes = {
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        descr: PropTypes.string.isRequired,
        authImg: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        readTime: PropTypes.string.isRequired,
    }

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



