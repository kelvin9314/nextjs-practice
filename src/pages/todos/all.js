// You can use any data fetching library
import axios from 'axios'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import Link from 'next/link'

// posts will be populated at build time by getStaticProps()
function Todos({ todos }) {
  return todos ? (
    <div>
      <Link href="/">
        <Button color="primary">back to index</Button>
      </Link>
      <ListGroup>
        {todos.map(todo => (
          <ListGroupItem tag={'a'} href={`/todos/${todo.id}`} key={todo.id}>
            {todo.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  ) : (
    <div>
      <h2>nothing here</h2>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  const { data: todos } = await axios.get('https://jsonplaceholder.typicode.com/todos')

  // By returning { props: posts }, the Todo component
  // will receive `posts` as a prop at build time
  return {
    props: {
      ...context,
      todos,
    },
  }
}

export default Todos
