import { Game } from '@/components/Game';
import { SafeAreaView, Text } from 'react-native';

export default function GameScreen() {
  return (
    <SafeAreaView className="flex flex-col items-center justify-center w-full min-h-screen bg-background">
      <Text className="text-6xl font-bold text-primary mt-20 mb-10 ">
        Tic Tac Toe
      </Text>
      <Game />
    </SafeAreaView>
  );
}
