import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function Modal() {
  const router = useRouter()
  const handleBack = () => {
    router.setParams({ foo: "bar" })
    router.back()
  }
  const handleReplace = () => {
    router.replace({ pathname: "modal", params: { foo: "bar" } })
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="flex items-center pt-20 gap-10 justify-center">
          <TouchableOpacity onPress={handleBack} className="p-2 border">
            <Text>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleReplace} className="p-2 border">
            <Text>Go back with replace</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </SafeAreaProvider>
  )
}
