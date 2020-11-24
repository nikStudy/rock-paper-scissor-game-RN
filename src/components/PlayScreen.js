import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

const rock = require('../signs/rock.png');
const paper = require('../signs/paper.png');
const scissors = require('../signs/scissors.png');

// get a random emoji
const randomSign = () => {
    const signs = [rock, paper, scissors];
    const rand = Math.floor(Math.random() * signs.length);
    return signs[rand];
};

const bgColors = ['#1abc9c', '#3498db', '#9b59b6'];

const PlayScreen = () => {

    const [counter, setCounter] = useState(3);
    
    useEffect(() => {
        // check for counter to be 0, then stop the counter
        if (counter === 0) return;
        
        const timer = setTimeout(() => {
            setCounter(prevCounter => prevCounter - 1);    
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [counter])

    return (
        <View style={styles.container}>
            {counter > 0 ? (
                <View style={StyleSheet.compose(styles.counterContainer, {backgroundColor: bgColors[counter - 1]})}>
                    <Text style={styles.counterText}>{counter}</Text>
                </View>
            ) : (
                <>
                    <Image style={styles.image} source={randomSign()} />
                    <View style={styles.btnContainer}>
                        <Button onPress={() => setCounter(3)} title="Play Again" />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterText: {
        fontSize: 150,
        color: '#fff',
    },
    image: {
        width: 200,
        height: 200
    },
    btnContainer: {
        marginTop: 60,
        width: 240,
        position: "absolute",
        bottom: 20,  
    },
});

export default PlayScreen;