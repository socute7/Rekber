import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home"/>
      <Tabs.Screen name="order"/>
      <Tabs.Screen name="profile"/>
    </Tabs>
  );
}