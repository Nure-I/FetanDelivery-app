import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "@expo/vector-icons";
const SearchBar = ({ cityHandler }) => {
	return (
		<View style={{ marginTop: 15, flexDirection: "row" }}>
			<GooglePlacesAutocomplete
				// enter google api places key
				// query={{ key: "" }}
				// onPress={(data, details = null) => {
				// 	console.log(data.description)
				// 	const city = data.description.split(',')[0]
				// 	cityHandler(city)
				// }}
				placeholder="Search"
				styles={{
					textInput: {
						backgroundColor: "#eee",
						borderRadius: 20,
						fontWeight: "700",
						marginTop: 7,
					},
					textInputContainer: {
						backgroundColor: "#eee",
						borderRadius: 50,
						flexDirection: "row",
						alignSelf: "center",
						marginRight: 10,
					},
				}}
				renderLeftButton={() => (
					<View style={{ marginLeft: 10, marginTop: 15 }}>
						<Ionicons name="location-sharp" size={24} />
					</View>
				)}
				renderRightButton={() => (
					<View
						style={{
							flexDirection: "row",
							margin: 8,
							backgroundColor: "white",
							padding: 9,
							borderRadius: 30,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<AntDesign
							name="clockcircle"
							size={11}
							style={{ marginRight: 6 }}
						/>
						<Text>Search</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({});
