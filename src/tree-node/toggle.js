import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

class Toggle extends PureComponent {
  static propTypes = {
    expanded: PropTypes.bool,
    isLeaf: PropTypes.bool,
    onNodeToggle: PropTypes.func,
    id: PropTypes.string,
    toggler: PropTypes.element,
  }

  onToggle = e => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    this.props.onNodeToggle(this.props.id)
  }

  onKeyDown = e => {
    if (e.key === 'Enter' || e.keyCode === 32) {
      this.props.onNodeToggle(this.props.id)
      e.preventDefault()
    }
  }

  render() {
    const { expanded, isLeaf } = this.props
    const toggleCx = ['toggle', expanded && 'expanded', !expanded && 'collapsed'].filter(Boolean).join(' ')

    if (isLeaf) {
      return null
    }
    if (this.props.toggler) {
      const Toggler = React.cloneElement(this.props.toggler)
      return (
        <div className={toggleCx}>
          <Toggler onClick={this.onToggle} onKeyDown={this.onKeyDown} />
        </div>
      )
    }
    return (
      <i
        role="button"
        tabIndex={-1}
        className={toggleCx}
        onClick={this.onToggle}
        onKeyDown={this.onKeyDown}
        aria-hidden
      />
    )
  }
}

export default Toggle
