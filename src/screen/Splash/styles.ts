import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2563EB",
        justifyContent: "center",
        alignItems: "center",
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    appName: {
        marginTop: 20,
        fontSize: 28,
        fontWeight: "700",
        color: "#FFFFFF",
        letterSpacing: 0.5,
    },
    subtitle: {
        marginTop: 8,
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.8)",
        fontWeight: "500",
    },
    loadingContainer: {
        position: "absolute",
        bottom: 50,
        alignItems: "center",
    },
    loadingDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        marginHorizontal: 4,
    },
});
