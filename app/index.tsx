import Card from "@/components/card";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style = {styles.container}>
      <Card text='Card 1'/>
      <Card text='Card 2'/>
      <Card text='Card 3'/>
      <Card text='Card 4'/>
      <Card text='Card 5'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})