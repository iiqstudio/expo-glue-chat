import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Platform, Alert } from "react-native";
import { Audio } from "expo-av";
import Header from "./shared/ui/Header";
import { useNavigation } from "expo-router";

export default function Chat() {
    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [audioUri, setAudioUri] = useState<string | null>(null);
    const navigation = useNavigation();

    // Запрос разрешений
    const requestPermissions = async () => {
        if (Platform.OS === "web") {
            // На Web разрешения запрашиваются автоматически
            return true;
        }

        const { status } = await Audio.requestPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Разрешение на доступ к микрофону не предоставлено");
            return false;
        }
        return true;
    };

    // Начать запись
    const startRecording = async () => {
        try {
            const hasPermission = await requestPermissions();
            if (!hasPermission) return;

            console.log("Запуск записи...");
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            const { recording } = await Audio.Recording.createAsync(
                Audio.RecordingOptionsPresets.HIGH_QUALITY
            );
            setRecording(recording);
        } catch (error) {
            console.error("Ошибка при записи:", error);
        }
    };

    // Остановить запись
    const stopRecording = async () => {
        if (!recording) return;

        console.log("Остановка записи...");
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log("Запись сохранена:", uri);

        setRecording(null);
        setAudioUri(uri);
    };

    // Воспроизвести запись
    const playSound = async () => {
        if (!audioUri) return;

        console.log("Воспроизведение записи...");
        const sound = new Audio.Sound();
        try {
            await sound.loadAsync({ uri: audioUri });
            await sound.playAsync();
        } catch (error) {
            console.error("Ошибка при воспроизведении:", error);
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "",
            headerStyle: {
                backgroundColor: '#FFFAF3',
            },
            headerTintColor: '#262627',
            headerBackTitle: 'Back'
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Header progress={50} />
            <Text style={styles.title}>Запись и воспроизведение аудио</Text>

            {/* Кнопки управления */}
            <Button
                title={recording ? "Остановить запись" : "Начать запись"}
                onPress={recording ? stopRecording : startRecording}
            />
            <Button
                title="Воспроизвести запись"
                onPress={playSound}
                disabled={!audioUri}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
});