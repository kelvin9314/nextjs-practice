import { useMouse } from 'react-use'

const UseMouse = () => {
  const ref = React.useRef(null)
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref)

  const a = 'i am kelvin 123'
  console.log(a)

  return (
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
  )
}

export default UseMouse
