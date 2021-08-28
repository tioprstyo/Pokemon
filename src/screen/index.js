import React from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Blank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: require('../assets/img/backgroundPrimary.png'),
            pattern: require('../assets/img/pattern-onboard1.png'),
            logo: require('../assets/img/poke.png'),
            people: require('../assets/img/logo_bro.png')
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
            return this.props.navigation.navigate('Pokemon')
        }, 1500);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Image
                            style={styles.logo}
                            source={this.state.logo}
                        />
                        <Text style={styles.subtitle}>Selamat Datang Pecinta Pokemon!</Text>
                    </View>
                </View>
                <Image
                    style={styles.pattern}
                    source={this.state.pattern}
                />
                <Image
                    style={styles.patternPeople}
                    source={this.state.people}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        position: 'relative',
        backgroundColor: '#FFFFFF',
    },
    pattern: {
        position: 'absolute',
        top: 300,
        zIndex: 0,
    },
    patternPeople: {
        position: 'absolute',
        bottom: 0,
        height: '50%',
        resizeMode: 'contain',
        zIndex: 0,
    },
    header: {
        alignItems: 'center',
        top: 30,
    },
    content: {
        zIndex: 100,
        flex: 1,
    },
    logo: {
        marginVertical: 20,
        width: 100,
        height: 100,
    },
    subtitle: {
        fontSize: 30,
        fontFamily: "rubik",
        fontWeight: 'bold',
        color: "#283044",
        width: '80%',
        textAlign: 'center'
    },
});

const mapStateToProps = (state) => {
    return { users: state.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (user) => {
      dispatch({ type: 'REQUEST_LIST', payload: user });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank);