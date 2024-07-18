import { useParams } from 'react-router-dom'

function Survey() {

  const { questionNumber } = useParams()

  return (
    <div>
      <h1>Question { questionNumber }</h1>
    </div>
  )
}

export default Survey