// Configuración de EmailJS
// Para configurar EmailJS, sigue estos pasos:
// 1. Ve a https://www.emailjs.com/ y crea una cuenta gratuita
// 2. Configura un servicio de email (Gmail, Outlook, etc.)
// 3. Crea una plantilla de email
// 4. Reemplaza los valores de abajo con tus credenciales

export const EMAILJS_CONFIG = {
  // Service ID - ID del servicio de email que configures en EmailJS
  SERVICE_ID: 'YOUR_SERVICE_ID',
  
  // Template ID - ID de la plantilla de email que crees
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  
  // Public Key - Tu clave pública de EmailJS
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
}

// Ejemplo de plantilla de email para EmailJS:
/*
Asunto: Nuevo mensaje de contacto - DANIVZ Servicio Técnico

Contenido:
Hola {{to_name}},

Has recibido un nuevo mensaje de contacto desde tu sitio web:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{from_phone}}
Mensaje: {{message}}

Para responder, simplemente responde a este email.

Saludos,
DANIVZ Servicio Técnico
*/ 