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
    title: 'External Code',
    description: 'External Code',
    type: 'object',
    properties: {
      stylesheet: {
        title: 'Style Sheet',
        type: 'array',
        minItems: 1,
        maxItems: 10,
        items: {
          title: 'CSS',
          type: 'object',
          properties: {
            url: {
              type: 'string',
              title: 'URL',
            },
          },
        },
      },
      javascript: {
        title: 'Javascript',
        type: 'array',
        minItems: 1,
        maxItems: 10,
        items: {
          title: 'JS',
          type: 'object',
          properties: {
            url: {
              type: 'string',
              title: 'URL',
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
