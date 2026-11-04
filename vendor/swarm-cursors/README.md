# Reserva para código de terceiros — sem código incluído

**Decisão atual:** o usuário escolheu uma implementação independente. O [adaptador próprio](<../../assets/swarm/swarm-adapter.js>) não contém código ou assets upstream; esta pasta permanece apenas como registro da pesquisa. Os requisitos abaixo só se aplicam se alguém decidir reutilizar o motor original futuramente.

Repositório avaliado: [DhvanilPatel/swarm-cursors](https://github.com/DhvanilPatel/swarm-cursors).

Revisão analisada em 04/11/2026: `18fd2614ebea68e64f05a8d269d27de022d50cc9` (extensão v1.1.0).

## Bloqueio de reutilização

O [README upstream, seção License](https://github.com/DhvanilPatel/swarm-cursors/blob/18fd2614ebea68e64f05a8d269d27de022d50cc9/README.md#license) informa que ainda não há licença e pede consultar Joel Califa, pois o projeto adapta código de [califa/swarm-site](https://github.com/califa/swarm-site). A árvore consultada não contém LICENSE; os metadados do GitHub retornam licença nula.

Não foi copiado, modificado, distribuído nem executado código desses repositórios. Esta pasta é uma reserva documental, não uma instalação funcional. Crédito não substitui licença ou permissão.

## Antes de adicionar código

1. Obter permissão/licença adequada para as partes de Dhvanil Patel e de Joel Califa.
2. Registrar o alcance concedido: modificação, distribuição no site e uso comercial, se aplicável.
3. Guardar apenas um registro de autorização apropriado para publicação, sem divulgar conversas privadas ou dados pessoais.
4. Conferir a revisão autorizada e criar avisos/licenças exatamente conforme as condições concedidas.
5. Só então adicionar o motor local e o adaptador descritos no [plano](<../../docs/swarm-integration.plan.md>).

Não adicionar `manifest.json` ou `background.js` à página: são infraestrutura da extensão Chrome, não dependências de um site HTML.
