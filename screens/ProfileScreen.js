import { Image, StyleSheet, Text, View } from "react-native";
import ProfileLinkButtons from "../components/ProfileLinkButtons";

export default function ProfileScreen({ navigation, route }) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.profileContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/accountPlaceholder.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.profileTitle}>Batuhan Ata Deniz</Text>
      </View>
      <View style={styles.linksContainer}>
        <ProfileLinkButtons screenName="Favourites" title="Favourites" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 50,
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    marginBottom: 16,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "green",
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  linksContainer: {
    flex: 4,
  },
});
