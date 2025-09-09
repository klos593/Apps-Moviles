import { Pressable, StyleSheet, Text, View } from "react-native";

type ProfileProps = {
    name: string
}

export default function Profile(props: ProfileProps) {

    const changeName = () => {

    }

    return (
        <View style = {styles.container}>  
            <Text style = {styles.text}>  
                {props.name}
            </Text>
            <Pressable style = {styles.pressable} onPress={changeName}>
                <Text style = {styles.pressableText}>
                    Cambiar nombre
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressable: {
        margin: 20,
        backgroundColor: '#008cffff',
        padding: 20,
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