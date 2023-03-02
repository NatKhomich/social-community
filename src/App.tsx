import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";



function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar />
            <div className={'content'}>
                <div>
                    <img src={'https://live.staticflickr.com/65535/49704121871_d4b10262bf_b.jpg'}/>
                </div>
                <div>
                    ava+description
                    {/* <img src={'https://avatars.mds.yandex.net/i?id=e67c20f98bdc512c5d3bc20c140f8fac-5719595-images-taas-consumers&n=27&h=480&w=480'} />*/}

                </div>
                <div>
                    My posts
                    <div>New post</div>
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>

            </div>

        </div>
    );
}

export default App;
