import { View, Text, Image, FlatList } from 'react-native';

const carros = [
  {
    id: '1',
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    cor: 'Prata',
    imagem: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg'
  },
  {
    id: '2',
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2025,
    cor: 'Branco',
    imagem: 'https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg'
  },
  {
    id: '3',
    marca: 'Ford',
    modelo: 'Mustang',
    ano: 2021,
    cor: 'Vermelho',
    imagem: 'https://cdn.pixabay.com/photo/2013/06/15/18/15/car-139529_1280.jpg'
  },
  {
    id: '4',
    marca: 'Chevrolet',
    modelo: 'Camaro',
    ano: 2018,
    cor: 'Amarelo',
    imagem: 'https://cdn.pixabay.com/photo/2016/02/19/15/56/transformers-1210585_1280.jpg'
  },
  {
    id: '5',
    marca: 'BMW',
    modelo: 'M4',
    ano: 2022,
    cor: 'Branca',
    imagem: 'https://cdn.pixabay.com/photo/2022/10/06/10/42/car-7502430_1280.jpg'
  }
];

export default function CarrosScreen() {
  return (
    <FlatList
      data={carros}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={{
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10
        }}>
          <Image
            source={{ uri: item.imagem }}
            style={{ width: '100%', height: 150, borderRadius: 10 }}
          />
          <Text style={{ fontSize: 18, marginTop: 5 }}>
            {item.marca} {item.modelo}
          </Text>
          <Text>Ano: {item.ano}</Text>
          <Text>Cor: {item.cor}</Text>
        </View>
      )}
    />
  );
}
