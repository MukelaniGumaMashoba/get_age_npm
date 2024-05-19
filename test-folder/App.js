import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import getAgeAndGender  from 'get_age_npm';

const GetAge = () => {
    const [idNumber, setIdNumber] = useState('');
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        try {
            const result = await getAgeAndGender(idNumber);
            setAge(result.age);
            setGender(result.gender);
            setError(null);
        } catch (err) {
            setError('Failed to get age and gender. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter ID Number"
                value={idNumber}
                onChangeText={setIdNumber}
            />
            <Button title="Get Age and Gender" onPress={handleSubmit} />
            {age !== null && gender !== null && (
                <View style={styles.result}>
                    <Text>Age: {age}</Text>
                    <Text>Gender: {gender}</Text>
                </View>
            )}
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        width: '100%',
    },
    result: {
        marginTop: 20,
    },
    error: {
        color: 'red',
        marginTop: 20,
    },
});

export default GetAge;
