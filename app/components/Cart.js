import React from 'react';
import { View, Button, Text, Alert, StyleSheet } from 'react-native';
import CartList from './CartList';


export default function Cart(props) {
   
        return (
            <View style={styles.container}>
                <View style={styles.actions}>
                    <Button style={styles.button} title="Add" onPress={props.addRandomItem} />
                    <Button style={styles.button} title="Empty" onPress={props.actions.empty} />
                    {/* <Button style={styles.button} title="Press" onPress={props.actions.dummy} /> */}
                    <Button style={styles.button} title="Checkout" onPress={() => props.navigation.navigate('Checkout') } />
                </View>
                <View style={styles.cartList}>
                    <CartList items={props.items} removeItem={props.actions.removeItem} updateItem={props.actions.updateItem} />
                </View>
            </View>
        )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'lightgrey',
        borderBottomWidth: 3,
        marginTop: 8
    },
    cartList: {
        flex: 9
    },

    button: {
        height: 30
    }
});