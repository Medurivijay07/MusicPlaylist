import styled from 'styled-components'
import {BsTrash} from 'react-icons/bs'

export const EachSong = styled.li`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`
export const TrackImage = styled.img`
  width: 30%;
`
export const NameGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const TrackName = styled.p`
  color: #ffffff;
  font-size: 18px;
`
export const TrackGenre = styled.p`
  color: #3b82f6;
`
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
`
export const DeleteIcon = styled(BsTrash)`
  color: #ffffff;
  margin-left: 10px;
  margin-right: 10px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
