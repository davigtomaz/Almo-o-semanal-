import { Text, View, StyleSheet } from "react-native";
export default function ItemAlmoco(props){
    return (
        <View style={styles.item}>
            <Text style={styles.texto}>{props.almocos.dia} ({props.almocos.principal})</Text>
           
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'blue',
        padding: 10,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color: 'white',
    }

});