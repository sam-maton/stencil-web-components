import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'tool-tip',
  styleUrl: 'tool-tip.css',
  shadow: true,
})
export class ToolTip {
  @Prop() text = 'Some tooltip text to display!';
  @State() open = false;

  onTooltipButtonClick = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <Host>
        <slot></slot>
        <div id="tooltip-container">
          <span id="tooltip-button" onClick={this.onTooltipButtonClick}>
            ?
          </span>
          {this.open ? <div id="tooltip-content">{this.text}</div> : null}
        </div>
      </Host>
    );
  }
}
