import { Text, View, ScrollView } from "react-native";
import Constants from 'expo-constants'

import  { Header } from   "../components/Header";
import  { Banner } from   "../components/Banner";
import  { Search }  from  "../components/search";
import { Section} from "../components/section"
import { TreindingFoods } from "../components/treinding";
import { Restaurants } from "../components/restaurants";
import { RestauranteVerticalList } from '../components/list'


const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full mt-10 px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />


        <Search />
      </View>

    <Section 
      name="Comidas em alta"
      label="Veja mais"
      action={ () => console.log("CLICOU NO VEJA MAIS")}
      size="text-2xl"
    />

    <TreindingFoods/>

    <Section 
      name="Famosos do Food"
      label="Veja todos"
      action={ () => console.log("CLICOU NO FAMOSOS")}
      size="text-xl"
    />
    
      <Restaurants />

      <Section 
      name="Restaurantes"
      label="Veja todos"
      action={ () => console.log("CLICOU NO RESTAURANTES")}
      size="text-xl"
    />

    <RestauranteVerticalList/>

    </ScrollView>
  );
}
