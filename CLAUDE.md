# Contexto do projeto — ADTC Jardim União

Você está trabalhando no **Sistema de Gestão Eclesiástica da ADTC Jardim União**, uma aplicação web para apoiar a Secretaria da igreja.

## Objetivo
Construir um sistema confiável, seguro, simples de operar e com interface moderna para administrar pessoas/membros, famílias, visitantes, departamentos, eventos, escalas, frequência, atas, ofícios, demandas, documentos e relatórios. Financeiro e patrimônio fazem parte do planejamento, mas o financeiro só deve ser ativado após autorização expressa da liderança.

## Stack definida
- Next.js App Router
- React + TypeScript em modo strict
- Tailwind CSS
- Supabase (Auth, PostgreSQL, RLS e Storage)
- GitHub
- Vercel como hospedagem futura

## Regra de desenvolvimento
**Desenvolver e validar localmente primeiro. Não publicar na Vercel nem conectar produção sem autorização explícita.** Trabalhar com dados fictícios. Não importar dados reais da igreja nesta fase.

## Arquitetura desejada
Organizar por módulos em `src/modules/<modulo>`, com componentes, actions, services, repositories, schemas Zod, types e testes. Camada de interface chama Server Actions; actions validam entrada, verificam permissão e chamam services; services usam repositories. Evitar que módulos importem diretamente os repositories uns dos outros.

## Segurança e LGPD
- RLS em todas as tabelas institucionais, sempre com `church_id`.
- Não confiar em autorização apenas na interface.
- Sem cadastro público; autenticação por convite.
- Nunca expor `service_role` no browser ou em variável `NEXT_PUBLIC_`.
- Auditoria de operações relevantes.
- Preferir arquivamento/soft delete; financeiro não deve ser apagado, apenas cancelado com histórico.
- Não coletar CPF no cadastro básico nesta versão.
- Dados religiosos podem ser sensíveis pela LGPD: minimizar coleta, limitar acesso e documentar finalidade/base legal com liderança e assessoria jurídica.
- Não implementar anotações pastorais, aconselhamento ou disciplina na primeira versão.

## UX/UI
Interface premium, clara e responsiva, inspirada em produtos SaaS como Linear, Notion e Stripe, sem copiar. Paleta navy e neutros frios, hierarquia tipográfica forte, estados vazios/loading/erro/sucesso, confirmação de ações destrutivas, acessibilidade AA e boa experiência mobile.

## Escopo por fases
1. Fundação, Supabase local, autenticação, perfis, papéis, permissões, RLS e auditoria.
2. Pessoas, famílias e departamentos.
3. Secretaria: atas, ofícios, modelos, documentos e demandas.
4. Visitantes, agenda, escalas e frequência.
5. Dashboard, pesquisa global e relatórios/exportações.
6. Financeiro, somente com autorização da liderança.
7. Patrimônio.
8. Auditoria, backup/restore, acessibilidade e preparação para hospedagem.

## Estado atual
Leia `docs/ACOMPANHAMENTO.md` para o estado mais recente. A branch inicial é `feat/fundacao-next-supabase`. O repositório estava praticamente vazio antes desta fundação. A aplicação ainda não foi instalada nem testada localmente.

## Instruções para cada sessão
1. Leia este arquivo e `docs/ACOMPANHAMENTO.md`.
2. Inspecione o código antes de alterar.
3. Preserve decisões já registradas; não refaça arquitetura sem justificar.
4. Implemente em etapas pequenas e testáveis.
5. Execute lint, typecheck, testes e build quando aplicável; relate exatamente o resultado.
6. Atualize `docs/ACOMPANHAMENTO.md` e este contexto se decisões estruturais mudarem.
7. Nunca invente resultados de testes, credenciais, dados, ou configurações.
8. Antes de operações destrutivas, deploy ou conexão com produção, peça autorização.

## Primeira tarefa ao retomar
Revise a fundação e prepare os passos para rodar localmente. Em seguida, configurar Supabase CLI local e criar migrations versionadas para churches, profiles, roles, permissions, role_permissions, user_roles e audit_log, com políticas RLS e testes. Não criar telas de cadastro com dados reais ainda.
