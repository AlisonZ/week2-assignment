import React, {Component} from 'react';
import ArticleInfoComponent from './ArticleInfoComponent';
import AuthorDetailsComponent from './AuthorDetailsComponent';

class PersonalArticleCard extends Component {
    render() {
        return(
            <div>
                <img src={this.props.img} />
                <ArticleInfoComponent title={this.props.title} descr={this.props.descr}/>
                <AuthorDetailsComponent authImg={this.props.authImg} author={this.props.author} date={this.props.date} readTime={this.props.readTime}/>
            </div>
        );
    }
}

export default PersonalArticleCard;



