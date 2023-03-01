import { Component } from "react";
import { FlatList, View } from "react-native";

export default class ListaAlmoco extends Component{
    state = {
        almocos: [ 
            {dia: 'segunda-feira', principal: 'Feijoada', sobremesa: 'morango'},
            {dia: 'terça-feira', principal: 'strogonoff', sobremesa: 'melancia'},
            {dia: 'quarta-feira', principal: 'Lasanha', sobremesa: 'laranja'},
            {dia: 'quinta-feira', principal: 'fricasse ', sobremesa: 'iorgute'},
            {dia: 'sexta-feira', principal: 'risoto', sobremesa: 'gelatina'},
        ],
    };
    render(){
        return (
            <View>
                <FlatList 
                 data={this.state.dia}
                 renderItem={
                    ({ item }) => <ItemAlmoco dia={item}/>
                 }   />
            </View>
        )
    }
}