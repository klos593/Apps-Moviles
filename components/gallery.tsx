import { useState } from 'react';
import { FlatList, Image, ImageResizeMode, ImageSourcePropType, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { data } from "../assets/data/products";

const Gallery = () => {

    type ItemProps = {
        title: string,
        description: string,
        image: ImageSourcePropType,
        price: number,
        imageResizeMode: ImageResizeMode,
        favourite: boolean
    }
    
    const [filteredData, setFilteredData] = useState(data)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalData, setModalData] = useState<ItemProps>(
        {title:"",
        description:"",
        image:{},
        price:0,
        imageResizeMode:'cover',
        favourite:false
    })

    const filterData = (keyWord: string) => {
        setFilteredData(data.filter(element => element.title.toLowerCase().includes(keyWord.toLowerCase())))
    }

    const handlePress = (itemProps: ItemProps) => {
        setModalData(itemProps)
        setModalVisible(true)
    }

    const handleLongPress = (itemProps: ItemProps) => {
    }

    const handleImageButton = (style: ImageResizeMode) => {
        setModalData(prev => ({...prev, imageResizeMode :style}))
    }

    const Item = (props: ItemProps) => {
        return (
            <Pressable 
                style={styles.item}
                onPress={() => handlePress(props)}
                onLongPress={() => handleLongPress(props)}>
                <View style= {styles.imageContainer}>
                    <Image source={props.image} style={styles.logo}/>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>$ {props.price}</Text>
                </View>
            </Pressable>
        )
    }

    return (
        <>
            <View style={styles.searchBarContainer}>
                <TextInput 
                    placeholder="Search" 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    style={styles.searchBar}
                    onChangeText={keyWord => filterData(keyWord)}>
                </TextInput>
            </View>
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
                    />)}
                />
            </View>
            <Modal
            visible={modalVisible}
            transparent={true}
            presentationStyle='pageSheet'
            animationType="slide"
            onRequestClose={() => {
            setModalVisible(!modalVisible)}}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalTitleContainer}>
                            <Text style={styles.titleText}>
                                {modalData?.title}
                            </Text>
                        </View>
                        <View style={styles.modalImageContainer}>
                            <Image source={modalData?.image} style={[styles.modalImage , {resizeMode: modalData?.imageResizeMode}]}>  
                            </Image>
                        </View>
                        <View style={styles.modalImageButtonsContainer}>
                            <Pressable style={styles.modalImageButton} onPress={() => handleImageButton('cover')}>
                                <Text>
                                    Cover
                                </Text>
                            </Pressable>
                            <Pressable style={styles.modalImageButton} onPress={() => handleImageButton('repeat')}>
                                <Text>
                                    Repeat
                                </Text>
                            </Pressable>
                            <Pressable style={styles.modalImageButton} onPress={() => handleImageButton('contain')}>
                                <Text>
                                    Contain
                                </Text>
                            </Pressable>
                        </View>
                        <View style={styles.modalDescriptionContainer}>
                            <Text style={styles.descriptionText}>
                                {modalData?.description}
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fcf7f7ff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 15,
        borderWidth: 1,
        height: 80
    },
    logo: {
        height: '60%',
        width: '60%',
        borderRadius: 100,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 3
    },
    title: {
        fontSize: 17,
        fontStyle: 'italic'
    },
    price: {
        fontSize: 16,
        color: '#8d8d8dff'
    },
    searchBar: {
        borderColor: '#111111',
        borderWidth: 1,
        borderRadius: 8,
    },
    searchBarContainer: {
        flex: 1,
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
    modalImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    modalImageContainer: {
        flex: 5,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    modalImageButtonsContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 15
    },
    modalImageButton: {
        borderColor: 'black',
        backgroundColor: '#fcf7f7ff',
        borderRadius: 15,
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 5,
        marginRight: 5,
        height: 30
    },
    modalTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalDescriptionContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'justify'
    }
})

export default Gallery