import React from 'react'
import { StyleSheet,Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: Dimensions.get('screen').width-60,
        justifyContent: 'space-between',
        marginHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingVertical: 20
    },
    numberContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    number:{
        fontSize: 22,
        fontWeight: '400'
    },
    ageDescription:{
        fontSize: 16,
        color: 'grey'
    },
    ageTitle:{
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 2
    },
    
})

export default styles;
