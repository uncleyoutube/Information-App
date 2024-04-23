import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 24,
        justifyContent: 'flex-start',
    },
    title: {
        height: 80,
        width: Dimensions.get('window').width, 
        backgroundColor: '#ded9ca',
        alignItems: 'center',
        padding: 16,
        justifyContent: 'flex-end',
    },
    fields: {
        flex: 6,
        backgroundColor: '#fff',
        padding: 36,
        justifyContent: 'flex-start',
    },
    input: {
        width: 300,
        padding: 8,
        backgroundColor: '#f5f5f5'
    },
    picture: {
        alignItems: 'center',
        width: 300,
        height: 300,
        marginTop: 20,
        padding: 16,
    },
    padded: {
        padding: 8
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default styles;