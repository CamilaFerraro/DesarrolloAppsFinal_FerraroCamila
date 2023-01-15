import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrderNavigator from "./OrderNavigator";
import NewPlaceScreen from "../screens/NewPlaceScreen"

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focus }) => (
            <View style={styles.item}>
              <Ionicons name="home" size={20} color="black" />
              <Text>Tienda</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focus }) => (
            <View style={styles.item}>
              <Ionicons name="cart" size={20} color="black" />
              <Text>Carrito</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({ focus }) => (
            <View style={styles.item}>
              <Ionicons name="list" size={20} color="black" />
              <Text>Órdenes</Text>
            </View>
          ),
        }}
      />
        <BottomTabs.Screen
        name="LocationTab"
        component={NewPlaceScreen}
        options={{
          tabBarIcon: ({ focus }) => (
            <View style={styles.item}>
              <Ionicons name="compass" size={20} color="black" />
              <Text>Mapa</Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
