import React from 'react'
import Song from './Song'

const SongCollection = (props) => {
  let songs = props.songs.map(song =>{
    let className;
    if (song.id === props.songId){
      className = "selected";
    }

    let handleSongSelect = () => {
      props.handleSongSelect(song.id)
    }

    return(
      <Song
        key={song.id}
        id={song.id}
        name={song.name}
        artist={song.artist}
        album={song.album}
        className={className}
        handleSongSelect={handleSongSelect}
      />
    )
  })

  return(
    <ul>
      {songs}
    </ul>
  )
}

export default SongCollection
