import React, {Component} from 'react';

class ArticleInfoComponent extends Component {
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