import React, { Component } from 'react';
import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';

class NewsletterGrid extends Component {
    render() {

        const latest = {
            _id: '1235',
            title: 'Happy Holidays',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat, arcu eu scelerisque venenatis, orci libero ultrices felis, id pulvinar massa libero ac risus. In convallis suscipit luctus. Phasellus tincidunt augue a erat congue lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque tempus ante quis urna fermentum, eu aliquet quam aliquet. Fusce maximus vehicula lectus at interdum. Nullam nibh risus, dictum ut sodales in, placerat in odio. Proin rhoncus diam id scelerisque congue. Fusce quis rutrum eros. Vivamus vel eros eget tortor ultricies lacinia nec quis sapien. Etiam at porta orci. Nulla facilisi. Quisque vestibulum blandit augue vitae mollis. Nulla a malesuada quam. Phasellus nulla lorem, blandit quis tempor elementum, consequat id ipsum. Sed at semper nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec tempus nulla non lorem accumsan, id vestibulum nunc accumsan. Mauris id efficitur quam. Ut porttitor leo velit, eu feugiat mi hendrerit in. Aliquam erat volutpat. Mauris ligula ipsum, volutpat ut viverra et, volutpat sed tellus. Mauris at metus ut massa mattis iaculis. Sed quis ipsum id dui blandit varius. Vivamus auctor ante vitae nibh commodo consequat. Maecenas nunc erat, eleifend ac imperdiet id, tincidunt sed elit. Phasellus euismod vestibulum nisl nec mollis. Nunc a placerat lorem. Praesent ultricies nisi ex, non mollis mi efficitur a. Nulla eu metus a lectus congue efficitur. Donec porttitor mi vitae lorem placerat, ut tempus lectus lobortis. Aenean convallis suscipit ex, in pharetra leo. Maecenas ac eleifend justo, eget euismod ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(),
            imageUrl: "http://via.placeholder.com/960x258"
        }

        return (
            <div className="newsletter-grid">
                {/* add button */}
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid;