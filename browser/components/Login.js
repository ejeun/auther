import React from 'react';
import { connect } from'react-redux';
import { browserHistory } from 'react-router';
import { fetchUser } from '../redux/login';


/* -----------------    COMPONENT     ------------------ */

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  render() {
    const { message } = this.props;
    return (
      <div className="signin-container">
        <div className="buffer local">
            <form onSubmit={this.onLoginSubmit}>
                <div className="form-group">
                  <label>email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={this.handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      onChange={this.handlePasswordChange}
                      required
                    />
                </div>
                <button type="submit" className="btn btn-block btn-primary">{message}</button>
            </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a target="_self"
               href="/auth/google"
               className="btn btn-social btn-google">
            <i className="fa fa-google"></i>
            <span>{message} with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  handleEmailChange (evt) {
    this.setState({
      email: evt.target.value,
    });
  }

  handlePasswordChange (evt) {
    this.setState({
      password: evt.target.value,
  });
}

  onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(this.props);
    const { message } = this.props;
    const email = this.state.email;
    const password = this.state.password;
    this.props.login(email, password);
    console.log(`${message} isn't implemented yet`);
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => ({
  message: 'Log in'

});
const mapDispatch = (dispatch) => {
  return {
    login(email, password) {
      return dispatch(fetchUser(email, password));
    }
  }
};

export default connect(mapState, mapDispatch)(Login);
