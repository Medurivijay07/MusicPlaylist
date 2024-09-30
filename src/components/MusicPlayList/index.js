import {Component} from 'react'

import SongItem from '../SongItem'

import {
  AppMainContainer,
  BackgroundImageContainer,
  SongsPlaylistContainer,
  TitleSearchContainer,
  PlayListTitle,
  SearchContainer,
  SearchInput,
  SearchIcon,
  SongsList,
  NoSongsContainer,
} from './styledComponents'

class MusicPlayList extends Component {
  constructor(props) {
    super(props)
    const {initialTracksList} = props
    this.state = {searchInput: '', trackList: initialTracksList}
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  filteredTrackList = () => {
    const {searchInput, trackList} = this.state
    const filteredList = trackList.filter(Item =>
      Item.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredList
  }

  deleteItem = id => {
    const {trackList} = this.state
    const remainingList = trackList.filter(Item => Item.id !== id)
    this.setState({trackList: remainingList})
  }

  renderNoSongsFound = () => (
    <NoSongsContainer>
      <p>No Songs Found</p>
    </NoSongsContainer>
  )

  render() {
    const {searchInput} = this.state
    const filteredLists = this.filteredTrackList()
    const IsEmpty = filteredLists.length === 0
    return (
      <AppMainContainer>
        <BackgroundImageContainer>
          <h1>Ed Sheeran</h1>
          <p>Singer</p>
        </BackgroundImageContainer>
        <SongsPlaylistContainer>
          <TitleSearchContainer>
            <PlayListTitle>Songs Playlist</PlayListTitle>
            <SearchContainer>
              <SearchInput
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
              <SearchIcon />
            </SearchContainer>
          </TitleSearchContainer>
          {IsEmpty ? (
            this.renderNoSongsFound()
          ) : (
            <SongsList>
              {filteredLists.map(Item => (
                <SongItem
                  key={Item.id}
                  item={Item}
                  deleteItem={this.deleteItem}
                />
              ))}
            </SongsList>
          )}
        </SongsPlaylistContainer>
      </AppMainContainer>
    )
  }
}

export default MusicPlayList
