import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

class AccordionItem extends Component {
  static defaultProps = {
    title: 'TITLE',
    isOpen: false,
  }

  constructor(props) {
    super(props)
    this.state = { isOpen: props.isOpen }
    this.mounted = true
  }

  handleDocumentClick = event => {
    const { containerRef } = this.props
    if (
      this.mounted &&
      ReactDOM.findDOMNode(containerRef.current).contains(event.target) &&
      !ReactDOM.findDOMNode(this).contains(event.target) &&
      this.state.isOpen
    ) {
      this.setState({ isOpen: false })
    }
  }

  componentDidMount() {
    if (this.props.atomic) {
      document.addEventListener('click', this.handleDocumentClick, false)
      document.addEventListener('touchend', this.handleDocumentClick, false)
    }
  }

  componentWillUnmount() {
    this.mounted = false
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const accordionItemClassNames = classNames([
      'accordion-item',
      {
        active: this.state.isOpen,
      },
    ])

    return (
      <div className={accordionItemClassNames}>
        <button className="title" onClick={this.onClick}>
          {this.props.title}
        </button>
        <div className="panel">{this.props.children}</div>
      </div>
    )
  }
}

export default AccordionItem
