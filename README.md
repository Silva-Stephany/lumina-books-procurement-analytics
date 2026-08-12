# 📚 Lumina Books — Procurement Analytics

Projeto fictício de análise de dados desenvolvido para demonstrar competências em **Compras, Procurement, análise de dados, visualização, estoque e gestão de fornecedores**.

🔗 **Dashboard online:**  
https://silva-stephany.github.io/lumina-books-procurement-analytics/

---

## 📌 Sobre o projeto

A **Lumina Books** é uma livraria fictícia criada exclusivamente para fins de portfólio.

O projeto simula um cenário no qual a área de Compras precisa utilizar dados de vendas, estoque e fornecedores para tomar decisões melhores sobre:

- quais livros comprar;
- quanto comprar;
- quando realizar uma reposição;
- quais produtos apresentam maior demanda;
- quais fornecedores possuem maior participação nos gastos;
- quais itens estão em situação crítica de estoque;
- onde existem riscos de concentração de fornecedores.

Todos os dados utilizados neste projeto são **fictícios e simulados**.

---

## 🎯 Problema de negócio

Uma livraria precisa equilibrar disponibilidade de produtos e investimento em estoque.

Comprar pouco pode gerar ruptura e perda de vendas.

Comprar demais pode gerar excesso de estoque e capital parado.

Além disso, a empresa precisa acompanhar custos, fornecedores, prazos de entrega e concentração de compras.

O objetivo deste projeto foi construir um portal de análise capaz de transformar dados operacionais em **indicadores e recomendações para tomada de decisão**.

---

## 💡 Solução desenvolvida

Foi criado um portal interativo de **Procurement Analytics** com múltiplos dashboards conectados.

O sistema permite analisar:

- vendas;
- receita;
- catálogo de livros;
- compras;
- custos;
- estoque;
- giro;
- fornecedores;
- concentração de gastos;
- prazos de entrega;
- necessidades de reposição;
- prioridades de compra.

---

## 📊 Dashboards

### 📈 Visão Geral

Resumo executivo dos principais indicadores do negócio.

Principais análises:

- receita total;
- investimento em compras;
- unidades vendidas;
- títulos críticos;
- evolução mensal da receita;
- evolução das compras;
- receita por gênero;
- gastos por fornecedor.

---

### 📚 Livros

Análise do catálogo e desempenho dos títulos.

Principais análises:

- quantidade de títulos;
- preço médio;
- livro mais vendido;
- gênero com maior receita;
- ranking dos livros;
- receita por gênero;
- evolução mensal;
- filtros por gênero e título.

---

### 🧾 Compras

Dashboard voltado à análise de Procurement.

Principais indicadores:

- investimento total;
- unidades compradas;
- custo médio unitário;
- fornecedor líder;
- evolução mensal dos gastos;
- gasto por fornecedor;
- custo médio por gênero;
- Curva ABC de compras.

---

### 📦 Estoque

Análise da disponibilidade e movimentação dos livros.

O estoque estimado é calculado utilizando:

```text
Estoque Atual =
Estoque Inicial
+ Quantidade Comprada
- Quantidade Vendida
```

Principais análises:

- estoque total;
- produtos críticos;
- estoque atual versus estoque mínimo;
- giro estimado;
- situação dos produtos;
- estoque por gênero.

---

### 🏢 Fornecedores

Análise do desempenho e da participação dos fornecedores.

Principais indicadores:

- fornecedores ativos;
- participação nos gastos;
- concentração de compras;
- prazo médio de entrega;
- avaliação;
- quantidade comprada;
- nível de dependência.

---

### 🧠 Recomendações

Módulo de apoio à decisão de compras.

O sistema utiliza vendas recentes e estoque disponível para gerar sugestões de reposição.

A lógica considera:

```text
Média de vendas dos últimos 3 meses
×
Cobertura desejada de estoque
=
Estoque alvo
```

Depois:

```text
Compra sugerida =
Estoque alvo
-
Estoque atual
```

Os produtos são classificados por prioridade:

- 🔴 Alta
- 🟡 Média
- 🟢 Baixa

---

