import React from 'react'
import Playlist from './Playlist'

const PlaylistCollection = (props) => {

  let playlists = props.playlists.map(playlist => {
    let className;
    if (playlist.id == props.playlistId){
      className="selected";
    }
    
    let handlePlaylistSelect = () => {
      props.handlePlaylistSelect(
        playlist.id
      )
    }
    return(
      <Playlist
        key={playlist.id}
        id={playlist.id}
        name={playlist.name}
        songs={playlist.songs}
        className={className}
        handlePlaylistSelect={handlePlaylistSelect}
      />
    )
  })

  return (
    <ul>{playlists}</ul>
  )
}

export default PlaylistCollection
