const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Boda de Juan Cruz & Carolina",
    // Opening message/description of the invitation
    description:
      "DespuÃ©s de recorrer juntos muchos momentos, decidimos comenzar una nueva etapa. Con mucha felicidad te invitamos a celebrar nuestro matrimonio.",
    // Groom's name
    groomName: "Carolina",
    // Bride's name
    brideName: "Juan Cruz",
    // Groom's parents names
    parentGroom: "Padre del Novio & Madre del Novio",
    // Bride's parents names
    parentBride: "Padre de la Novia & Madre de la Novia",
    // Wedding date (format: YYYY-MM-DD)
    date: "2026-06-19",
    // Wedding time
    time: "18:00",
    // Relationship start date (for the counter)
    anniversaryDate: "2007-09-14T18:00:00",
    // List of venues (Church, Salon, etc.)
    venues: [
      {
        name: "Casamiento Civil",
        location: "Registro Civil Central",
        address: "Uruguay 753, C1015 Cdad. Autónoma de Buenos Aires",
        time: "18:00 hrs",
        maps_url:
          "https://maps.app.goo.gl/t2jRettJVgm96v9z9",
        maps_embed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.166940869528!2d-58.38896178778977!3d-34.59993987284292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac70d526ae3%3A0x37aa9757a93e89f0!2sRegistro%20Civil%20Central!5e0!3m2!1ses-419!2sar!4v1777390300826!5m2!1ses-419!2sar",
      },
      {
        name: "Fiesta y Celebración",
        location: "La Colonial",
        address: "Morón 2544, C1406FVF Cdad. Autónoma de Buenos Aires",
        time: "19:00 hrs",
        maps_url:
          "https://maps.app.goo.gl/Qf6kC9vg9DaPdcrFA?g_st=iw",
        maps_embed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000!2d-66.34732950703284!3d-33.6264150810466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc98b4f29377f%3A0xb083c728fa3ca7eb!2sLa%20Colonial%20Eventos!5e0!3m2!1ses-419!2sar!4v1777390264875!5m2!1ses-419!2sar",
      },
    ],
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Casamiento Civil",
        // Event date (format: YYYY-MM-DD)
        date: "2026-06-19",
        // Start time (format: HH:MM)
        startTime: "18:00",
        // End time (format: HH:MM)
        endTime: "19:30",
        // Event venue
        location: "Registro Civil Central",
        // Full address
        address: "Uruguay 753, C1015 Cdad. Autónoma de Buenos Aires",
      },
      {
        // Second event name
        title: "Recepción de la Boda",
        date: "2026-06-19",
        startTime: "19:00",
        endTime: "03:00",
        location: "La Colonial",
        address: "Morón 2544, C1406FVF Cdad. Autónoma de Buenos Aires",
      },
      // You can add more agenda items with the same format
    ],
    // Venue photos for the Stack card gallery (salon & iglesia images)
    venuePhotos: [
      {
        image: "/images/salon1.jpeg",
        title: "La Colonial",
        description: "Donde celebraremos juntos esta nueva etapa",
      },
      {
        image: "/images/salon2.jpeg",
        title: "La Colonial",
        description: "Un rincon especial para compartir con familia y amigos",
      },
      {
        image: "/images/salon3.jpeg",
        title: "La Colonial",
        description: "El lugar elegido para brindar por nuestro amor",
      },
      {
        image: "/images/salon4.jpeg",
        title: "La Colonial",
        description: "Una celebracion rodeada de detalles y alegria",
      },
      {
        image: "/images/salon5.jpeg",
        title: "La Colonial",
        description: "Momentos inolvidables en un entorno calido",
      },
      {
        image: "/images/salon6.jpeg",
        title: "La Colonial",
        description: "Cada espacio pensado para celebrar juntos",
      },
      {
        image: "/images/salon7.jpeg",
        title: "La Colonial",
        description: "El escenario de una noche muy especial",
      },
    ],

    // Couple photos for the circular gallery ("Nuestra Historia en Fotos")
    couplePhotos: [
      { image: "/images/juan1.jpeg", alt: "Carolina y Juan" },
      { image: "/images/juan2.jpeg", alt: "Carolina y Juan" },
      { image: "/images/juan3.jpeg", alt: "Carolina y Juan" },
      { image: "/images/juan4.jpeg", alt: "Carolina y Juan" },
      { image: "/images/juan5.jpeg", alt: "Carolina y Juan" },
      { image: "/images/juan6.jpeg", alt: "Carolina y Juan" },
      { image: "/images/juan7.jpeg", alt: "Carolina y Juan" },
      { image: "/images/juan8.jpeg", alt: "Carolina y Juan" },
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/Perfect-(Mr-Jat.in).mp3",
      // Music title to display
      title: "Perfect - Ed Sheeran",
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true,
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        bank: "Mercado Pago",
        accountNumber: "27-33895633-4",
        accountName: "Carolina Noelia Coronel",
        alias: "caritoyjuan05",
        country: "Argentina",
      },
    ],
  },
};

export default config;


