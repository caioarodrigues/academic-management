# Registro de Atividades Acadêmicas - UFC Sobral

## Descrição do Projeto

Este projeto simula a criação de uma solução para gerenciar as diversas atividades acadêmicas, projetos de extensão e eventos realizados no campus da UFC Sobral. A ideia é desenvolver um aplicativo móvel que permita o cadastro das atividades e o monitoramento dos participantes, facilitando a organização e o acompanhamento de eventos. Desenvolvido para fins acadêmicos (ECO0107 - DESENVOLVIMENTO PARA DISPOSITIVOS MÓVEIS).

## Funcionalidades

- **Tela de Cadastro:**  
  Permite inserir as informações da atividade:
  - Nome da atividade
  - Responsável
  - Data
  - Descrição  
  Além de implementar validações para garantir que os campos obrigatórios estejam preenchidos.

- **Tela de Listagem:**  
  Exibe uma lista com todas as atividades cadastradas, permitindo uma visualização rápida e organizada.

- **Tela de Detalhes:**  
  Apresenta informações completas de cada atividade cadastrada, possibilitando um acompanhamento detalhado.

## Tecnologias Utilizadas

Este projeto pode ser implementado utilizando **React Native** ou **Kotlin**.  
Neste exemplo, optei por utilizar **React Native** para permitir o desenvolvimento de uma única base de código para ambas as plataformas (Android e iOS). Outras bibliotecas que podem ser incorporadas ao projeto incluem:

- **React Navigation:** para gerenciar a navegação entre as telas.
- **Yup:** para o gerenciamento de formulários e validações.

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 21.6.2)
- NPM: versão 10.2.4
- Ambiente de desenvolvimento configurado para React Native ([Guia oficial de configuração](https://reactnative.dev/docs/environment-setup))

### Passos para rodar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/caioarodrigues/academic-management.git
   cd academic-management
   npx expo install
   npx expo start