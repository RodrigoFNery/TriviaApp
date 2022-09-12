
import { StatusBarStyle } from 'expo-status-bar';
import { StyleSheet, Platform, StatusBar, Dimensions, StyleProp, ViewStyle, TextStyle, ImageStyle, } from 'react-native';


//Constants
const screenWidthRatio = Dimensions.get('window').width / 320;

export const LIGHT_THEME = "lightTheme";
export const DARK_THEME = "darkTheme";

export const CONTAINER_PADDING = Math.round(5 * screenWidthRatio);
export const CONTENT_PADDING = Math.round(5 * screenWidthRatio);
export const POPUP_WIDTH = Math.round(300 * screenWidthRatio);

export const TEXT_FIELD_PADDING = Math.round(10 * screenWidthRatio);

export const EXTRA_SMALL_FONT_SIZE = Math.round(7 * screenWidthRatio);
export const SMALL_FONT_SIZE = Math.round(10 * screenWidthRatio);
export const MEDIUM_FONT_SIZE = Math.round(13 * screenWidthRatio);
export const LARGE_FONT_SIZE = Math.round(16 * screenWidthRatio);
export const HUGE_FONT_SIZE = Math.round(25 * screenWidthRatio);

export const BUTTONS_CONTAINER_HEIGHT = Math.round(30 * screenWidthRatio);

export const CIRCLE_SHAPE_WIDTH = Math.round(30 * screenWidthRatio);
export const CIRCLE_SHAPE_HEIGHT = Math.round(30 * screenWidthRatio);

export const LOGO_WIDTH = Math.round(150 * screenWidthRatio);
export const LOGO_HEIGHT = Math.round(150 * screenWidthRatio);

export const HEADER_HEIGHT = Math.round(60 * screenWidthRatio);

export const INPUT_CONTAINER_HEIGHT = Math.round(35 * screenWidthRatio);

export const INPUT_ICON_WIDTH = Math.round(30 * screenWidthRatio);
export const INPUT_ICON_HEIGHT = Math.round(30 * screenWidthRatio);

export const TEXT_INPUT_HEIGHT = Math.round(30 * screenWidthRatio);

export const INPUT_DATE_WIDTH = Math.round(100 * screenWidthRatio);

export const TIME_COLUMN_WIDTH = Math.round(60 * screenWidthRatio);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const POPUP_BORDER_RADIUS = 10;

// // BASE STYLES 
// const baseBackground: StyleProp<ViewStyle> = {
//     flex: 1,
//     width: "100%",
//     backgroundColor: Colors.lighter_green_app,
// };

// const baseButton: StyleProp<ViewStyle> = {
//     backgroundColor: ComponentColors.buttonBackground,
//     borderRadius: 5,
//     paddingTop: 5,
//     paddingBottom: 5,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderColor: darkerColor(ComponentColors.buttonBackground),
// };

// const baseButtonText: StyleProp<TextStyle> = {
//     color: ComponentColors.buttonText,
//     fontSize: SMALL_FONT_SIZE,
// };

// const baseButtonDisabled: StyleProp<ViewStyle> = {
//     backgroundColor: ComponentColors.buttonBackgroundDisabled,
//     borderRadius: 15,
//     paddingTop: 5,
//     paddingBottom: 5,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderColor: darkerColor(ComponentColors.buttonBackgroundDisabled),
// };

// const baseButtonTextDisabled: StyleProp<TextStyle> = {
//     color: ComponentColors.buttonTextDisabled,
//     fontSize: MEDIUM_FONT_SIZE,
// };

// const baseButtonsContainer: StyleProp<ViewStyle> = {
//     height: BUTTONS_CONTAINER_HEIGHT,
//     marginBottom: 0,
//     backgroundColor: ComponentColors.buttonsViewBackgroundColor,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
// };

// const baseCalendar: StyleProp<ViewStyle> = {
//     paddingLeft: 20,
//     paddingRight: 20,
//     backgroundColor: 'transparent',
// };

// const baseCalendarEventTitle: StyleProp<TextStyle> = {
//     marginLeft: 5,
//     fontSize: MEDIUM_FONT_SIZE,
// };

