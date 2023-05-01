import { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    SafeAreaView
} from 'react-native'

import { useRouter } from 'expo-router';

import { icons, SIZES } from '../../../constants';
import styles from './workout.style';


const StartWorkoutHome = () => {
    const router = useRouter();
    return (
        <SafeAreaView
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                    router.push("/workout/")
                }}
            >
                <Text style={styles.buttonText}>Start Workout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default StartWorkoutHome;