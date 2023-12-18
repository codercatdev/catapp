import {
  View,
  Image,
  Button,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Link } from "expo-router";

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

const index = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  useEffect(() => {
    loadCats();
  }, []);

  const loadCats = async () => {
    const data = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    const cats: Cat[] = await data.json();
    setCats(cats);
  };
  return (
    <View>
      <Button title="Load Cats" onPress={loadCats} />
      <ScrollView contentContainerStyle={{ marginBottom: 10 }}>
        {cats.map((cat) => (
          <Link href={`/${cat.id}`} asChild key={cat.id}>
            <TouchableHighlight style={styles.item}>
              <Image
                source={{ uri: cat.url }}
                style={{ width: "100%", height: 300 }}
              />
            </TouchableHighlight>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
    elevation: 2,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
  },
});

export default index;