// const baseCalendarItem: StyleProp<ViewStyle> = {
//     padding: 5,
//     backgroundColor: Colors.white,
//     borderBottomWidth: 1,
//     borderBottomColor: ComponentColors.borderColor,
// };

// const baseCenteredView: StyleProp<ViewStyle> = {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
// };

// const BaseCircleShapeView: StyleProp<ViewStyle> = {
//     flex: 1,
//     margin: 5,
//     justifyContent: 'center',
//     width: CIRCLE_SHAPE_WIDTH,
//     height: CIRCLE_SHAPE_HEIGHT,
//     borderRadius: CIRCLE_SHAPE_HEIGHT / 2,
// };

// const BaseCircleShapeImage: StyleProp<ImageStyle> = {
//     width: CIRCLE_SHAPE_WIDTH * 0.8,
//     height: CIRCLE_SHAPE_HEIGHT * 0.8,
// };

// const baseClientName: StyleProp<TextStyle> = {
//     textAlignVertical: 'center',
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'left',
//     fontStyle: 'italic',
//     color: ComponentColors.textLabel,
// };

// const baseContent: StyleProp<ViewStyle> = {
//     flex: 1000,
//     backgroundColor: ComponentColors.contentBackgroundColor,
//     justifyContent: 'flex-start',
//     flexDirection: 'column',
//     alignContent: 'stretch',
//     alignSelf: 'stretch'
// };

// const baseDateRange: StyleProp<TextStyle> = {
//     textAlignVertical: 'center',
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'left',
//     color: Colors.gray,
// };

// const baseFaqAnswer: StyleProp<TextStyle> = {
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'left'
// };

// const baseFaqItem: StyleProp<ViewStyle> = {
//     margin: 10,
//     backgroundColor: ComponentColors.listItemBackground,
//     borderColor: ComponentColors.borderColor,
//     borderBottomWidth: 1,
// };

// const baseFaqQuestion: StyleProp<TextStyle> = {
//     fontWeight: 'bold',
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'left'
// };

// const baseFilterContainer: StyleProp<ViewStyle> = {
//     borderBottomWidth: 1
// };

// const baseFloatingButton: StyleProp<ViewStyle> = {
//     position: 'absolute',
//     alignItems: 'center',
//     justifyContent: 'center',
// };

// const baseHeader: StyleProp<TextStyle> = {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     alignSelf: 'stretch',
//     textAlign: 'center',
//     height: HEADER_HEIGHT,
//     marginTop: STATUSBAR_HEIGHT,
//     backgroundColor: ComponentColors.headerBackgroundColor,
// };

// const baseInputContainer: StyleProp<ViewStyle> = {
//     padding: 5,
//     backgroundColor: Colors.lightcyan,
//     borderRadius: 10,
//     height: INPUT_CONTAINER_HEIGHT,
//     marginLeft: 10,
//     marginRight: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
// };

// const baseInputIcon: StyleProp<ImageStyle> = {
//     padding: 5,
//     width: INPUT_ICON_WIDTH,
//     height: INPUT_ICON_HEIGHT,
//     justifyContent: 'center'
// };

// const baseInputTextLabel: StyleProp<TextStyle> = {
//     textAlignVertical: 'center',
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'left',
//     color: ComponentColors.textLabel,
// };

// const baseLinearGradient: StyleProp<ViewStyle> = {
//     flex: 1,
//     width: '100%',
// };

// const baseLink: StyleProp<TextStyle> = {
//     textAlignVertical: 'center',
//     fontSize: LARGE_FONT_SIZE,
//     textAlign: 'center',
//     color: ComponentColors.link,
// };


// const baseLightLink: StyleProp<TextStyle> = {
//     textAlignVertical: 'center',
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'center',
//     color: ComponentColors.lightLink,
// };

// const baseListItem: StyleProp<ViewStyle> = {
//     padding: 0,
//     borderRadius: 0,
//     borderWidth: 0,
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
// };

// const baseLoading: StyleProp<ViewStyle> = {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'center'
// };

// const baseLogoImage: StyleProp<ImageStyle> = {
//     margin: 20,
//     padding:0,
//     alignSelf: 'center',
//     backgroundColor: 'transparent'
// }

// const baseMap: StyleProp<ViewStyle> = {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   }

