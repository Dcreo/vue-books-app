const newBookTemplate = `
<div>
  <h1>{{ title }}</h1>
  <ul class="list-unstyled">
    <li v-for='(value, key) in messages' class="alert" :class="{'alert-danger': !saved, 'alert-success': saved}">
      {{ value[0] }}
    </li>
  </ul>
  <form @submit='saveBook()'>
    <div class='form-group'>
      <label>Название книги:</label>
      <input type='text' v-model='book.name' class='form-control'>
    </div>
    <input type='submit' class='btn btn-success'>
  </form>
</div>
`


export {newBookTemplate}
