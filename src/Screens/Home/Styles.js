import React from 'react'
import { StyleSheet,Dimensions } from 'react-native';

const Styles = StyleSheet.create({
    text: {
        fontSize: 28,
        color: 'red',
    },
    backgroundImage: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title:{
        color: 'white',
        fontSize: 80,
        fontWeight: 'bold',
        width: '60%',
        marginLeft: 20,
        
    },
    button: {
        backgroundColor: 'white',
        width: 220,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 20,
        marginTop: 40
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
    },
    searchButton: {
        backgroundColor: 'white',
        height: 60,
        width: Dimensions.get('screen').width-24,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems:'center',
        marginHorizontal: 12,
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        zIndex: 1200,
        elevation: (Platform.OS === 'android') ? 50 : 0, 
    },
    searchIcon: {
        marginRight: 12
    }
})

export default Styles;