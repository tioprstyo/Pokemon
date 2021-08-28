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
        paddingVertical: '5%'
    },
    summary: {
        flex: 1,
        borderBottomColor: '#D6D6D6',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 20,
    },
    titleSummary: {
        fontSize: 22,
        fontFamily: 'Rubik',
        color: '#283044',
        fontWeight: 'bold',
        marginBottom: 10
    },
    descSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    textSummary: {
        fontSize: 14,
        color: '#828282',
        fontFamily: 'Rubik',
    },
    endSummary: {
        fontSize: 14,
        color: '#828282',
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        marginLeft: 'auto'
    },
    ImageBackground: {
        width: '100%',
        height: 120,
    },
    headerIconLeft: {
        paddingVertical: 25,
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
    body: {
        position: 'absolute',
        top: 150,
        bottom: 0,
        backgroundColor: '#F9F9F9',
    },
    list: {
        paddingBottom: '8%',
        width: windowWidth,
        paddingHorizontal: '10%',
    },
    RBSHeader: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
    },
    imgBottom: {
        width: 150,
        height: 150,
        marginBottom: 30
    },
    gallery: {
        width: '25%',
        height: 50,
        marginBottom: 20
    },
});

export default styles;