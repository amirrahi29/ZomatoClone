import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import InputField from "../GlobalEquipments/InputField";

const AddProductForm = () => {

    const [inputValue, setInputValue] = useState({ name: "", price: "" });
    const { name, price } = inputValue;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(inputValue);
    };

    return (
        <>

            <View style={{ margin: 8 }}>
                <InputField
                    type="text"
                    value={name}
                    placeholder="Product Name"
                    label="Name"
                    onChange={handleChange}
                />
               
            </View>
             <Text style={{color:'black'}}>{name}</Text>

            <View style={{ margin: 8 }}>
                <InputField
                    type="text"
                    value={price}
                    placeholder="Product Price"
                    label="Price"
                    onChange={handleChange}
                />
               
            </View>
            <Text style={{color:'black'}}>{price}</Text>
        </>
    );
};

export default AddProductForm;