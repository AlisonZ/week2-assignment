import React, {Component} from 'react';
import bookmark from './tag.png';

class AuthorDetailsComponent extends Component {
    render() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const monthNum = parseInt(this.props.date.substring(5,7));
        const month = months[monthNum-1];
        const day = this.props.date.substring(8,10).replace(/^0+/,'');
    
        return (
            <div>
                <img src={this.props.authImg} />
                <div>{this.props.author}</div>
                <div>{`${month} ${day}`}</div>
                <div>{this.props.readTime}</div>
                <img src={bookmark} />
            </div>
        );
    }
}

export default AuthorDetailsComponent;