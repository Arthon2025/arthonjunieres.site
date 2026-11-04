# Correção — ativação visível e estrutura estática

## Reprodução solicitada no Ego Browser

Na URL normal `http://127.0.0.1:8080/`, o navegador real retornou `api:true, active:false, reducedMotion:true`. O código antigo exigia parâmetro de URL e retornava silenciosamente com movimento reduzido. Não era erro de servidor nem ausência de download.

## Alterações

- Início automático na URL normal com movimento permitido.
- Aviso visível com botão nativo **Reproduzir animação** quando a preferência reduz movimento ou o dispositivo é touch. O clique é consentimento explícito para a demonstração; sem ele, não há movimento. Nenhuma preferência do sistema foi alterada.
- `?swarm=0` desliga efeito e aviso.
- CSS e scripts da página extraídos para arquivos próprios. Teste recompõe o HTML original inline e confirma o SHA-256 conhecido, descartando somente o loader adicional.
- Não foram importados código, desenhos ou assets dos repositórios sem licença.

## Evidência RED/GREEN

`node --test tests/swarm-runtime.test.cjs` antes da correção: **12 testes, 9 aprovados e 3 falhas**, incluindo a URL normal e o controle de reprodução ausente. Após correção: suite completa **15/15 aprovados**. O teste novo de playback verifica permissão explícita e que start sem escolha continua bloqueado.

## Browser real, sem mascarar a preferência do usuário

Na [rodada 13](<../tests/browser/round-13.mjs>), screenshot semântico mostrou a explicação e o botão com `reduced:true`. Na [rodada 14](<../tests/browser/round-14.mjs>), o botão foi clicado usando seletor de papel/nome. A animação iniciou com a preferência **ainda reduzida**, confirmando a correção sem emular permissão para esse teste. Escape encerrou.

Depois foram testados início automático (no-preference emulado só para esse caso), desktop 1440x900, layout 390x844 e opt-out. [Resultados JSON](<evidence/fix-browser-results.json>):

- `native: { active:true, reduced:true, url:'http://127.0.0.1:8080/' }` após clique explícito.
- `stopped:true` por Escape.
- `automatic.active:true` na URL normal sem query.
- `mobile: { active:true, overflow:false }` com viewport estreito e ponteiro fino.
- `disabled:true` em `?swarm=0`.

Screenshots inspecionados: [reprodução com preferência nativa](<evidence/fixed-native-motion.png>), [desktop](<evidence/fixed-desktop.png>), [layout estreito](<evidence/fixed-mobile.png>). Layout, textos, retrato e cores originais mantidos; cursores e traços visíveis.

## Limites

Efeito decorativo independente, não reconstrução completa de DOM/digitação da extensão original. Sem teste cross-browser ou benchmark de CPU. Saída encerra a sessão; recarregar reinicia conforme preferência. Nenhum deploy foi realizado.

Autoavaliação: precisão 4/5 (reprodução real, sem benchmark); completude 4/5 (ativação e organização resolvidas, sem auditoria integral); clareza 4/5 (estado atual destacado, histórico preservado); ação prática 5/5 (URL normal e botão testados); concisão 4/5 (evidências separadas). Média 4,2/5. Próxima melhoria: medir CPU e validar outro navegador.
