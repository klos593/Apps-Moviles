import { useState } from 'react';
import { Pressable, StyleSheet, Text } from "react-native";

type CardProps = {
  text: string,
  textColor?: string,
  backgroundColor?: string
}

function generateRandomColor() {

  let randomNumber = Math.floor(Math.random() * 16777215); //num random que se multiplica por eso para pasarlo a hexa despues
  let hexColor = randomNumber.toString(16); // lo paso a hexa
  hexColor = hexColor.padStart(6, '0'); // el pad start sirve por si algun numero generado es mas chico, lo rellena con ceros
  return `#${hexColor}`;
}

export default function Card(props: CardProps){

  const [cardProps, setCardProps] = useState<CardProps>({
    text: props.text,
    textColor: '#ffffff',
    backgroundColor: '#0026ffff'
  });

  const changeCardProps = () => {
    setCardProps(prev => ({...prev, backgroundColor: generateRandomColor() , textColor: generateRandomColor()}))
  }

  return (
    <>
      <Pressable style = {[styles.pressable , {backgroundColor: cardProps.backgroundColor}]} onPress = {changeCardProps}> 
        <Text style = {[styles.font , {color: cardProps.textColor}]}>
          {cardProps.text}
        </Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    margin: '3%',
    borderRadius: 15,
    borderWidth: 1
  },
  font: {
    fontSize: 20
  }
})