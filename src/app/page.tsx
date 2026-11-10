const modules = [
  { title: "Pessoas e membros", description: "Cadastro, famílias e histórico institucional.", status: "Planejado" },
  { title: "Secretaria", description: "Atas, ofícios, documentos e demandas.", status: "Planejado" },
  { title: "Agenda e atividades", description: "Eventos, escalas e frequência.", status: "Planejado" },
  { title: "Departamentos", description: "Departamentos, equipes e responsáveis.", status: "Planejado" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">ADTC Jardim União</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Gestão Eclesiástica</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">Uma plataforma organizada para apoiar a rotina da Secretaria da igreja.</p>
          </div>
          <span className="w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800">Ambiente de desenvolvimento</span>
        </header>

        <section className="mt-9">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Visão geral</h2>
              <p className="mt-1 text-sm text-slate-500">Estrutura inicial — os módulos serão implementados por etapas.</p>
            </div>
            <span className="text-xs text-slate-400">Versão 0.1.0</span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {modules.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">{item.status}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold text-slate-900">Próxima etapa</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Configurar o Supabase local, criar as migrations iniciais e validar autenticação, isolamento de dados e permissões antes de inserir qualquer dado real.</p>
        </section>
        <footer className="mt-10 text-xs text-slate-400">ADTC Jardim União · Projeto em construção · Não utilizar dados reais nesta versão.</footer>
      </div>
    </main>
  );
}
