import React, {Component} from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class UserProfileCard extends Component {

  render() {
    const {cardStyle, cardContainerStyle, logout,username} = this.props;
    return (
      <Card style={cardStyle} containerStyle={cardContainerStyle}>
        <CardHeader
          title={`Hello, ${username}`}
        />
        <CardActions>
          <FlatButton primary={true} label="Log out" onTouchTap={() => {logout()}}/>
        </CardActions>
      </Card>
    )
  }
}

UserProfileCard.defaultProps = {
  cardStyle: {
    boxShadow: 'none'
  },
  cardContainerStyle: {
    maxWidth: '335px'
  },
  version: {ui: '', mw: ''},
  username:''
};

export default UserProfileCard;
