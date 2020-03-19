import axios from 'axios'
import { Media } from 'reactstrap'
import { getRandomItemsFromArray } from '../lib/helpers'

const API_DOMAIN = 'https://jsonplaceholder.typicode.com'

const Photos = ({ photos }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', border: '1px solid #ccc' }}> Show three photos on each request randomly</h2>
      {photos.map(photo => (
        <Media key={photo.id} style={{ padding: '4px' }}>
          <Media left href="#">
            <Media object src={photo.thumbnailUrl} alt="Generic placeholder image" />
          </Media>
          <Media body style={{ padding: '4px' }}>
            <Media heading>{`id: ${photo.id}`}</Media>
            {photo.title}
          </Media>
        </Media>
      ))}
    </div>
  )
}

export async function getServerSideProps({ params, req, res, query, preview, previewData }) {
  console.log(query)
  const { data } = await axios.get(`${API_DOMAIN}/photos`)
  const fewPhotos = getRandomItemsFromArray(data, 3)
  return {
    props: {
      photos: fewPhotos,
    }, // will be passed to the page component as props
  }
}

export default Photos
