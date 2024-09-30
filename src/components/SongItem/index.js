import {
  EachSong,
  LeftContainer,
  TrackImage,
  NameGenreContainer,
  TrackName,
  TrackGenre,
  RightContainer,
  DeleteButton,
  DeleteIcon,
} from './styledComponents'

const SongItem = props => {
  const {item, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = item

  const onClickingDeleteIcon = () => {
    deleteItem(id)
  }

  return (
    <EachSong>
      <LeftContainer>
        <TrackImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <TrackName>{name}</TrackName>
          <TrackGenre>{genre}</TrackGenre>
        </NameGenreContainer>
      </LeftContainer>
      <RightContainer>
        <p>{duration}</p>
        <DeleteButton
          type="button"
          onClick={onClickingDeleteIcon}
          data-testid="delete"
        >
          <DeleteIcon />
        </DeleteButton>
      </RightContainer>
    </EachSong>
  )
}

export default SongItem
