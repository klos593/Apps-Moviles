import { useState } from 'react';
import { Image, ImageResizeMode, Modal, Pressable, StyleSheet, Text, View } from "react-native";

type ItemProps = {
        title: string,
        description: string,
        image: string,
        price: number,
        imageResizeMode: ImageResizeMode,
        favourite: boolean,
        borderColor: string
}

const Item = (props: ItemProps) => {
    
    const [modalVisible, setModalVisible] = useState(false)
    const [cardProps, setCardProps] = useState<ItemProps>({
        title: props.title,
        description: props.description,
        image: props.image,
        price: props.price,
        imageResizeMode: 'cover',
        favourite: false, 
        borderColor: 'black'
    })

    const handlePress = () => {
        setCardProps(prev => ({...prev}))
        setModalVisible(true)
    }

    const handleLongPress = () => {
        setCardProps(prev => ({...prev, favourite: !(prev.favourite),borderColor: prev.favourite ? 'black' : 'yellow'}))
    }

    const handleImageButton = (style: ImageResizeMode) => {
        setCardProps(prev => ({...prev, imageResizeMode :style}))
    }

    return (
        <>
            <Pressable 
                style={[styles.item , {borderColor: cardProps.borderColor}]}
                onPress={handlePress}
                onLongPress={handleLongPress}>
                <View style= {styles.imageContainer}>
                    <Image source={{uri: props.image}} style={styles.logo}/>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>$ {props.price}</Text>
                </View>
            </Pressable>
            <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => {
            setModalVisible(!modalVisible)}}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalTitleContainer}>
                            <Text style={styles.titleText}>
                                {cardProps.title}
                            </Text>
                        </View>
                        <View style={styles.modalImageContainer}>
                            <Image source={{uri: cardProps.image}} style={[styles.modalImage , {resizeMode: cardProps.imageResizeMode}]}>  
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
                                {cardProps.description}
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

export default Item