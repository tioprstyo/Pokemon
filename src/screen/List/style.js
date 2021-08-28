import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        backgroundColor: '#54B2AA'
    },
    content: {
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: windowWidth,
        padding: '5%'
    },
    list: {
        height: '90%',
        paddingBottom: '35%',
        width: windowWidth,
        backgroundColor: '#F9F9F9',
        paddingHorizontal: '5%',
        alignItems: 'center'
    },
    filterContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    boxFilter: {
        borderWidth: 1,
        borderColor: '#5CC3B9',
        paddingVertical: 10,
        borderRadius: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginRight: 8,
        width: '50%',
    },
    textFilter: {
        fontSize: 12,
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        color: '#5CC3B9'
    },
    boxFilterActive: {
        borderWidth: 1,
        borderColor: '#5CC3B9',
        backgroundColor: '#5CC3B9',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '50%',
        marginRight: 8
    },
    textFilterActive: {
        fontSize: 12,
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    boxHistory: {
        width: '100%',
        padding: '3%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 1,
        marginBottom: 10,
    },
    historyCard: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        position: 'relative',
    },
    iconHistory: {
        width: 27,
        height: 30,
        alignItems: 'center',
        marginRight: 20,
    },
    historyDesc: {
        fontFamily: 'Rubik',
        fontSize: 16,
        color: '#283044',
        fontWeight: 'bold'
    },
    statusPending: {
        fontFamily: 'Rubik',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFCD34'
    },
    statusApprove: {
        fontFamily: 'Rubik',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#229E54'
    },
    statusReject: {
        fontFamily: 'Rubik',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#E55155'
    },
    descSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    textSummary: {
        fontSize: 12,
        color: '#828282',
        fontFamily: 'Rubik',
        marginBottom: 5
    },
    nullList: {
        marginTop: 80
    },
    textNullList: {
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#5CC3B9',
        alignSelf: 'center',
        marginBottom: 20
    },
    imgNullList: {
        alignSelf: 'center',
        marginBottom: 20
    },
    textDescNull: {
        fontFamily: 'Rubik',
        fontSize: 14,
        color: '#757575',
        alignSelf: 'center',
    },
    ImageBackground: {
        width: '100%',
        height: 120,
    },
    headerIconLeft: {
        paddingVertical: 30,
        flexDirection: 'row',
        width: 100,
        marginRight: 10,
    },
    titleHeader: {
        color: '#ffffff',
        fontSize: 20,
        marginLeft: 20,
        fontWeight: '700',
    },
    headerIcon: {
        paddingVertical: 30,
        flexDirection: 'row',
        width: 100,
        marginRight: 10,
        marginLeft: 'auto',
    },
    boxLoading: {
        alignItems: 'center',
        paddingVertical: 5,
        width: '100%',
        flex: 1
    },
    loadingImage: {
        width: 100,
        height: 50
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.7,
        backgroundColor: 'black',
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;