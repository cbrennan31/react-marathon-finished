import React from 'react'


const Playlist = (props) => {
  return(
    <li className={props.className} onClick={props.handlePlaylistSelect}>
      {props.name}
    </li>
  )
}
export default Playlist
