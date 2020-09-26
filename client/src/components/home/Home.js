import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <header className="home-header">
                <p>
                    Welcome to Fast Facts!
                </p>
                <Link to="/episode">Create your own game!</Link>
                {/*<a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    Learn React*/}
                {/*</a>*/}
            </header>
        </div>
    );
}

export default Home;
