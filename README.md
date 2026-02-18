# SOM FP - Sistema Operativos y Mantenimiento

Web educativa interactiva para aprender Sistemas Operativos y Mantenimiento de 1º de SMR (Sistemas Microinformáticos y Redes).

## 🚀 Características

- **Diseño Moderno**: Interfaz con Glassmorphism y Dark Mode tecnológico
- **Contenido Estructurado**: 3 unidades principales con temario completo
- **Quiz Interactivo**: Sistema IA powered con feedback inteligente
- **Recursos Descargables**: PDFs, esquemas y herramientas prácticas
- **SEO Optimizado**: Metadata dinámicos y sitemap.xml
- **Responsive**: Diseño adaptado para todos los dispositivos

## 📚 Contenido

### Unidad 1: Introducción a Sistemas
- Hardware vs Software
- Ciclo CPU: Fetch-Decode-Execute
- Firmware y BIOS/UEFI
- Drivers y controladores

### Unidad 2: Gestión de Datos
- Sistemas de numeración (binario, hexadecimal)
- Conversión entre sistemas
- Unidades de medida (KB vs KiB)
- Herramientas interactivas de conversión

### Unidad 3: Instalación de Sistemas Operativos
- Guías de instalación Windows y Linux
- Tipos de licencias de software
- Sistemas de archivos (NTFS vs EXT4)
- Gestión de particiones

## 🎯 SOM-Quiz IA Powered

Quiz interactivo con:
- 10 preguntas cubriendo todo el temario
- Feedback inteligente personalizado
- Explicaciones detalladas para errores
- Sistema de puntuación y certificado
- Sin límite de tiempo

## 🛠️ Tecnologías

- **Frontend**: Next.js 14 con App Router
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Tipado**: TypeScript
- **Diseño**: Glassmorphism con Dark Mode

## 🚀 Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
├── app/
│   ├── components/           # Componentes reutilizables
│   ├── unidad-1-introduccion-sistemas/
│   ├── unidad-2-gestion-datos/
│   │   └── components/     # Componentes específicos
│   ├── unidad-3-instalacion-so/
│   ├── recursos/
│   ├── som-quiz/
│   │   └── components/     # Quiz component
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home
│   ├── sitemap.xml         # Sitemap para SEO
│   └── robots.txt          # Robots.txt
├── public/                 # Archivos estáticos
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Diseño y Colores

- **Dark Gray** (#111): Fondo principal
- **Electric Blue** (#0070f3): Acentos principales
- **Neon Green** (#00ff88): Éxitos y aciertos
- **Glass Effect**: Efecto de cristal con backdrop-blur

## 📱 Características de Diseño

- **Glassmorphism**: Efectos de cristal modernos
- **Neon Glow**: Efectos de luz neón
- **Responsive**: Adaptado a móviles y tablets
- **Interactivo**: Animaciones y transiciones suaves
- **Accesible**: Buen contraste y navegación clara

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conectar repositorio a GitHub
2. Importar proyecto en Vercel
3. Configurar dominio personalizado
4. Deploy automático

### Pasos para Dominio Personalizado

1. En Vercel Settings > Domains
2. Añadir dominio (ej: som-fp.es)
3. Configurar DNS según instrucciones de Vercel
4. Esperar propagación DNS

## 📊 SEO

- **Metadata Dinámicos**: Cada página con título y descripción únicos
- **Sitemap XML**: Estructura para motores de búsqueda
- **Robots.txt**: Configuración de rastreo
- **Open Graph**: Compartir en redes sociales
- **URLs Amigables**: Estructura SEO-friendly

## 🎓 Objetivo Educativo

Proyecto diseñado para estudiantes de 1º de SMR con:

- **Contenido 100% alineado** con currículo FP
- **Ejemplos prácticos** y casos de uso reales
- **Feedback inmediato** para facilitar aprendizaje
- **Recursos adicionales** para profundizar
- **Evaluación continua** con sistema de quiz

## 🤝 Contribuir

Este es un proyecto educativo abierto a contribuciones:

1. Fork del repositorio
2. Crear rama de feature
3. Realizar cambios
4. Pull Request con descripción detallada

## 📄 Licencia

Este proyecto está bajo licencia educativa. Uso libre para fines educativos.

## 📞 Contacto

Para sugerencias o reporte de errores:

- Issues en GitHub
- Email: contacto@som-fp.es

---

**SOM FP** - Tu guía definitiva para dominar Sistemas Operativos y Mantenimiento 🚀
