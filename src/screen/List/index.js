import React from 'react';
import { BackHandler, View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import styles from './style';
import Toast, { BaseToast } from 'react-native-toast-message';
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

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterList: [
                {
                    text: 'Pokemon',
                    value: 0
                },
                {
                    text: 'Item',
                    value: 1,
                },
            ],
            status: 0,
            detailLoading: false,
            isLoading: false,
            imageLeft: require('../../assets/img/headerLeft.png'),
        };
    }

    backAction = () => {
        this.props.navigation.navigate('Home')
        return true;
    };

    componentDidMount() {
        this.loadData(this.state.status, `https://pokeapi.co/api/v2/pokemon/?offset=1&limit=20`, []);
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    loadData = async (i, url, list) => {
        this.setState({ status: i });
        const data = { url: url, list: list, title: this.state.status ? 'Item' : 'Pokemon' };
        this.props.getList(data);
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    detailPage = async (value) => {
        this.setState({ detailLoading: true })
        const detail = await fetch(value, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
            .then((json) => {
                var detailData = {
                    data: json,
                    list: this.props.users.list,
                    title: this.state.status ? 'Item' : 'Pokemon'
                }
                return detailData;
            })
            .catch((error) => {
                return null;
            });;
        this.props.getDetail(detail);
        setTimeout(() => {
            this.setState({ detailLoading: false })
            if (this.state.status) {
                this.props.navigation.navigate('ItemDetail');
            } else {
                this.props.navigation.navigate('PokemonDetail');
            }
        }, 1000);
        
    }

    changeStatus = (i) => {
        this.setState({ status: i });
        this.scrollView.scrollTo({ y: 0, animated: true });
        this.loadData(i, `https://pokeapi.co/api/v2/${i ? 'item' : 'pokemon'}/?offset=1&limit=20`, [])
    };

    isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1;
    };
    
    render() {
        const { list, next } = this.props.users;
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={this.state.imageLeft} style={styles.ImageBackground}>
                    <View style={{ flexDirection: 'row', paddingVertical: 38, height: 28  }} />
                    <View>
                        <Text style={styles.titleHeader}>{`${this.state.filterList[this.state.status].text} List`}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.content}>
                    <View style={styles.filterContent}>
                        {this.state.filterList.map((item, i) => {
                            return (
                                <TouchableOpacity style={this.state.status === item.value ? styles.boxFilterActive : styles.boxFilter} key={i} onPress={() => this.changeStatus(item.value)}>
                                    <View>
                                        <Text style={this.state.status === item.value ? styles.textFilterActive : styles.textFilter}>
                                            {item.text}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
                <View style={styles.list}>
                    {list.length > 0 ?
                        <ScrollView
                            ref={(view) => {
                                this.scrollView = view;
                            }}
                            showsVerticalScrollIndicator={false}
                            onScroll={({ nativeEvent }) => {
                                if (this.isCloseToBottom(nativeEvent)) {
                                    this.setState({ isLoading: true })
                                    this.loadData(this.state.status, next, list);
                                    setTimeout(() => {
                                        this.setState({ isLoading: false })
                                    }, 2000);
                                }
                            }}
                        >
                            <View>
                                {list.map((item, j) => {
                                    return (
                                        <View style={styles.boxHistory} key={j}>
                                            <TouchableOpacity style={styles.historyCard} onPress={() => this.detailPage(item.url)}>
                                                <View style={{ justifyContent: 'center', alignItems: 'center', width: '15%' }}>
                                                    <Image
                                                        style={styles.iconHistory}
                                                        source={this.state.status ? require('../../assets/icon/poke.gif') : require('../../assets/icon/pikacu.gif')}
                                                    />
                                                </View>
                                                <View style={{ width: '85%' }}>
                                                    <Text style={styles.textSummary}>{this.state.status ? 'Item name' : 'Pokemon name'}</Text>
                                                    <View style={styles.descSummary}>
                                                        <Text style={styles.historyDesc}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}
                                {this.state.isLoading ?
                                    <View style={styles.boxLoading}>
                                        <Image
                                            style={styles.loadingImage}
                                            source={require('../../assets/icon/loading.gif')}
                                        />
                                    </View>
                                    : <View></View>
                                }
                            </View>
                        </ScrollView>
                        :
                        <View style={styles.nullList}>
                            <Image style={styles.imgNullList} source={require('../../assets/img/history.png')} />
                            <Text style={styles.textNullList}>Uupss... Maaf</Text>
                            <Text style={styles.textDescNull}>Tidak ada Daftar {this.state.filterList[this.state.status].text}</Text>
                        </View>
                    }
                </View>
                {this.state.detailLoading ?
                    <View style={styles.overlay}>
                        <Image
                            style={styles.loadingImage}
                            source={require('../../assets/icon/loading.gif')}
                        />
                    </View>
                    : <View></View>
                }
                <Toast style={{ zIndex: 10 }} config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getList: (user) => {
      dispatch({ type: 'STORE_LIST', payload: user });
      },
    getDetail: (detail) => {
      dispatch({ type: 'STORE_DETAIL', payload: detail });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);