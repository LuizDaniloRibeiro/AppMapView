import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions, Image } from 'react-native'
    
const height = Dimensions.get('window').height
    
const response = [
      {
        id: '1',
        coordinates: {
          latitude: -23.5083269537475, 
          longitude: -47.442509312685644,
        },
        title: 'Sorocaba',
        description: 'Sorocaba',
        icon: require('../../assets/location.png'),
        imagem: require('../../assets/sorocaba.png')
      },
      {
        id: '2',
        coordinates: {
          latitude: -23.213447741596855, 
          longitude: -47.31722517916694,
        },
        title: 'Itu',
        description: 'Itu',
        category: 1,
        icon: require('../../assets/location.png'),
        imagem: require('../../assets/itu.jpg')
      },
      {
        id: '3',
        coordinates: {
          latitude: -23.18621157494891, 
          longitude: -46.89983700455004,
        },
        title: 'Jundiai',
        description: 'Jundiai',
        category: 1,
        icon: require('../../assets/location.png'),
        imagem: require('../../assets/jundiai.jpg')
      },
      {
        id: '4',
        coordinates: {
          latitude: -23.529079820443886, 
          longitude: -47.133509356333455,
        },
        title: 'São Roque',
        description: 'São Roque',
        category: 1,
        icon: require('../../assets/location.png'),
        imagem: require('../../assets/sao-roque.jpg')
      },
      {
        id: '5',
        coordinates: {
          latitude: -22.725528946051334, 
          longitude: -47.69371977533475,
        },
        title: 'Piracicaba',
        description: 'Piracicaba',
        category: 1,
        icon: require('../../assets/location.png'),
        imagem: require('../../assets/piracicaba.gif')
      },
      {
        id: '6',
        coordinates: {
          latitude: -23.210078252495137, 
          longitude: -47.519525598265254
        },
        title: 'Porto Feliz',
        description: 'Porto Feliz',
        category: 1,
        icon: require('../../assets/location.png'),
        imagem: require('../../assets/porto.png')
      },
      {
        id: '7',
        coordinates: {
          latitude: -23.52175280909069, 
          longitude: -46.634499277185526
        },
        title: 'São Paulo',
        description: 'São Paulo',
        category: 1,
        icon: require('../../assets/location.png'),
        imagem: require('../../assets/sao-paulo.png')
      }
]
    
const Map = () => {
    return (
        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: -15.59611,
            longitude: -56.09667,
            latitudeDelta: 70,
            longitudeDelta: 1
          }}
        >
          {response.map(marker => (
            <MapView.Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
              imagem={marker.imagem} style={{ height: 32, width: 32 }}
            >
              <Image source={ marker.icon } style={{ height: 32, width: 32 }} />
            </MapView.Marker>
          ))}
        </MapView>
    )
}
    
const styles = StyleSheet.create({
    map: {
        height
    }
})
    
export default Map