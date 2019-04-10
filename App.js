/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';

const joueurs =  [
  {nom: 'Guy Lafleur', position: 'attaquant'},
  {nom: 'Bobby Orr', position: 'défenseur'},
  {nom: 'Mike Bossy', position: 'attaquant'},
  {nom: 'Thomas Greiss', position: 'gardien'},
  {nom: 'Carey Price', position: 'gardien'},
  {nom: 'Mike Modano', position: 'attaquant'},
  {nom: 'John Tavares', position: 'attaquant'},
  {nom: 'Temu Selanne', position: 'attaquant'},
  {nom: 'PK Subban', position: 'défenseur'},
  {nom: 'TJ Oshie', position: 'attaquant'},
  {nom: 'Pekka Rinne', position: 'gardien'},
  {nom: 'Mitch Marner', position: 'attaquant'},
  {nom: 'Wayne Gretzky', position: 'attaquant'},
  {nom: 'Georges Laraque', position: 'attaquant'},
  {nom: 'José Théodore', position: 'gardien'},
  {nom: 'Marc-André Fleury', position: 'gardien'},
  {nom: 'Henrik Lundqvist', position: 'gardien'},
  {nom: 'Antoine Roussel', position: 'attaquant'},
  {nom: 'Sidney Crosby', position: 'attaquant'},
  {nom: 'Ben Bishop', position: 'gardien'},
  {nom: 'Jonathan Quick', position: 'gardien'},
  {nom: 'Shea Weber', position: 'défenseur'},
  {nom: 'Victor Mete', position: 'attaquant'},
]

// type Props = {};
export default class App extends Component {

  state = {
    search: null
  }

  render() {
    return (
      
      <View style={{
        flex: 1
      }}>
        <Text style={[
          styles.header,
          Platform.OS === 'ios' ? { padding: 20, paddingTop: 30} : {}]}>Liste de joueurs</Text>

        <TextInput
        style = {styles.input}
        placeholder="Recherche en direct"
        onChangeText={ text => {
          this.setState({ search: text})
        }}
        value={this.state.search }
      />
<ScrollView contentContainerStyle={{    paddingTop: 30,
}}>
        {
          joueurs.filter(joueur => {
            return !this.state.search || joueur.nom.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
          }).map((joueur, index) => {
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
        </ScrollView>
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
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
});
