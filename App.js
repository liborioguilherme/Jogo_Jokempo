import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [placar, setPlacar] = useState(0);
  const [placarMaquina, setPlacarMaquina] = useState(0);
  const [imgPedra, setImgPedra] = useState(null);
  const [imgPapel, setImgPapel] = useState(null);
  const [imgTesoura, setImgTesoura] = useState(null);
  const [imgUser, setImgUser] = useState(require('./assets/caixa.png'));
  const [imgMaquina, setImgMaquina] = useState(require('./assets/caixa.png'));
  const [maquinaEscolha, setMaquinaEscolha] = useState(null);
  const [userEscolha, setUserEscolha] = useState(null);

  function verificaPedra() {
    setUserEscolha(1);
    setMaquinaEscolha(Math.floor(Math.random() * 3) + 1)
    if (maquinaEscolha == 1) {
      setImgMaquina(require('./assets/pedra.png'));
      setPlacar(placar);
      setPlacarMaquina(placarMaquina);
    }
    else if (maquinaEscolha == 2) {
      setImgMaquina(require('./assets/papel.png'));
      setPlacarMaquina(placarMaquina + 1);
    }
    else if (maquinaEscolha == 3) {
      setImgMaquina(require('./assets/tesoura.png'));
      setPlacar(placar + 1);
    }
  }

  function verificaPapel() {
    setUserEscolha(2);
    setMaquinaEscolha(Math.floor(Math.random() * 3) + 1)
    if (maquinaEscolha == 1) {
      setImgMaquina(require('./assets/pedra.png'));
      setPlacar(placar+1);
    }
    else if (maquinaEscolha == 2) {
      setImgMaquina(require('./assets/papel.png'));
      setPlacar(placar);
      setPlacarMaquina(placarMaquina);
    }
    else if (maquinaEscolha == 3) {
      setImgMaquina(require('./assets/tesoura.png'));
      setPlacarMaquina(placarMaquina + 1);
    }
  }

  function verificaTesoura(){
    setUserEscolha(3);
    setMaquinaEscolha(Math.floor(Math.random() * 3) + 1);
    if (maquinaEscolha == 1) {
      setImgMaquina(require('./assets/pedra.png'));
      setPlacarMaquina(placarMaquina+1);
    }
    else if (maquinaEscolha == 2) {
      setImgMaquina(require('./assets/papel.png'));
      setPlacar(placar+1);
    }
    else if (maquinaEscolha == 3) {
      setImgMaquina(require('./assets/tesoura.png'));
      setPlacar(placar);
      setPlacarMaquina(placarMaquina);
    }
  }
  function resetar(){
    setPlacar(0);
    setPlacarMaquina(0);
    setImgUser(require('./assets/caixa.png'));
    setImgMaquina(require('./assets/caixa.png'));
  }

  return (

    <View style={styles.container}>
      <Image
        style={{ width: 250, height: 143.13, alignItems: 'center', justifyContent: 'center', marginTop: 30, marginLeft: 'auto', marginRight: 'auto' }}
        source={require("./assets/logoJokempo.png")}
      />
      <View style={styles.texto}>
        <Text style={{ textAlign: 'center', fontSize: 45, fontWeight: 'bold', marginTop: 40 }}>Placar</Text>
      </View>
      <View style={styles.texto}>
        <Text style={{  fontSize: 55 }}> {placar}</Text>
        <Text style={{  fontSize: 55 }}>{placarMaquina} </Text>

      </View>
      <View style={styles.img2}>
        <Image style={{ width: 122, height: 98, marginTop:60}} source={imgUser} />
        <Image style={{ marginTop:60 }} source={require('./assets/vs.png')} />
        <Image style={{ width: 122, height: 98, marginTop:60}} source={imgMaquina} />
      </View>


      <TouchableOpacity style={styles.botao} onPress={() => resetar()}>
        <Text style={styles.textoBotao}>
          Novo jogo
        </Text>
      </TouchableOpacity>
      <View style={styles.img}>

        <TouchableOpacity onPress={() => setImgUser(require('./assets/pedra.png')) & verificaPedra()}>
          <Image style={{ width: 122, height: 98 }} source={require('./assets/pedra.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setImgUser(require('./assets/papel.png')) & verificaPapel()}>
          <Image style={{ width: 122, height: 98  }} source={require('./assets/papel.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setImgUser(require('./assets/tesoura.png')) & verificaTesoura()}>
          <Image style={{ width: 122, height: 98  }} source={require('./assets/tesoura.png')} />
        </TouchableOpacity>




      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
  img:{
 flex:1,
 justifyContent:"space-around",
 flexDirection:"row"
  },
  img2:{
    flex:1,
    justifyContent:"space-around",
    flexDirection:"row"
  },
  texto:{
    justifyContent:"space-around",
  flexDirection:"row"
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 3,
    borderColor: 'blac',
    borderRadius: 25,
    margin: 60,
    alignItems: 'center',
    marginLeft: 90,
    backgroundColor: '#ddd'
  },
  textoBotao: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5

  },
});
