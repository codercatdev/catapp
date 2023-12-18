import React from "react";
import { Stack, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "purple" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href={"/modal"} asChild>
              <Ionicons name="camera" size={28} color="white" />
            </Link>
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen name="[id]" options={{ title: "Cat tails" }}></Stack.Screen>
      <Stack.Screen
        name="modal"
        options={{ title: "Camera", presentation: "modal" }}
      ></Stack.Screen>
    </Stack>
  );
};

export default layout;
