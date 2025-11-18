import Header from '@/components/header';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { ShieldCheck, DatabaseZap, Server, Users, FileCheck, Info, Clock, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Datos y Privacidad | InstaVector',
  description: 'Conoce nuestra estricta política de tratamiento y eliminación de datos. En InstaVector, tu privacidad es nuestra prioridad: procesamos tus archivos de forma segura y los eliminamos de inmediato sin dejar rastro.',
  keywords: ['política de datos', 'privacidad de datos', 'seguridad de archivos', 'eliminación automática de datos', 'protección de datos', 'confidencialidad', 'InstaVector seguridad', 'política de privacidad'],
};

const SectionTitle = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
  <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3 pt-8 pb-4 border-b">
    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" /> {children}
  </h2>
);

const HighlightCard = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-muted/50 border-l-4 border-primary p-6 my-6 rounded-r-lg">
        <p className="font-medium text-foreground/80 leading-relaxed">{children}</p>
    </div>
);


export default function PoliticaDeDatosPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Política de Datos', href: '/politica-de-datos' },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl py-8 sm:py-12">
          <header className="mb-8 sm:mb-12">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mt-4 text-center">
              Política de Tratamiento de Datos y Privacidad
            </h1>
            <p className="mt-2 text-lg text-muted-foreground text-center">
              Tu Confianza y Seguridad son Nuestro Principal Compromiso
            </p>
          </header>

          <article className="space-y-12 text-base sm:text-lg text-foreground/80 text-left leading-relaxed">
            
            <section>
                <p>En InstaVector, hemos construido nuestra plataforma sobre un pilar fundamental: la confianza del usuario. Entendemos que los archivos que procesas pueden ser sensibles, personales o de propiedad intelectual. Por esta razón, hemos diseñado una política de privacidad y tratamiento de datos que es tan simple y transparente como robusta y segura. Nuestro enfoque se centra en minimizar la recolección de datos al mínimo absoluto y garantizar que cualquier información procesada sea tratada con la máxima confidencialidad y eliminada de forma inmediata y permanente.</p>
                <HighlightCard>
                  Nuestra filosofía se puede resumir en una frase: <strong>No almacenamos tus imágenes, no queremos tus datos personales.</strong> Esta política detalla cómo aplicamos este principio en cada aspecto de nuestro servicio.
                </HighlightCard>
            </section>

            <section>
              <SectionTitle icon={DatabaseZap}>Nuestra Política de Cero Retención de Archivos</SectionTitle>
              <p>Este es el núcleo de nuestro compromiso de privacidad. A diferencia de otros servicios que pueden almacenar tus archivos temporal o permanentemente, en InstaVector hemos implementado un sistema de "cero retención" por diseño. Esto significa que no tenemos interés ni infraestructura para guardar tus imágenes o los vectores resultantes.</p>
              
              <h3 className="font-semibold text-xl text-foreground mt-6 mb-2">El Ciclo de Vida de un Archivo en InstaVector:</h3>
              <ol className="space-y-4 mt-4 list-decimal list-outside pl-5">
                  <li><strong>Subida Segura:</strong> Cuando subes una imagen (PNG, JPG, JPEG) a nuestro servicio, esta se transmite a través de una conexión cifrada (HTTPS/TLS) para protegerla durante el tránsito. El archivo se almacena temporalmente en la memoria RAM de nuestros servidores, no en un disco de almacenamiento persistente.</li>
                  <li><strong>Procesamiento en Memoria:</strong> Nuestro algoritmo de vectorización procesa la imagen directamente en la memoria del servidor. En esta etapa, el archivo original se analiza y se convierte en un gráfico vectorial SVG. Todo este proceso es automatizado y no requiere intervención humana.</li>
                  <li><strong>Descarga Inmediata:</strong> Una vez que el archivo SVG ha sido generado, se te entrega inmediatamente para su descarga, también a través de una conexión segura.</li>
                  <li><strong>Eliminación Automática y Permanente:</strong> Aquí reside la parte más crucial de nuestra política. En el instante en que el proceso de conversión finaliza y la descarga se inicia, tanto la imagen original que subiste como el archivo SVG generado son eliminados de forma irrevocable de la memoria de nuestros servidores. No queda ningún rastro.</li>
              </ol>

               <p className='mt-4'>Para mayor seguridad, hemos implementado un mecanismo de limpieza adicional: si por alguna razón un archivo generado no se descarga, un proceso automático lo eliminará permanentemente de nuestros sistemas en un plazo máximo de 5 minutos. En la práctica, tus archivos permanecen en nuestros servidores solo durante los segundos que dura el proceso de conversión.</p>
            </section>

            <section>
              <SectionTitle icon={Server}>Información Técnica y de Uso que Recopilamos</SectionTitle>
              <p>Para mantener y mejorar la calidad de InstaVector, recopilamos una cantidad mínima de datos técnicos y de uso, de forma anónima y agregada. Es fundamental aclarar que esta información no te identifica personalmente ni está vinculada de ninguna manera con los archivos que procesas.</p>
              
              <h3 className="font-semibold text-xl text-foreground mt-6 mb-2">¿Qué datos técnicos se recopilan?</h3>
              <ul className="space-y-3 mt-4 list-disc list-outside pl-5">
                  <li><strong>Información del Navegador y Dispositivo:</strong> Tipo de navegador (ej. Chrome, Firefox), sistema operativo (ej. Windows, macOS, Android), y si el acceso es desde un dispositivo móvil o de escritorio. Esto nos ayuda a asegurar que nuestra interfaz funcione correctamente en todas las plataformas.</li>
                  <li><strong>Datos de Interacción con el Servicio:</strong> Recopilamos eventos anónimos como "conversión exitosa" o "error de conversión". Esto nos permite monitorear la salud de nuestro sistema y detectar problemas. Por ejemplo, si vemos un aumento en los errores para un tipo de archivo específico, podemos investigar y mejorar nuestro algoritmo.</li>
                  <li><strong>Datos de Rendimiento:</strong> Medimos de forma agregada el tiempo que tarda una conversión, lo que nos ayuda a optimizar nuestros servidores y ofrecer un servicio más rápido.</li>
              </ul>

              <h3 className="font-semibold text-xl text-foreground mt-6 mb-2">Herramientas de Terceros (Google Analytics)</h3>
              <p>Utilizamos Google Analytics para analizar el tráfico del sitio web y entender cómo los usuarios interactúan con él. Hemos configurado nuestra implementación para respetar tu privacidad al máximo, incluyendo la anonimización de la dirección IP. La información recopilada se utiliza exclusivamente para fines estadísticos y de mejora del servicio, como identificar las páginas más visitadas o los flujos de usuario que necesitan ser optimizados. No compartimos esta información con otros servicios de Google ni la utilizamos para fines publicitarios.</p>
            </section>

            <section>
                <SectionTitle icon={ShieldCheck}>Medidas de Seguridad</SectionTitle>
                <p>La seguridad de tus datos, aunque sea por unos pocos segundos, es de suma importancia. Hemos implementado un conjunto de medidas técnicas y organizativas para proteger la integridad del proceso:</p>
                 <ul className="space-y-3 mt-4 list-disc list-outside pl-5">
                  <li><strong>Cifrado en Tránsito (HTTPS/TLS):</strong> Toda la comunicación entre tu navegador y nuestros servidores está cifrada, impidiendo que terceros puedan interceptar los datos durante la transferencia.</li>
                  <li><strong>Aislamiento de Procesos:</strong> Cada proceso de conversión se ejecuta en un entorno aislado, asegurando que un proceso no pueda acceder a la información de otro.</li>
                  <li><strong>Infraestructura Robusta:</strong> Utilizamos proveedores de infraestructura en la nube de primer nivel que cumplen con los más altos estándares de seguridad física y de red.</li>
                  <li><strong>Auditorías y Monitoreo:</strong> Nuestros sistemas son monitoreados constantemente para detectar y prevenir cualquier actividad sospechosa o acceso no autorizado.</li>
              </ul>
            </section>

            <section>
                <SectionTitle icon={Users}>Tus Derechos y Propiedad Intelectual</SectionTitle>
                <p>Nuestra postura es simple: lo que es tuyo, sigue siendo tuyo. InstaVector actúa únicamente como una herramienta de transformación técnica. No reclamamos ningún derecho de autor ni propiedad sobre las imágenes que subes ni sobre los archivos SVG que generas. Eres el único propietario de tu trabajo y eres libre de utilizar el resultado para cualquier fin, personal o comercial, sin ninguna restricción por nuestra parte.</p>
                <p className='mt-4'>Es responsabilidad del usuario asegurarse de tener los derechos necesarios sobre el contenido original que procesa en nuestra plataforma. InstaVector no puede verificar la procedencia o el estado de los derechos de autor de las imágenes subidas.</p>
            </section>
            
            <section>
                <SectionTitle icon={Clock}>Cambios en esta Política</SectionTitle>
                <p>Nos reservamos el derecho de actualizar esta Política de Datos y Privacidad en el futuro para reflejar cambios en nuestras prácticas o para cumplir con nuevas regulaciones. Cualquier cambio será publicado en esta misma página. Te recomendamos revisarla periódicamente para estar informado. El uso continuado de InstaVector después de la publicación de cambios constituirá tu aceptación de los mismos.</p>
            </section>

            <section>
                <SectionTitle icon={Mail}>Contacto</SectionTitle>
                <p>Si tienes alguna pregunta, duda o sugerencia sobre nuestra política de privacidad o nuestras prácticas de tratamiento de datos, no dudes en ponerte en contacto con nosotros. Tu tranquilidad es importante para nosotros y estaremos encantados de proporcionarte toda la claridad que necesites. Puedes encontrar nuestros detalles de contacto en la página de <a href="/contacto" className="text-primary hover:underline">Contacto</a>.</p>
            </section>

          </article>
        </div>
      </main>
    </>
  );
}
