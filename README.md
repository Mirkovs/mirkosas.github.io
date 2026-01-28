# Kosas de MirKo - Website

Recreación de la página web [mirkosas.xyz](https://mirkosas.xyz/) usando Bootstrap 5 y JavaScript.

## 🚁 Descripción

Sitio web profesional para Mirko Verderese, especialista en grabación de videos con drones FPV (First Person View) desde 2017.

## 📁 Estructura del Proyecto

```
Pag/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos personalizados
├── js/
│   └── main.js        # JavaScript funcional
├── images/            # Imágenes del sitio
│   ├── fpv-drone.jpg
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── drones-fleet.jpg
└── README.md          # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **Bootstrap 5.3.2** - Framework CSS responsive
- **JavaScript ES6** - Interactividad y animaciones
- **Google Fonts (Inter)** - Tipografía moderna
- **Font Awesome 6.5.1** - Iconos

## ✨ Características

### Diseño
- ✅ Diseño responsive (mobile-first)
- ✅ Gradientes modernos y vibrantes
- ✅ Animaciones suaves y transiciones
- ✅ Efectos parallax en hero section
- ✅ Hover effects en tarjetas y botones

### Funcionalidad
- ✅ Navegación smooth scroll
- ✅ Menú hamburguesa responsive
- ✅ Navbar con efecto al hacer scroll
- ✅ Animaciones al hacer scroll (scroll reveal)
- ✅ Botón "To the top" funcional
- ✅ Active link highlighting
- ✅ Lazy loading de imágenes

### Secciones
1. **Hero Section** - Bienvenida con gradiente animado
2. **FPV Section** - Información sobre videos profesionales
3. **Proyectos** - Galería de últimos trabajos
4. **Flota de Drones** - Servicios disponibles
5. **Contacto** - Redes sociales y disponibilidad
6. **Footer** - Copyright y créditos

## 🚀 Cómo Usar

### Opción 1: Abrir directamente
1. Navega a la carpeta `Pag`
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado

### Opción 2: Servidor local (recomendado)
```bash
# Con Python 3
cd C:\Users\Mirkovs\Desktop\Pag
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000
```

Luego abre tu navegador en `http://localhost:8000`

## 🎨 Personalización

### Colores
Los colores principales se definen en `css/style.css` usando variables CSS:

```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --accent-color: #3b82f6;
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Contenido
- **Textos**: Edita directamente en `index.html`
- **Imágenes**: Reemplaza los archivos en la carpeta `images/`
- **Enlaces**: Actualiza los href en las secciones de navegación y contacto

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles (iOS/Android)

## 🔧 Dependencias Externas (CDN)

- Bootstrap 5.3.2
- Font Awesome 6.5.1
- Google Fonts (Inter)

**Nota**: Requiere conexión a internet para cargar las dependencias desde CDN.

## 📝 Notas de Desarrollo

- Diseño mobile-first
- Código semántico y accesible
- Optimizado para SEO
- Performance optimizado con lazy loading
- Smooth animations con CSS y JavaScript

## 👤 Autor

**Mirko Verderese**
- Especialista en drones FPV desde 2017
- Grabación profesional de videos cinematográficos

## 📄 Licencia

Este proyecto es una recreación con fines educativos del sitio web original mirkosas.xyz

---

**Creado con** ❤️ **usando Bootstrap y JavaScript**
