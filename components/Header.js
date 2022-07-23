import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "../constants/colors";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>The Planets</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    borderWidth: 2,
    borderColor: colors.white,
  },
  title: {
    color: colors.white,
    paddingBottom: 17,
    fontSize: 28,
    textTransform: "uppercase",
    lineHeight: 36,
    letterSpacing: -1,
    fontSize: 17,
  },
});

export default Header;
