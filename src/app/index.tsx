import { Link } from "expo-router"
import { View } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"

export default function Page() {
  return (
    <SafeAreaView className="flex-1">
      <View className="pt-10 items-center justify-center">
        <Link href="modal" className="p-2 border">
          Open modal
        </Link>
      </View>
    </SafeAreaView>
  )
}
