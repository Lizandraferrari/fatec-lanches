import { View } from "react-native";
import LoginScreen from "./pages/LoginPage";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: '#f5f5f5',
        justifyContent: "center",
        alignItems: "center",
        margin:0,
        flex:1,
      }}
    >
      <LoginScreen/>
    </View>
  )
}
