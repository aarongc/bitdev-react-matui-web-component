class XSearch extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement('span');
      this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
      
      const name = this.getAttribute('name');
      const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
      
      const query = document.createElement('a');

      query.href = url;
      query.innerText = name;
      query.target = '_blank';
      mountPoint.appendChild(query);
    }
  }
customElements.define('x-search', XSearch);