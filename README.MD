# Formula 1 Minimal API

Este é um projeto de API simples utilizando **Fastify** para fornecer informações sobre equipes e pilotos da Fórmula 1. A API é uma forma prática de aprender e experimentar com a construção de APIs rápidas e escaláveis usando **Node.js**.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Fastify**: Framework minimalista e rápido para criar APIs.
- **CORS**: Permite que a API seja acessada por qualquer origem (domínios diferentes).

## Endpoints

A API fornece os seguintes endpoints:

### Equipes

- **GET `/teams`**: Retorna uma lista de todas as equipes da Fórmula 1.
- **GET `/teams/:id`**: Retorna informações detalhadas sobre uma equipe específica com base no `id`.

### Pilotos

- **GET `/drivers`**: Retorna uma lista de todos os pilotos.
- **GET `/drivers/:id`**: Retorna informações detalhadas sobre um piloto específico com base no `id`.

## Estrutura de Dados

### Equipes

As equipes são representadas por objetos com os seguintes atributos:

- `id`: ID da equipe.
- `name`: Nome da equipe.
- `base`: Localização da sede da equipe.

Exemplo:

```json
{
  "id": 1,
  "name": "Scuderia Ferrari",
  "base": "Maranello, Italia"
}
