# Validação — animação independente

## Entrega

Implementação própria em [swarm-adapter.js](<../assets/swarm/swarm-adapter.js>), ativada por `?swarm=1`. Não inclui código ou assets upstream. A única alteração no [HTML](<../index.html>) é um loader local no fim do documento; CSS, textos e scripts existentes permanecem iguais. [Uso e limites](<../assets/swarm/README.md>).

## TDD e testes

Node.js v24.13.1, runner nativo sem dependências. Antes da implementação: **11 testes, 1 aprovado e 10 falhas esperadas**, por ausência do motor, loader e estado da configuração. Depois da implementação e regressões: **13/13 aprovados**, sem skips.

```powershell
node --test --experimental-test-coverage tests/*.test.cjs
```

Cobertura final medida: **96,43% linhas, 90,16% branches, 100% funções**. `node --check` aprovou a sintaxe e o checker local de evidências frontend retornou `Evidence record complete`; screenshots foram inspecionados separadamente. O primeiro relatório não contabilizava o código em VM; foi corrigido atribuindo filename ao script, sem usar o relatório vazio de 100% como evidência.

- [Preservação e configuração](<../tests/swarm-plan.test.cjs>): removendo só o loader e normalizando CRLF, SHA-256 original confirmado: `7e367b65efbbdc15bd3bf8c01a7f913d8eb388f1f7cee88d0f2f7701398951a0`.
- [Runtime](<../tests/swarm-runtime.test.cjs>): opt-in, teardown, Escape, start/stop repetidos, movimento reduzido, touch, aba oculta, resize/scroll, desenho de perímetro, foco recente e Canvas indisponível.
- Os mocks não substituem browser: não comprovam hit-testing, desenho final ou semântica real sozinhos.

## Browser real e inspeção visual

Ego Lite, arquivos locais via file://, sem servidor substituto. Emulação de movimento explícita para os testes (o ambiente tinha redução de movimento ativa, e o efeito corretamente recusou iniciar). Nenhum ajuste nas preferências do sistema do usuário.

- **1440x900 e 390x844:** screenshots de baseline e animação ativa. Retângulos de título, retrato e quatro projetos idênticos entre os modos; sem largura extra provocada pelo efeito. Escape encerrou em ambos. [Medições](<evidence/browser-results.json>).
- [Desktop ativo](<evidence/active-1440.png>) e [mobile estreito com ponteiro fino emulado](<evidence/active-390.png>): visual original preservado com cursores discretos e botão de saída. Teste mobile é de layout, não ativação em dispositivo touch; touch permanece desativado por política.
- Menu móvel abriu enquanto o efeito estava ativo; Escape fechou menu e animação. Fluxo observado no início de uma rodada que depois parou ao tentar preencher campo fora do viewport.
- Formulário pôde ser editado com efeito ativo; e-mail inválido manteve validação nativa; nenhum submit, envio de mensagem ou navegação ao WhatsApp foi feito.
- Botão de saída focado e acionado com Enter encerrou sessão; movimento reduzido impediu início e mudança em runtime encerrou sessão. [Resultados de interação](<evidence/interaction-results.json>).
- Saída com foco foi revisada independentemente: corrigida para acompanhar o último controle externo, não só o foco do início.

## Falhas de validação investigadas

1. Hash inicial falhou porque remoção do loader usava LF e o HTML estava em CRLF. Corrigido o padrão para aceitar ambos; conteúdo original permaneceu verificável.
2. Primeiro teste browser aguardou ativação enquanto reduced-motion estava ligado. Confirmado o motivo via matchMedia e emulada preferência de movimento somente na sessão de teste.
3. Viewport emulado volta ao tamanho padrão entre execuções Ego. Reaplicada emulação na mesma rodada de interação, sem usar seletor oculto no desktop.
4. Preenchimento do formulário parou fora do viewport após rolar ao início da seção. Nova rodada posicionou o input e aguardou a revelação antes de preencher.

## Limites e decisões

- BFCache: navegar para fora encerra a animação. Voltar pelo histórico não a reinicia automaticamente; recarregar/API explícita reinicia. Isso evita retomar movimento inesperado e está documentado.
- Sem benchmark de CPU/Core Web Vitals, teste cross-browser, zoom 400% ou auditoria WCAG completa. Não se declara conformidade integral da página.
- Quadros com erro de desenho e setup possuem teardown, mas branches de exceção não foram forçados nos testes. Falta de contexto 2D foi testada.
- Não houve publicação/deploy; a URL pública só exibirá o efeito depois de publicar o HTML e a pasta assets.
- A configuração JSON é descritiva, não um mecanismo runtime de feature flags.

## Autoavaliação

| Eixo | Nota | Evidência / melhoria |
| --- | --- | --- |
| Precisão | 4/5 | Implementação própria e verificações reais; sem promessa de fidelidade ao motor original. Falta teste cross-browser. |
| Completude | 4/5 | Efeito, saída, acessibilidade básica, testes e documentação entregues; benchmark e auditoria completa não executados. |
| Clareza | 4/5 | Opt-in e limites documentados; plano histórico sinalizado para não confundir com estado atual. |
| Ação prática | 4/5 | Funciona localmente sem instalação; publicação depende do fluxo do usuário. |
| Concisão | 4/5 | Runtime pequeno sem libs; evidências de QA detalhadas ficam separadas das instruções de uso. |

Média 4,0/5. Próximas melhorias de maior impacto: benchmark em dispositivo de menor desempenho; teste cross-browser; testes de exceção do canvas. A entrega é um efeito decorativo independente, não reprodução da extensão.
