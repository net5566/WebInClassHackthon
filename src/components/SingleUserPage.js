import React, { Component, PropTypes } from 'react';


class SingleUserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userProfile : [],
    };
  }


  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  componentDidMount() {
    // fetch `/api/users/${id}` to get user and then set state...
    fetch (`/api/users/${this.props.id}`)
    	.then(res=>res.json())
    	.then(json =>
    	{
    		let tempProfile = [];
    		const tempAvatar = `avatar: ${json.avatar}`;
    	//	console.log(tempAvatar);
    		const tempName = `name: ${json.name}`;
    	//	console.log(json.name);
    		const tempAge = `age: ${json.age}`;
    		tempProfile.push(<li key={0}>{tempAvatar}</li>);
    		tempProfile.push(<li key={1}>{tempName}</li>);
    		tempProfile.push(<li key={2}>{tempAge}</li>);
    		this.setState({ userProfile:tempProfile });
    	});
  }

  render() {
    return <div>User {this.props.id}
    <h3>{this.state.userProfile}</h3></div>;
  }
}

export default SingleUserPage;
