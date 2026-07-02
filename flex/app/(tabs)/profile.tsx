import { useAuth } from '@/app/utils/authContext';
import React from 'react';
import { Button, Text } from 'react-native';

export default function ProfileScreen () {
    const { user, signOut } = useAuth();
    return (
        <>
            <Text>{JSON.stringify(user)}</Text>
            <Button title="Sign Out" onPress={() => signOut()} />
        </>
        
    )
}