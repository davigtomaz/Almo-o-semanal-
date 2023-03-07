import { Text, View, StyleSheet } from "react-native";
export default function ItemAlmoco(props){
    return (
        <View style={styles.item}>
            <Text style={styles.texto}>{props.almocos.dia}: Principal: {props.almocos.principal}; Sobremesa: {props.almocos.sobremesa}. </Text>
           
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        borderWidth: 5,
    },
    texto: {
        color: 'black',
        padding: 10,
    }

});