import React from 'react';
import { ShieldAlert, UserCheck, Microscope, AlertTriangle } from 'lucide-react';

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

const SubTitle = ({ children, icon }: { children: React.ReactNode, icon?: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold text-primary flex items-center gap-3 pt-6 pb-2">
       {icon} {children}
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
    { icon: <UserCheck className="h-6 w-6" />, text: '<strong>Sea Extremadamente Cauteloso:</strong> Trate a los archivos adjuntos <code>.svg</code> inesperados con la misma sospecha que a los archivos <code>.exe</code> o <code>.zip</code>. No confíe en un archivo solo por su extensión de imagen.' },
    { icon: <UserCheck className="h-6 w-6" />, text: '<strong>Verifique el Remitente:</strong> Si recibe un SVG de un contacto conocido, pero el correo es inesperado, confirme la autenticidad del envío por un canal diferente (una llamada o un mensaje de texto) antes de abrirlo. La suplantación de identidad es una táctica común.' },
    { icon: <UserCheck className="h-6 w-6" />, text: '<strong>Inspeccione la URL de Redirección:</strong> Antes de hacer clic en cualquier enlace dentro de un SVG, pase el cursor sobre él para ver la URL de destino. Si un archivo SVG lo redirige automáticamente, revise la URL en la barra de direcciones del navegador. Busque inconsistencias, errores tipográficos o dominios que no coincidan con el sitio oficial.' },
    { icon: <UserCheck className="h-6 w-6" />, text: '<strong>No Ingrese Credenciales Apresuradamente:</strong> Nunca ingrese su nombre de usuario y contraseña en una página a la que llegó tras hacer clic en un archivo adjunto de correo electrónico. Es una de las principales tácticas de phishing. Vaya siempre directamente al sitio web oficial escribiendo la URL manualmente.' },
    { icon: <UserCheck className="h-6 w-6" />, text: '<strong>Use un Software de Seguridad Robusto:</strong> Asegúrese de que su antivirus y antimalware estén actualizados. Las soluciones de seguridad modernas incluyen análisis de comportamiento que pueden detectar actividades sospechosas, incluso si el archivo inicial no fue marcado como malicioso.' },
  ];

  const orgPractices = [
    { icon: <ShieldAlert className="h-6 w-6" />, text: '<strong>Bloqueo en el Gateway de Correo (SEG):</strong> Configure su Secure Email Gateway para bloquear o poner en cuarentena los adjuntos con extensión <code>.svg</code> de remitentes externos, a menos que exista una necesidad empresarial específica y validada para recibirlos.' },
    { icon: <ShieldAlert className="h-6 w-6" />, text: '<strong>Análisis Profundo y Sandboxing de Archivos:</strong> Implemente soluciones de seguridad avanzadas (sandboxing) que puedan analizar y ejecutar los archivos SVG en un entorno aislado para inspeccionar el código JavaScript oculto, ofuscado o cualquier comportamiento anómalo, como la comunicación con servidores externos.' },
    { icon: <ShieldAlert className="h-6 w-6" />, text: '<strong>Filtrado de Contenido y CSP:</strong> En sus aplicaciones web, implemente una Política de Seguridad de Contenido (Content Security Policy o CSP) estricta que restrinja la ejecución de scripts inline y limite las fuentes desde las cuales se puede cargar contenido. Esto puede mitigar el impacto de un SVG malicioso subido por un usuario.' },
    { icon: <ShieldAlert className="h-6 w-6" />, text: '<strong>Concientización y Formación Continua (Security Awareness):</strong> Realice formación continua sobre ciberseguridad para educar a los empleados sobre este y otros vectores de ataque emergentes. Las simulaciones de phishing que incluyan adjuntos SVG pueden ser una herramienta de entrenamiento muy efectiva.' },
    { icon: <ShieldAlert className="h-6 w-6" />, text: '<strong>Principio de Confianza Cero (Zero Trust):</strong> Asuma que cualquier archivo adjunto puede ser potencialmente malicioso, sin importar la fuente. Valide siempre la identidad del remitente y el contexto del mensaje antes de que los usuarios interactúen con cualquier contenido adjunto.' },
  ];

  return (
    <div className="space-y-12">
      <Section>
        <p>
            El formato Scalable Vector Graphics (SVG), apreciado en el diseño web por su escalabilidad y ligereza, se ha convertido paradójicamente en un sofisticado vehículo para ciberataques. Los atacantes están explotando su estructura basada en XML para incrustar código malicioso (comúnmente JavaScript) y eludir los filtros de seguridad de correo electrónico tradicionales, lanzando así campañas de phishing y distribución de malware altamente efectivas que a menudo pasan desapercibidas para los usuarios y los sistemas de defensa perimetral.
        </p>
         <HighlightCard>
            La doble naturaleza del SVG —siendo a la vez una imagen y un documento de texto ejecutable— lo convierte en un "caballo de Troya" moderno, capaz de disfrazar código malicioso bajo una apariencia inofensiva.
        </HighlightCard>
      </Section>

      <Section>
        <SectionTitle>Anatomía de un SVG Malicioso: ¿Por Qué es tan Peligroso?</SectionTitle>
        <p>
            La principal razón de la popularidad del SVG entre los ciberdelincuentes es su capacidad para ejecutar código dentro del contexto del navegador con la confianza del usuario. A diferencia de un archivo de imagen tradicional (como PNG o JPG), un SVG es un documento XML que puede contener:
        </p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Scripts de JavaScript:</strong> Dentro de una etiqueta <code>&lt;script&gt;</code>, los atacantes pueden escribir cualquier lógica, desde redirigir al usuario a un sitio de phishing hasta descargar malware. Este código se ejecuta en el navegador tan pronto como se abre el archivo.</li>
            <li><strong>Eventos del DOM:</strong> Un SVG puede incluir manejadores de eventos como <code>onload</code>, <code>onclick</code> o <code>onmouseover</code>, que ejecutan código malicioso cuando el archivo se carga o cuando el usuario interactúa con él.</li>
            <li><strong>HTML y CSS ofuscados:</strong> Es posible incrustar HTML, como formularios de inicio de sesión falsos, directamente dentro del SVG y estilizarlo con CSS para que parezca legítimo, todo renderizado dentro de la misma "imagen".</li>
            <li><strong>Referencias externas:</strong> Los SVG pueden cargar recursos externos (imágenes, scripts, fuentes) desde servidores controlados por los atacantes, permitiendo la exfiltración de datos o la carga de exploits adicionales.</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Vectores de Ataque Comunes Usando SVG</SectionTitle>
        <p>Los atacantes han demostrado una gran creatividad al utilizar SVG para sus campañas maliciosas. Los métodos más frecuentes incluyen:</p>
        
        <SubTitle icon={<AlertTriangle className="h-6 w-6" />}>1. Phishing de Credenciales</SubTitle>
        <p>El atacante envía un correo electrónico que suplanta la identidad de un servicio conocido (Microsoft 365, Google Drive, DocuSign) con un archivo SVG adjunto que simula ser un documento importante o una notificación. Al abrirlo, el JavaScript dentro del SVG redirige al usuario a una página de inicio de sesión falsa, visualmente idéntica a la original, donde las credenciales son robadas.</p>
        
        <SubTitle icon={<AlertTriangle className="h-6 w-6" />}>2. Distribución de Malware</SubTitle>
        <p>En este escenario, el script incrustado en el SVG inicia la descarga de un payload malicioso (como un troyano, ransomware o keylogger) en segundo plano. El usuario puede ver simplemente una imagen o un logo, mientras que el malware se instala silenciosamente en su sistema. Esto es particularmente peligroso porque evade la detección basada en la reputación de archivos ejecutables.</p>

        <SubTitle icon={<AlertTriangle className="h-6 w-6" />}>3. Evasión de Filtros de Seguridad</SubTitle>
        <p>Muchos sistemas de seguridad de correo electrónico (Secure Email Gateways o SEGs) están configurados para analizar rigurosamente extensiones como <code>.html</code>, <code>.js</code>, o <code>.exe</code>, pero tratan a los <code>.svg</code> como simples archivos de imagen. Esto crea un punto ciego que los atacantes explotan para que su código malicioso llegue directamente a la bandeja de entrada del usuario.</p>
      </Section>

       <Section>
        <SectionTitle>Estrategias de Defensa y Mitigación</SectionTitle>
        <p>La protección contra amenazas basadas en SVG requiere un enfoque de defensa en profundidad que combine medidas técnicas con la concienciación del usuario.</p>
        
        <SubTitle icon={<Microscope className="h-6 w-6" />}>Para Usuarios Individuales (Higiene Digital)</SubTitle>
        <PracticeList items={userPractices} />

        <SubTitle icon={<ShieldAlert className="h-6 w-6" />}>Para Organizaciones y Equipos de TI (Mitigación Técnica)</SubTitle>
        <PracticeList items={orgPractices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: Reevaluando la Confianza en los Formatos de Imagen</SectionTitle>
        <HighlightCard>
            El uso de archivos SVG para el phishing y la distribución de malware subraya una lección crítica en ciberseguridad: ninguna tecnología es inherentemente segura. La capacidad del formato para portar código ejecutable mientras se disfraza como una simple imagen lo convierte en un vector de ataque particularmente insidioso.
        </HighlightCard>
        <p>
            La defensa eficaz ya no puede basarse únicamente en el bloqueo de extensiones de archivo conocidas como peligrosas. Requiere una reevaluación de cómo tratamos todos los formatos de archivo, especialmente aquellos que pueden contener código activo. La clave para la defensa reside en una combinación sinérgica de tecnología de seguridad avanzada, como el sandboxing y el análisis de contenido, y una cultura de escepticismo y vigilancia por parte de los usuarios. Solo mediante una combinación de vigilancia técnica y cautela humana se podrá mitigar eficazmente esta creciente amenaza y proteger los activos digitales de la organización.
        </p>
      </Section>
    </div>
  );
}
