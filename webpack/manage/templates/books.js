const booksTemplate = `
<div>
  <h1>{{ title }}</h1>
  <ul>
    <li v-for='book in books'>
      {{ book.name }}
    </li>
  </ul>
</div>
`


export {booksTemplate}
