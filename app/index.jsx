import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
    const { loading, isLogged } = useGlobalContext();

    if (!loading && isLogged) return <Redirect href="/home" />;

    return (
        <SafeAreaView className="bg-primary h-full">


            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                }}
            >
                <View className="w-full flex justify-center items-center h-full px-4">
                    <View className='w-full flex-row items-center justify-center'>
                        <Image
                            source={images.logoSmall}
                            className="w-[60px] h-[60px]"
                            resizeMode="contain"
                        />
                        <Text className='text-white text-5xl mt-3 ml-2 font-semibold'>Vision</Text>
                    </View>


                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[298px]"
                        resizeMode="contain"
                    />

                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                            探索一切{"\n"}
                            精彩的事物{" "}
                            <Text className="text-secondary-200">Vision</Text>
                        </Text>

                        <Image
                            source={images.path}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                            resizeMode="contain"
                        />
                    </View>

                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        進入Vision一起踏上無限探索之旅{'\n'}
                        一個充滿創新的領域，鼓勵人們探索無限的可能性。
                    </Text>

                    <CustomButton
                        title="使用Email登入"
                        handlePress={() => router.push("/sign-in")}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    );
};

export default Welcome;
