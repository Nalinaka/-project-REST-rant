const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
            <main>
                <h1>Places to Rant and Rave About!</h1>
                <div className='homepage-image'>
                  <img src="/images/Pasta.jpg" alt="Pasta Image"/>
                  <div>
                  Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </div>
                  </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    );
}

module.exports = home;