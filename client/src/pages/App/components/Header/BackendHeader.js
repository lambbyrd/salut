import React from 'react';
import { browserHistory } from 'react-router';
import { Menu, Dropdown, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../../components/actions/authActions';

import './Header.css';

class BackEndHeader extends React.Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

handleClick(){
  this.props.logoutUser();

}

  render(){
  
    return(
      <div className="header">
        <Menu className="navColor" pointing secondary>
        <span className="myBrand">Salut.io</span>
         <Menu.Item name='home' active={this.props.location.pathname === '/'} onClick={()=> browserHistory.push('/')} />
          <Menu.Item name='About' active={this.props.location.pathname === '/about'} onClick={()=> browserHistory.push('/about')} />
          <Menu.Item name='FAQ'  active={this.props.location.pathname === '/faq'} onClick={()=> browserHistory.push('/faq')} />
          <Menu.Menu position='right'>
          <Menu.Item as={Dropdown} text='Profile'>
            <Dropdown.Menu>
              <Dropdown.Item>Edit Proflie</Dropdown.Item>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Dropdown.Menu>
          </Menu.Item>
          <Button
                basic
                size='small'
                className='cart'
                content='CART'
                icon='cart'
                label={{ as: 'a', basic: true, pointing: 'left', content: '0' }}
          />
         <Menu.Item name='Logout'  onClick={()=> browserHistory.push('/logout')} />
          </Menu.Menu>
        </Menu>
    </div>
      )
  }
}


BackEndHeader.contextTypes = {
  router: React.PropTypes.object,
};

const mapStateToProps = function(state){
  return{
    user: state.ActiveUser.user,
  }
}

export default connect(mapStateToProps, {logoutUser})(BackEndHeader);