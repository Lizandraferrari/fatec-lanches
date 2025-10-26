import { View, StyleSheet } from "react-native";
import TitleHeader from "./TitleHeader";
import NavBar from "./NavBar";

interface BasePageProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function BasePage({ title, subtitle, children }: BasePageProps) {
  return (
    <View style={styles.container}>
      <TitleHeader title={title} subtitle={subtitle} />

      <View style={styles.children}>
        {children}
      </View>

      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  children: {
    flex: 1, 
    alignItems: 'center', 
    }
})