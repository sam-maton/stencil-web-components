import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'tool-tip',
  styleUrl: 'tool-tip.css',
  shadow: true,
})
export class ToolTip {
  render() {
    return (
      <Host>
        <slot></slot>
        <span>
          ? <div id="tooltip-container">Some tooltip text to display!</div>
        </span>
      </Host>
    );
  }
}
