import React from 'react';
import { BackHandler, View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import styles from './style';
import Toast, { BaseToast } from 'react-native-toast-message';
import curency from '../../../../config/number';
import { connect } from 'react-redux';

const toastConfig = {
  success: ({ props, ...rest }) => (
    <BaseToast
        {...rest}
    />
  ),
  
  my_custom_type: ({ props, ...rest }) => (
    <View style={{ height: 40, width: '90%', backgroundColor: '#015E9F', justifyContent: 'center', paddingHorizontal: 15 }}>
      <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Rubik' }}>{props.text1}</Text>
    </View>
  )
};

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLeft: require('../../../../assets/img/headerLeft.png'),
        };
    }

    backAction = () => {
        this.props.navigation.navigate('Pokemon')
        return true;
    };

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }
    
    render() {
        const { detail, title } = this.props.users;
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={this.state.imageLeft} style={styles.ImageBackground}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.headerIconLeft}>
                            <TouchableOpacity style={{ textAlign: 'center', marginLeft: 20 }} onPress={() => this.props.navigation.navigate('Pokemon')}>
                                <View style={{ flexDirection: 'row', width: 28, height: 28 }}>
                                    <Image
                                        style={{ width: 25, height: 12 }}
                                        source={require('../../../../assets/icon/backArrow.png')}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.titleHeader}>{`${title} Details`}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.content}></View>
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.list}>
                            <View style={{ paddingBottom: '30%'}}>
                                <View style={styles.RBSHeader}>
                                    <Image
                                        style={styles.imgBottom}
                                        source={{uri: detail.sprites.front_default}}
                                    />
                                </View>
                                <View style={styles.summary}>
                                    <Text style={styles.titleSummary}>Spesification</Text>
                                    <View style={styles.descSummary}>
                                        <Text style={styles.textSummary}>Species Name :</Text>
                                        <Text style={styles.endSummary}>{` ${detail.species.name.charAt(0).toUpperCase()}${detail.species.name.slice(1)}`}</Text>
                                    </View>
                                    <View style={styles.descSummary}>
                                        <Text style={styles.textSummary}>Abilities :</Text>
                                        <View>
                                            {detail.abilities.map((item, j) => {
                                                return (
                                                    <Text key={j} style={styles.endSummary}>{`${item.ability.name.charAt(0).toUpperCase()}${item.ability.name.slice(1)}`}</Text>
                                                )
                                            })}
                                        </View>
                                    </View>
                                    <View style={styles.descSummary}>
                                        <Text style={styles.textSummary}>Base Experience :</Text>
                                        <Text style={styles.endSummary}>{curency(detail.base_experience)}</Text>
                                    </View>
                                    <View style={styles.descSummary}>
                                        <Text style={styles.textSummary}>Stats :</Text>
                                        <View>
                                            {detail.stats.map((item, j) => {
                                                return (
                                                    <Text key={j} style={styles.endSummary}>{`${item.stat.name.charAt(0).toUpperCase()}${item.stat.name.slice(1)}`}</Text>
                                                )
                                            })}
                                        </View>
                                    </View>
                                    <View style={styles.descSummary}>
                                        <Text style={styles.textSummary}>Type :</Text>
                                        <View>
                                            {detail.types.map((item, j) => {
                                                return (
                                                    <Text key={j} style={styles.endSummary}>{`${item.type.name.charAt(0).toUpperCase()}${item.type.name.slice(1)}`}</Text>
                                                )
                                            })}
                                        </View> 
                                    </View>
                                </View>
                                <Text style={styles.titleSummary}>Regeneration</Text>
                                <View style={styles.imageGallery}>
                                    {detail.sprites.front_default ?
                                        <Image
                                            style={styles.gallery}
                                            source={{ uri: detail.sprites.front_default }}
                                        /> : <View></View>}
                                    {detail.sprites.back_default ?
                                        <Image
                                            style={styles.gallery}
                                            source={{ uri: detail.sprites.back_default }}
                                        /> : <View></View>}
                                    {detail.sprites.back_female ?
                                        <Image
                                            style={styles.gallery}
                                            source={{ uri: detail.sprites.back_female }}
                                        /> : <View></View>}
                                    {detail.sprites.back_shiny ?
                                        <Image
                                            style={styles.gallery}
                                            source={{ uri: detail.sprites.back_shiny }}
                                        /> : <View></View>}
                                    {detail.sprites.back_shiny_female ?
                                        <Image
                                            style={styles.gallery}
                                            source={{ uri: detail.sprites.back_shiny_female }}
                                        /> : <View></View>}
                                    {detail.sprites.front_female ?
                                        <Image
                                            style={styles.gallery}
                                            source={{ uri: detail.sprites.front_female }}
                                        /> : <View></View>}
                                    {detail.sprites.front_shiny ?
                                        <Image
                                            style={styles.gallery}
                                            source={{ uri: detail.sprites.front_shiny }}
                                        /> : <View></View>}
                                    {detail.sprites.front_shiny_female ?
                                        <Image
                                            style={styles.gallery}
                                            source={{ uri: detail.sprites.front_shiny_female }}
                                        /> : <View></View>}
                                    {detail.sprites.other.dream_world.front_default ?
                                        <Image
                                            style={styles.gallery}
                                            source={{ uri: detail.sprites.other.dream_world.front_default }}
                                        /> : <View></View>}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (detail) => {
      dispatch({ type: 'STORE_DETAIL', payload: detail });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);