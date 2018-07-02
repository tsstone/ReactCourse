import React from "react";
import ReactDom from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyCpWMzqctbGW25hcp4udOlPzvpi5KoQGRs"

// create a new component that produces html
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
        );
}

//take this components html and put it on the page
ReactDom.render(<App />, document.querySelector(".container"));