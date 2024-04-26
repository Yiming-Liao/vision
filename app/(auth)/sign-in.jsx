import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";
import FormField from '../../components/FormField'
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
    const { setUser, setIsLogged } = useGlobalContext();
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = async () => {
        if (form.email === "" || form.password === "") {
            Alert.alert("Error", "Please fill in all fields");
        }

        setSubmitting(true);

        try {
            await signIn(form.email, form.password);
            const result = await getCurrentUser();
            setUser(result);
            setIsLogged(true);

            Alert.alert("Success", "User signed in successfully");
            router.replace("/home");
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View
                    className="w-full flex justify-center h-full px-4"
                    style={{
                        minHeight: Dimensions.get("window").height - 100,
                    }}
                >
                    <View className='w-full flex-row items-center justify-center'>
                        <Image
                            source={images.logoSmall}
                            className="w-[60px] h-[60px]"
                            resizeMode="contain"
                        />
                        <Text className='text-white text-5xl mt-3 ml-2 font-semibold'>Vision</Text>
                    </View>

                    <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
                        登入 Vision
                    </Text>

                    <FormField
                        title="電子信箱"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="密碼"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="登入"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="flex justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            沒有帳號嗎？
                        </Text>
                        <Link
                            href="/sign-up"
                            className="text-lg font-psemibold text-secondary"
                        >
                            註冊
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
