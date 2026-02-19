import { useState } from 'react';
import NavigationBar from './NavigationBar.jsx';
import About from './About.jsx';
import Amenities from './Amenities.jsx';
import Footer from './Footer.jsx';
import Resources from './Resources.jsx';

/* the main container will display whatever the currentView is */
function MainContainer() {
    const [currentView, setCurrentView] = useState('welcome'); // initially set to home view

    function evaluateView(newView) {
        if (newView === 'about') {
            return (
                <div>
                    <About />
                </div>
            );
        } else if (newView === 'resources') {
            return (
                <div>
                    <Resources />
                </div>
            );
        } else if (newView === 'amenities') {
            return (
                <div>
                    <Amenities />
                </div>
            );
        }
    }

    function handleOnClick(newView) {
        setCurrentView(newView);
    }


    const newView = evaluateView(currentView);

    return (
        <div>
            <NavigationBar onClick={handleOnClick}/>
            {newView}
            <Footer />
        </div>
    );
    
}

export default MainContainer;