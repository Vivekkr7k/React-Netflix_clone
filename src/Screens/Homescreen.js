import React from 'react'
import Nav from '../Component/Nav'
import Banner from '../Component/Banner'
import requests from '../Request'
import Row from '../Component/Row'



export default function Homescreen() {
  return (
    <div className='Homescreen'>
 
      <Nav/>
     
      <Banner/>
      
     <Row title="NETFLIX ORIFINALS" fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow />
     <Row title="Treanding Now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romace Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
       
     
     
    
    
    
    
    </div>
  )
}
