import './controller.js';

refs.result.textContent = '';

const code = `

:root {
  --primay: burlywood;
  --accent: cadetblue;
}
.items {
  list-style: none;
  display: flex;
}
.item {
  margin: .25rem;
}
.link {
  display: block;
  padding: .5rem;
  border-radius: 50%;
  background-color: var(--primay);
  color: var(--accent);
}
.link-icon {
  --icon-color: currentColor;
}
.link:hover {
  color: var(--primay);
  background-color: var(--accent);
}

`;

