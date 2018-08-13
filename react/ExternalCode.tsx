import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'render'

interface ExternalCodeProps {
  stylesheet: [{
    url: string
  }]
  javascript: [{
    url: string
  }]
}

class ExternalCode extends React.Component<ExternalCodeProps, any> {
  static displayName = 'External Code'
  static schema = {
    title: 'editor.externalCode.title',
    description: 'editor.externalCode.description',
    type: 'object',
    properties: {
      stylesheet: {
        title: 'editor.externalCode.css.title',
        type: 'array',
        minItems: 1,
        maxItems: 10,
        items: {
          title: 'editor.externalCode.css.title',
          type: 'object',
          properties: {
            url: {
              type: 'string',
              title: 'editor.externalCode.url.title',
            },
          },
        },
      },
      javascript: {
        title: 'editor.externalCode.js.title',
        type: 'array',
        minItems: 1,
        maxItems: 10,
        items: {
          title: 'editor.externalCode.js.title',
          type: 'object',
          properties: {
            url: {
              type: 'string',
              title: 'editor.externalCode.url.title',
            },
          },
        },
      },
    },
  }

  render() {
    const { stylesheet, javascript } = this.props
    return (
      <React.Fragment>
        <Helmet>
          {stylesheet && stylesheet.map((item, index) => (
            <link key={index} href={item.url} rel="stylesheet" type="text/css" />
          ))}
        </Helmet>
        {javascript && javascript.map((item, index) => (
          <script key={index} src={item.url} type="text/javascript" defer></script>
        ))}
      </React.Fragment>
    )
  }
}

export default ExternalCode
