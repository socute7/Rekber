import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import { Colors } from '@/constants/Colors';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarStyle: {
          backgroundColor: '#1c1c1e',
        },
        tabBarActiveTintColor: '#dc143c',
        tabBarInactiveTintColor: '#888',
    }}>
      <Tabs.Screen name="home"
      options={{
        tabBarLabel:'Home',
        tabBarIcon:({color})=><AntDesign name="home" size={24} color={color} />
      }}
      />
      <Tabs.Screen name="order"
      options={{
        tabBarLabel:'Order',
        tabBarIcon:({color})=><AntDesign name="shoppingcart" size={24} color={color} />
      }}
      />
      <Tabs.Screen name="profile"
      options={{
        tabBarLabel:'Profile',
        tabBarIcon:({color})=><Octicons name="person" size={24} color={color} />
      }}
      />
    </Tabs>
  );
}