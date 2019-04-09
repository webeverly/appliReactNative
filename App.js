/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
const joueurs =  [
  {nom: 'Guy Lafleur', position: 'attaquant'},
  {nom: 'Bobby Orr', position: 'défenseur'},
  {nom: 'Mike Bossy', position: 'attaquant'},
]

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <Text style={styles.header}>Liste de joueurs</Text>

        {
          joueurs.map((joueur, index) => {
            return (
              <View key={joueur.nom} style={[
                styles.row,
              { backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}
              ]}>
              <View style={styles.edges}>
                <Text>{index + 1}</Text>
              </View>
                
                <View style={styles.nomPosition}>
                  <Text>{joueur.nom}</Text>
                  <Text style={{color: 'grey'}}>{joueur.position}</Text>
                </View>
                <View style={styles.edges}>
                <Text>Info</Text>
                </View>
              </View>
            )
          })
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 40,
    fontSize: 30,
    textAlign: "center",
    color: '#0066CC',
    fontWeight: '300'
  },
  row : {
    flexDirection: 'row'
  },
  edges : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  nomPosition: {
    flexDirection: 'column',
    flex: 8
  }
});
