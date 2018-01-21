import React, {Component} from 'react'
import {Text, View, Image} from 'react-native'
import Card from './Card'
import CardItem from './CardItem'
import Button from './Button'
const AlbumDetail= ( {album}) =>{
    const {title, thumbnail_image, artist, image} =album;

    return (
        <Card>
            <CardItem>
            <View style={styles.thumbnailContainerStyle}>
            <Image style={styles.thumbnailImageStyle} source={{ uri: thumbnail_image}}/>
            </View>

            <View style={styles.CardItemStyle}>
            <Text style={styles.CardItemTextStyle}> {title} </Text>
            <Text> {artist} </Text>
            </View>
           </CardItem>

            <CardItem>
                <Image style={styles.CoverImage} source={{uri:image}}/>


            </CardItem>

            <CardItem>
                 <Button/>
            </CardItem>

       
           
           
        </Card>
    );



}; 


const styles={
     CardItemStyle:{
        
        flexDirection:'column',
        justifyContent:'space-around'

     },
     CardItemTextStyle:{
         fontSize:18,
         
     },

     thumbnailImageStyle:{
         height:100,
         width:100
     },
     thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
     },
     CoverImage:{
        height:300,
        flex:1,
        width:null
     }

};



export default AlbumDetail;