import React, {Component} from 'react';
import bookmark from './tag.png';
import logo from './logo.svg';
import './App.css';
class AuthorInfoComponent extends Component {
    render() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const monthNum = parseInt(this.props.date.substring(5,7));
        const month = months[monthNum-1];
        const day = this.props.date.substring(8,10).replace(/^0+/,'');
    
        return (
            <div class="author-info">
                <img src={this.props.authImg} id="auth-img"/>
                <div id="auth-details">
                    <div>{this.props.author}</div>
                    <div>{`${month} ${day}`}</div>
                    <div>{`${this.props.readTime} min read `}</div>
                </div>
                <img src={logo} class="bookmark" />
            </div>
        );
    }
}

export default AuthorInfoComponent;