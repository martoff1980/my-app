import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
//import { Button, View } from "react-native";
import CustomButton from "./components/CustomButton";
import CatalogList from "./components/CatalogList";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
//import CatalogList from "./components/CatalogList";

/*
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}
*/
/*
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
*/
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*<Drawer.Screen name="Button" component={CustomButton} />*/}
      {/*<Drawer.Screen name="Header" component={Header} /> */}
      
      <Drawer.Navigator initialRouteName="Home">
       <Drawer.Screen name="Home" component={HomeScreen} />
       <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
