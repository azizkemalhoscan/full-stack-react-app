import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class ReactMarkdownExample extends Component {
    render() {
        const {inputdesc} = this.props;
        const { input } = this.props;
        return(

            <ReactMarkdown source={input} />
        )
    }
}

export default ReactMarkdownExample;