// const baseMenuItem: StyleProp<ViewStyle> = {
//     padding: 10,
//     borderWidth: 0.5,
//     borderColor: ComponentColors.borderColor,
// };

// const baseModalView: StyleProp<ViewStyle> = {
//     flexDirection: 'column',
//     alignContent: 'center',
//     backgroundColor: Colors.white_app,
//     justifyContent: 'center'
// };

// const basePopupBox: StyleProp<ViewStyle> = {
//     flexDirection: 'column',
//     alignContent: 'center',
//     backgroundColor: Colors.white_app,
//     justifyContent: 'center',
//     shadowColor: Colors.black,
//     shadowOffset: {
//         width: 0,
//         height: 0
//     },
//     shadowOpacity: 0,
//     shadowRadius: POPUP_BORDER_RADIUS,
//     elevation: 20,
//     borderColor: ComponentColors.borderColor,
//     borderWidth: 1,
//     borderRadius: POPUP_BORDER_RADIUS
// };

// const basePopupButtonsContainer: StyleProp<TextStyle> = {
//     height: BUTTONS_CONTAINER_HEIGHT,
//     marginBottom: 0,
//     backgroundColor: ComponentColors.buttonsViewBackgroundColor,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     borderBottomLeftRadius: POPUP_BORDER_RADIUS,
//     borderBottomRightRadius: POPUP_BORDER_RADIUS,
// };

// const basePopupTitle: StyleProp<TextStyle> = {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     alignSelf: 'stretch',
//     textAlign: 'center',
//     height: HEADER_HEIGHT,
//     margin: 0,
//     paddingLeft: 10, 
//     paddingRight: 10, 
//     backgroundColor: ComponentColors.headerBackgroundLightColor,
//     borderTopLeftRadius: POPUP_BORDER_RADIUS,
//     borderTopRightRadius: POPUP_BORDER_RADIUS,
// };

// const basePopupTitleText: StyleProp<TextStyle> = {
//     fontSize: LARGE_FONT_SIZE,
//     textAlign: 'center',
//     color: ComponentColors.headerTextColor,
//     marginLeft: POPUP_BORDER_RADIUS,
//     marginRight: POPUP_BORDER_RADIUS,
// };


// const baseRemoveButton: StyleProp<ViewStyle> = {
//     backgroundColor: ComponentColors.removeButtonBackground,
//     borderRadius: 15,
//     paddingTop: 5,
//     paddingBottom: 5,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderColor: darkerColor(ComponentColors.removeButtonBackground),
// };

// const baseSearchContainer: StyleProp<ViewStyle> = {
//     flex: 1,
//     marginTop: 100,
//     marginBottom: 100,
//     marginLeft: 20,
//     marginRight: 20,
// };

// const baseSearchInput: StyleProp<TextStyle> = {
//     height: 40,
//     fontSize: MEDIUM_FONT_SIZE,
//     width: '90%',
//     borderColor: ComponentColors.borderColor,
//     borderBottomWidth: 1,
//     marginTop: 8,
//     marginVertical: 15,
// };

// const baseSearchItem: StyleProp<ViewStyle> = {
//     padding: 2
// };

// const baseSeparator: StyleProp<ViewStyle> = {
//     width: '100%',
//     height: 1,
//     backgroundColor: Colors.black,
// };

// const baseServiceName: StyleProp<TextStyle> = {
//     textAlignVertical: 'center',
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'left',
//     color: ComponentColors.textLabel,
// };

// const baseSidebarMenuContainer: StyleProp<ViewStyle> = {
//     flexDirection: 'row',
//     width: '100%',
//     height: '100%',
//     alignItems: 'flex-start',
// };

// const baseSidebarMenuNavigationItem: StyleProp<ViewStyle> = {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop: 5,
//     paddingBottom: 5,
//     backgroundColor: 'transparent',
// };

// const baseSidebarMenuNavigationOptions: StyleProp<ViewStyle> = {
//     flex: 2,
//     width: '100%',
//     paddingTop: 10,
//     paddingLeft: 10,
//     paddingBottom: 10,
//     backgroundColor: Colors.white_app,
// };

// const baseSingleButtonContainer: StyleProp<ViewStyle> = {
// };

// const baseScrollView: StyleProp<ViewStyle> = {
//     flex: 1,
//     backgroundColor: 'transparent',
//     alignSelf: 'stretch',
// };

