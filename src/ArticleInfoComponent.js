import React, {Component} from 'react';

class ArticleInfoComponent extends Component {
    render() {
        return (
            <div class="article-descr">
                <div class="article-info-title">{this.props.title}</div>
                <div>{this.props.descr}</div>
            </div>
        );
    }
}

export default ArticleInfoComponent;