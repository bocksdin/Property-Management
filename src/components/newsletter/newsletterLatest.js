import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import Button from '../button';

class NewsletterLatest extends Component {

    handleEdit = () => {
        this.props.history.push(`/newsletter/edit/${this.props._id}`);
    }

    render() {
        const { title, body, imageUrl } = this.props;
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>{title}</h1>
                <img className="newsletter-latest__image" src={imageUrl}/>
                <Button className="newsletter-latest__button" callback={() => this.handleEdit()} icon='fas fa-pencil-alt'/>
                <div className="newsletter-latest__body">
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { newsletters } = state.newsletters;
    const latestNewsletter = newsletters[0];
    return {
        ...latestNewsletter
    }
}

export default connect(mapStateToProps)(NewsletterLatest);