import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        paddingHorizontal: 30,
        flex: 1,
        backgroundColor: 'white'
    },
    searchText: {
        fontSize: 20,
        marginBottom: 15,
    },
    listContainer:{
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    iconContainer:{
        width: 50,
        height: 50,
        backgroundColor: '#e7e7e7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 12
    }
})

export default styles;
