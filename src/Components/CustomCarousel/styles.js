import React from 'react';
import { StyleSheet } from 'react-native';


  
const styles = StyleSheet.create({
    container:{
        margin: 4,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        

    },
    image:{
        height: 90,
        resizeMode: 'cover',
        aspectRatio: 1
    },
    description:{
        marginVertical: 6,
        fontSize: 14,
        color: 'gray'
    },
    details:{
        fontSize: 14,
        marginBottom: 4
    },
    prices :{
        flexDirection: 'row',
    },
    oldPrice: {
        fontWeight: '500',
        textDecorationLine: 'line-through',
        fontSize: 14,
        color: 'gray'
    },
    newPrice: {
        fontWeight: '500',
        fontSize: 14
    },
    detailsSection:{
        marginHorizontal: 6,
        flex: 1
    }
})

export default styles;