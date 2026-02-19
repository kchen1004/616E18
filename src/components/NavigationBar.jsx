/* this will house the navigation bar component */
function NavigationBar(props) {

    return (
        <div className="header-container">
            <h1>Welcome to <em>616 East 18</em></h1>

            <nav>
                <ul>
                  <li onClick={() => props.onClick('welcome')}>Home</li>
                  <li onClick={() => props.onClick('about')}>About 616</li>
                  <li onClick={() => props.onClick('amenities')}>Amenities at 616</li>
                  <li onClick={() => props.onClick('resources')}>Resources for Residents</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationBar;
