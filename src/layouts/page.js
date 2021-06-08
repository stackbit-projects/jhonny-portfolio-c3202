import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';

export default class Page extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const image = _.get(page, 'image');
        const imageAlt = _.get(page, 'image_alt', '');
        const markdownContent = _.get(page, 'markdown_content');

        return (
            <Layout page={page} config={config}>
                <div className="inner outer">
                    <article className="post post-full">
                        <header className="post-header inner-sm">
                            <h1 className="post-title line-top">{title}</h1>
                            {subtitle && <div className="post-subtitle">{htmlToReact(subtitle)}</div>}
                        </header>
                        {image && (
                            <div className="post-image">
                                <img src={withPrefix(image)} alt={imageAlt} />
                                <p className="avatar-name">Jhonny Alberto</p>
                                <p className="avatar-skill">React | Node JS</p>                                
                            </div>
                        )}
                        <div className="post-content inner-sm">
                            <p className="post-contact">contact me on <a href="#">upwork</a></p>
                            <p>My passion is making ideas come to life, be it working solo, as part of a team or leading a team of fellow developers.

Throughout my 5 years of development experience, I worked everywhere from startups to big companies, building products from the ground up or implementing new features.

Also relevant to my set of skills is that - previously to becoming a developer - I worked as product manager for some of the biggest tech companies in the world, which still helps me to have a more holistic view of the whole work that goes into making a successful product.

My go-to technologies are React and Node.js, and I have completed a wide range of projects using them. Those are not the only two libraries/frameworks I'm familiar with though, and I'm always happy to discuss my client's needs and find the best solutions for them.

I consider myself creative and hardworking, as my stats show. If you liked my profile so far, drop me a message and we'll discuss how I can be useful to your project.</p>
                        </div>
                        {/* {markdownContent && <div className="post-content inner-sm">{markdownify(markdownContent)}</div>} */}
                    </article>
                </div>
            </Layout>
        );
    }
}
