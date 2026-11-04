# Retângulos repetidos ao rolar — validação

## Alteração

Removido o botão Encerrar da camada ativa. Canvas e host são decorativos, sem receber cliques/foco. Animação continua enquanto a página está visível; Escape e movimento reduzido permanecem como controles de acessibilidade.

A marcação única por elemento foi substituída por gerações de scroll em WeakMap. Cada scroll torna componentes visíveis elegíveis novamente, em ambas as direções. Tarefas ativas não são reiniciadas nem duplicadas; terminam e podem ganhar nova passagem se houve scroll desde o início. Máximo de cinco tarefas simultâneas, sem fila ilimitada por eventos da roda.

## TDD

Antes da implementação: 14 testes de runtime, 11 aprovados e 3 falhas esperadas (botão presente; falta de replay após desenho concluído; falta de repetição durante scroll contínuo).

Depois: suite completa **17/17 aprovados**. Teste com spy de stroke distingue cinco ponteiros ociosos de cinco ponteiros + retângulo. Cobre replay em ambas as direções e eventos contínuos sem reiniciar o desenho a cada frame.

Comando: `node --test tests/*.test.cjs`.

## Ego Browser

[Rodada executada](<../tests/browser/round-15.mjs>) usou wheel real, página local e contador instrumentado de strokes retangulares. Movimento permitido foi emulado somente para execução automatizada.

[Resultados](<evidence/scroll-replay.json>): descida `y:628, rects:49, active:true`; subida `y:233, rects:34, active:true`; camada com `buttons:[]`. [Screenshot inspecionado](<evidence/scroll-replay.png>) confirma traços, cursores e ausência do botão.

Não há benchmark de CPU, auditoria WCAG integral ou teste cross-browser nesta alteração. O efeito não bloqueia navegação nem redesenha o layout real.

Autoavaliação: precisão 4/5 (testes com contagem e browser, sem benchmark); completude 4/5 (escopo solicitado coberto, Escape mantido e comunicado); clareza 4/5 (replay documentado, histórico permanece nos relatórios anteriores); ação prática 5/5 (servidor local reutilizado); concisão 4/5 (mudança isolada no adaptador). Média 4,2/5.
