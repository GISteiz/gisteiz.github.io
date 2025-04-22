// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-portada",
    title: "Portada",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-servicios",
          title: "Servicios",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/servicios/";
          },
        },{id: "nav-proyectos",
          title: "Proyectos",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/proyectos/";
          },
        },{id: "nav-repositorios",
          title: "Repositorios",
          description: "Intentamos fomentar el uso de tecnología libre, accede al código de nuestros proyectos y colabora o reutilízalos a tu manera.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositorios/";
          },
        },{id: "projects-unhcr-borehole-database",
          title: 'UNHCR Borehole Database',
          description: "Aplicación para el monitoreo de la situación de pozos de agua apoyados por ACNUR.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2016_unhcr_borehole_db/";
            },},{id: "projects-unhcr-balanced-score-card",
          title: 'UNHCR Balanced Score Card',
          description: "Aplicación para el monitoreo de la calidad de los servicios en centros de salud apoyados por ACNUR.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2018_unhcr_balanced_score_card/";
            },},{id: "projects-subvenciones-en-euskadi",
          title: 'Subvenciones en Euskadi',
          description: "Visualizador de datos obtenidos de la API de subvenciones concedidas del portal Open Data Euskadi.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024_subvenciones_euskadi/";
            },},{id: "projects-icrc-gis-resource-center",
          title: 'ICRC GIS Resource Center',
          description: "Web de productos y servicios ofrecidos por el equipo SIG del Comité Internacional de la Cruz Roja (CICR).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/z_2014_icrc_gis_resource_center/";
            },},{id: "projects-icrc-wathab-project-dashboard",
          title: 'ICRC Wathab Project Dashboard',
          description: "Visualización interactiva y buscador de proyectos desarrollado para departamento Water and Habitat del Comité Internacional de la Cruz Roja (CICR).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/z_2014_icrc_wathab_dashboard/";
            },},{id: "projects-events-monitoring-tool",
          title: 'Events Monitoring Tool',
          description: "Herramienta de monitorización de eventos violentos en Ucrania (2014-2015).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/z_2015_emot/";
            },},{id: "projects-icrc-wathab-sector-dashboard",
          title: 'ICRC Wathab Sector Dashboard',
          description: "Visualización interactiva de datos cuantitativos desarrollado para departamento Water and Habitat del Comité Internacional de la Cruz Roja (CICR).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/z_2015_icrc_wathab_sector_dashboard/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6D%6F%72%65%6E%6F.%74%70@%70%6D.%6D%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gisteiz", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
