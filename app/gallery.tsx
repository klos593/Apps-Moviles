import { createProduct, getProducts, Product } from '@/api/api'
import { useEffect, useState } from 'react'
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Item from "../components/product"

const Index = () => {



    const [data,setData] = useState <Product[]>([])
    const [filteredData, setFilteredData] = useState <Product[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');

    const filterData = (keyWord: string) => {
        setFilteredData(data.filter(element => element.title.toLowerCase().includes(keyWord.toLowerCase())))
    }

    const handlePress = () => {
        setModalVisible(true);
    }

    const handleProductAgregation = () => {
        const data = {"title": title, "description": description, "price": price, "image": 'https://picsum.photos/202'}
        createProduct(data)
        setModalVisible(false);
    }

    useEffect(() => {
        const fun = async () => {
        const prod = await getProducts();
        setData(prod);
        }
        try {
            fun()
        } catch (error) {
            console.log(error)
        }
    }, []);

    return(
        <>
            <View style={styles.searchBarContainer}>
                <View style= {{flex: 4}}>
                    <TextInput 
                        placeholder="Search" 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        style={styles.searchBar}
                        onChangeText={keyWord => filterData(keyWord)}>
                    </TextInput>
                </View>
                <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Pressable style = {{borderRadius: 10, borderWidth: 1, padding: 10, backgroundColor:'#008cffff'}} onPress={handlePress}>
                        <Text>
                            Agregar
                        </Text>
                    </Pressable>
                </View>
            </View>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => {
                setModalVisible(!modalVisible)}}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontWeight:500, fontSize:30}}>
                                Titulo:
                            </Text>
                            <TextInput 
                                style = {styles.input}
                                onChangeText={setTitle}>
                            </TextInput>
                        </View>
                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontWeight:500, fontSize:30}}>
                                Descripcion:
                            </Text>
                            <TextInput 
                                style = {styles.input}
                                onChangeText={setDescription}>
                            </TextInput>
                        </View>
                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontWeight:500, fontSize:30}}>
                                Precio:
                            </Text>
                            <TextInput 
                                style = {styles.input}
                                onChangeText={setPrice}>
                            </TextInput>
                        </View>
                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                            <Pressable onPress={handleProductAgregation} style={{backgroundColor: '#008cffff',borderRadius: 15,borderWidth:1,padding: 20}}>
                                <Text style={{fontWeight:500, fontSize:30}}>
                                    Agregar
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{flex:15}}>
                <FlatList
                    data={filteredData} 
                    renderItem={ ({item}) => (
                        <Item 
                            title={item.title} 
                            description={item.description} 
                            image={item.image} 
                            price={item.price}
                            imageResizeMode={'cover'}
                            favourite={false}
                            borderColor={'black'}
                        />)}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        borderColor: '#111111',
        borderWidth: 1,
        borderRadius: 8,
    },
    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: "rgba(0,0,0,0.5)", 
    },
    modalContainer: {
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        minHeight: 760,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        width: "100%",
        padding: 10,
    },
})

export default Index