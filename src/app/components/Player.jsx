import React from 'react'
import ReactPlayer from 'react-player'

export default function MusicPlayer() {
  const [playing, setPlaying] = React.useState(false)
  return (
    <>
      <p>player</p>
      <ReactPlayer style={{display: 'none'}} playing={playing} />
      <div onClick={() => setPlaying(!playing)}>play</div>
    </>
  )
}
