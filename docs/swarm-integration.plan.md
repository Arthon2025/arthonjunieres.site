# Plano de integração das animações Swarm

> **Atualização de execução — 04/11/2026:** o usuário escolheu a alternativa 1: implementação independente, sem código upstream. Ela está implementada e disponível por `?swarm=1`. O histórico de pesquisa e o plano original abaixo ficam preservados como contexto, não como estado atual. A página recebeu apenas um loader local; nenhum conteúdo ou CSS original foi redesenhado. Consulte as [instruções atuais](<../assets/swarm/README.md>) e o [relatório de execução](<swarm-validation.md>). As fases de vendorizar/adaptar o upstream NÃO foram executadas e NÃO são necessárias para esta implementação independente.

## 1. Objetivo e situação atual

Preparar a aplicação das animações de [DhvanilPatel/swarm-cursors](https://github.com/DhvanilPatel/swarm-cursors) no [portfólio original](<../index.html>), mantendo seu visual. Esta entrega é **plano + estrutura preparatória**, não a animação ativa. Nenhum CSS, conteúdo, script, meta tag ou comportamento da página original foi alterado.

A inspeção encontrou somente um HTML autocontido, com CSS e JavaScript inline, sem gerenciador de pacotes nem repositório Git local. O comando `git status --short` confirmou a ausência de Git; não foi feito commit nem iniciado outro servidor.

### Contrato de preservação

- Produto: portfólio profissional de dados, automação e operações; visitantes exploram projetos e entram em contato.
- Hierarquia: apresentação/retrato → projetos → sobre → competências → trajetória → contato.
- Conservar paleta escura/lilás, seção Sobre clara, fonte Inter, grid, retrato, textos, cards, espaçamentos e responsividade.
- Conservar menu móvel, links, foco visível, skip link, formulário de preparação do WhatsApp e revelações por rolagem.
- Alvos de validação futura: **390x844** e **1440x900**, além de zoom/reflow.
- Sem animação ativa, o estado renderizado deve permanecer igual ao original; esta preparação exige igualdade byte a byte do HTML.
- SHA-256 do HTML original: `7e367b65efbbdc15bd3bf8c01a7f913d8eb388f1f7cee88d0f2f7701398951a0`.

## 2. O que o repositório realmente oferece

Consulta de 04/11/2026, revisão `18fd2614ebea68e64f05a8d269d27de022d50cc9`.

O [README](https://github.com/DhvanilPatel/swarm-cursors/blob/18fd2614ebea68e64f05a8d269d27de022d50cc9/README.md) descreve uma **extensão Chrome**, não um pacote npm de rastros de mouse. Ela captura a aparência da página, a encobre e reproduz sua construção numa camada visual separada. As cópias não substituem funcionalmente a página real.

Efeitos disponíveis: órbita inicial de cursores, desenho de caixas e imagens, digitação com caret, crescimento de títulos, linhas por ferramenta de caneta, réguas/guias, duplicação de cards, tarefas acionadas pela rolagem e flocking final. Também há Tour, velocidades e som sintetizado.

### Arquivos/API observados

- [Motor swarm.js](https://github.com/DhvanilPatel/swarm-cursors/blob/18fd2614ebea68e64f05a8d269d27de022d50cc9/swarm-rebuild/swarm.js): JavaScript vanilla autocontido; sem React, GSAP ou dependência npm.
- É uma IIFE que inicia imediatamente. Expõe `window.__swarmRebuild` com `start()`, `stop(reveal)`, `toggle()`, getter `app` e ferramentas de debug. Não existe `init(options)` documentado nem export ESM.
- Reinjetar o script chama `toggle()`. Não reinjetar como estratégia de inicialização: poderia encerrar uma sessão ativa.
- Som vem ligado por padrão no upstream. Desligá-lo antes da execução exige adaptar o motor; a configuração local proposta não faz isso sozinha.
- `manifest.json` e `background.js` dependem de APIs da extensão. Não devem ser importados pela página.
- A página demo upstream é alvo de teste, não um componente embutível.

O motor parece tecnicamente adaptável a um script de página, mas isso é uma **inferência de leitura de código, não uma integração suportada ou testada**. Sem a captura privilegiada da extensão, vídeos, WebGL e iframes cross-origin podem virar placeholders.

## 3. Gate obrigatório: autorização

A [seção License](https://github.com/DhvanilPatel/swarm-cursors/blob/18fd2614ebea68e64f05a8d269d27de022d50cc9/README.md#license) declara ausência de licença e pede consultar Joel Califa, autor do Swarm original. Não presumir MIT por estar no GitHub. Obter autorização adequada dos titulares das partes reutilizadas antes de copiar/distribuir/adaptar o motor.

**Decisão atual:** não incluir código upstream nem ativar efeito. A estrutura criada é própria e declarativa. Detalhes no [registro de terceiros](<../vendor/swarm-cursors/README.md>).

Alternativa caso a autorização não seja obtida: implementar um efeito independente de cursores decorativos, sem copiar código, desenhos ou assets. Isso seria outro escopo, não reprodução fiel da reconstrução do upstream; decidir com o responsável antes de desenvolver.

## 4. Estrutura preparada

```text
index.html                          # original intacto
assets/swarm/
  integration.config.json          # contrato proposto, desativado
  README.md                        # limites e arquivos futuros
vendor/swarm-cursors/
  README.md                        # origem, revisão e autorização pendente
docs/
  swarm-integration.plan.md         # este plano
  swarm-validation.md              # evidências e pendências
tests/
  swarm-plan.test.cjs               # preservação e gates de preparação
```

Não é necessário npm, framework, bundler, áudio externo ou imagens novas nesta fase. A [configuração](<../assets/swarm/integration.config.json>) **não é API upstream** e não é carregada pelo HTML. Não foram adicionados scripts vazios que aparentem implementar a animação.

## 5. Sequência de implementação futura

### Fase A — resolver licença e fixar baseline

1. Registrar a permissão e condições de uso/atribuição. Sem isso, parar antes da cópia.
2. Capturar screenshots da página original nas duas resoluções, com fontes/imagens prontas e conteúdo revelado de forma consistente.
3. Registrar retângulos de layout, menu, âncoras, formulário, foco e erros de console. Não enviar o formulário nem abrir mensagens reais nos testes.

### Fase B — isolar motor e ciclo de vida

Depende de A.

1. Vendorizar somente a revisão autorizada e os avisos exigidos, sem buscar código de `main` em runtime.
2. Criar `assets/swarm/swarm-adapter.js` e `assets/swarm/swarm-overlay.css`; são arquivos futuros, ainda inexistentes.
3. Adaptar início imediato e som: inicialização explicitamente solicitada, sem áudio por padrão, com carregamento único e sob demanda. Não depender do getter interno `app` como API estável.
4. Usar camada isolada (Shadow DOM/namespacing), sem regras CSS globais. Preservar o DOM semântico original, sem substituir textos por clones para leitores de tela.
5. Cancelar todos os frames, timers, observers e listeners ao encerrar. Restaurar rolagem, foco e estilos inclusive em erro, resize, mudança de preferência de movimento e navegação.
6. Sincronizar o snapshot com fontes/imagens e revelações existentes; não deixar a varredura de rolagem alterar permanentemente o estado ou a posição inicial do visitante.

### Fase C — integrar sem redesenhar a página

Depende de B.

1. Não iniciar automaticamente: a reconstrução encobre e intercepta a página, portanto não é compatível com interação normal durante o efeito.
2. Para manter o visual inicial estritamente idêntico, começar por uma demonstração opt-in via parâmetro de URL documentado. Se desejar botão permanente depois, aprovar sua posição e aparência antes de mudar o layout.
3. Durante o modo demonstrativo, disponibilizar saída visível e acessível, Escape e restauração do foco; não depender apenas de atalho de teclado ou do ícone da extensão.
4. Com `prefers-reduced-motion: reduce`, não iniciar a reconstrução; manter todo conteúdo disponível. Não ocultar cursor nativo. No mobile/touch, manter desativado por padrão até avaliação de desempenho.
5. Não adicionar Tour/auto-scroll nem som automático ao fluxo normal do visitante.
6. Só então acrescentar um loader pequeno ao HTML, preservando CSS e scripts atuais. Atualizar o teste de hash conscientemente: usar comparação estrutural/baseline para verificar que a única alteração aprovada é o loader.

### Fase D — regressão e liberação

Depende de C. Testar antes de ativar em produção.

- Comparar original e integração desativada em 390x844 e 1440x900; exigir zero deslocamento de layout provocado pela integração.
- Examinar reconstrução e saída: retrato, gradientes, pseudo-elementos, sticky header, seção clara e revelações por scroll podem diferir de um snapshot visual.
- Testar teclado, foco, skip link, Escape, movimento reduzido (inclusive alteração em runtime), touch, resize, aba oculta e retorno.
- Testar menu móvel e validade dos campos sem navegar ao WhatsApp; links não devem ser bloqueados depois da saída.
- Simular falha/atraso do motor e assets, clique repetido, início/saída/início e ausência de APIs. A página original deve continuar utilizável.
- Medir CPU/memória e tarefas longas numa sessão completa; verificar limpeza após sair e limitar agentes com base nas medições, não em promessa de FPS.
- Guardar screenshots e relatório real. Somente declarar aprovado após revisão renderizada e testes; análise de fonte não comprova fidelidade visual da animação.

## 6. Estados e fallback esperados

| Estado | Gatilho / feedback | Próximo passo seguro |
| --- | --- | --- |
| Carregamento | Visitante solicita demonstração; manter página acessível enquanto prepara assets | Cancelar sem ocultar conteúdo |
| Vazio | Nenhum elemento elegível no snapshot | Não abrir overlay; voltar à página |
| Erro | Falha do motor ou APIs | Remover camada e restaurar foco/rolagem |
| Parcial | Mídia não capturável | Preferir página original; não apresentar reconstrução incompleta como fiel |
| Sucesso | Reconstrução encerrada | Revelar DOM original funcional |
| Permissão | Licença pendente, sem autorização | Integração desativada; não buscar código |

## 7. Rollback e aceite desta entrega

Não há rollback de runtime necessário nesta fase: nada foi conectado ao HTML. Para a versão futura, desativar o loader e remover a camada deverá restaurar a página original sem dependência do motor.

Aceite da preparação: HTML com hash original, configuração desativada, origem/licença registradas, estrutura documentada e testes locais aprovados. Rodar na raiz:

```powershell
node --test tests/swarm-plan.test.cjs
```

O teste de fingerprint é propositalmente estrito e registra apenas o estado desta preparação. Mudanças legítimas futuras no portfólio exigirão revisar o baseline, não simplesmente apagar a proteção.
