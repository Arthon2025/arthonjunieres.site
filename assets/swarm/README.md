# Animação independente de cursores

Implementação própria em [swarm-adapter.js](<swarm-adapter.js>), sem código ou assets dos repositórios pesquisados. Não é uma reconstrução/clonagem do DOM: cinco ponteiros geométricos traçam contornos temporários nos títulos, retrato e cards que entram na tela, depois orbitam o mouse. O conteúdo real permanece visível, acessível e clicável.

## Como visualizar

Abra a página normal: `http://127.0.0.1:8080/`. A animação inicia automaticamente ao carregar, sem aviso ou botão. Não precisa de `?swarm=1`.

Por solicitação explícita do responsável pelo projeto, também inicia com movimento reduzido ou touch, sem pedir reprodução manual. Isso deixa de respeitar automaticamente essa preferência de acessibilidade. Escape e `?swarm=0` permanecem como alternativas para desligar o efeito.

Não há botão de encerramento na camada ativa. A animação permanece contínua e cada rolagem para cima ou para baixo libera uma nova passagem de retângulos nos componentes visíveis, inclusive os já desenhados. Desenhos ativos terminam antes de repetir, sem reiniciar a cada evento de scroll. Escape permanece como saída de acessibilidade. Para controlar pelo console do navegador:

```js
window.ArthonSwarm.start();
window.ArthonSwarm.stop();
window.ArthonSwarm.active;
```

## Comportamento e limites

- Sem áudio, bibliotecas, extensão, npm ou build.
- Canvas transparente, sem hit-testing, sem controles ou elementos focáveis na camada ativa.
- Inicialização automática independente de preferência de movimento ou tipo de ponteiro, conforme decisão atual do projeto.
- Aba oculta pausa frames para poupar recursos; ao retornar, retoma. A camada ativa nunca captura foco.
- A saída/navegação encerra o efeito. Retorno por BFCache mantém a decoração desligada; para repetir, recarregue a URL opt-in ou use a API. A página continua normal.
- Os contornos não apagam a página nem simulam digitação, áudio, réguas ou a coreografia do projeto original. Esta é deliberadamente uma experiência independente e mais discreta.
- A [configuração JSON](<integration.config.json>) documenta políticas, mas não é lida pelo runtime. Ajustes de quantidade, cores ou seletores são feitos no adaptador.
- Estilos estão no Shadow DOM do adaptador; não existe stylesheet externo a instalar.

[Validação e evidências](<../../docs/swarm-validation.md>). Para rollback, remova somente a tag de script adicionada ao final do HTML.
