import Head from 'next/head'
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap'
import Link from 'next/link'

const Index = props => {
  // const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    // console.log(location.query)
  }, [])

  // const toggle = () => setIsOpen(!isOpen)
  console.log(props)
  return (
    <div>
      <Head>
        <title>NextJS Practice</title>
        <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />
      </Head>
      <p>Hello world!</p>
      {/* <div className="p-3 bg-info my-2 rounded">
        <Toast>
          <ToastHeader>Reactstrap</ToastHeader>
          <ToastBody>This is a toast on an info background — check it out!</ToastBody>
        </Toast>
      </div> */}
      <div>
        <Link href="/home">
          <Button color="primary">home</Button>
        </Link>
        <Link href="/useMouse">
          <Button color="secondary">useMouse</Button>
        </Link>
        <Link href="/todos/all">
          <Button color="success">todos all</Button>
        </Link>
        <Button color="info" disabled>
          info
        </Button>
        <Button color="warning" disabled>
          warning
        </Button>
        <Button color="danger" disabled>
          danger
        </Button>
        <Button color="link" disabled>
          link
        </Button>
      </div>
    </div>
  )
}

// 只能在 pages 中使用
Index.getInitialProps = async ({ req }) => {
  // Index.getStaticProps = async ({ req }) => {
  const text = 'this is from server side'
  return { text }
}

export default Index
