import { Component } from "react";
import { FlatList, View } from "react-native";

export default class ListaAlmoco extends Component{
    state = {
        almocos: [ 
            {dia: 'segunda-feira', principal: 'Feijoada'},
            {dia: 'terça-feira', principal: 'strogonoff'},
            {dia: 'quarta-feira', principal: 'Lasanha'},
            {dia: 'quinta-feira', principal: 'fricasse '},
            {dia: 'sexta-feira', principal: 'risoto'},
        ],
    };
    render(){
        return (
            <View>
                <FlatList 
                 data={this.state.almocos}
                 renderItem={
                    ({ item }) => <ItemAlmoco almocos={item}/>
                 }   />
            </View>
        )
    }
}