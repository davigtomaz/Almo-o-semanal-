import { Component } from "react";
import { FlatList, View } from "react-native";
import ItemAlmoco from "./ItemAlmoco";

export default class ListaAlmoco extends Component{
    state = {
        almocos: [ 
            {dia: 'Segunda-feira', principal: 'Feijoada', sobremesa: 'Pudim'},
            {dia: 'Terça-feira', principal: 'strogonoff', sobremesa: 'Maçã' },
            {dia: 'Quarta-feira', principal: 'Lasanha', sobremesa: 'Laranja' },
            {dia: 'Quinta-feira', principal: 'fricasse ', sobremesa: 'Melancia'},
            {dia: 'Sexta-feira', principal: 'risoto' , sobremesa: 'Arroz Doce' },
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