import BasemapGallery from "esri/dijit/BasemapGallery";
import Extent from "esri/geometry/Extent";
import EsriMap from "esri/map";

/**
 * Extent of WA.
 * @see https://epsg.io/1416-area
 */
const extent = new Extent({
  xmin: -124.79,
  ymin: 45.54,
  xmax: -116.91,
  ymax: 49.05
});

const map = new EsriMap("map", {
  basemap: "streets",
  center: extent.getCenter(),
  zoom: 7
});

// add the basemap gallery, in this case we'll display maps from ArcGIS.com including bing maps
const basemapGallery = new BasemapGallery(
  {
    showArcGISBasemaps: false,
    basemapsGroup: { id: "a89e08f2cc584e55a23b76fa7c9b8618" },
    map
  },
  "basemapGallery"
);
basemapGallery.startup();

basemapGallery.on("load", ({ target }) => {
  // Select the Streets basemap to match the basemap loaded prior to the Basemap Gallery's creation.
  const basemaps = target.basemaps.filter(bm => bm.title.match(/^Streets$/));
  if (basemaps && basemaps.length) {
    target.select(basemaps[0].id);
  }
});

basemapGallery.on("error", msg => {
  // tslint:disable-next-line:no-console
  console.log("basemap gallery error:  ", msg);
});
