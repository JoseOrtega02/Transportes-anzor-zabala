export const propiertyMap = {
  url: `https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=${
    import.meta.env.VITE_MAPTILER_KEY
  }`,
  attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
};
