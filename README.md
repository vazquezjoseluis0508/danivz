# DANIVZ - Servicio Técnico

Sitio web profesional para **Carlos Daniel Vázquez**, técnico especializado en aires acondicionados, lavadoras y electricidad doméstica en General Pico, La Pampa.

## 🚀 Descripción

Este es un sitio web moderno y responsivo desarrollado con React y TypeScript que presenta los servicios técnicos especializados de Carlos Daniel Vázquez. El sitio incluye:

- **Página de inicio** con información del técnico
- **Sección de servicios** detallando las especialidades
- **Galería de trabajos** realizados
- **Formulario de contacto** para solicitar presupuestos
- **Botón de WhatsApp** para contacto directo
- **Diseño responsivo** para móviles y escritorio

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **Lucide React** - Iconos modernos
- **Radix UI** - Componentes de interfaz accesibles

## 📋 Prerrequisitos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** o **pnpm** (gestor de paquetes)

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd danivz
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npx vite
```

El servidor se iniciará en `http://localhost:5173`

### 4. Construir para producción
```bash
npm run build
```

### 5. Previsualizar la versión de producción
```bash
npm run preview
```

### 6. Desplegar en GitHub Pages
```bash
npm run deploy
```

## 📁 Estructura del Proyecto

```
danivz/
├── public/                 # Archivos estáticos
│   ├── *.jpg              # Imágenes del sitio
│   └── *.webp             # Imágenes optimizadas
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header.tsx     # Navegación principal
│   │   ├── Hero.tsx       # Sección de bienvenida
│   │   ├── Services.tsx   # Servicios ofrecidos
│   │   ├── Gallery.tsx    # Galería de trabajos
│   │   ├── Contact.tsx    # Formulario de contacto
│   │   ├── Footer.tsx     # Pie de página
│   │   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
│   ├── hooks/             # Hooks personalizados
│   ├── lib/               # Utilidades y configuraciones
│   ├── App.tsx            # Componente principal
│   └── main.tsx           # Punto de entrada
├── package.json           # Dependencias y scripts
├── tailwind.config.js     # Configuración de Tailwind CSS
└── vite.config.ts         # Configuración de Vite
```

## 🎨 Características del Diseño

- **Diseño responsivo** que se adapta a todos los dispositivos
- **Paleta de colores** profesional con azules y verdes
- **Animaciones suaves** y transiciones elegantes
- **Tipografía moderna** y legible
- **Iconos consistentes** de Lucide React
- **Componentes accesibles** con Radix UI

## 📱 Secciones del Sitio

### Header
- Navegación principal con enlaces a secciones
- Logo y nombre del técnico
- Menú hamburguesa para móviles

### Hero
- Título principal con nombre del técnico
- Eslogan de la empresa
- Información de contacto y ubicación
- Botones de llamada a la acción

### Services
- Lista detallada de servicios ofrecidos:
  - Instalación de aires acondicionados
  - Reparación de aires acondicionados
  - Servicio técnico en lavadoras
  - Electricidad doméstica

### Gallery
- Galería de trabajos realizados
- Imágenes de instalaciones y reparaciones
- Filtros por categoría de servicio

### Contact
- Formulario de contacto para presupuestos
- Información de contacto adicional
- Horarios de atención

### Footer
- Información completa de la empresa
- Enlaces a redes sociales
- Datos de contacto y ubicación

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run deploy` - Despliega la aplicación en GitHub Pages
- `npm run lint` - Ejecuta el linter para verificar el código

## 📞 Información de Contacto

- **Técnico**: Carlos Daniel Vázquez
- **Teléfono**: 2302-693788
- **Ubicación**: Avenida San Martín Norte 849, General Pico - La Pampa, Argentina
- **Horarios**: Lunes a Sábado 8:00 - 20:00 (Emergencias 24h)
- **WhatsApp**: [Enlace directo](https://wa.me/5492302693788)

## 🌐 Redes Sociales

- **Facebook**: [danivz.servicio](https://facebook.com/danivz.servicio)
- **Instagram**: [danivz.servicio](https://instagram.com/danivz.servicio)

## 📝 Notas de Desarrollo

- El proyecto utiliza **Vite** para un desarrollo rápido con Hot Module Replacement (HMR)
- **Tailwind CSS** está configurado para optimización de producción
- Los componentes están organizados de manera modular y reutilizable
- El sitio es completamente responsivo y accesible
- Las imágenes están optimizadas para web

## 📧 Configuración del Formulario de Contacto

El formulario de contacto utiliza **EmailJS** para enviar mensajes directamente a tu email. Para configurarlo:

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita

### 2. Configurar servicio de email
- En EmailJS, ve a "Email Services"
- Agrega tu servicio de email (Gmail, Outlook, etc.)
- Copia el **Service ID**

### 3. Crear plantilla de email
- Ve a "Email Templates"
- Crea una nueva plantilla con este contenido:

**Asunto:** `Nuevo mensaje de contacto - DANIVZ Servicio Técnico`

**Contenido:**
```
Hola {{to_name}},

Has recibido un nuevo mensaje de contacto desde tu sitio web:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{from_phone}}
Mensaje: {{message}}

Para responder, simplemente responde a este email.

Saludos,
DANIVZ Servicio Técnico
```

### 4. Configurar credenciales
- Edita el archivo `src/config/emailjs.ts`
- Reemplaza los valores con tus credenciales:
  - `YOUR_SERVICE_ID` → Tu Service ID
  - `YOUR_TEMPLATE_ID` → Tu Template ID  
  - `YOUR_PUBLIC_KEY` → Tu Public Key

### 5. Probar el formulario
- Ejecuta el proyecto con `npx vite`
- Ve a la sección de contacto
- Envía un mensaje de prueba

## 🤝 Contribución

Para contribuir al proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 🚀 Despliegue en GitHub Pages

El sitio web está desplegado automáticamente en GitHub Pages. Para hacer un nuevo deploy:

1. **Hacer cambios** en el código
2. **Commit y push** a GitHub:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push
   ```
3. **Ejecutar deploy**:
   ```bash
   npm run deploy
   ```

### 🌐 URL del sitio desplegado
- **GitHub Pages**: https://vazquezjoseluis0508.github.io/danivz/

## 📄 Licencia

Este proyecto es privado y pertenece a Carlos Daniel Vázquez - DANIVZ Servicio Técnico.
