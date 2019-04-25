import React, {Component} from 'react';
import AuthorInfoComponent from './AuthorInfoComponent';
import ArticleInfoComponent from './ArticleInfoComponent';
import PropTypes from 'prop-types';

class ArticleInfoContainer extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        descr: PropTypes.string.isRequired,
        authImg: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        readTime: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div class="display">
                <ArticleInfoComponent title={this.props.title} descr={this.props.descr} />
                <AuthorInfoComponent authImg={this.props.authImg} author={this.props.author} date={this.props.date} readTime={this.props.readTime} />
            </div>
        );
    }
}

export default ArticleInfoContainer;