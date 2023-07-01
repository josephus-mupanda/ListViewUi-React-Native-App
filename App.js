import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, RefreshControl } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ListItem = ({ item }) => (
  <View style={styles.listItem}>
    <View style={styles.iconContainer}>
      <AntDesign name="shoppingcart" size={24} color="#ffffff" />
    </View>
    <View style={styles.itemInfo}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  </View>
);

const App = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Simulating data fetch or API call
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Simulating data retrieval
    setTimeout(() => {
      const newData = [
        { id: 1, title: 'Item 1', description: 'Description 1' },
        { id: 2, title: 'Item 2', description: 'Description 2' },
        { id: 3, title: 'Item 3', description: 'Description 3' },
        { id: 4, title: 'Item 4', description: 'Description 4' },
        { id: 5, title: 'Item 5', description: 'Description 5' },
        { id: 6, title: 'Item 6', description: 'Description 6' },
        { id: 7, title: 'Item 7', description: 'Description 7' },
        { id: 8, title: 'Item 8', description: 'Description 8' },
        { id: 9, title: 'Item 9', description: 'Description 9' },
        { id: 10, title: 'Item 10', description: 'Description 10' },
        { id: 11, title: 'Item 11', description: 'Description 11' },
        { id: 12, title: 'Item 12', description: 'Description 12' },
        { id: 13, title: 'Item 13', description: 'Description 13' },
        { id: 14, title: 'Item 14', description: 'Description 14' },
        { id: 15, title: 'Item 15', description: 'Description 15' },
      ];
      setData(newData);
      setRefreshing(false);
    }, 2000); // Simulating a 2-second delay
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  listItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#ff5e3a',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemInfo: {
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  itemDescription: {
    fontSize: 14,
    color: '#888888',
  },
});

export default App;





// import React, { useState, useEffect } from 'react';
// import { View, FlatList, StyleSheet, Text, RefreshControl } from 'react-native';

// const ListItem = ({ item }) => (
//   <View style={styles.listItem}>
//     <Text style={styles.itemText}>{item.title}</Text>
//     <Text style={styles.itemDescription}>{item.description}</Text>
//   </View>
// );

// const App = () => {
//   const [data, setData] = useState([]);
//   const [refreshing, setRefreshing] = useState(false);

//   // Simulating data fetch or API call
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     // Simulating data retrieval
//     setTimeout(() => {
//       const newData = [
//         { id: 1, title: 'Item 1', description: 'Description 1' },
//         { id: 2, title: 'Item 2', description: 'Description 2' },
//         { id: 3, title: 'Item 3', description: 'Description 3' },
//         // Add more data as needed
//       ];
//       setData(newData);
//       setRefreshing(false);
//     }, 2000); // Simulating a 2-second delay
//   };

//   const onRefresh = () => {
//     setRefreshing(true);
//     fetchData();
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => <ListItem item={item} />}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   listItem: {
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   itemText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   itemDescription: {
//     fontSize: 14,
//     color: '#888888',
//   },
// });

// export default App;
