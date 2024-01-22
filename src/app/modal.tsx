import { Link, useGlobalSearchParams, useLocalSearchParams } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function Modal() {
  const params = useGlobalSearchParams()
  const localParams = useLocalSearchParams()
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="flex items-center pt-20 gap-10 justify-center">
          <Link href="modal2" className="p-2 border">
            Open modal2
          </Link>
          <View>
            <Text>Global params</Text>
            <Text>{JSON.stringify(params, null, 2)}</Text>
          </View>
          <View>
            <Text>Local params</Text>
            <Text>{JSON.stringify(localParams, null, 2)}</Text>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </SafeAreaProvider>
  )
}
