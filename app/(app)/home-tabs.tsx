import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "@/src/screen/Home";
import { History } from "@/src/screen/History";
import { Profile } from "@/src/screen/Profile";
const Tab = createBottomTabNavigator();
export default function HomeTabs() {
    return (<Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = "home";
                if (route.name === "home") {
                    iconName = focused ? "home" : "home-outline";
                }
                else if (route.name === "history") {
                    iconName = focused ? "document-text" : "document-text-outline";
                }
                else if (route.name === "profile") {
                    iconName = focused ? "person" : "person-outline";
                }
                return <Ionicons name={iconName} size={24} color={color}/>;
            },
            tabBarActiveTintColor: "#2563EB",
            tabBarInactiveTintColor: "#9CA3AF",
            tabBarLabelStyle: {
                fontSize: 11,
                fontWeight: "600",
                marginTop: 4,
            },
            tabBarStyle: {
                backgroundColor: "#FFFFFF",
                borderTopColor: "#E2E8F0",
                borderTopWidth: 1,
                paddingBottom: 8,
                paddingTop: 8,
                height: 60,
            },
        })}>
      <Tab.Screen name="home" component={Home} options={{
            title: "Início",
        }}/>
      <Tab.Screen name="history" component={History} options={{
            title: "Histórico",
        }}/>
      <Tab.Screen name="profile" component={Profile} options={{
            title: "Perfil",
        }}/>
    </Tab.Navigator>);
}
