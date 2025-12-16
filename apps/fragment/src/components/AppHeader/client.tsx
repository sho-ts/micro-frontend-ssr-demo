import { hydrateRoot } from 'react-dom/client';
import { AppHeader, AppHeaderSchema } from '.';

class ReactAppHeader extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');

    const { data, error } = AppHeaderSchema.safeParse({ name });

    if (error) return console.error(error.message);

    hydrateRoot(this, <AppHeader name={data.name} />);
  }
}

customElements.define('react-app-header', ReactAppHeader);
