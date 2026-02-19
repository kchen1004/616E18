/* this component will handle the About display */

import map from '../images/616map.png';

function About() {
    return (
      <div className="aboutmecontainer">

          <h2>A Little About Us</h2>

          <p id="aboutmetext">
                Built in 1963, 616 E18th St. is situated in historic Ditmas Park, just a couple of blocks away from the Newkirk Plaza and the Q and B trains, four blocks from Cortelyou Rd., and about 10 blocks south of Prospect Park.
                <br /><br />
                <img className="fit-picture" src={map} alt="location on google map" />
                <br /><br />  
                The building has six floors and 73 apartment units, over 80% of which are owned and occupied by shareholders. Apartments are generally large, boast hardwood floors, walk-in closets and many have terraces overlooking the neighborhood. Apartments range from studios to two bedrooms. <br /><br />
                <br /><br />
                Building amenities include gym, laundry, an outside courtyard with a grill, and a parking garage with bike storage. Additionally, the building has a live-in super and a staff that oversee building maintenance as well as porter and doorman responsibilities.
                <br /><br />
          </p>

      </div>
    );
}

export default About;