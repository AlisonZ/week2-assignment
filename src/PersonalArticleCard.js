import React, {Component} from 'react';
import ArticleInfoContainer from './ArticleInfoContainer';

class PersonalArticleCard extends Component {
    render() {
        return(
            <div>
                <img src={this.props.img} />
                <ArticleInfoContainer title={this.props.title} descr={this.props.descr} authImg={this.props.authImg} author={this.props.author} date={this.props.date} readTime={this.props.readTime}/>
            </div>
        );
    }
}

export default PersonalArticleCard;



