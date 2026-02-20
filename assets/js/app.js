class UsersService {
    constructor() {
        this.users = [];
    }

    async init() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            this.users = await response.json();
            print("Sistema cargado correctamente. " + this.users.length + " usuarios disponibles.");
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
            print("Error crítico al cargar los datos: " + error.message);
        }
    }

    listarNombres() {
        const nombres = this.users.map(user => user.name);
        print(nombres);
    }

    mostrarInfoBasicaPorNombre() {
        const nombreBuscado = prompt("Ingrese el nombre del usuario:");
        if (!nombreBuscado) return;

        const usuario = this.buscarUsuario(nombreBuscado);

        if (usuario) {
            print({
                username: usuario.username,
                email: usuario.email
            });
        } else {
            print(`Usuario "${nombreBuscado}" no encontrado.`);
        }
    }

    mostrarDireccionPorNombre() {
        const nombreBuscado = prompt("Ingrese el nombre del usuario para ver su dirección:");
        if (!nombreBuscado) return;

        const usuario = this.buscarUsuario(nombreBuscado);

        if (usuario) {
            const { street, suite, city, zipcode, geo } = usuario.address;
            print({
                calle: street,
                depto: suite,
                ciudad: city,
                codigo_postal: zipcode,
                coordenadas: geo
            });
        } else {
            print(`Usuario "${nombreBuscado}" no encontrado.`);
        }
    }

    mostrarInfoAvanzadaPorNombre() {
        const nombreBuscado = prompt("Ingrese el nombre del usuario para info avanzada:");
        if (!nombreBuscado) return;

        const usuario = this.buscarUsuario(nombreBuscado);

        if (usuario) {
            print({
                telefono: usuario.phone,
                website: usuario.website,
                compania: usuario.company
            });
        } else {
            print(`Usuario "${nombreBuscado}" no encontrado.`);
        }
    }

    listarCompaniasYCatchphrase() {
        const companias = this.users.map(user => ({
            nombre_compania: user.company.name,
            eslogan: user.company.catchPhrase
        }));
        print(companias);
    }

    listarNombresOrdenados() {
        const nombres = this.users.map(user => user.name);
        nombres.sort((a, b) => a.localeCompare(b));
        print(nombres);
    }

    buscarUsuario(nombre) {
        return this.users.find(user => user.name === nombre.trim());
    }
}

function print(data) {
    const output = document.getElementById('output');
    if (typeof data === 'object') {
        output.textContent = JSON.stringify(data, null, 2);
    } else {
        output.textContent = data;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const sistema = new UsersService();

    await sistema.init();

    document.getElementById('btnNombres').onclick = () => sistema.listarNombres();
    document.getElementById('btnBasica').onclick = () => sistema.mostrarInfoBasicaPorNombre();
    document.getElementById('btnDireccion').onclick = () => sistema.mostrarDireccionPorNombre();
    document.getElementById('btnAvanzada').onclick = () => sistema.mostrarInfoAvanzadaPorNombre();
    document.getElementById('btnCompanias').onclick = () => sistema.listarCompaniasYCatchphrase();
    document.getElementById('btnOrdenados').onclick = () => sistema.listarNombresOrdenados();
});
