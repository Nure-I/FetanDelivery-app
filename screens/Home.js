import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
	localRestaurants,
} from "../components/RestaurantItems";

const YELP_API_KEY =
	"08IMtr6c10JxScBGBxHEyQ7pOBcnm95CqBKEA0dD2pOrb5Fj16mHLGGRd59rtHWF6J0b09I-YkjXAz-cMmroYoFwUNFQYNfPc872Vt-7CJwMWFVt-CYYWjI5Uc5QZHYx";
const Home = () => {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);
	const [city, setCity] = useState("San Francisco");
	const [activeTab, setActiveTab] = useState("Delivery");
	const getRestaurantsFromyelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};

		fetch(yelpUrl, options)
			.then((response) => response.json())
			.then((json) =>
				setRestaurantData(
					json.businesses.filter((business) =>
						business.transactions.includes(activeTab.toLowerCase())
					)
				)
			)
			.catch((err) => console.error(err));
	};
	useEffect(() => {
		getRestaurantsFromyelp();
	}, [city, activeTab]);
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems restaurantData={restaurantData} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
