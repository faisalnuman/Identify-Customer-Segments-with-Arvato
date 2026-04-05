import { Text, View } from 'react-native';

export function LoginScreen() {
  const role = 'USER';

  if (role === 'ADMIN') {
    return (
      <View>
        <Text>Mobile access is restricted for Admin users. Please use the web portal.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>User Mobile Login</Text>
    </View>
  );
}
