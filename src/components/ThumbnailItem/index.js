// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const updateImage = () => {
    updateThumbnail(id)
  }

  const activeBtn = isActive ? '' : 'hide-image'

  return (
    <li className="thumbnail-item-container">
      <button type="button" className="btn" onClick={updateImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${activeBtn}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
