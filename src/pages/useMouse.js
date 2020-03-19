import { useMouse } from 'react-use'
// import Link from 'next/link'
import Router from 'next/router'

const UseMouse = () => {
  const ref = React.useRef(null)
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref)

  return (
    <div>
      <button onClick={() => Router.push('/index')}>Back to index</button>
      <div ref={ref}>
        <div>
          Mouse position in document - x:{docX} y:{docY}
        </div>
        <div>
          Mouse position in element - x:{elX} y:{elY}
        </div>
        <div>
          Element position- x:{posX} y:{posY}
        </div>
        <div>
          Element dimensions - {elW}x{elH}
        </div>
      </div>
    </div>
  )
}

export default UseMouse
