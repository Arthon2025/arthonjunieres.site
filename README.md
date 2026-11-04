# Portfólio — Arthon Junieres

Site estático organizado, sem dependências de instalação ou build. Requer Node.js somente para servidor e testes locais.

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

Os payloads extraídos de CSS e scripts são os originais, sem redesenho. O teste de integridade reconstitui o HTML inline original e compara seu SHA-256.

## Verificar

```powershell
node --test --experimental-test-coverage tests/*.test.cjs
```

[Instruções detalhadas](<assets/swarm/README.md>) · [Validação atual](<docs/swarm-fix-validation.md>)

Para publicar, mantenha a estrutura relativa do HTML e da pasta assets. O site público não é atualizado automaticamente pelas alterações locais.
