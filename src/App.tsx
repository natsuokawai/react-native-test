import * as React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type Message = {
  id: number;
  fromName: string;
  content: string;
};

const data = Array.from(Array(10), (_, k) => k).map((num) => {
  return {
    id: num,
    fromName: `user-${num}`,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  } as Message;
});

const Item = ({ message }: { message: Message }) => (
  <View style={styles.item}>
    <Text>{message.fromName}</Text>
    <Text>{message.content}</Text>
  </View>
);

const HomeScreen = () => {
  const renderItem = ({ item }: { item: Message }) => <Item message={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
};

const Drawer = createDrawerNavigator();
const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <HomeDrawer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(239, 243, 244)",
  },
});

export default App;
