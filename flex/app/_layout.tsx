import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider } from './utils/authContext';

import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite';

export const unstable_settings = {
  anchor: '(protected)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

const createDbIfNeeded = async (db: SQLiteDatabase) => {
  //
  console.log("Creating database");
  try {
    // Create a table
    const response = await db.execAsync(
      "CREATE TABLE IF NOT EXISTS training-session (id INTEGER PRIMARY KEY AUTOINCREMENT, date DATE, start TIME, end TIME, note VARCHAR(1028));"
    );
    console.log("Database created", response);
  } catch (error) {
    console.error("Error creating database:", error);
  }
};

  return (
    <AuthProvider>
      <SQLiteProvider databaseName="test.db" onInit={createDbIfNeeded}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(protected)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </SQLiteProvider>
    </AuthProvider>
  );
}
