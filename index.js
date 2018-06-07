import React from 'react';
import { AppRegistry, StyleSheet  ,View} from 'react-native';
 import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
// import { Header, Text } from 'native-base' 

const App = () =>{

return (
    <View >
    {/* <Header >
        <Text  style={styles.headerStyle}>
            Albums
            </Text>
       </Header>  */}
    <Header headerText={'Albums'}/>
    <AlbumList/>
    </View>

);

};
 

const styles=StyleSheet.create({
    headerStyle:{
        fontSize:20
    }

})


AppRegistry.registerComponent('albums', () => App);