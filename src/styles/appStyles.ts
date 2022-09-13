/**
 * appStyles.ts
 * Holds all components styling
 */

import { StyleSheet, Platform, StatusBar, Dimensions, ViewStyle, TextStyle, } from 'react-native';


//Constants
const screenWidthRatio = Dimensions.get('window').width / 320;

const EXTRA_SMALL_FONT_SIZE = Math.round(7 * screenWidthRatio);
const SMALL_FONT_SIZE = Math.round(10 * screenWidthRatio);
const MEDIUM_FONT_SIZE = Math.round(13 * screenWidthRatio);
const LARGE_FONT_SIZE = Math.round(16 * screenWidthRatio);
const HUGE_FONT_SIZE = Math.round(25 * screenWidthRatio);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

type Style = {
    answerButtonsContainer: ViewStyle;
    counterTextContainer: ViewStyle;
    container: ViewStyle;
    cardContainer: ViewStyle;
    header: TextStyle;
    headerText: TextStyle;
    contentView: TextStyle;
    defaultText: TextStyle;
    resultsRows: ViewStyle;
    resultsText: TextStyle;
    scrollView: ViewStyle;
    homeButton: ViewStyle;
};

export default StyleSheet.create<Style>({
    answerButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-around',
    },

    counterTextContainer:{
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
    },

    container:{
        flex: 1,
        marginTop: Platform.select({ ios: 8, android: 0 }),
        width: "100%",
        justifyContent: 'space-between',

        // justifyContent: 'center',
        alignItems: 'center',
    },

    cardContainer: {
        flex: 10,
        margin: 20,
        padding: 10,
        borderWidth: 1,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlign: 'center',
        marginTop: STATUSBAR_HEIGHT,
    },

    headerText:{
        fontSize: HUGE_FONT_SIZE,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentView: {
        flex: 1,
        margin: 20,
        justifyContent: 'space-between',
    },

    defaultText:{
        fontSize: HUGE_FONT_SIZE,
        textAlign: 'center',
    },

    resultsRows: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 20
    },

    resultsText:{
        fontSize: HUGE_FONT_SIZE,
        textAlign: 'left',
        marginLeft: 10,
        marginRight: 20 
    },

    scrollView: {
        flex: 1,
        alignSelf: 'stretch',
    },

    homeButton:{
        borderColor: 'transparent',
        backgroundColor:  'transparent',
    }
});


