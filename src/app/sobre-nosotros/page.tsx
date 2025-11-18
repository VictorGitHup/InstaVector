import Header from '@/components/header';
import Icono from '@/components/icono';
import { Users, Cpu, ShieldCheck, Target, Eye } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | InstaVector',
  description: 'Conoce la historia, misión y tecnología detrás de InstaVector. Descubre nuestro compromiso con la democratización del diseño vectorial, la seguridad y la innovación.',
  keywords: ['sobre InstaVector', 'equipo de InstaVector', 'misión de InstaVector', 'tecnología de vectorización', 'historia de InstaVector', 'compromiso con la privacidad', 'diseño vectorial accesible'],
};

const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="space-y-4 text-foreground/90 leading-relaxed text-base sm:text-lg">
    {children}
  </section>
);

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon: React.ElementType }) => (
  <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3 pt-8 pb-2">
    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" /> {children}
  </h2>
);


export default function SobreNosotrosPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  ];
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl py-8 sm:py-12">
            <header className="mb-8 sm:mb-12">
              <Breadcrumb items={breadcrumbItems} />
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight text-center mt-4">
                Sobre InstaVector: Pasión por la Precisión y la Creatividad
              </h1>
              <p className="mt-2 text-lg text-muted-foreground text-center">
                Innovación, seguridad y una comunidad creativa son los pilares que nos definen.
              </p>
            </header>
            
            <div className="flex flex-col items-center justify-center gap-4 my-8 sm:my-12 p-8 bg-muted/50 rounded-lg">
              <Icono className="h-20 w-20 sm:h-24 sm:w-24 text-primary" />
              <span className="text-3xl sm:text-4xl font-bold text-foreground">InstaVector</span>
            </div>

            <article className="space-y-12">
                <Section>
                  <SectionTitle icon={Icono}>Nuestra Historia</SectionTitle>
                  <p>InstaVector nació de una necesidad observada y sentida en el corazón de la comunidad creativa digital. Su fundador, un apasionado ingeniero informático con más de ocho años de experiencia en desarrollo web, modelos de negocio online y comunicación comercial, se encontraba frecuentemente con un obstáculo recurrente en sus proyectos y en los de sus colegas: la dificultad para obtener gráficos vectoriales de alta calidad de manera rápida, accesible y sin depender de software costoso o procesos manuales tediosos. Los diseñadores, desarrolladores y especialistas en marketing a menudo perdían un tiempo valioso tratando de convertir logotipos, iconos e ilustraciones de formatos rasterizados (como PNG o JPG) a SVG, un paso crucial para garantizar la escalabilidad y el rendimiento en la web moderna.</p>
                  <p>Motivado por este desafío, se propuso crear una solución que eliminara estas barreras. El objetivo era claro: desarrollar una herramienta online que no solo fuera técnicamente superior, sino también radicalmente simple e intuitiva. Una plataforma donde cualquier persona, sin importar su nivel de habilidad técnica, pudiera transformar una imagen en un vector perfecto con un solo clic. Así, combinando su profundo conocimiento en desarrollo de aplicaciones, algoritmos de procesamiento de imágenes y una sólida visión de producto, nació InstaVector. No como un simple conversor, sino como un proyecto dedicado a empoderar a la comunidad creativa, devolviéndoles tiempo y proporcionándoles resultados de calibre profesional de forma gratuita y segura.</p>
                </Section>

                <Section>
                  <SectionTitle icon={Target}>Nuestra Misión y Visión</SectionTitle>
                  <p>Nuestra misión es clara y ambiciosa: <strong>democratizar el acceso a herramientas de diseño vectorial de alta calidad</strong>. Creemos firmemente que la creatividad no debe estar limitada por barreras económicas o técnicas. Por ello, nos comprometemos a ofrecer una solución de vectorización potente, rápida y segura, completamente gratuita para todos. Queremos ser el recurso de referencia para estudiantes que dan sus primeros pasos en el diseño, para startups que necesitan construir su identidad de marca con recursos limitados, y para profesionales experimentados que buscan optimizar su flujo de trabajo. Aspiramos a ser un facilitador, un puente que conecta una idea visual con su manifestación digital perfecta, sin fricciones ni complicaciones, eliminando la ansiedad que a menudo acompaña a las tareas de conversión de formatos.</p>
                  <p>Nuestra visión se proyecta hacia un futuro donde InstaVector sea mucho más que un conversor. Nos vemos como un ecosistema integral para el diseño vectorial. Planeamos expandir nuestra plataforma para incluir un conjunto de herramientas que abarquen la optimización, edición y animación de SVGs, así como recursos educativos que ayuden a nuestra comunidad a dominar el poder de los gráficos vectoriales. Soñamos con construir un espacio donde la colaboración y el aprendizaje florezcan, donde los diseñadores y desarrolladores no solo encuentren soluciones, sino también inspiración, conocimiento y apoyo mutuo. Queremos seguir innovando, integrando los últimos avances en inteligencia artificial para ofrecer funcionalidades que hoy parecen futuristas, pero que mañana serán indispensables para cualquier creativo digital en un mundo cada vez más visual y dinámico.</p>
                </Section>

                <Section>
                  <SectionTitle icon={Cpu}>La Tecnología Detrás de InstaVector</SectionTitle>
                  <p>La magia de InstaVector reside en su motor de conversión, una pieza de ingeniería de software cuidadosamente diseñada para ofrecer resultados superiores. A diferencia de los métodos de trazado tradicionales que simplemente siguen los bordes de los píxeles, nuestra tecnología se basa en algoritmos avanzados de visión por computadora. Cuando subes una imagen, nuestro sistema no solo "ve" los píxeles, sino que "interpreta" las formas, las curvas y las intenciones del diseño original. Este enfoque holístico nos permite distinguir entre ruido y detalle, preservando la integridad de las formas complejas.</p>
                  <p>El proceso se desglosa en varias etapas clave: primero, un análisis de segmentación de color agrupa los píxeles en regiones coherentes. A continuación, algoritmos de detección de bordes identifican los contornos precisos de cada forma, incluso en imágenes de bajo contraste. La etapa más crucial es el trazado de spline, donde reconstruimos estos contornos utilizando curvas de Bézier matemáticas, optimizando el número de nodos para crear trazados suaves y eficientes. Este enfoque no solo garantiza una fidelidad visual excepcional, sino que también produce un código SVG limpio y bien estructurado, fácil de editar en cualquier software de diseño vectorial y altamente optimizado para el rendimiento web. Este sofisticado proceso se ejecuta en segundos, gracias a una infraestructura de backend robusta y escalable que gestiona las conversiones de forma asíncrona y eficiente.</p>
                </Section>

                <Section>
                  <SectionTitle icon={ShieldCheck}>Nuestro Compromiso Inquebrantable con la Seguridad</SectionTitle>
                  <p>En un mundo digital donde los datos son el activo más valioso, hemos construido InstaVector sobre una base de confianza y privacidad absoluta. Entendemos que los archivos que nos confías pueden ser logotipos de empresa, diseños confidenciales o creaciones personales. Por eso, hemos implementado una política de "cero retención" que es tan simple como estricta: no guardamos tus archivos. El proceso es totalmente efímero. Tu imagen se procesa en memoria en nuestros servidores seguros, se genera el archivo SVG y, una vez que la descarga comienza, ambos archivos (el original y el convertido) se eliminan de forma inmediata y permanente. No existen copias de seguridad, ni registros de contenido, ni metadatos almacenados. Tu trabajo es tuyo, y solo tuyo. Esta política no es solo una característica; es el pilar de nuestro compromiso contigo y con la protección de tu propiedad intelectual, garantizando que tu creatividad nunca se vea comprometida.</p>
                </Section>

                <Section>
                  <SectionTitle icon={Users}>El Equipo</SectionTitle>
                  <p>Detrás de InstaVector hay un equipo liderado por Victor A. Botina Jojoa, Ingeniero Informático con una especialización en modelos de negocio online y tecnología en comunicación comercial. Con una trayectoria de más de 8 años fusionando el desarrollo de software con estrategias de mercadeo digital, Victor aporta una visión única que combina la excelencia técnica con un profundo entendimiento de las necesidades del usuario final. Su experiencia abarca el desarrollo web y de aplicaciones móviles, así como un manejo experto de una amplia gama de herramientas de diseño gráfico, tanto de código libre como de licencia.</p>
                  <p>Esta combinación de habilidades le permite no solo dirigir el desarrollo técnico de la plataforma, sino también diseñar una experiencia de usuario que es a la vez potente y accesible. La pasión por resolver problemas complejos con soluciones elegantes es el motor que impulsa cada mejora y cada nueva funcionalidad en InstaVector. El equipo comparte una filosofía de mejora continua y un compromiso con la comunidad de código abierto, creyendo que las mejores herramientas son las que se construyen con transparencia y en colaboración con sus usuarios.</p>
                </Section>
            </article>
        </div>
      </main>
    </>
  );
}