// const baseSwitch: StyleProp<ViewStyle> = {
//     marginLeft: 5,
//     transform: [{ scaleX: .8 }, { scaleY: .8 }],
// }

// const baseStatusBar: StyleProp<ViewStyle> = {
//     height: STATUSBAR_HEIGHT,
// }

// const baseStatusName: StyleProp<TextStyle> = {
//     textAlignVertical: 'center',
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'left',
//     fontWeight: 'bold',
//     fontStyle: 'italic',
//     color: Colors.gray,
// };

// const baseTabBar: StyleProp<ViewStyle> = {
//     backgroundColor: ComponentColors.tabBarBackground,
//     marginVertical: 0,
//     marginBottom: 0,
// };

// const baseTableHeader: StyleProp<ViewStyle> = {
//     height: 30,
// };

// const baseTextError: StyleProp<TextStyle> = {
//     fontSize: MEDIUM_FONT_SIZE,
//     color: 'red'
// };

// const baseTextHeader: StyleProp<TextStyle> = {
//     fontSize: LARGE_FONT_SIZE,
//     textAlign: 'center',
//     color: ComponentColors.headerTextColor,
// };


// const baseTextHuge: StyleProp<TextStyle> = {
//     fontSize: HUGE_FONT_SIZE,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: ComponentColors.textLabel,
// };

// const baseTextInput: StyleProp<TextStyle> = {
//     fontSize: MEDIUM_FONT_SIZE,
//     borderWidth: 0,
//     textAlign: 'left',
//     textAlignVertical: 'center',
//     height: TEXT_INPUT_HEIGHT,
//     margin: 0,
//     padding: 5, 
//     flex: 1
// };

// const baseTextFieldContainer: StyleProp<ViewStyle> = {
//     flex: 1,
//     width: "100%",
// };

// const baseTextFieldLabel: StyleProp<TextStyle> = {
//     textAlignVertical: 'center',
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'left',
//     color: ComponentColors.textLabel,
// };

// const baseTextLabel: StyleProp<TextStyle> = {
//     textAlignVertical: 'center',
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'left',
//     color: ComponentColors.textLabel,
// };

// const baseTextLabelStrong: StyleProp<TextStyle> = {
//     fontWeight: 'bold',
//     textAlignVertical: 'center',
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'left',
//     color: ComponentColors.textLabel,
// };

// const baseTextTableHeader: StyleProp<TextStyle> = {
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'center',
//     color: ComponentColors.headerTextColor
// };

// const baseTextTableValueCenter: StyleProp<TextStyle> = {
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'center',
//     margin: 5,

// };

// const baseTextTableValueRight: StyleProp<TextStyle> = {
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'right',
//     margin: 5,

// };

// const baseTextTitle: StyleProp<TextStyle> = {
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'center'
// };

// const baseTextValue: StyleProp<TextStyle> = {
//     fontSize: MEDIUM_FONT_SIZE,
//     textAlign: 'left'
// };

// const baseViewHorizontalCentered: StyleProp<ViewStyle> = {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
// };

// const baseViewHorizontalLeft: StyleProp<ViewStyle> = {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
// };

// const baseViewHorizontalRight: StyleProp<ViewStyle> = {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'flex-start',
// };

// const baseViewHorizontalSpaceBetween: StyleProp<ViewStyle> = {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     alignSelf: 'stretch',
// };

// const baseViewHorizontalSpaceAround: StyleProp<ViewStyle> = {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     alignSelf: 'stretch',
// };

// const baseVersionContainer: StyleProp<ViewStyle> = {
//     flex: 1,
//     width: "100%",
//     justifyContent: 'flex-end',
//     marginBottom: 10,
// }

// const baseVerticalSpacer: StyleProp<ViewStyle> = {
//     paddingTop: 10,
//     paddingBottom: 10,
// }

type Style = {
    answerButtonsContainer: ViewStyle;
    counterTextContainer: ViewStyle;
    container: ViewStyle;
    cardContainer: ViewStyle;
    header: TextStyle;
    headerText: TextStyle;
    contentView: TextStyle;
    defaultText: TextStyle;
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
    homeButton:{
        borderColor: 'transparent',
        backgroundColor:  'transparent',
    }
});


