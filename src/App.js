import React, {useState} from 'react';
import SearchBar from "./components/SearchBar"
import Action from "./components/Action"
import DetailsBar from './components/DetailsBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faDirections, faSave, faSearch, faTimes, faMobile, faShareAlt, faClock, faGlobe, faPhone, faPlus, faShieldAlt, faTags, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

library.add(fab, faSearch, faTimes, faDirections, faSave, faMapMarkerAlt, faMobile, faShareAlt, faClock, faGlobe, faPhone, faPlus, faShieldAlt, faTags, faComment);

const [panelToggle, setPanelToggle] = useState(true);

const toggleBtnHandler = () => {
  setPanelToggle(!panelToggle);
}

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


  return (
    <div className="App">
      <div className="side-panel" style={{display: panelToggle ? "block" : "none"}}>
        <SearchBar />
        <img src="https://lh5.googleusercontent.com/p/AF1QipOZ0karkKVWE08NGijcYcLLOXVF_6NfUzb_j2PL=w408-h250-k-no" alt="Корабль" id="ship"/>
        <header>
          <h1>Voronezhskiy Oblastnoy Krayevedcheskiy Muzey</h1>
          <p>Воронежский областной краеведческий музей</p>
          <span>4.6 (397)</span>
          <br/>
          <span>Local history museum</span>
        </header>
        <div className="actions">
          {actions.map((action) => (
            <Action icon = {action.icon} text = {action.text} />
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
            <DetailsBar icon = {detail.icon} text = { detail.text} />
          ))}
          <button class="suggest-edit-btn">
            <FontAwesomeIcon icon={faComment} style={{color: "blue"}}/>
            <span>Suggest an edit</span>
          </button>
        </div>
      </div>
      <button type="button" class="panel-toggle" onClick={toggleBtnHandler} style={{left: panelToggle ? "408px" : "0"}}>{panelToggle ? "<" : ">" }</button>
    </div>
  );
}

export default App;
