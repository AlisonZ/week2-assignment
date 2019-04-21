import React, {Component} from 'react';
import AuthorInfoComponent from './AuthorInfoComponent';
import ArticleInfoComponent from './ArticleInfoComponent';

class ArticleInfoContainer extends Component {
    render() {
        return (
            <div class="display">
                <ArticleInfoComponent title={this.props.title} descr={this.props.descr}/>
                <AuthorInfoComponent class="autor-info" authImg={this.props.authImg} author={this.props.author} date={this.props.date} readTime={this.props.readTime} />
            </div>
        );
    }
}

export default ArticleInfoContainer;