import { ThemedText } from "@/components/themed-text";
import { Fonts } from "@/constants/theme";
import { useContext } from "react";
import { Button, View } from "react-native";
import { AuthContext } from "./utils/authContext";

export default function LoginScreen() {
    const authContext = useContext(AuthContext);
    return (
        <View className="flex-1 justify-center">
            <ThemedText type="title" style={{ fontFamily: Fonts.sans }}>
                Sign In
            </ThemedText>
            <Button title="Log in!" onPress={authContext.logIn} />
        </View>
    );
}