document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');

    carouselInner.addEventListener('mouseover', () => {
        carouselInner.style.animationPlayState = 'paused';
    });

    carouselInner.addEventListener('mouseout', () => {
        carouselInner.style.animationPlayState = 'running';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Validación de campos
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const telefono = document.getElementById('telefono');
        const asunto = document.getElementById('asunto');
        const mensaje = document.getElementById('mensaje');
        const terminos = document.getElementById('terminos');

        // Validar nombre
        if (!nombre.value.trim()) {
            alert('Por favor, ingrese su nombre.');
            nombre.focus();
            return;
        }

        // Validar correo electrónico
        if (!email.value.trim()) {
            alert('Por favor, ingrese su correo electrónico.');
            email.focus();
            return;
        }

        // Validar teléfono
        if (!telefono.value.trim()) {
            alert('Por favor, ingrese su teléfono.');
            telefono.focus();
            return;
        }

        // Validar asunto
        if (!asunto.value) {
            alert('Por favor, seleccione un asunto.');
            asunto.focus();
            return;
        }

        // Validar mensaje
        if (!mensaje.value.trim()) {
            alert('Por favor, ingrese su mensaje.');
            mensaje.focus();
            return;
        }

        // Validar términos y condiciones
        if (!terminos.checked) {
            alert('Por favor, acepte los términos y condiciones.');
            terminos.focus();
            return;
        }

        // Si todos los campos son válidos, se puede enviar el formulario
        alert('Formulario enviado exitosamente.');
        form.reset(); // Limpia el formulario
    });
});
