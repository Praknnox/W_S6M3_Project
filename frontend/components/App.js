import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
const keyed='DEMO_KEY'
const linked=`https://api.nasa.gov/planetary/apod?api_key=${keyed}`





function App() {
  const [theDay,setTheday]=useState()
  useEffect(()=>{
function upPhoto(){
  axios.get(linked).then(res=>{
    setTheday(res.data)
  }).catch(err=>{
    console.log(err.message)
})
}
setTheday({
  "date":"2024-11-01",
  "explanation":"Big, beautiful spiral galaxy NGC 6744 is nearly 175,000 light-years across, larger than our own Milky Way. It lies some 30 million light-years distant in the southern constellation Pavo but appears as only a faint smudge in the eyepiece of a small telescope. We see the disk of the nearby island universe tilted towards our line of sight in this remarkably deep and detailed galaxy portrait, a telescopic image that spans an area about the angular size of a full moon. In it, the giant galaxy's elongated yellowish core is dominated by the light from old, cool stars. Beyond the core, grand spiral arms are filled with young blue star clusters and speckled with pinkish star forming regions. An extended arm sweeps past smaller satellite galaxy NGC 6744A at the upper left. NGC 6744's galactic companion is reminiscent of the Milky Way's satellite galaxy the Large Magellanic Cloud.",
  "hdurl":"https://apod.nasa.gov/apod/image/2411/NGC6744_V2_8_sm.jpg",
  "media_type":"image",
  "service version":"v1",
  "title":"Spiral Galaxy NGC 6744",
  "url":"https://apod.nasa.gov/apod/image/2411/NGC6744_V2_8_sm1024.jpg"
})
  },[])
  if(!theDay)return 'Fetching Photo'
  return (
    <section>
      <Card
      title={theDay.title}
      text={theDay.explanation}
      image={theDay.url}
      date={theDay.date}
      />
    </section>
  )
}

export default App
