import { StyleSheet, View} from 'react-native';
import Header from './scr/components/Header';
import ListaAlmoco from './scr/components/ListaAlmoco';

export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo="teste" />
      <Header titulo="teste2" />
      <Header titulo="teste3" />
      <ListaAlmoco />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
