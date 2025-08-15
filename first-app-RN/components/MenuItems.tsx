import { View, Text, StyleSheet, FlatList, ListRenderItem, SectionList } from 'react-native';

type MenuItem = {
  title: string,
  data: [string],
}

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
  },
  {
    title: 'Sides',
    data: [
      'Fries',
      'Buttered Rice',
      'Bread Sticks',
      'Pita Pocket',
      'Lentil Soup',
      'Greek Salad',
      'Rice Pilaf',
    ],
  },
  {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
  },
];

type ItemProps = {
  name: string,
  price: string
}

const Item = ({ name} : ItemProps) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name} </Text>
    {/* <Text style={menuStyles.itemText}>{price}</Text> */}
  </View>
);


const MenuItems = () => {
  const renderItem: ListRenderItem<MenuItem> = ({ item }) => <Item name={item.name} price = {item.price} />;

  const renderSectionHeader: ListRenderItem<MenuItem> = ({ section: title }) => (
    <Text>{title}</Text>
  )

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}  
      >
        
      </SectionList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
    textAlign: 'center',
    marginVertical: 10
  },
});

export default MenuItems;