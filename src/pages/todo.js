// You can use any data fetching library
import axios from 'axios'

// posts will be populated at build time by getStaticProps()
function Todo({ todos }) {
  console.log(todos)
  return todos ? (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  ) : (
    <div>
      <h2>nothing here</h2>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const { data: todos } = await axios.get('https://jsonplaceholder.typicode.com/todos')

  // By returning { props: posts }, the Todo component
  // will receive `posts` as a prop at build time
  return {
    props: {
      todos,
    },
  }
}

export default Todo
