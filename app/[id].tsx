import { View, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

const page = () => {
  const { id } = useLocalSearchParams();
  const [image, setImage] = useState("");
  useEffect(() => {
    const loadImage = async () => {
      const data = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
      const cat = await data.json();
      setImage(cat.url);
    };
    loadImage();
  }, [id]);

  return (
    <View>
      {image && (
        <Image source={{ uri: image }} style={{ width: "100%", height: 300 }} />
      )}
      {!image && <ActivityIndicator></ActivityIndicator>}
    </View>
  );
};

export default page;
