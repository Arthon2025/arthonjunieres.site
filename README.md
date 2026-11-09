# Portfólio — Arthon Junieres

Site estático com o Lanyard 3D do React Bits integrado na página inicial. Os arquivos compilados estão incluídos; a publicação pode continuar pelo GitHub Pages.

## Rodar localmente

```powershell
node scripts/serve-local.cjs
```

Acesse **http://127.0.0.1:8080/**. Se a porta estiver em uso, utilize o servidor já iniciado ou escolha outra com `$env:PORT=8081` antes do comando.

## Animação

Cursores independentes com traços de construção, sem código/assets dos repositórios de referência. Início automático ao carregar, inclusive com movimento reduzido ou touch, por decisão explícita do projeto. Sem aviso ou botão de reprodução; a preferência de redução de movimento não é aplicada automaticamente a esse efeito. Não é necessário mudar configuração do Windows. Sem botão de encerramento: o efeito segue contínuo e redesenha retângulos nos componentes visíveis a cada rolagem, em ambas as direções. Escape permanece como saída de acessibilidade. `?swarm=0` desabilita efeito e aviso.

Os títulos principais e suas chamadas selecionadas também recebem caixa de texto com digitação e caret, incluindo o parágrafo de trajetória. Repete ao sair e reentrar no viewport. [Validação da digitação](<docs/text-typing-validation.md>).

## Estrutura

```text
index.html                    conteúdo e metadados
assets/css/site.css           estilos originais
assets/js/motion-init.js       habilitação segura das revelações
assets/js/site.js              menu, formulário e revelações
assets/js/text-typing.js       digitação dos textos principais
assets/swarm/swarm-adapter.js  animação independente e controles isolados
scripts/serve-local.cjs        servidor de desenvolvimento em loopback
tests/                        testes Node e rodadas Ego Browser
docs/evidence/                screenshots e resultados reais
```

O teste de integridade reconstitui o HTML inline e compara seu SHA-256 com a versão revisada que inclui o Lanyard.

## Verificar

```powershell
node --test --experimental-test-coverage tests/*.test.cjs
```

[Instruções detalhadas](<assets/swarm/README.md>) · [Validação atual](<docs/swarm-fix-validation.md>)

Para publicar, mantenha a estrutura relativa do HTML e da pasta assets. O site público não é atualizado automaticamente pelas alterações locais.

## Lanyard 3D

Componente oficial JavaScript + CSS: https://reactbits.dev/components/lanyard
Registro consultado: https://reactbits.dev/r/Lanyard-JS-CSS.json

O código oficial está em `src/lanyard/Lanyard.jsx` e `Lanyard.css`.
A integração do portfólio fica em `src/lanyard/main.jsx` e `portfolio.css`.
O cordão fica preso diretamente no topo da seção inicial (anchor center), sobre o fundo transparente da página, com faixa roxa e metal prateado. A moldura e o texto OPERAR / EVOLUIR foram removidos.
Arraste o cartão para movimentá-lo; clique para virar. O componente respeita redução de movimento na entrada e na brisa. Sem WebGL, a frente do crachá fica visível como imagem.

Imagens locais em `assets/images`: `card-front.png`, `card-back.png` e `band.png`.
Os SVGs editáveis correspondentes também estão incluídos, assim como o retrato original.
Após editar o componente ou seus estilos, compile novamente:

```sh
npm ci
npm run build
```

Publique `index.html` e a pasta `assets` atualizados, mantendo os demais arquivos do site.
Não é necessário enviar `node_modules`. O ZIP não publica alterações automaticamente.

### Área de movimento ampliada

O canvas do crachá cobre toda a seção `#inicio`, desde a borda abaixo do cabeçalho até a faixa de indicadores, em toda a largura da página. O corte ocorre somente nas bordas dessa seção, inclusive após soltar o crachá. O tamanho e a posição inicial continuam referenciados à coluna original, por meio de `camera.setViewOffset`.

A opção local `renderArea="#inicio"` em `main.jsx` ativa essa extensão do componente. Fora do arraste, o canvas é transparente ao ponteiro; os eventos da página fazem a seleção pela geometria do crachá. Links, botões e campos mantêm prioridade. Durante o arraste, o ponteiro é capturado até soltar ou cancelar. O canvas permanece na seção e não é movido para uma camada fixa sobre o cabeçalho.
