# MEEP

An MVC framework built on top of React. 

```js
var SignInView = Meep.createClass({
  controller: SignInCtrl,
  render: function() {
    return (
      <input value={this.state.email} onChange={this.update('email')}></input>
      <input value={this.state.password} onChange={this.update('password')}></input>
      <button type="submit" onClick={this.emit('click:sign-in')}>Sign in</button>
    )
  }
});

function SignInCtrl(view, dispatch) {
  view.setState({
    email: 'foo@bar.com'
  });
  
  view.on('click:sign-in', onClickSignIn);

  function onClickSignIn(e) {
    dispatch({
      action: 'sign-in',
      email: view.state.email,
      password: view.state.password 
    });
  }
}
```