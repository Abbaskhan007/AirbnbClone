import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    searchButtonContainer:{
        backgroundColor: '#f15454',
        paddingVertical: 15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 8,
        marginHorizontal: 6,
        marginVertical: 6
    },
    buttonText:{
        fontSize: 20,
        color: 'white',
        fontWeight: '900'
    },
    container: {
        borderColor: 'black',
        flex: 1,
        justifyContent: 'space-between'
    }
})

export default styles;
