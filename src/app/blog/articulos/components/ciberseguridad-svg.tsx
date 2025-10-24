import React from 'react';
import { ShieldAlert, UserCheck } from 'lucide-react';

const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="space-y-4 text-foreground/90 leading-relaxed">
    {children}
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-foreground pt-8 pb-2">
    {children}
  </h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold text-primary flex items-center gap-3 pt-6 pb-2">
       {children}
    </h3>
);

const HighlightCard = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-muted/50 border-l-4 border-primary p-4 my-6 rounded-r-lg">
        <p className="font-medium text-foreground/80">{children}</p>
    </div>
);

const PracticeList = ({ items }: { items: { icon: React.ReactNode, text: string }[] }) => (
  <ul className="space-y-4">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-4">
        <div className="text-primary pt-1">{item.icon}</div>
        <div>
          {item.text.split(/(\<strong\>.*?\<\/strong\>|\<code\>.*?\<\/code\>)/g).map((part, i) =>
            part.match(/^<.*>$/) ? (
              <span key={i} dangerouslySetInnerHTML={{ __html: part }} />
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </div>
      </li>
    ))}
  </ul>
);

export default function CiberseguridadSvg() {
  const userPractices = [
    { icon: <UserCheck className="h-6 w-6" />, text: '<strong>Sea Extremadamente Cauteloso:</strong> Trate a los archivos adjuntos <code>.svg</code> inesperados con la misma sospecha que a los archivos <code>.exe</code> o <code>.zip</code>.' },
    { icon: <UserCheck className="h-6 w-6" />, text: '<strong>Verifique el Remitente:</strong> Si recibe un SVG de un contacto y no lo estaba esperando, confirme la autenticidad por un canal diferente (llamada o mensaje) antes de abrirlo.' },
    { icon: <UserCheck className="h-6 w-6" />, text: '<strong>Inspeccione la URL de Redirección:</strong> Si un archivo SVG lo redirige, revise la URL en la barra de direcciones. Busque inconsistencias o dominios que no coincidan con el sitio oficial.' },
    { icon: <UserCheck className="h-6 w-6" />, text: '<strong>No Ingrese Credenciales:</strong> Nunca ingrese su nombre de usuario y contraseña en una página a la que llegó haciendo clic en un archivo adjunto de correo electrónico.' },
  ];

  const orgPractices = [
    { icon: <ShieldAlert className="h-6 w-6" />, text: '<strong>Bloqueo en el Gateway de Correo:</strong> Configure su SEG para bloquear o poner en cuarentena los adjuntos <code>.svg</code> de remitentes externos, a menos que exista una necesidad empresarial.' },
    { icon: <ShieldAlert className="h-6 w-6" />, text: '<strong>Análisis Profundo de Archivos:</strong> Implemente soluciones que puedan analizar y ejecutar en sandbox los SVG para inspeccionar el código JavaScript oculto.' },
    { icon: <ShieldAlert className="h-6 w-6" />, text: '<strong>Concientización y Formación:</strong> Realice formación continua sobre ciberseguridad para concienciar a los empleados sobre este nuevo vector de ataque.' },
    { icon: <ShieldAlert className="h-6 w-6" />, text: '<strong>Principio de Confianza Cero:</strong> Asuma que cualquier archivo adjunto puede ser malicioso. Valide siempre la fuente y el contexto antes de interactuar.' },
  ];

  return (
    <div className="space-y-12">
      <Section>
        <p>
            El formato Scalable Vector Graphics (SVG), conocido por ser un estándar de imagen vectorial inofensivo en el diseño web, se ha convertido en una herramienta cada vez más común para los ciberdelincuentes. Los atacantes están aprovechando la naturaleza de estos archivos, basados en XML, para incrustar código malicioso y evadir la detección de los filtros de correo electrónico tradicionales, lanzando campañas de phishing altamente efectivas.
        </p>
      </Section>

      <Section>
        <SectionTitle>¿Por Qué los Atacantes Utilizan Archivos SVG?</SectionTitle>
        <p>
            La principal razón de la popularidad del SVG entre los ciberdelincuentes es su doble naturaleza: es un archivo de imagen, pero también es un documento de texto que puede contener código ejecutable, típicamente JavaScript.
        </p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Evasión de los Filtros de Seguridad:</strong> A diferencia de los archivos <code>.html</code> o <code>.exe</code>, que son rigurosamente inspeccionados, los archivos SVG suelen ser tratados como simples imágenes por los Secure Email Gateways (SEGs). Esto permite que el código malicioso incrustado pase inadvertido.</li>
            <li><strong>Ejecución Nativa en el Navegador:</strong> El sistema operativo o el cliente de correo electrónico abrirá el archivo SVG en el navegador web predeterminado, donde cualquier JavaScript contenido se ejecuta automáticamente, sin mostrar alertas de seguridad.</li>
            <li><strong>Apariencia de Legitimidad:</strong> Los archivos SVG se disfrazan como notificaciones de mensajes de voz, documentos seguros (DocuSign, SharePoint) o facturas, engañando al usuario para que interactúe.</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Mecanismo de Ataque Típico con SVG</SectionTitle>
        <p>La cadena de ataque del phishing con SVG es notablemente eficaz por su simplicidad y capacidad de elusión:</p>
        <ol className="list-decimal list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Envío del Phishing:</strong> El atacante envía un correo electrónico bien elaborado, con una suplantación de identidad convincente (ej. de un servicio conocido como Google Voice o Microsoft).</li>
            <li><strong>Apertura y Ejecución:</strong> La víctima, engañada, hace doble clic en el archivo adjunto <code>.svg</code>. El navegador lo abre y ejecuta el JavaScript malicioso incrustado.</li>
            <li><strong>Redirección o Engaño:</strong> El script redirige a la víctima a una página de phishing que imita un inicio de sesión legítimo para robar credenciales, o en casos más avanzados, el SVG renderiza el formulario falso directamente.</li>
            <li><strong>Entrega de Malware (Alternativo):</strong> En lugar de phishing, el código SVG puede iniciar la descarga silenciosa de malware.</li>
        </ol>
      </Section>

       <Section>
        <SectionTitle>Prácticas de Seguridad</SectionTitle>
        
        <SubTitle>Para Usuarios Individuales (Higiene Digital)</SubTitle>
        <PracticeList items={userPractices} />

        <SubTitle>Para Organizaciones y Equipos de TI (Mitigación Técnica)</SubTitle>
        <PracticeList items={orgPractices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión</SectionTitle>
        <HighlightCard>
            El uso de archivos SVG para el phishing subraya que la amenaza evoluciona constantemente. La capacidad del formato para portar código ejecutable mientras se disfraza como una simple imagen lo convierte en un vector de ataque particularmente insidioso.
        </HighlightCard>
        <p>
            La clave para la defensa no reside solo en la tecnología, sino en la educación continua del usuario y la implementación de políticas de seguridad estrictas que redefinan lo que se considera un archivo "seguro". Solo mediante una combinación de vigilancia técnica y cautela humana se podrá mitigar eficazmente esta creciente amenaza.
        </p>
      </Section>
    </div>
  );
}
