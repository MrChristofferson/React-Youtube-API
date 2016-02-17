import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoDetail from './components/video_detail.js';
import VideoList from './components/video_list.js';
const API_KEY = 'AIzaSyBGXWvHajfa2nwFIrVn1gGjLefbZ2N-Ers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: []
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar handleSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          handleVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
