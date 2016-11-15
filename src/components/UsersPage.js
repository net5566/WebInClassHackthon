import React, { Component } from 'react';


class UsersPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userslist : [],
    };
  }

  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
    fetch('/api/users')
      .then(res=>res.json())
      .then ( json => {

        let tempList= [];
        for (let i=0, n= json.users.length; i < n ; i++ ) {
          const tempStr = `#/users/${i + 1}`;
          tempList.push(<li key={i}><a href={tempStr}>User {i+1}</a></li>)
        }
        this.setState ({ userslist: tempList});
    });


  }

  render() {

      const thelist = this.state.userslist;
      if(thelist === undefined) {
        return <h1> WTF </h1> ;
      }
      else {
        return <div>Users
        <div>{thelist}</div>
      </div> ;
      }
    
  }
}

export default UsersPage;
