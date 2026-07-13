import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
export function Splash() {
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/");
        }, 2500);
        return () => clearTimeout(timer);
    }, [router]);
    return (<View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../../assets/images/logoReportai.png")} style={styles.logo}/>
        <Text style={styles.appName}>ReportaAi</Text>
        <Text style={styles.subtitle}>Reportando problemas na sua cidade</Text>
      </View>

      <View style={styles.loadingContainer}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={styles.loadingDot}/>
          <View style={styles.loadingDot}/>
          <View style={styles.loadingDot}/>
        </View>
      </View>
    </View>);
}
