import React, { Component } from 'react';

import HomePage from './HomePage';
import UsersPage from './UsersPage';
import SingleUserPage from './SingleUserPage';
import AboutMe from './AboutMe';
import Deu from './Deu';
import Trans from './Trans'


class App extends Component {
  state = {
    route: window.location.hash.substr(1),
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  }

  renderRoute() {
    if (this.state.route === '/net') {
      return <AboutMe />;
    }  

    if (this.state.route === '/deu') {
      return <Deu />;
    }  


    if (this.state.route === '/trans') {
      return <Trans />;
    }

    if (this.state.route === '/links') {
      return <UsersPage />;
    }

    if (this.state.route.startsWith('/links/')) {
      const id = this.state.route.split('/links/')[1];
      return <SingleUserPage id={id} />;
    }

    return <HomePage />;
  }

  render() {

    return(
      <div className="container">

        <div className="blog-header">
          <h1 className="blog-title">In-class hackthon</h1>
          <p className="lead blog-description">This website is from the official example template of creating a blog with Bootstrap.</p>
        </div>

        <div className="row">

          <div className="col-sm-8 blog-main">
          
          {this.renderRoute()}

            <nav>
              <ul className="pager">
                <li><a href="#">Home</a></li>
              </ul>
            </nav>

          </div>

          <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
            <div className="sidebar-module sidebar-module-inset">
              <h4>About Me</h4>
              <h5>Net</h5>
              <p>喜愛學習德文，分享德語學習心得。</p>
            </div>
            <div className="sidebar-module">
              <h4>Archives</h4>
              <ol className="list-unstyled">
                <li><a href="#/">Start 首頁</a></li>
                <li><a href="#/net">Über mich 關於我</a></li>
                <li><a href="#/deu">Deutschland 德國</a></li>
                <li><a href="#/links">Deutsch Lernen 德文學習資源</a></li>
                <li><a href="#/trans">Deutsch Nummer 德文數字</a></li>
              </ol>
            </div>
            <div className="sidebar-module">
              <h4>Elsewhere</h4>
              <ol className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </div>

        </div>
      </div>
    );
    /*
    return (
      <div>
        <h1>Deutsch</h1>
        <ul>
          <li><a href="#/">Start 首頁</a></li>
          <li><a href="#/net">Über mich 關於我</a></li>
          <li><a href="#/deu">Deutschland 德國</a></li>
          <li><a href="#/links">Deutsch Lernen 德文學習資源</a></li>
          <li><a href="#/num">Deutsch Nummer 德文數字(施工中)</a></li>
        </ul>
        {this.renderRoute()}
      </div>
    );
*/
  }
}


export default App;
