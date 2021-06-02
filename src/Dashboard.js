import React, { useState, useEffect } from 'react'
import { Container, Form } from "react-bootstrap"
import TrackSearchResult from "./TrackSearchResult"
import Player from './Player'
import './App.css';


//mock data to avoid server..
let testData = [{
    albumUrl: "https://i.scdn.co/image/ab67616d000048513e0936633c4c927ac22818e1",
    artist: "Arijit Singh",
    posterUrl: "https://i.scdn.co/image/ab67616d0000b2733e0936633c4c927ac22818e1",
    preview_url: "https://p.scdn.co/mp3-preview/efd5dc3b16c735e2cf39d3e27fce6ce36a26fbdb?cid=960f87b99f6f4a3eb3d37403ed0e6321",
    title: "Savage Love (Laxed – Siren Beat) [BTS Remix]",
    uri: "spotify:track:4TgxFMOn5yoESW6zCidCXL"
}, {
    albumUrl: "https://i.scdn.co/image/ab67616d000048515b5f5c49240e4613a4feea30",
    artist: "Arijit Singh",
    posterUrl: "https://i.scdn.co/image/ab67616d0000b2735b5f5c49240e4613a4feea30",
    preview_url: "https://p.scdn.co/mp3-preview/274cbdb3f1235eb388e30e4a3555a46028baf6a7?cid=960f87b99f6f4a3eb3d37403ed0e6321",
    title: "J'avais un camarade",
    uri: "spotify:track:23gj7aag7oScIhJIFAl1Od"
},

{
    albumUrl: "https://i.scdn.co/image/ab67616d00004851348468c203278d510f0cbc5a",
    artist: "Arijit Singh",
    posterUrl: "https://i.scdn.co/image/ab67616d0000b273348468c203278d510f0cbc5a",
    preview_url: "https://p.scdn.co/mp3-preview/845a94d166a85030d657cb05465525c545ad2d46?cid=960f87b99f6f4a3eb3d37403ed0e6321",
    title: "Tum Hi Ho",
    uri: "spotify:track:56zZ48jdyY2oDXHVnwg5Di"
},
{
    albumUrl: "https://i.scdn.co/image/ab67616d00004851c7b8d39b1e113845906984ab",
    artist: "Arijit Singh",
    posterUrl: "https://i.scdn.co/image/ab67616d0000b273c7b8d39b1e113845906984ab",
    preview_url: "https://p.scdn.co/mp3-preview/49b2fa0b4f6f5a24f364e12a9fd558c814a79e9e?cid=960f87b99f6f4a3eb3d37403ed0e6321",
    title: "Mast Magan",
    uri: "spotify:track:3uL1IBFhg52VcQqOwAG01E"
},
{
    albumUrl: "https://i.scdn.co/image/ab67616d000048517f59a7efcdad7a7b22d87878",
    artist: "A.R. Rahman",
    posterUrl: "https://i.scdn.co/image/ab67616d0000b2737f59a7efcdad7a7b22d87878",
    preview_url: "https://p.scdn.co/mp3-preview/f9b420faee17e1e6996547f838fae840dc2c6a6d?cid=960f87b99f6f4a3eb3d37403ed0e6321",
    title: "Enna Sona",
    uri: "spotify:track:6bdpj89aYEBjhpsenXAsmO"
}, {
    albumUrl: "https://i.scdn.co/image/ab67616d00004851c5545f737b16ad5ee767b62a",
    artist: "Arijit Singh",
    posterUrl: "https://i.scdn.co/image/ab67616d0000b273c5545f737b16ad5ee767b62a",
    preview_url: "https://p.scdn.co/mp3-preview/e5dbd98555a85f8704f861dfcf122333f183f562?cid=960f87b99f6f4a3eb3d37403ed0e6321",
    title: "Tujhe Kitna Chahne Lage",
    uri: "spotify:track:5QtEFRYavs5S3GHtFEq7A4"
}, {
    albumUrl: "https://i.scdn.co/image/ab67616d000048515cd31847e786b7e1e185e062",
    artist: "Shaarib Toshi",
    posterUrl: "https://i.scdn.co/image/ab67616d0000b2735cd31847e786b7e1e185e062",
    preview_url: "https://p.scdn.co/mp3-preview/0483e8d7aba219d1eb2577bad166486dde76279b?cid=960f87b99f6f4a3eb3d37403ed0e6321",
    title: "Bandeya (feat. Arijit Singh) - From \"Dil Juunglee\"",
    uri: "spotify:track:6gwnKOvdBKkTU4CQ7KpIAu"
}]


function Dashboard() {

    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()


    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch("")
      }

    //search data using dummy testData
    useEffect(() => {
        if (!search) return setSearchResults([])
        setSearchResults(
            testData.map(track => {
                return {
                    artist: track.artist,
                    title: track.title,
                    uri: track.uri,
                    albumUrl: track.albumUrl,
                    preview_url: track.preview_url,
                    posterUrl : track.posterUrl
                }
            })
        ) 
    }, [search])
    
    return (
        <div className="containerRoot">
        <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
            <Form.Control
                type="search"
                placeholder="Search Songs/Artists From Spotify API"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                {searchResults.map(track => (
                    <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
                ))}
                {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            <img src={playingTrack?.posterUrl } width="500" height="600"/>
          </div>
        )}
            </div>
            <div><Player url={playingTrack}/></div>
           
        </Container>
        </div>

    )
}

export default Dashboard
