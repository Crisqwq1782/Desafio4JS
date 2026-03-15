
  //Objetos
 
const propiedades = [
  {id: 1, tipo: "venta", nombre: "Apartamento de lujo en zona exclusiva", descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial", ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678", habitaciones: 4, baños: 4, precio: 5000, fumar: false, mascotas: false, imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg" },
  {id: 2, tipo: "venta", nombre: "Apartamento acogedor en la montaña", descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas", ubicacion: "789 Mountain Road, Summit Peaks, CA 23456", habitaciones: 2, baños: 1, precio: 1200, fumar: true, mascotas: true, imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg" },
  {id: 3, tipo: "venta", nombre: "Penthouse de lujo con terraza panorámica", descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares", ubicacion: "567 Skyline Avenue, Skyview City, CA 56789", habitaciones: 3, baños: 3, precio: 4500, fumar: false, mascotas: true, imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg"},
  {id: 4, tipo: "venta", nombre: "Departamento con vista al mar", descripcion: "Este departamento ofrece una vista impresionante al mar", ubicacion: "287 Ocean Avenue, Seaside Town, CA 56789", habitaciones: 5, baños: 4, precio: 3900, fumar: false, mascotas: true, imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/539129600.jpg?k=ff0e7c46923fc5bf29acd8dc2571e34d017984670b72395b8d35bd2339beb266&o="},
  {id: 5, tipo: "venta", nombre: "Casa de campo con jardín y piscina", descripcion: "Esta encantadora casa de campo cuenta con un amplio jardín y una piscina privada", ubicacion: "321 Country Lane, Countryside, CA 67890", habitaciones: 5, baños: 4, precio: 3500, fumar: true, mascotas: false, imagen: "https://content.elmueble.com/medio/2022/05/17/jardin-en-dos-niveles-con-comedor-bajo-el-porche-y-piscina-00482273_e0082673_2000x1333.jpg"},
  {id: 6, tipo: "venta", nombre: "Villa minimalista con jardín zen", descripcion: "Villa moderna con jardín zen y acabados de lujo", ubicacion: "88 Zen Street, Modern District, CA 91011", habitaciones: 4, baños: 3, precio: 4200, fumar: false, mascotas: true, imagen: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2000&q=80"},
  {id: 7, tipo: "venta", nombre: "Casa urbana con terraza", descripcion: "Casa urbana con terraza amplia y rooftop con vista al skyline", ubicacion: "12 City Plaza, Urban Center, CA 77665", habitaciones: 3, baños: 2, precio: 3300, fumar: false, mascotas: true, imagen: "https://www.arkitectureonweb.com/o/adaptive-media/image/7468551/newsletter-1/59068-main_5273-1_59068_sc_v2com.jpg?t=1599564104909"},
  {id: 8, tipo: "venta", nombre: "Loft industrial renovado", descripcion: "Loft con estilo industrial, techos altos y ventanas panorámicas", ubicacion: "99 Warehouse Street, Downtown, CA 22334", habitaciones: 2, baños: 2, precio: 2900, fumar: false, mascotas: false, imagen: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80"},
  {id: 9, tipo: "alquiler", nombre: "Apartamento en el centro de la ciudad", descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.", ubicacion: "123 Main Street, Anytown, CA 91234", habitaciones: 2, baños: 2, precio: 2000, fumar: false, mascotas: true, imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"},
  {id: 10, tipo: "alquiler", nombre: "Apartamento luminoso con vista al mar", descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar", ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789", habitaciones: 3, baños: 3, precio: 2500, fumar: true, mascotas: true, imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"},
  {id: 11,tipo: "alquiler", nombre: "Condominio moderno en zona residencial", descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial", ubicacion: "123 Main Street, Anytown, CA 91234", habitaciones: 2, baños: 2, precio: 2200, fumar: false, mascotas: false, imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"},
  {id: 12, tipo: "alquiler", nombre: "Casa de campo con jardín y piscina", descripcion: "Esta encantadora casa de campo cuenta con un amplio jardín y una piscina privada", ubicacion: "321 Country Lane, Countryside, CA 67890", habitaciones: 5, baños: 4, precio: 3500, fumar: true, mascotas: false, imagen: "https://content.elmueble.com/medio/2022/05/17/jardin-en-dos-niveles-con-comedor-bajo-el-porche-y-piscina-00482273_e0082673_2000x1333.jpg"},
  {id: 13, tipo: "alquiler", nombre: "Estudio ejecutivo céntrico", descripcion: "Estudio ejecutivo equipado, ideal para profesionales", ubicacion: "77 Business Ave, Citycore, CA 12345", habitaciones: 1, baños: 1, precio: 1800, fumar: false, mascotas: false, imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/477757005.jpg?k=ed6f2909e962bd9611fea96707620825956498bf557d9f8a4fd0a6b37c2d6ebc&o="},
  {id: 14, tipo: "alquiler", nombre: "Apartamento con gimnasio incluido", descripcion: "Apartamento moderno con acceso a gimnasio y piscina", ubicacion: "14 Health Street, Fit District, CA 33445", habitaciones: 2, baños: 2, precio: 2600, fumar: false, mascotas: true, imagen: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2000&q=80"},
  {id: 15, tipo: "alquiler", nombre: "Casa familiar en zona tranquila", descripcion: "Casa ideal para familias con patio amplio y seguridad 24/7", ubicacion: "222 Family Road, Quiet Hills, CA 88900", habitaciones: 4, baños: 3, precio: 3200, fumar: false, mascotas: true, imagen: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2000&q=80"},
  {id: 16, tipo: "alquiler", nombre: "Apartamento con vista a la ciudad", descripcion: "Apartamento moderno con vistas panorámicas al skyline de la ciudad", ubicacion: "88 Skyline Avenue, Downtown, CA 56789", habitaciones: 3, baños: 2, precio: 2800, fumar: false, mascotas: false, imagen: "https://thumbs.dreamstime.com/b/apartamento-de-lujo-con-vista-la-ciudad-al-atardecer-vistas-panor%C3%A1micas-sereno-un-moderno-sof%C3%A1-seccional-%C3%A1rbol-interior-e-376580433.jpg"}
];

//Funcion que renderiza tarjetas
function renderizar(containerId, tipo, limite = false) {
    const contenedor = document.getElementById(containerId);
    if (!contenedor) return; // Escudo: evita errores si el ID no existe en esta página

    let lista = propiedades.filter(p => p.tipo === tipo);
    if (limite) lista = lista.slice(0, 3);

    contenedor.innerHTML = lista.map(p => crearTarjeta(p)).join('');
}

//plantilla de tarjeta para cada objeto
function crearTarjeta(p) {
    return `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
          <p class="card-text">${p.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${p.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${p.habitaciones} Hab | <i class="fas fa-bath"></i> ${p.baños} Baños</p>
          <p><i class="fas fa-dollar-sign"></i> ${p.precio.toLocaleString()}</p>
          <p class="${p.fumar ? 'text-success' : 'text-danger'}">
            <i class="fas ${p.fumar ? 'fa-smoking' : 'fa-smoking-ban'}"></i> ${p.fumar ? 'Permitido' : 'No fumar'}
          </p>
          <p class="${p.mascotas ? 'text-success' : 'text-danger'}">
            <i class="fas ${p.mascotas ? 'fa-paw' : 'fa-ban'}"></i> ${p.mascotas ? 'Mascotas OK' : 'No mascotas'}
          </p>
        </div>
      </div>
    </div>`;
}

//ejecución al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const isIndex = path.endsWith('/') || path.includes('index.html');

    if (document.getElementById('venta-container')) {
        renderizar('venta-container', 'venta', isIndex);
    }
    if (document.getElementById('alquiler-container')) {
        renderizar('alquiler-container', 'alquiler', isIndex);
    }
});