import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Profile() {

    const [modalVisible,setModalVisible] = useState(false);
    const [name, setName] = useState('Agustin Kloster');
    const [tempName, setTempName] = useState('');

    const openModal = () => {
        setTempName(name)
        setModalVisible(true)
    }

    const handleNameChange = () => {
        setName(tempName)
        setModalVisible(false)
    }
    return (
        <>
            <Modal animationType="slide" 
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
                <View style = {styles.modalOverlay}>
                    <View style = {styles.containerModal}>  
                        <TextInput 
                            style = {styles.input}
                            onChangeText={setTempName} 
                            value={tempName}                     
                        />
                        <Pressable style = {styles.pressable} onPress={handleNameChange}>
                            <Text style = {styles.pressableText}>
                                Guardar
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View style = {styles.container}>  
                <Text style = {styles.text}>  
                    {name}
                </Text>
                <Pressable style = {styles.pressable} onPress={openModal}>
                    <Text style = {styles.pressableText}>
                        Cambiar nombre
                    </Text>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    modalOverlay: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    containerModal: {
        width: "80%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        width: "100%",
        padding: 10,
  },
})