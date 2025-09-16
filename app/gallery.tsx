import { useState } from 'react'
import { FlatList, StyleSheet, TextInput, View } from 'react-native'
import { data } from "../assets/data/products"
import Item from "../components/product"

const Index = () => {

    const [filteredData, setFilteredData] = useState(data)

    const filterData = (keyWord: string) => {
        setFilteredData(data.filter(element => element.title.toLowerCase().includes(keyWord.toLowerCase())))
    }
    return(
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
        margin: 10
    },
})

export default Index