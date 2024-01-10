import React from 'react';
import { Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from "expo-linear-gradient";

const GradientText = (props) => {
    return (
        <MaskedView
            style={{ height: 98 }}
            maskElement={<Text {...props} />}
        >
            <LinearGradient
                colors={['#492411', '#FFFFFF']}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0.33 }}
                style={{ flex: 1 }}
            >
                <Text {...props} style={[props.style, {opacity: 0}]} />
            </LinearGradient>
        </MaskedView>
    );
};

export default GradientText;
