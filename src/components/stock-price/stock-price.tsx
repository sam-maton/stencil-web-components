import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  @State() price = 0;
  @State() symbol = '';
  onFetchStockPrice = (event: Event) => {
    event.preventDefault();

    fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.price = +data['Global Quote']['05. price'];
      });
  };

  render() {
    return (
      <Host>
        <form onSubmit={this.onFetchStockPrice}>
          <input type="text" id="stock-symbol" />
          <button type="submit">Fetch</button>
        </form>
        <div>
          <p>Price: ${this.price}</p>
        </div>
      </Host>
    );
  }
}
