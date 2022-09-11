import TurndownService from 'turndown'

const useTurndownService = () => {
  const turndownService = new TurndownService()

  const methodsColors = [
    { method: 'POST', value: '#1976D2' },
    { method: 'GET', value: '#21BA45' },
    { method: 'PATCH', value: '#9e9e9e' },
    { method: 'PUT', value: '#9e9e9e' },
    { method: 'DELETE', value: '#C10015' }
  ]

  const getMethodColor = (method) => {
    method = method.replace(/\n/g, '').trim()
    const result = methodsColors.find(color => color.method === method.toUpperCase())
    return result ? result.value : '#9C27B0'
  }

  /**
    * format a table of content list
    */
  turndownService.addRule('rootList', {
    filter: (node, options) => node.classList.contains('root-list-item'),
    replacement: (content, node, options) => `- <details><summary>${content.replace(/\n/g, '')} </summary>`.replace('►', '')
  })

  /**
    * format a table of content list
    */
  turndownService.addRule('childList', {
    filter: (node, options) => node.classList.contains('child-list-item'),
    replacement: (content, node, options) => `\t - ${content.replace(/\n/g, '')} <br/> \n\n`.replace('[', ' [')
  })

  /**
    * Convert the method chips to in line element and
    * added a bold text
    */
  turndownService.addRule('chipsMethods', {
    filter: (node, options) => node.classList.contains('request-method'),
    replacement: (content, node, options) =>
            `<strong style="color:${getMethodColor(content)}">` + content.replace(/\n/g, '') + '</strong> - '
  })

  /**
    * Keep the html tag headers for use anchors
    */
  turndownService.addRule('keepHeadersTags', {
    filter: (node, options) => {
      return (
        node.nodeName === 'H2'
      )
    },
    replacement: (content, node, options) => node.outerHTML
  })

  /**
    * Keep HTML tag for request methods for use anchors
    */
  turndownService.addRule('keepRequestMethodTags', {
    filter: (node, options) => {
      return (
        node.classList.contains('request-name')
      )
    },
    replacement: (content, node, options) => node.outerHTML
  })

  /**
    * Keep HTML tag for 'a href' for use content list
    */
  turndownService.addRule('keepRootListTags', {
    filter: (node, options) => {
      return (
        node.nodeName === 'A' &&
                node.classList.contains('item') &&
                node.classList.contains('text-capitalize')
      )
    },
    replacement: (content, node, options) => node.outerHTML
  })

  /**
    * Add json pre code
    */
  turndownService.addRule('formatJson', {
    filter: (node, options) => {
      return node.classList.contains('jv-container')
    },
    replacement: (content, node, options) => {
      return '```json \n' + content.replace(/copy\n/g, '').replaceAll('\\', '') + '\n ```'
    }
  })

  return turndownService
}

export default useTurndownService
