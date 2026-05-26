import React, { useContext } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { Fonts } from '@/constants/theme';
import { Button, Text } from 'react-native';
import { useAuth } from '@/app/utils/authContext';

export default function ProfileScreen () {
    const { user, signOut } = useAuth();
    return (
        <>
            <Text>{JSON.stringify(user)}</Text>
            <Button title="Sign Out" onPress={() => signOut()} />
        </>
        
    )
}