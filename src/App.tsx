import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Award,
  ShieldCheck,
  Users,
  Target,
  Mail,
  Map,
  Menu,
  X,
} from "lucide-react";

// --- TIPAGENS (TypeScript) ---
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

interface TimeBlockProps {
  value: number | string;
  label: string;
}

// --- COMPONENTES AUXILIARES ---

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-[#1e2d5a] mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div
      style={{ background: "linear-gradient(90deg, #b8973a, #1a5c52)" }}
    ></div>
  </div>
);

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-29T08:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBlock: React.FC<TimeBlockProps> = ({ value, label }) => (
    <div className="flex flex-col items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-[#b8973a]">
      <span className="text-2xl sm:text-4xl font-bold text-white mb-1">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs sm:text-sm text-[#b8973a] uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-3 sm:gap-6 mt-10">
      <TimeBlock value={timeLeft.days} label="Dias" />
      <TimeBlock value={timeLeft.hours} label="Horas" />
      <TimeBlock value={timeLeft.minutes} label="Min" />
      <TimeBlock value={timeLeft.seconds} label="Seg" />
    </div>
  );
};

// --- DADOS MOCKADOS ---

const PALESTRANTES = [
  {
    id: 1,
    name: "Dra. Daniela Silva Magalhães",
    title: "Fisioterapeuta",
    inst: "UNIFASAR / UNIFENAS-BH",
    theme: "Fisioterapia Ortopédica e Esportiva",
    bio: "Especialista em Fisioterapia Traumato-ortopédica, docente no ensino superior e coordenadora de ligas acadêmicas.",
    formacao: [
      "Graduação em Fisioterapia – UFMG",
      "Especialização em Avanços Clínicos em Fisioterapia com ênfase em Ortopedia – UFMG",
      "Mestrado em Ciências da Reabilitação – UFMG",
      "Especialista em Fisioterapia Traumato-ortopédica – ABRAFITO / COFFITO",
    ],
    atuacao: [
      "Docente no ensino superior nos cursos de Fisioterapia e Medicina",
      "Coordenadora da Liga Acadêmica de Fisioterapia em Esportes e Ortopedia (LAFEO/UNIFASAR)",
      "Coordenadora da extensão Educa+Saúde – UNIFENAS/BH",
      "Membro da Diretoria da Associação Mineira de Fisioterapeutas (AMF)",
      "Fisioterapeuta do corpo clínico do JB Centro de Treinamento e Fisioterapia Especializada",
    ],
  },
  {
    id: 2,
    name: "Dr. Vinícius Cunha Oliveira",
    title: "Fisioterapeuta | Educador Físico",
    inst: "UFVJM",
    theme: "Condições Musculoesqueléticas",
    bio: "Professor Adjunto e Editor Chefe do Brazilian Journal of Physical Therapy, com doutorado pela University of Sydney.",
    formacao: [
      "Bacharelado em Fisioterapia – PUC-MG",
      "Bacharelado em Educação Física – UFMG",
      "Especialização em Fisioterapia Esportiva com ênfase em Terapia Manual – PUC-MG",
      "Mestrado em Ciências da Reabilitação – UFMG",
      "Doutorado em Fisioterapia – University of Sydney, Austrália",
    ],
    atuacao: [
      "Professor Adjunto do Departamento de Fisioterapia – UFVJM",
      "Coordenador do Registro Brasileiro de Gêmeos",
      "Docente dos Programas de Pós-Graduação em Reabilitação e Desempenho Funcional (PPGReab) e em Ciências da Saúde (PPGCS) – UFVJM",
      "Editor Chefe do Brazilian Journal of Physical Therapy (ISSN 1413-3555)",
      "Membro do Corpo Editorial do Physical Therapy Journal (ISSN 1538-6724)",
      "Líder do Health Sciences Research Group (HSRG)",
    ],
  },
  {
    id: 3,
    name: "Dr. Leonardo Drumond Barsante",
    title: "Fisioterapeuta",
    inst: "FCMMG",
    theme: "Fisioterapia Esportiva e Traumato-ortopédica",
    bio: "Especialista em Fisioterapia Esportiva e Traumato-ortopédica, docente e membro da diretoria da ABRAFITO-MG.",
    formacao: [
      "Graduação em Fisioterapia – UFMG",
      "Mestrado em Ciências da Reabilitação – UFMG",
      "Especialista em Fisioterapia Esportiva – SONAFE / COFFITO",
      "Especialista em Fisioterapia Traumato-ortopédica – ABRAFITO / COFFITO",
    ],
    atuacao: [
      "Membro da Sociedade Brasileira para o Estudo da Dor (SBED)",
      "Membro da Diretoria da ABRAFITO-MG – biênios 2024-2025 e 2026-2027",
      "Membro da Câmara Técnica da Dor do CREFITO",
      "Docente de Graduação – Faculdade Ciências Médicas de Minas Gerais (FCMMG)",
      "Docente de Pós-graduação em Fisioterapia Ortopédica e Esportiva – Ciências Médicas, Inspirar (BH e Ipatinga), UNIFENAS Divinópolis e Centro Universitário de Caratinga",
    ],
  },
  {
    id: 4,
    name: "Dr. Robert Resende",
    title: "Fisioterapeuta",
    inst: "UFMG",
    theme: "Dor Crônica e Hipnose Clínica",
    bio: "Mestrando em Ciências da Reabilitação pela UFMG, pesquisador em intervenções não farmacológicas para dor lombar crônica.",
    formacao: [
      "Graduação em Fisioterapia – UFMG",
      "Pós-graduação em Hipnose Clínica",
      "Mestrando em Ciências da Reabilitação – UFMG (em andamento)",
    ],
    atuacao: [
      "Pesquisador clínico em manejo da dor crônica com foco em dor lombar e intervenções não farmacológicas",
      "Pesquisador principal de ensaio clínico randomizado (RCT) sobre os efeitos da hipnose na dor lombar crônica",
      "Participação em projetos científicos em neurociência da dor e estratégias terapêuticas para dor persistente",
      "Membro da Sociedade Brasileira para o Estudo da Dor (SBED)",
      "Membro da International Association for the Study of Pain (IASP)",
    ],
  },
  {
    id: 5,
    name: "Profa. Dra. Andressa da Silva de Mello",
    title: "Educadora Física",
    inst: "EEFFTO / UFMG",
    theme: "Psicobiologia do Exercício e Paradesporto",
    bio: "Bolsista de Produtividade em Pesquisa do CNPq, coordenadora do Centro de Referência Paralímpico Brasileiro de BH.",
    formacao: [
      "Mestrado em Ciências – UNIFESP",
      "Doutorado em Fisioterapia – UFSCar",
      "Pós-Doutorado em Ciências do Esporte – UFMG",
    ],
    atuacao: [
      "Professora do Departamento de Esportes da EEFFTO / UFMG",
      "Bolsista de Produtividade em Pesquisa – CNPq",
      "Líder do grupo de pesquisa Centro de Estudos em Psicobiologia e Exercício (CEPE) – EEFFTO/UFMG",
      "Coordenadora do Centro de Referência Paralímpico Brasileiro de Belo Horizonte – CTE/EEFFTO/UFMG",
      "Coordenadora do Núcleo Gestor do Programa Paradesporto Brasil em Rede (2025-2027) – Secretaria Nacional do Paradesporto / Ministério do Esporte",
    ],
  },
  {
    id: 6,
    name: "Profa. Dra. Claudia Venturini",
    title: "Fisioterapeuta",
    inst: "PUC Minas",
    theme: "Inflamação, Dor e Reabilitação",
    bio: "Doutora em Ciências da Reabilitação pela UFMG, professora e Pró-Reitora de Extensão da PUC Minas.",
    formacao: [
      "Graduação em Fisioterapia – UFMG (1996)",
      "Especialização em Fisioterapia Ortopédica e Esportiva – UFMG (2000)",
      "Mestrado em Ciências da Reabilitação com ênfase em Inflamação e Dor – UFMG (2005)",
      "Doutorado em Ciências da Reabilitação – UFMG (2021)",
    ],
    atuacao: [
      "Professora do Departamento de Fisioterapia – PUC Minas (2002–atual)",
      "Professora convidada da Especialização em Fisioterapia em Ortopedia – UFMG",
      "Pró-Reitora de Extensão – PUC Minas (2025–atual)",
    ],
  },
  {
    id: 7,
    name: "Dr. Daniel Barreto Rabelo",
    title: "Fisioterapeuta",
    inst: "Daniel Barreto Reabilitação Esportiva",
    theme: "Quiropraxia, RPG e Terapia Manual",
    bio: "Especialista em Quiropraxia e Fisioterapia Esportiva pelo COFFITO, com foco em ortopedia, traumatologia e reeducação postural.",
    formacao: [
      "Graduação em Fisioterapia – UFMG (2006)",
      "Especialização em RPG / Reestruturação Postural Sensoperceptiva – Faculdade de Ciências Médicas de MG (2007)",
      "Diplomação em Quiropraxia – Associação Nacional de Fisioterapia em Quiropraxia",
      "Especialista em Quiropraxia – COFFITO",
      "Especialista em Fisioterapia Esportiva – COFFITO",
      "Mestrando em Ciências da Reabilitação – UFMG (em andamento)",
      "Doutorando em Ciências da Reabilitação – UFMG (em andamento)",
    ],
    atuacao: [
      "Proprietário e Fisioterapeuta da Daniel Barreto Reabilitação Esportiva",
      "Atuação clínica em Ortopedia, Traumatologia e Esportes",
      "Experiência em Reeducação Postural Global (RPG), Pilates, Terapia Manual e Quiropraxia",
    ],
  },
  {
    id: 8,
    name: "Dr. Rafael Zambelli Pinto",
    title: "Fisioterapeuta | Pesquisador",
    inst: "UTS / UFMG",
    theme: "Condições Musculoesqueléticas e Prática Baseada em Evidências",
    bio: "Associate Professor na University of Technology Sydney, com mais de 160 artigos científicos publicados e liderança editorial internacional.",
    formacao: [
      "Graduação em Fisioterapia",
      "Associate Professor – University of Technology Sydney (UTS), Austrália",
    ],
    atuacao: [
      "Associate Professor – University of Technology Sydney (UTS), Austrália",
      "Docente do Programa de Pós-Graduação em Ciências da Reabilitação – UFMG",
      "Autor de mais de 160 artigos científicos (ensaios clínicos, revisões sistemáticas e estudos de meta-pesquisa)",
      "Editor-in-Chief do Brazilian Journal of Physical Therapy (2019–2024)",
      "Chair da International Society of Physiotherapy Journal Editors (ISPJE)",
      "Pesquisador em manejo de condições musculoesqueléticas crônicas e estratégias educacionais para prática baseada em evidências",
    ],
  },
];

