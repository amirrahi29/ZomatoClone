import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from 'react-native';
import useCount from '../GlobalEquipments/useCount';
import UseProductApi from '../GlobalEquipments/UseProductApi';

const CustomHooksScreen = () => {

    const [count, setCount] = useCount(0);
    const [product, setProduct] = UseProductApi([]);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <View style={{ flexDirection: 'row', margin: 16 }}>
                <TouchableOpacity onPress={() => setCount(count - 1)}>
                    <Text style={{ color: 'black', fontSize: 24, backgroundColor: 'green', color: 'white', padding: 8 }}> - </Text>
                </TouchableOpacity>

                <Text style={{ color: 'black', fontSize: 24, margin: 16 }}>{count}</Text>

                <TouchableOpacity onPress={() => setCount(count + 1)}>
                    <Text style={{ color: 'black', fontSize: 24, backgroundColor: 'green', color: 'white', padding: 8 }}> + </Text>
                </TouchableOpacity>
            </View>

            {
                product.length > 0 ?
                    <FlatList
                        data={product}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={item.id}>
                                    <Text style={{ color: 'black', backgroundColor: 'green', color: 'white', margin: 8, padding: 8 }}>{item.title}</Text>
                                </View>
                            )
                        }}
                    />
                    : <>
                        <ActivityIndicator size='large' />
                        <Text style={{ color: 'black' }}>No products, Plea wait......</Text>
                    </>
            }

        </View>
    )
}

export default CustomHooksScreen;