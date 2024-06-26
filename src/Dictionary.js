import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    

    function handleResponse(response) {
        setResults(response.data);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiKey = "0300e14043fb59596a12t1bb17o183cf";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "6QK8XMCw6V57zUgC8ZRsKAcYFxrRA7w4rNc0y1i9e6sH8OJK0Wkvp7TO";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }
    
    function handleSumbit(event) {
        event.preventDefault();
        search();
    }
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
          <div className="Dictionary">
            <section>
              <h1>What word do you want to look up?</h1>  
              <form onSubmit={handleSumbit}>
                <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
              </form>
          <div className="hint"> Suggestions: Palindrome, frenzy, sleet...</div>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    );
 } else {
     load();
     return "Loading...";
 }
}