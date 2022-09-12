import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface IStackScreenProps {
    navigation: StackNavigationProp<any>;
    route: RouteProp<ParamListBase, any>;
}
