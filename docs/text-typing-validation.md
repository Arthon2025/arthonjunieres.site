# Digitação nos textos principais

Atualização: incluído também `.journey-intro > p` — “Uma trajetória que cruza engenharia, logística, processos e comunicação visual.” Total atual: nove elementos. As capturas e a rodada dos oito elementos abaixo antecedem esta inclusão; o seletor adicional está coberto pelo teste atualizado.

## Contrato e implementação

Portfólio preservado, sem alterar textos, tags, cores ou quebras de linha. Alvos: nome e chamada inicial; título de projetos; título Sobre; título de competências; título de experiência; título e parágrafo de contato (oito elementos nos seis grupos pedidos).

[Motor próprio](<../assets/js/text-typing.js>) usa Range + CSS Custom Highlight API para revelar caracteres progressivamente, sem substituir textContent nem fazer clones semânticos. Texto original continua no DOM/acessibilidade; altura e largura são reservadas naturalmente. Caixa de contorno e caret são decorativos em Shadow DOM sem receber input. Cores originais reaparecem à medida que a digitação avança.

Inicia ao entrar no viewport, dura entre 1 e 3,6 segundos após 350ms para acompanhar a revelação existente. Repete ao sair e reentrar na seção, sem reiniciar a cada pequeno scroll durante a escrita. Ao sair, interromper ou apertar Escape, todo o texto volta a ser visível. Aba oculta pausa o relógio. Sem APIs necessárias ou com `?swarm=0`, texto normal sem efeito. Política atual de movimento automático do projeto mantida; não se declara conformidade WCAG integral.

## TDD

[Suite específica](<../tests/text-typing.test.cjs>): 5 testes RED por implementação ainda ausente; GREEN depois do motor. Suite final completa: **21/21 aprovados**, sem skips.

Comando executado: `node --test --experimental-test-coverage tests/*.test.cjs`.

Motor de digitação: **94,56% linhas, 86,96% branches, 94,44% funções**. Total dos motores: 95,45% linhas. Falhas de execução/branches de exceção e pausa de aba não foram forçadas nessa suite específica.

Teste de integridade original atualizado para descartar somente o novo loader antes de recompor o HTML original; SHA-256 continua confirmado.

## Ego Browser

[Rodada 16](<../tests/browser/round-16.mjs>): digitação real no título e chamada, screenshot [1440x900](<evidence/typing-desktop.png>) inspecionado; mostra nome parcialmente escrito, caixa e texto de chamada parcial.

[Rodada 17](<../tests/browser/round-17.mjs>): oito seletores entraram em estado typing e depois complete; altura e textContent idênticos durante/depois, incluindo os acentos. [Resultados completos](<evidence/typing-results.json>).

[Rodada 18](<../tests/browser/round-18.mjs>): screenshot [390x844](<evidence/typing-mobile.png>) no começo da escrita; sem overflow horizontal. Escape retornou highlights a zero e manteve `Arthon<br><span>Junieres.</span>` exatamente igual. TaskSpace de teste encerrado.

Sem benchmark de CPU nem teste cross-browser. Navegadores sem CSS Custom Highlight API conservam o texto visível, sem animação.

## Autoavaliação

Precisão 4/5: estados e layout verificados no browser, sem benchmark. Completude 4/5: oito elementos dos seis grupos cobertos, fallback sem animação em browsers antigos. Clareza 4/5: instruções e evidências explícitas, tecnologia pode exigir browser moderno. Ação prática 5/5: funciona na URL local normal sem instalação. Concisão 4/5: implementação independente pequena, relatório separado. Média 4,2/5. Melhorias futuras: validação cross-browser e medição de CPU.