interface Palestrante {
  id: number;
  name: string;
  title: string;
  inst: string;
  theme: string;
  bio: string;
  formacao: string[];
  atuacao: string[];
}

const PalestranteCard: React.FC<{ palestrante: Palestrante }> = ({
  palestrante,
}) => {
  const [open, setOpen] = useState(false);

  const initials = palestrante.name
    .replace(/^(Dr\.|Dra\.|Prof\.|Profa\.)\s*/i, "")
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 group hover:border-[#c5d8d4] transition-colors flex flex-col">
      {/* Cabeçalho */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-20 h-20 bg-[#e8f2ef] rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm flex items-center justify-center text-[#1a5c52] font-bold text-xl">
          {initials}
        </div>
        <div>
          <h4 className="text-xl font-bold text-[#1e2d5a] group-hover:text-[#1a5c52] transition-colors leading-tight">
            {palestrante.name}
          </h4>
          <p className="text-sm font-medium text-[#1a5c52] mt-0.5">
            {palestrante.title}
          </p>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
            {palestrante.inst}
          </p>
        </div>
      </div>

      {/* Tema */}
      <span className="inline-block px-3 py-1 bg-[#e8f2ef] text-[#0d2e28] text-xs font-semibold rounded-full mb-3 self-start">
        Tema: {palestrante.theme}
      </span>

      {/* Bio resumida */}
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        {palestrante.bio}
      </p>

      {/* Botão expandir */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-auto flex items-center justify-between w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-white hover:border-[#c5d8d4] hover:text-[#1a5c52] transition-all"
      >
        <span>{open ? "Recolher currículo" : "Ver currículo completo"}</span>
        <ChevronRight
          size={16}
          className={`transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Currículo expandido */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-200 pt-4 space-y-4">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Formação Acadêmica
            </p>
            <ul className="space-y-1.5">
              {palestrante.formacao.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span className="w-1.5 h-1.5 bg-[#1a5c52] rounded-full mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Atuação e Cargos
            </p>
            <ul className="space-y-1.5">
              {palestrante.atuacao.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span className="w-1.5 h-1.5 bg-[#1a5c52] rounded-full mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- APLICAÇÃO PRINCIPAL ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-blue-200 selection:text-blue-900">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <img
                src="/logo.png"
                alt="Simpodor"
                className="h-12 w-12 rounded-full object-cover mr-3"
              />
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              {["Sobre", "Palestrantes", "Local"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                    )
                  }
                  className="text-sm font-medium text-slate-600 hover:text-[#1a5c52] transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("inscricoes")}
                className="bg-[#1a5c52] hover:bg-blue-800 text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors shadow-sm"
              >
                Garantir Vaga
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-[#1e2d5a]"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {["Sobre", "Palestrantes", "Local"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
                >
                  {item === "Programacao" ? "Programação" : item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("inscricoes")}
                className="w-full mt-4 bg-[#1a5c52] text-white px-3 py-3 rounded-md font-medium text-center"
              >
                Garantir Vaga
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f3730]"
        style={{ background: "linear-gradient(135deg, #0f3730, #1e2d5a)" }}
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.4)_0%,transparent_100%)]"></div>
          {/* Abstract background pattern for scientific feel */}
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-x-3 gap-y-2 bg-[#0f3730]/50 border border-[#b8973a]/30 text-[#b8973a] px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              29 de Maio de 2026
            </span>
            <span className="w-1 h-1 bg-[#b8973a] rounded-full hidden sm:block"></span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              16:00h
            </span>
            <span className="w-1 h-1 bg-[#b8973a] rounded-full hidden sm:block"></span>
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              Belo Horizonte, MG
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Simpósio Mineiro de Pesquisa e Prática em{" "}
            <span className="text-[#b8973a]">Dor Crônica</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-slate-300 font-light mb-10">
            Conectando Evidência e Prática no Manejo da Dor Crônica.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => scrollToSection("inscricoes")}
              className="w-full sm:w-auto px-8 py-4 bg-[#ad8513] hover:bg-[#ad8513] text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-[#0f3730]/50 flex items-center justify-center gap-2"
            >
              Realizar Inscrição <ChevronRight size={20} />
            </button>
          </div>

          <Countdown />
        </div>
      </section>

      {/* 2. SOBRE O EVENTO */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Sobre o Simpósio"
            subtitle="Uma oportunidade única de atualização científica e conexão com os maiores especialistas em dor do estado."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#e8f2ef] text-[#1a5c52] rounded-xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1e2d5a]">
                Propósito
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Traduzir as evidências científicas mais recentes para a prática
                clínica diária, promovendo um manejo da dor crônica mais
                assertivo, humanizado e resolutivo.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#e8f2ef] text-[#1a5c52] rounded-xl flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1e2d5a]">
                Público Alvo
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Médicos, Fisioterapeutas, Psicólogos, Educadores físicos,
                Terapeutas Ocupacionais e demais profissionais e estudantes da
                área da saúde que trabalham com pacientes no manejo da dor.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#e8f2ef] text-[#1a5c52] rounded-xl flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1e2d5a]">
                Estrutura Científica
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Programação concentrada em 1 dia presencial, com{" "}
                <strong className="text-[#1e2d5a]">
                  1 Abertura Institucional e 7 Palestras Magistrais
                </strong>{" "}
                elaboradas para gerar alto impacto na sua conduta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PALESTRANTES */}
      <section id="palestrantes" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Palestrantes"
            subtitle="Profissionais de referência nacional e pesquisadores ativos na área de tratamento da dor."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-start">
            {PALESTRANTES.map((palestrante) => (
              <PalestranteCard key={palestrante.id} palestrante={palestrante} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSCRIÇÕES */}
      <section
        id="inscricoes"
        className="py-24 bg-[#0f3730] text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f3730, #1e2d5a)" }}
      >
        {/* Decorativo */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-[#1a5c52]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Garanta sua Participação
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              O evento é <strong className="text-white">100% gratuito</strong>,
              mas as vagas são estritamente limitadas pela capacidade do local.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 relative flex flex-col items-center text-center shadow-2xl">
              <div className="absolute top-0 right-0 bg-[#1a5c52] text-xs font-bold px-3 py-1.5 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">
                Vagas Abertas
              </div>

              <div className="w-14 h-14 bg-[#0f3730]/50 text-[#b8973a] rounded-full flex items-center justify-center mb-4 border border-[#1a5c52]/30">
                <Award size={28} />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Inscrição Gratuita
              </h3>
              <p className="text-slate-400 text-sm md:text-base mb-6 max-w-md">
                Atualize sua prática clínica sem nenhum custo e faça networking
                com os maiores especialistas de Minas Gerais.
              </p>

              <ul className="space-y-3 mb-8 text-left w-full max-w-sm mx-auto">
                {[
                  "Acesso a todas as 7 palestras e discussões",
                  "Certificado de participação emitido pela UFMG",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start md:items-center gap-2 md:gap-3 text-slate-200"
                  >
                    <ShieldCheck
                      size={20}
                      className="text-[#b8973a] flex-shrink-0 mt-0.5 md:mt-0"
                    />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLScqo8QvSx0OgkAA4pC9NuqnjmT5wvBijDb8H6tCV0EvE6WRkQ/viewform",
                    "_blank"
                  )
                }
                className="w-full md:w-auto px-8 py-3.5 bg-[#ad8513] hover:bg-[#ad8513] text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-[#0f3730]/50 flex items-center justify-center gap-2"
              >
                Garantir Vaga Gratuitamente <ChevronRight size={18} />
              </button>

              <p className="mt-5 text-xs text-slate-400 leading-relaxed">
                * A confirmação da inscrição e as instruções de acesso serão
                enviadas automaticamente para o e-mail cadastrado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCAL */}
      <section id="local" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Localização" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#1e2d5a] mb-2">
                  EEFFTO - UFMG
                </h3>
                <p className="text-slate-600">
                  Escola de Educação Física, Fisioterapia e Terapia Ocupacional.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0f4f2] text-[#1a5c52] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e2d5a]">Endereço</h4>
                    <p className="text-slate-600 mt-1">
                      Av. Presidente Carlos Luz, 6627
                      <br />
                      Pampulha, Belo Horizonte - MG
                      <br />
                      CEP: 31310-250
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0f4f2] text-[#1a5c52] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Map size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e2d5a]">
                      Acesso e Estacionamento
                    </h4>
                    <p className="text-slate-600 mt-1">
                      Estacionamento no campus da UFMG (entrada próxima ao
                      Carrefour). Fácil acesso via transporte público.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 bg-slate-200 rounded-2xl overflow-hidden border border-slate-300 relative">
              {/* Google Maps Embed Mock */}
              <iframe
                title="Mapa do Local"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.6669911953186!2d-43.96695022394602!3d-19.854084281517454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6906a5b51dd57%3A0xcda7eecfa1f8d4!2sEscola%20de%20Educa%C3%A7%C3%A3o%20F%C3%A7sica%2C%20Fisioterapia%20e%20Terapia%20Ocupacional%20(EEFFTO)%20-%20UFMG!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER & CONTATO */}
      <footer
        id="contato"
        className="bg-[#0d2e28] pt-16 pb-8 border-t border-slate-800 text-slate-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-slate-800 pb-12">
            {/* Info */}
            <div>
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="Logo" className="h-10 mr-3" />
                <div className="flex flex-col">
                  <span className="font-bold text-white leading-tight">
                    Simpósio Mineiro
                  </span>
                  <span className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                    Dor Crônica 2026
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Conectando ciência de alto nível à prática clínica diária. Um
                evento feito por e para profissionais dedicados ao tratamento
                humanizado da dor.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
                Links Úteis
              </h4>
              <ul className="space-y-3">
                {[
                  "Sobre o Evento",
                  "Programação",
                  "Palestrantes",
                  "Inscrições",
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        scrollToSection(
                          item
                            .split(" ")[0]
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                        )
                      }
                      className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                    >
                      <ChevronRight size={14} className="text-[#b8973a]" />{" "}
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
                Central de Atendimento
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail
                    size={20}
                    className="text-[#b8973a] flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="block text-sm font-medium text-white">
                      E-mail Oficial
                    </span>
                    <a
                      href="mailto:contato@simposiodor2026.com.br"
                      className="text-sm text-slate-400 hover:text-[#b8973a] transition-colors"
                    >
                      contato@simposiodor2026.com.br
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              &copy; 2026 Simpósio Mineiro de Dor Crônica. Todos os direitos
              reservados.
            </p>
            <p>Desenvolvido para profissionais da saúde.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
