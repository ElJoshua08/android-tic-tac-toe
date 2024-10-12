import { useState } from 'react';
import { View } from 'react-native';
import { Button } from './ui/button';
import { Text } from './ui/text';
import Modal from 'react-native-modal';
import { Link } from 'expo-router';

const TURNS = {
  x: 'X',
  o: 'O',
};

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = (board) => {
  return WIN_CONDITIONS.some((condition) => {
    const a = board[condition[0]];
    const b = board[condition[1]];
    const c = board[condition[2]];

    return a && b && c && a === b && a === c;
  });
};

export const Game = () => {
  const [board, setBoard] = useState<string[]>(
    Array.from({ length: 9 }, () => null)
  );
  const [turn, setTurn] = useState(TURNS.x);
  const [win, setWin] = useState(false);

  const onCellPress = (index: number) => {
    if (board[index] !== null || win) return;

    const newBoard = [...board];
    newBoard[index] = turn;

    const hasWinner = checkWin(newBoard);

    setBoard(newBoard);
    setWin(hasWinner);

    if (!hasWinner) {
      setTurn(turn === TURNS.x ? TURNS.o : TURNS.x);
    }
  };

  const onRestart = () => {
    setBoard(Array.from({ length: 9 }, () => null));
    setTurn(TURNS.x);
    setWin(false);
  };

  return (
    <View className="w-full flex flex-col items-center justify-center gap-4">
      {/* Win Dialog */}
      <Modal
        className="absolute z-50 top-0 left-0 right-0 bottom-0 m-auto flex flex-col items-center justify-center"
        isVisible={win}
        style={{ margin: 0 }}
      >
        {/* Content */}
        <View className="bg-background border border-border rounded p-16 gap-4 flex flex-col items-center justify-center">
          <Text className="text-8xl text-center">
            <Text className="text-primary text-8xl">
              {turn === TURNS.x ? 'X' : 'O'}
            </Text>{' '}
            wins!
          </Text>

          <View className="flex flex-row items-center gap-8">
            <Button variant="outline">
              <Link href="/">
                <Text>Home</Text>
              </Link>
            </Button>

            <Button
              variant="outline"
              onPress={onRestart}
            >
              <Text>Restart</Text>
            </Button>
          </View>
        </View>
      </Modal>

      {/* Board */}
      <View className="size-96 rounded-md flex items-center justify-center flex-row flex-wrap gap-2">
        {board.map((cell, index) => (
          <Button
            onPress={() => onCellPress(index)}
            key={index}
            variant="outline"
            className="size-28"
          >
            <Text className='text-5xl font-bold'>{cell}</Text>
          </Button>
        ))}
      </View>

      {/* Action Buttons */}
      <Button
        variant="outline"
        onPress={onRestart}
      >
        <Text>Restart</Text>
      </Button>
    </View>
  );
};
