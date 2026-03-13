import React, { useContext } from 'react';
import { ThemedText } from '@/components/themed-text';
import { Fonts } from '@/constants/theme';
import { Button } from 'react-native';
import { AuthContext } from '@/app/utils/authContext';

export default function ProfileScreen () {
    const AuthState = useContext(AuthContext);
    return (
        <>
            <ThemedText
                type="defaultSemiBold"
                style={{
                    fontFamily: Fonts.sans,
                }}>
                Name
            </ThemedText>
            <ThemedText
                type="default"
                style={{
                    fontFamily: Fonts.sans
                }}>
            John Doe
            </ThemedText>
            <ThemedText
                type="defaultSemiBold"
                style={{
                    fontFamily: Fonts.sans,
                }}>
                Coaches
            </ThemedText>
            <input name='password' type='password' placeholder="Password" />
            <ThemedText
                type="title"
                style={{
                    fontFamily: Fonts.mono,
                }}>
                Explore
            </ThemedText>
            <Button title="Log out!" onPress={AuthState.logOut} />
        </>
        
    )
}