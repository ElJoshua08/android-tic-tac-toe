import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Text as TextComponent } from 'react-native';
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex items-center justify-center h-screen bg-background">
      <TextComponent className="text-5xl text-white">Tic Tac Toe</TextComponent>
      <Button variant="primary" className='py-4 px-6'>
        <Link href="/game">
          <Text className='text-5xl text-white'>Start</Text>
        </Link>
      </Button>
    </View>
  );
}
