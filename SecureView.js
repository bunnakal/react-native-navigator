"use strict";
var React = require("react-native");
var {
  Component,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} = React;
class SecureView extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: this.props.route.username,
  //     password: this.props.password
  //   };
  //}
  render() {
    return (
      <View style={styles.wraper}>
        <ToolbarAndroid
          title="Loging info"
          titleColor="#fff"
          style={styles.toolbar}
          />
        <View style={styles.container}>
          <Text style={styles.heading}>
            Welcome {this.props.route.username}!
          </Text>
          <Text style={styles.subheading}>
            Your password is {this.props.route.password}
          </Text>
        </View>
      </View>
    );
  }

};

var styles = StyleSheet.create({
  wraper: {
    flex: 1,
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  },
  heading: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565"
  },
  subheading: {
    color: "#cccccc"
  },
  toolbar: {
    backgroundColor: '#006699',
    height: 60
  }
});

module.exports = SecureView;