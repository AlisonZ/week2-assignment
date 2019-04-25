import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ArticleInfoComponent extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        descr: PropTypes.string.isRequired,
    }
    render() {
        return (
            <div class="article-descr">
                <div class="primary-text">{this.props.title}</div>
                <div class="article-info-descr secondary-text">{this.props.descr}</div>
            </div>
        );
    }
}

export default ArticleInfoComponent;