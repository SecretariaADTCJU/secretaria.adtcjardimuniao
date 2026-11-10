# Acompanhamento do projeto

## Estado atual
- Etapa 0 (diagnóstico e planejamento): concluída.
- Etapa 1 (fundação): iniciada nesta branch.
- Aplicação ainda não validada localmente.
- Nenhum ambiente Supabase ou Vercel foi conectado.
- Não inserir dados reais de membros.

## Decisões técnicas
- Next.js App Router + React + TypeScript strict.
- Tailwind CSS.
- Supabase com `@supabase/ssr`.
- GitHub como controle de versão.
- Vercel como destino futuro, somente após aprovação.
- Desenvolvimento e testes locais antes de qualquer publicação.

## Escopo prioritário
1. Fundação, autenticação, perfis, papéis e permissões.
2. Pessoas, famílias e departamentos.
3. Atas, ofícios, documentos e demandas.
4. Visitantes, agenda, escalas e frequência.
5. Relatórios e exportações.
6. Financeiro somente após autorização da liderança.
7. Patrimônio.

## Regras de segurança
- Não armazenar segredos no repositório.
- Nunca usar service_role no navegador.
- Não habilitar cadastro público.
- Aplicar RLS e isolamento por igreja.
- Usar dados fictícios durante desenvolvimento.
- Não coletar CPF no cadastro básico nesta primeira versão.
- Não implementar aconselhamento, disciplina ou notas pastorais.

## Próximas tarefas
- [ ] Instalar dependências em máquina local.
- [ ] Executar lint, typecheck e build.
- [ ] Configurar Supabase CLI e projeto local.
- [ ] Criar migrations com church_id e políticas RLS.
- [ ] Implementar autenticação e recuperação de senha.
- [ ] Criar testes de isolamento entre igrejas e de escalonamento de privilégios.
- [ ] Validar UX/UI com o usuário antes de ampliar módulos.

## Continuidade com Claude
Antes de continuar, leia `CLAUDE.md` e este arquivo. Atualize este documento ao concluir cada etapa, registrando arquivos alterados, comandos executados, resultados dos testes, decisões e pendências. Não declarar testes como aprovados sem executá-los.
