import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import { DrawerItems } from 'react-navigation'
import commonStyles from '../commonStyles'

// import { Container } from './styles';


export default props => {
    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Tasks</Text>
                <Gravatar style={styles.avatar}
                    options={{
                        email: props.navigation.getParam('email'),
                        secure: true
                    }} />
                <View style={styles.userInfor}>
                    <View>
                        <Text style={styles.name}>
                            {props.navigation.getParam('name')}
                        </Text>
                        <Text style={styles.email}>
                            {props.navigation.getParam('email')}
                        </Text>
                    </View>
                </View>
            </View>
            <DrawerItems {...props}/>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    header:{
        borderBottomColor: 1,
        borderColor: '#DDD'
    },
    title:{
        backgroundColor: '#FFF',
        color: '#000',
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        paddingTop: 20,
        padding: 10
    },
    avatar:{
        width: 60,
        height:60,
        borderColor: '#AAA',
        borderWidth: 3,
        borderRadius: 30,
        margin: 10
    },
    name:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 20,
        marginLeft: 10
    },
    email:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 15,
        marginLeft:10,
        marginBottom: 10
    },
    menu:{
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    userInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})