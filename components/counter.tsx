import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Counter() {

    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(prev => prev + 1)
    }

    const decreaseCounter = () => {
        setCounter(prev => prev - 1)
    }
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>
                Valor actual: {counter}
            </Text>
            <View style = {styles.pressableContainer}>
                <Pressable onPress={decreaseCounter} style = {styles.pressable}>
                    <Text style = {styles.pressableText}>
                        DISMINUIR
                    </Text>
                </Pressable>
                <Pressable onPress={increaseCounter} style = {styles.pressable}>
                    <Text style = {styles.pressableText}>
                        AUMENTAR
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressableContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressable: {
        margin: 20,
        backgroundColor: '#008cffff',
        padding: 20,
        marginTop: 40,
        borderRadius: 15,
        borderWidth: 1
    },
    pressableText: {
        color: 'white',
        fontSize: 20
    },
    text: {
        fontSize: 20
    }
})