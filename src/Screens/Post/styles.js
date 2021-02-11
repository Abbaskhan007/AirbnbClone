import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        margin: 20
    },
    image:{
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderRadius: 8
    },
    description:{
        marginVertical: 10,
        fontSize: 16,
        color: 'gray'
    },
    details:{
        lineHeight: 22,
        fontSize: 17
    },
    prices :{
        flexDirection: 'row',
        marginVertical: 8
    },
    oldPrice: {
        fontWeight: '500',
        textDecorationLine: 'line-through',
        fontSize: 20,
        color: 'gray'
    },
    newPrice: {
        fontWeight: '500',
        fontSize: 20
    },
    totalPrice:{
        fontSize: 16,
        fontWeight: '400',
        textDecorationLine: 'underline',
        color: '#5b5b5b'
    }
})

export default styles;