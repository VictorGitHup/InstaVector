
import Header from '@/components/header';
import { Metadata } from 'next';
import { Github, Linkedin, MapPin, Phone, User, Mail, Building } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icono from '@/components/icono';

export const metadata: Metadata = {
  title: 'Contacto | InstaVector',
  description: 'Contacta con Victor A. Botina Jojoa, el creador de InstaVector. Encuentra información profesional, enlaces a redes y detalles de contacto.',
  keywords: ['contacto', 'Victor A. Botina Jojoa', 'desarrollador', 'ingeniero informático', 'LinkedIn', 'GitHub', 'contactar InstaVector'],
};

const ContactInfo = ({ icon: Icon, title, children, href }: { icon: React.ElementType, title: string, children: React.ReactNode, href?: string }) => {
    const content = <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Icon className="h-5 w-5" />
        </div>
        <div>
            <h4 className="font-semibold text-foreground">{title}</h4>
            <div className="text-muted-foreground">{children}</div>
        </div>
    </div>;

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="hover:bg-muted/50 p-3 rounded-lg transition-colors block">
                {content}
            </a>
        );
    }
    return <div className="p-3">{content}</div>;
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-4xl py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Contacto
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Conecta con el creador detrás de InstaVector.
            </p>
          </header>

          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/50 p-6 flex-row items-center gap-4 border-b">
                <Avatar className="h-20 w-20 border-2 border-primary">
                    <AvatarImage src="/images/dev_developer/img_developer_Victor_Botina.webp" alt="Victor A. Botina Jojoa" />
                    <AvatarFallback>VB</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className="text-2xl">Victor A. Botina Jojoa</CardTitle>
                    <p className="text-muted-foreground">Ingeniero Informático y Desarrollador</p>
                </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Sobre mí</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Ingeniero Informático, con especialización en modelos de negocio online y tecnología en comunicación comercial. Cuento con más de 8 años de experiencia en comunicaciones y mercadeo, combinando mi formación técnica con habilidades estratégicas en el desarrollo de proyectos digitales. Soy desarrollador web y de aplicaciones móviles, con amplio manejo de herramientas para la creación y edición de imágenes, tanto de licencia como de código libre.
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Información de Contacto</h3>
                    <div className="space-y-2">
                        <ContactInfo icon={Linkedin} title="LinkedIn" href="https://www.linkedin.com/in/victor-botina-jojoa-90248823a">
                            in/victor-botina-jojoa-90248823a
                        </ContactInfo>
                        <ContactInfo icon={Github} title="GitHub" href="https://github.com/VictorGitHup">
                            VictorGitHup
                        </ContactInfo>
                        <ContactInfo icon={Phone} title="Teléfono de Contacto" href="tel:+573002508011">
                            +57 3002508011
                        </ContactInfo>
                        <ContactInfo icon={MapPin} title="Dirección">
                            Corregimiento La Laguna, Casa 26A1 <br />
                            Nariño, Colombia
                        </ContactInfo>
                    </div>
                </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
