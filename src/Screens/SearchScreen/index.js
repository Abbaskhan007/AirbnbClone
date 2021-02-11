import React from 'react'
import { View, Text ,FlatList} from 'react-native'
import feed from '../../../assets/Data/feed'
import Post from '../Post'

export default function index() {
    return (
        <FlatList
        data={feed}
        renderItem = {({item})=> <Post item={item}/>}
        />
    )
}
