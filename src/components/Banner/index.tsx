import { View, Pressable, Text, Image } from 'react-native';
import PageView from "react-native-pager-view"

export function Banner() {
    return (
        <View className="w-full h-36 md:h-60 rounded-2x1 mt-5 mb-4">
            <PageView style={{ flex: 1 }} initialPage={0} pageMargin={14}>

                <Pressable className="w-full h-36 md:h-60 rounded-2x1"
                    key="1"
                    onPress={() => console.log("CLICOU NO BANNER 1")}
                >
                    <Image
                        source={require("../../assets/banner1.png")}
                        className="w-full h-36 md:h-60 rounded-2x1 "
                    />
                </Pressable>

                <Pressable
                    className="w-full h-36 md:h-60 rounded-2x1"
                    key="2"
                    onPress={() => console.log("CLICOU NO BANNER 2")}
                >
                    <Image
                        source={require("../../assets/banner2.png")}
                        className="w-full h-36 md:h-60 rounded-2x1 "
                    />
                </Pressable>

            </PageView>
        </View>
    );
}