## 🧮 Principais indicadores

### Receita

```text
Receita =
Quantidade Vendida × Preço de Venda
```

### Valor de compra

```text
Valor da Compra =
Quantidade Comprada × Custo Unitário
```

### Estoque atual

```text
Estoque Atual =
Estoque Inicial
+ Compras
- Vendas
```

### Giro estimado

```text
Giro Estimado =
Quantidade Vendida / Estoque Inicial
```

### Participação do fornecedor

```text
Participação =
Gasto com o Fornecedor / Gasto Total
```

---

## 📦 Regra de reposição

Para fins didáticos, o projeto utiliza a média de vendas dos três meses mais recentes como referência de demanda.

```text
Demanda Média =
Vendas dos últimos 3 meses / 3
```

Depois é calculado um estoque alvo:

```text
Estoque Alvo =
Demanda Média × 2,2
```

A quantidade sugerida é:

```text
Compra Sugerida =
Estoque Alvo - Estoque Atual
```

Essa regra é simplificada e foi criada exclusivamente para fins de demonstração.

---

## 🏢 Dependência de fornecedores

Foi utilizada uma regra simplificada para demonstrar risco de concentração:

```text
Participação >= 30%
→ Dependência Alta

Participação >= 20% e < 30%
→ Dependência Média

Participação < 20%
→ Dependência Baixa
```

---

## 📊 Curva ABC

A Curva ABC é utilizada para identificar os títulos que concentram maior parte do investimento em compras.

Os produtos são ordenados do maior para o menor valor comprado e é calculada a participação acumulada.

De forma conceitual:

- **Classe A** → itens de maior impacto financeiro;
- **Classe B** → itens de impacto intermediário;
- **Classe C** → itens de menor participação.

---

## 🗂️ Estrutura do projeto

```text
lumina-books-procurement-analytics/
│
├── index.html
├── catalogo.html
├── compras.html
├── estoque.html
├── fornecedores.html
├── recomendacoes.html
├── sobre.html
│
├── css/
│   └── style.css
│
├── js/
│   └── shared.js
│
├── data/
│   ├── livros.csv
│   ├── vendas.csv
│   ├── compras.csv
│   └── fornecedores.csv
│
├── docs/
│   └── metodologia.md
│
└── images/
    └── fundo-livraria.png
```

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Chart.js
- CSV
- GitHub
- GitHub Pages

---

## 📂 Dados

O projeto utiliza dados fictícios de:

- 24 livros;
- 8 gêneros;
- 6 fornecedores;
- vendas mensais;
- compras mensais;
- custos;
- estoques;
- prazos de entrega;
- avaliações de fornecedores.

Nenhuma informação representa dados reais de empresas ou pessoas.

---

## 🎨 Identidade visual

A interface foi desenvolvida com uma identidade inspirada em uma livraria, utilizando:

- tons de roxo e lilás;
- tipografia editorial;
- imagem de livros em segundo plano;
- cards de indicadores;
- tabelas;
- gráficos interativos;
- navegação entre módulos;
- layout responsivo.

---

## 🚀 Objetivo profissional

Este projeto foi desenvolvido como parte do meu portfólio para demonstrar habilidades relacionadas a:

- Procurement;
- Compras;
- análise de dados;
- análise de custos;
- gestão de estoque;
- gestão de fornecedores;
- indicadores de desempenho;
- visualização de dados;
- construção de dashboards;
- lógica de reposição;
- pensamento analítico;
- transformação de dados em recomendações para tomada de decisão.

---

## ⚠️ Aviso

Este é um **projeto fictício desenvolvido exclusivamente para fins educacionais e de portfólio**.

Os nomes de livros, fornecedores, valores, vendas, compras, estoques e demais informações são simulados.

As regras utilizadas para reposição, classificação de fornecedores, giro e outros indicadores são simplificações criadas para fins demonstrativos.

---

## 👩‍💻 Autora

**Stephany Silva**

Projeto desenvolvido para portfólio profissional.

🔗 **Acesse o dashboard:**  
https://silva-stephany.github.io/lumina-books-procurement-analytics/
