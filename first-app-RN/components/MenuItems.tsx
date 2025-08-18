import { View, Text, StyleSheet, SectionList, SectionListRenderItem, SectionListData, Pressable } from 'react-native';
import { useState } from 'react';

type Dish = { name: string; price: string; };
type MenuSection = { title: string; data: Dish[] };

const menuItemsToDisplay: MenuSection[] = [

  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00'},
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

type ItemProps = { name: string; price: string };

function Item({ name, price }: ItemProps) {
  return (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  );
}

export default function MenuItems() {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  const renderItem: SectionListRenderItem<Dish, MenuSection> = ({ item }) => (
    <Item name={item.name} price={item.price} />
  );

  const renderSectionHeader = ({ section }: { section: SectionListData<Dish, MenuSection> }) => (
    <View style={menuStyles.headerStyle}>
      <Text style={menuStyles.sectionHeader}>{section.title}</Text>
    </View>
  );

  return (
    <View style={menuStyles.container}>
      {!showMenu && (<Text style={menuStyles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>)
      }
      <Pressable
        style={menuStyles.button}
        onPress={()=>{ setShowMenu(!showMenu) }}
      >
        <Text 
          style={ menuStyles.buttonText}
        >
          {showMenu ? 'Home' : 'View Menu'} 
        </Text>
      </Pressable>
      { showMenu && (
        <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
      )}
    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: { flex: 1 },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: { color: '#F4CE14', fontSize: 20 },
  headerStyle: { backgroundColor: '#F4CE14' },
  sectionHeader: {
    color: 'black',
    fontSize: 26,
    textAlign: 'center',
  },
  button:{
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12
  },
  buttonText : {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
  infoSection : {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  }
});
