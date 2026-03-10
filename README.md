# 🧮 Simple React Calculator

Calculadora desenvolvida em React para praticar conceitos fundamentais da biblioteca.

## 🚀 Tecnologias utilizadas

- React
- JavaScript
- CSS / HTML

## 🎯 Objetivo do projeto

Este projeto simples foi desenvolvido com o objetivo de me familiarizar com o React e compreender seus principais conceitos na prática.

## 📱 Demonstração

![Calculadora React](calculator.gif)


## 🛠️ Funcionalidades Implementadas
### 🧠 Lógica e Tratamento de Dados
- **Tratamento de Operadores:** Permite a troca dinâmica de operações (ex: se o usuário clicar em + e depois em -, o sistema atualiza o operador sem quebrar o cálculo).
- **Prevenção**: Lógica para evitar múltiplos pontos decimais em um único número.
- **Operações Encadeadas**: Permite realizar cálculos sequenciais (ex: 10 + 2 - 5) sem a necessidade de pressionar o botão de igual (=) entre cada operação, otimizando o tempo do usuário.
### 📱 Display
- **Gestão de Display**: Funções de limpeza total (AC) e limpeza parcial para uma melhor usabilidade.
- **Auto-Scaling de Fonte**: A tipografia do visor se ajusta dinamicamente conforme o número de dígitos aumenta, garantindo legibilidade.
- **Limite de Precisão**: Implementação de trava de segurança para até 15 dígitos, evitando quebras de layout (overflow).
- **Tratamento Matemático**: Resultados com dízimas periódicas ou muitas casas decimais são automaticamente limitados a 9 casas de precisão para manter a clareza.
### 📜 Histórico
- **Estrutura FIFO:** O histórico mantém apenas os 10 cálculos mais recentes, removendo automaticamente os registros antigos para otimizar o uso de memória e manter a organização visual.
- **Auto-Scroll**: Novas operações são sempre inseridas no final da lista.

## ▶️ Como executar o projeto

1. Clone o repositório:
   ```git clone https://github.com/emilysk49/simple-react-calculator.git```

2. Instale as dependências:
   ```npm install```

3. Execute o projeto:
   ```npm run dev```
   ou
   ```npm start```

