import React, {Component} from 'react';

class ArticleInfoComponent extends Component {
    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <div>{this.props.descr}</div>
            </div>
        );
    }
}

export default ArticleInfoComponent;