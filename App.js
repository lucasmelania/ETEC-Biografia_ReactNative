// Importação dos componentes principais do React Native que serão usados no app
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

// Função principal do aplicativo
export default function App() {
  return (
    // View principal que funciona como container da tela
    <View style={styles.container}>
      {/* ScrollView permite rolar o conteúdo da tela verticalmente */}
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false} // esconde a barra lateral de rolagem
        contentContainerStyle={{ alignItems: "center" }} // centraliza os itens dentro do scroll
      >
        {/* Cabeçalho do aplicativo */}
        <View style={styles.cabecalho}>
          <Text style={styles.titulo1}>Meu Primeiro App</Text>

          {/* Subtítulo do app */}
          <Text style={styles.subtitulo}>React Native</Text>
        </View>

        <View style={styles.cabecalho2}>
          <Text style={styles.titulo2}>Tim Berners-Lee</Text>
        </View>

        {/* Container que agrupa imagem + texto */}
        <View style={styles.containerImagens}>
          {/* Componente de imagem */}
          <Image
            style={styles.imagem}
            source={require("./assets/timbernerslee-1060x680.jpg")}
          />

          {/* Texto descritivo sobre o personagem */}
          <Text style={styles.texto}>
              {'   '}Nascido em Londres, em 8 de junho de 1955, Tim Berners-Lee é um
            cientista da computação britânico mundialmente famoso por ter
            inventado a World Wide Web. Enquanto trabalhava no CERN, em 1989,
            ele criou um sistema que possibilitava ligar documentos através de
            links, simplificando a troca de dados entre pesquisadores de vários
            cantos do planeta.{'\n\n'}
              {'   '} Para viabilizar essa ideia, Tim Berners-Lee
            concebeu tecnologias essenciais que permanecem em uso até os dias
            atuais, como o HTML, que define a estrutura das páginas web, o HTTP,
            protocolo de comunicação entre o navegador e o servidor, e também o
            sistema de endereços URL, empregado para encontrar páginas na
            internet. {'\n\n'}
            {'   '}Essa sua criação revolucionou de forma drástica a
            comunicação global, viabilizando o aparecimento de sites,
            plataformas digitais, redes sociais e uma infinidade de serviços
            online. Além de inventor, Tim Berners-Lee é também um defensor de
            uma internet gratuita, aberta e acessível a todos, atuando ainda
            hoje em projetos que resguardam a privacidade e a neutralidade da
            rede.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// Objeto que contém todos os estilos usados no aplicativo
const styles = StyleSheet.create({
  // Estilo do container principal da tela
  container: {
    flex: 1, // ocupa toda a tela
    backgroundColor: "#e0dddd", // cor de fundo
    paddingTop: 40, // espaço no topo
  },

  // Estilo do ScrollView
  scroll: {
    width: "100%", // Largura total da tela
  },

  // Estilo do cabeçalho
  cabecalho: {
    backgroundColor: "#64a2d8", // cor de fundo azul
    width: "95%", // Largura
    alignItems: "center", // centraliza horizontalmente
    height: 110, // altura do cabeçalho
    justifyContent: "center", // centraliza verticalmente
    borderRadius: 15, // cantos arredondados
    marginBottom: 20, // espaço abaixo
    shadowColor: "#ffffff", // cor da sombra
    shadowOpacity: 0.2, // opacidade da sombra
    shadowRadius: 6, // raio da sombra
    elevation: 10, // sombra no Android
  },

  cabecalho2: {
    backgroundColor: "#fff",
    width: "92%",
    padding: 18,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 8,
    marginVertical: 12,
  },

  // Estilo do texto principal
  texto: {
    fontSize: 20,
    textAlign: "justify", // deixa o texto alinhado nas duas margens
    color: "#6c6c6c",
    fontWeight: "Tahoma",
    lineHeight: 35,
    paddingHorizontal: 10,
  },

  titulo1: {
    fontSize: 20,
    textAlign: "justify", // deixa o texto alinhado nas duas margens
    color: "#7dc343",
    fontFamily: "monospace",
    fontWeight: "700",
  },

  titulo2: {
    fontSize: 20,
    textAlign: "justify", // deixa o texto alinhado nas duas margens
    color: "#6c6c6c",
    fontWeight: "bold",
  },

  // Estilo do subtítulo
  subtitulo: {
    fontSize: 16,
    color: "#eed842",
    fontWeight: "400",
    marginTop: 5,
  },

  // Estilo da imagem
  imagem: {
    width: 450, // Largura relativa
    height: 300, // altura fixa
    borderRadius: 20, // bordas arredondadas
    margin: 30, // margem externa
  },

  // Estilo do texto dentro do botão
  textoBotao: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Container que organiza a imagem e o texto
  containerImagens: {
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
