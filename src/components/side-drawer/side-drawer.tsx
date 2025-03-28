import { Component, Prop, State, Method, Host, h } from '@stencil/core';

@Component({
  tag: 'dev-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflect: true }) mainTitle: string;
  @Prop({ reflect: true, mutable: true }) open: boolean;
  @State() showContact = false;

  onCloseDrawer = () => {
    this.open = false;
  };

  onTabChange = (content: string) => {
    this.showContact = content === 'contact';
  };

  @Method()
  async openDrawer() {
    this.open = true;
  }

  render() {
    let mainContent = <slot />;

    if (this.showContact) {
      mainContent = (
        <div id="contact-info">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email</p>
          <ul>
            <li>Phone: 123212134324324</li>
            <li>Email: something@email.com</li>
          </ul>
        </div>
      );
    }
    return (
      <Host>
        <div id="backdrop" onClick={this.onCloseDrawer}></div>
        <aside>
          <header>
            <h1>{this.mainTitle}</h1>
            <button class="close-button" onClick={this.onCloseDrawer}>
              X
            </button>
          </header>
          <section id="tabs">
            <button class={!this.showContact ? 'active' : ''} onClick={this.onTabChange.bind(this, 'nav')}>
              Navigation
            </button>
            <button class={this.showContact ? 'active' : ''} onClick={this.onTabChange.bind(this, 'contact')}>
              Contact
            </button>
          </section>
          <main>{mainContent}</main>
        </aside>
      </Host>
    );
  }
}
