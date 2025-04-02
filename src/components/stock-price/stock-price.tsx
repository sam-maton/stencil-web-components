import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
