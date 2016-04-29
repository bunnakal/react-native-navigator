"use strict";

var React = require("react-native");

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity
} = React;

var LoginView = require("./LoginView");
var SecureView = require("./SecureView");

class navigator extends React.Component{
  render() {
    var NavigationBarRouteMapper = {
      LeftButton: (route, navigator, index, navState) => {
        if (index === 0) {
          return null
        }
        const previousRoute = navState.routeStack[index - 1]
        return (
          <TouchableOpacity
            onPress={() => navigator.pop()}>
            <Text style={styles.navText}>
              {previousRoute.title}
            </Text>
          </TouchableOpacity>
        )
      },
      RightButton: (route, navigator, index, navState) => {
        if (route.rightElement) {
          return route.rightElement
        }
      },
      Title: (route, navigator, index, navState) => {
        return (
          <Text style={styles.navText}>{route.title}</Text>
        )
      }
    };
    return (
      <Navigator
        style={styles.navigationContainer}
        initialRoute={{id: 'login'}}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />
        }
      />
    );
  }
  renderScene(route, navigator) {
    // _navigator = navigator;
    switch (route.id) {
      case 'login':
        return (
          <LoginView navigator={navigator} title="Login" />
        );
      case 'logged':
        return (
          <SecureView navigator={navigator} title="Logged" route={route} />
        );
    }
  }
}

var styles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    }
});
AppRegistry.registerComponent('navigator', () => navigator);
