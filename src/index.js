import React, {Component} from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyBPdo414HjtpZxtWx3FWD4b_-B6OXZeT6g";

YTSearch({key: API_KEY, term:"surfboards"},function(data){
    console.log(data);
});

// create a new component that produces html
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [ ],
            selectedVideo: null
        };

        this.videoSearch("")
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term:term+"ASMR"},(videos) =>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render(){
    return (
    <div className="row">
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
    </div>
        );
    };
}

//take this components html and put it on the page
ReactDom.render(<App />, document.querySelector(".container"));