"use strict";
var React = require("react-native");

var {
    Component,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
    ToolbarAndroid
} = React;

var SecureView = require("./SecureView");

class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <View style={styles.wraper}>
        <ToolbarAndroid
          title="Login"
          titleColor="#fff"
          style={styles.toolbar}
        />
        <View style={styles.container}>
          <View>
            <TextInput
              placeholder="Username"
              onChange={(event) => this.setState({username: event.nativeEvent.text})}
              style={styles.formInput}
              value={this.state.username} />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              onChange={(event) => this.setState({password: event.nativeEvent.text})}
              style={styles.formInput}
              value={this.state.password} />
            <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
  onSubmitPressed() {
    this.props.navigator.push({
      id: 'logged',
      username: this.state.username,
      password: this.state.password
    });
  }
};

var styles = StyleSheet.create({
  wraper: {
    flex: 1,
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "stretch"
  },
  formInput: {
    height: 50,
    padding: 10,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5,
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 8,
    color: "#555555"
  },
  button: {
    height: 40,
    flex: 1,
    backgroundColor: "#006633",
    borderColor: "#006633",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    alignSelf: "center"
  },
  toolbar: {
    backgroundColor: '#006699',
    height: 60
  }
});

module.exports = LoginView;