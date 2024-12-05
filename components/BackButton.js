import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={{ position: 'absolute', top: 70, left: 10 }} onPress={onPress}>
            <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
    );
};

export default BackButton;