import React from 'react'
import marked from 'marked'

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
})

export const MarkdownSection = ({ content }) => (
    <section>
      <div dangerouslySetInnerHTML={{__html: marked(content)}} />
    </section>
)
