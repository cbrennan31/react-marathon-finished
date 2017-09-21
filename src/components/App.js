import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId

    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this)
  }

  handleSongSelect(id) {
    this.setState({
      selectedSongId: id
    })
  }
  handlePlaylistSelect(id){
    let songs = this.props.data.playlists[id-1].songs

    this.setState({
      selectedPlaylistId: id,
      selectedSongId: songs[Math.floor(Math.random()*songs.length)]
    })
  }
  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <h1>This is a playlist compenent</h1>
        <PlaylistCollection
          playlists={this.props.data.playlists}
          playlistId={this.state.selectedPlaylistId}
          handlePlaylistSelect={this.handlePlaylistSelect}/>
        <SongCollection
          songs={selectedPlaylistSongs}
          songId={this.state.selectedSongId}
          handleSongSelect={this.handleSongSelect}

        />

      </div>
    );
  }
}

export default App;
