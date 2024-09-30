import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'

export const AppMainContainer = styled.div`
  min-height: 100vh;
`
export const BackgroundImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 60vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #ffffff;
  padding-left: 40px;
`
export const SongsPlaylistContainer = styled.div`
  min-height: 70vh;
  background-color: #152850;
  padding: 20px;
`
export const TitleSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const PlayListTitle = styled.h1`
  color: #ffffff;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cbd5e1;
  width: 230px;
  height: 40px;
`
export const SearchInput = styled.input`
  width: 90%;
  background-color: transparent;
  padding: 7px;
  outline: none;
  color: #ffffff;
  border: none;
`
export const SearchIcon = styled(FaSearch)`
  width: 10%;
  color: #ffffff;
`
export const SongsList = styled.ul`
  display: flex;
  flex-direction: column;
`
export const NoSongsContainer = styled.div`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`
