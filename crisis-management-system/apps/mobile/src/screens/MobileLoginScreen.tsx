import { Text, View } from 'react-native';

export function MobileLoginScreen() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Crisis Mobile Login</Text>
      <Text>Only USER role accounts can continue on mobile.</Text>
    </View>
  );
}
