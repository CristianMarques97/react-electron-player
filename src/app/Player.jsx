import React from 'react'
import Playlist from 'react-mp3-player'

export default function MusicPlayer() {
  const options = {
    offset: {
      left: 300,
    },
    breakpoint: {
      maxWidth: 768,
    },
  }
  const tracks = [{
    img: 'https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg', name: 'MP3', desc: 'Description 1', src: 'Audio.mp3',
  },
  {
    img: 'https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg', name: 'MP3 #2', desc: 'Description 2', src: 'Audio2.mp3',
  }]
  return (
    <>
      <Playlist tracks={tracks} opts={options} />
    </>
  )
}
