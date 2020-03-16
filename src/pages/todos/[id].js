// You can use any data fetching library
import axios from 'axios'
import { Button, Toast, ToastHeader, ToastBody } from 'reactstrap'
import Link from 'next/link'

// posts will be populated at build time by getStaticProps()
function Todo({ todo, todosLength }) {
  console.log(todosLength)
  console.log(todo.id + 1)

  const checkNextTodoExists = () => {
    return todo.id + 1 > todosLength
  }

  return todo ? (
    <div>
      <Toast>
        <ToastHeader icon="info">{`Todo item, id: ${todo.id}`}</ToastHeader>
        <ToastBody>{todo.title}</ToastBody>
      </Toast>
      <Link href="/todos/all">
        <Button color="primary">todo all</Button>
      </Link>
      <Link href={`/todos/${todo.id + 1}`}>
        <Button color="primary" disabled={checkNextTodoExists()}>
          next
        </Button>
      </Link>
    </div>
  ) : (
    <div>
      <h2>nothing here</h2>
    </div>
  )
}

export async function getStaticPaths() {
  const { data: todos } = await axios.get('https://jsonplaceholder.typicode.com/todos')
  const paths = todos.map(post => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({ params }) {
  console.log(params)
  const { data: todos } = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
  // Call an external API endpoint to get posts.
  const { data: todo } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)

  // By returning { props: posts }, the Todo component
  // will receive `posts` as a prop at build time
  return {
    props: {
      todo,
      todosLength: todos.length,
    },
  }
}

export default Todo
