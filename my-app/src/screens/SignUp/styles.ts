import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#f5f6fa',
        alignItems: 'center'
        
    },

    header: {
        paddingTop: '20%',
    },

    body: {
        alignItems: 'center',
        maxWidth: '80%'
        
    },

    footer: {
        paddingBottom: '20%'
    },

    btn1: {
        backgroundColor: '#353b48',
        minWidth: '100%',
        borderRadius: 10,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },

    btnt1: {
        color: '#FFFFFF',

        width: '80%',
        fontSize: 12,
        fontWeight: '400'
    },

    txtin1: {
        borderWidth: 2,
        borderColor: '#353b48',
        minWidth: '100%',
        borderRadius: 10,
        marginVertical: 8,
        height: 40,
        paddingHorizontal: 14,
    },

    txt1: {
        fontSize: 18,
        alignSelf: 'flex-start'
    },

    txt2: {
        color: '#353b48',
        fontWeight: 'bold'
        
    },

});