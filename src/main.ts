import Basemap from "esri/Basemap";
import Extent from "esri/geometry/Extent";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import BasemapGallery from "esri/widgets/BasemapGallery";
import LocalBasemapsSource from "esri/widgets/BasemapGallery/support/LocalBasemapsSource";
// import PortalBasemapsSource from "esri/widgets/BasemapGallery/support/PortalBasemapsSource";

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

// Create WSDOT Basemap object.
// A basemap with a tiled layer needs to be the initial basemap to set up LODs
const wsdotBasemapId = "9912b618413b421da251384acb70218f";
const wsdotBasemap = new Basemap({
  portalItem: {
    id: wsdotBasemapId
  }
});

// Create the map
const map = new EsriMap({
  basemap: wsdotBasemap
});

// Create view of the map.
const view = new MapView({
  center: extent.center,
  container: "map",
  map,
  zoom: 0 // Since the map's init. basemap is WSDOT's, the most zoomed-out LOD is 0. It would need to be a different value if using one of Esri's services.
});

// Problem with this group ID.
// const esriVectorBMGroupId = "30de8da907d240a0bccd5ad3ff25ef4a";
// const source = new PortalBasemapsSource({
//   query: {
//     id: wsdotBridgeBMGroupId
//   }
// });

// Individually specify basemaps' portal IDs to work around group permission issue.
const basemaps = [
  "5d2bfa736f8448b3a1708e1f6be23eed", // OpenStreetMap
  // "d8855ee4d3d74413babfb0f41203b168", // Streets
  "55ebf90799fa4a3fa57562700a68c405", // Streets (vector)
  "86265e5a4bbb4187a59719cf134e0018" // Imagery Hybrid
].map(id => {
  return { portalItem: { id } };
});

// Add the previously created WSDOT basemap object to the array of basemaps.
basemaps.push(wsdotBasemap);

// Create a basemap source object to use with the basemap gallery.
const source = new LocalBasemapsSource({ basemaps });

// Create the basemap gallery for the map view.
const basemapGallery = new BasemapGallery({
  container: "basemapGallery",
  source,
  view
});

// Add the basemap gallery widget to the view's UI.
basemapGallery.view.ui.add(basemapGallery, "top-right");
