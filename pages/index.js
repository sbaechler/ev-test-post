import React from 'react';
import Layout from '../components/MyLayout.js'
import { MarkdownSection } from '../components/markdown-section';

const chapters = ['00', '03'];

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const content = await Promise.all(
        chapters.map(chapter => require(`../content/${chapter}.md`)))
    return { content }
  }

  // static async getInitialProps({ req }) {
  //   const content = await require(`../content/00.md`)
  //   return { content }
  // }

  render() {
    const pages = this.props.content.map((page, i) => <MarkdownSection key={i} content={page} />);

    return (
        <Layout>
          {pages}
        </Layout>
    );
  }
}
