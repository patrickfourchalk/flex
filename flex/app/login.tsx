import { ThemedText } from "@/components/themed-text";
import { Fonts } from "@/constants/theme";
import { View } from "react-native";

export default function LoginScreen() {
    return (
        <View className="flex-1 justify-center">
            <ThemedText type="title" style={{ fontFamily: Fonts.sans }}>
                Sign In
            </ThemedText>
        </View>
    );
}