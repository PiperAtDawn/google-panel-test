import React, {useState} from 'react';
import SearchBar from "./components/SearchBar";
import Action from "./components/Action";
import DetailsBar from './components/DetailsBar';
import PopularTimes from './components/PopularTimes';
import ReviewSummary from './components/ReviewSummary';
import Review from './components/Review';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faDirections, faSave, faSearch, faTimes, faMobile, faShareAlt, faClock, faGlobe, faPhone, faPlus, faShieldAlt, faTags, faComment, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

library.add(fab, faSearch, faTimes, faDirections, faSave, faMapMarkerAlt, faMobile, faShareAlt, faClock, faGlobe, faPhone, faPlus, faShieldAlt, faTags, faComment, faCamera);

const [panelToggle, setPanelToggle] = useState(true);

const toggleBtnHandler = () => {
  setPanelToggle(!panelToggle);
}

const [day, setDay] = useState("monday");

const actions = [
  { id: 1, icon: faDirections, text: "Directions"},
  { id: 2, icon: faSave, text: "Save"},
  { id: 3, icon: faMapMarkerAlt, text: "Nearby"},
  { id: 4, icon: faMobile, text: "Send to your phone"},
  { id: 5, icon: faShareAlt, text: "Share"}
];

const details = [
  { id: 1, icon: faMapMarkerAlt, text: "Plekhanovskaya Ulitsa, 29, Voronezh, Voronezh Oblast, 394018"},
  { id: 2, icon: faMapMarkerAlt, text: "Плехановская ул., 29, Воронеж, Воронежская обл., 394018"},
  { id: 3, icon: faClock, text: "Open now: 10AM-6PM"},
  { id: 4, icon: faGlobe, text: "museum-vrn.ru"},
  { id: 5, icon: faPhone, text: "+74732520395"},
  { id: 6, icon: faPlus, text: "M58V+M9 Voronezh"},
  { id: 7, icon: faShieldAlt, text: "Claim this business"},
  { id: 8, icon: faTags, text: "Add a label"}
]

const popularTimes = [
  {id: 1, day: "monday", data: "Популярные часы понедельника"},
  {id: 2, day: "tuesday", data: "Популярные часы вторника"},
  {id: 3, day: "wednsday", data: "Популярные часы среды"},
  {id: 4, day: "thursday", data: "Популярные часы четверга"},
  {id: 5, day: "friday", data: "Популярные часы пятницы"},
  {id: 6, day: "saturday", data: "Популярные часы субботы"},
  {id: 7, day: "sunday", data: "Популярные часы воскресенья"}
]

const ratings = [5, 5, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1];

const reviews = [
  {id: 1, name: "Inna Jankovic", totalReviews: 12, time: "10 months ago", rating: 5, text: "Lady at the ticket office get very offended if you don't visit the butterfly section"},
  {id: 2, name: "BurkBurck Back", totalReviews: 153, time: "2 years ago", rating: 5, text: "Great museum to learn the city's historical developments"},
  {id: 3, name: "Lisham Islam", totalReviews: 11, time: "a year ago", rating: 5, text: "This place is good for lots of regional history"}
]


  return (
    <div className="App">
      <div className="side-panel" style={{display: panelToggle ? "block" : "none"}}>
        <SearchBar />
        
        <img src="https://lh5.googleusercontent.com/p/AF1QipOZ0karkKVWE08NGijcYcLLOXVF_6NfUzb_j2PL=w408-h250-k-no" alt="Фото организации" id="org-photo"/>
        
        <header>
          <h1>Voronezhskiy Oblastnoy Krayevedcheskiy Muzey</h1>
          <p>Воронежский областной краеведческий музей</p>
          <span>4.6 (397)</span>
          <br/>
          <span>Local history museum</span>
        </header>
        
        <div className="actions">
          {actions.map((action) => (
            <Action icon = {action.icon} text = {action.text} key={action.id} />
          ))}
        </div>
        
        <div className="verify">
          <button className="verify-btn">
            <strong>Verify info with this place</strong>
            <p>Hours or services may differ due to Covid-19</p>
          </button>
        </div>
        
        <div className="description">
          <p>Museum with a vast range of displays tracing the region's ethnographic, natural &amp; military history.</p>
        </div>
        
        <div className="details">
          {details.map((detail) => (
            <DetailsBar icon = {detail.icon} text = { detail.text} key={detail.id}/>
          ))}
          <button className="suggest-edit-btn">
            <FontAwesomeIcon icon={faComment} style={{color: "blue"}}/>
            <span>Suggest an edit</span>
          </button>
        </div>

        <PopularTimes day={day} setDay={setDay} times={popularTimes} />

        <div className="photos">
          <h2>Add photo</h2>
          <button className="add-photo-btn"><FontAwesomeIcon icon={faCamera} style={{color: "blue"}}/>Add a photo</button>
        </div>

        <ReviewSummary ratings={ratings} />

        <div className="reviews">
          <div className="reviews-top-bar">
            <h2>Reviews</h2>
          </div>
          {reviews.map((review) => (
            <Review review={review} key={review.id}/>
          ))}
        </div>
          
      </div>
      <button type="button" className="panel-toggle" onClick={toggleBtnHandler} style={{left: panelToggle ? "408px" : "0"}}>{panelToggle ? "<" : ">" }</button>
    </div>
  );
}

export default App;
