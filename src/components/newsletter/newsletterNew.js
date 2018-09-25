import React, { Component } from 'react';
import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields, button) => {
        // console.log(button);
        // if(button == "submit") {
        //     //save new newsletter on the backend
        //     console.log('trying to submit to backend')
        // }
        this.props.history.push('/dashboard')
    }
    
    onCancel = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className="new-newsletter">
                <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default NewNewsletter;