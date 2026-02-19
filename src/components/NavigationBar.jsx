/* this will house the navigation bar component */
function NavigationBar(props) {

    return (
        <div className="header-container">
            <h1><em>616 East 18th</em></h1>

            <nav>
                <ul>
                  <li onClick={() => props.onClick('about')}>Welcome to 616</li>
                  <li onClick={() => props.onClick('amenities')}>Amenities at 616</li>
                  <li onClick={() => props.onClick('resources')}>Resources for Residents</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationBar;
