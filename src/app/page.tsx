import Image from 'next/image'

export default function Home() {
  
  return (
    <>
      <h1>My Current Networth</h1>
      <p>£{networth}</p>
      <p>Last Updated {lastUpdated}</p>
    </>
  )
}
