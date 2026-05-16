import { ThemedText } from "@/components/themed-text";
import { Fonts } from "@/constants/theme";
import { useContext, useEffect } from "react";
import { Button, View } from "react-native";
import { AuthContext } from "./utils/authContext";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as SecureStore from 'expo-secure-store';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: '1031236247287-o0khhq6hbsd8rikrrsv6kov7id3bh1u1.apps.googleusercontent.com',
    androidClientId: '1031236247287-hoo8drkgv13l9ib88uc70v5kelhg7g9e.apps.googleusercontent.com',
    webClientId: '1031236247287-2uumo9it0qfc7igk3pshn41jhtblkcm7.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;

      console.log(authentication?.accessToken);
      console.log(authentication?.tokenType);
      //if (authentication) {await SecureStore.setItemAsync(authentication.accessToken, jwt);}
    }
  }, [response]);

  return (
    <Button
      title="Sign in with Google"
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
    />
  );
}