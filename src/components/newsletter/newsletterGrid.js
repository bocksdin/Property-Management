import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

class NewsletterGrid extends Component {

    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new')
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.fetchNewsletters();
        }, 1000);        
    }

    render() {

        return (
            <div className="newsletter-grid">
                <Button className="newsletter-grid__button" callback={() => this.handleAddNewsletter()} icon="fas fa-plus"/>
                <NewsletterBox/>
                <NewsletterArchive/>
                <NewsletterLatest history={this.props.history}/>
            </div>
        )
    }
}

export default connect(null, actions)(NewsletterGrid);