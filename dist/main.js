var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/config", "esri/dijit/BasemapGallery", "esri/geometry/Extent", "esri/map"], function (require, exports, config_1, BasemapGallery_1, Extent_1, map_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    config_1 = __importDefault(config_1);
    BasemapGallery_1 = __importDefault(BasemapGallery_1);
    Extent_1 = __importDefault(Extent_1);
    map_1 = __importDefault(map_1);
    config_1.default.defaults.io.corsEnabledServers.push("data.wsdot.wa.gov");
    /**
     * Extent of WA.
     * @see https://epsg.io/1416-area
     */
    var extent = new Extent_1.default({
        xmin: -124.79,
        ymin: 45.54,
        xmax: -116.91,
        ymax: 49.05
    });
    var map = new map_1.default("map", {
        basemap: "streets",
        center: extent.getCenter(),
        zoom: 7
    });
    // add the basemap gallery, in this case we'll display maps from ArcGIS.com including bing maps
    var basemapGallery = new BasemapGallery_1.default({
        showArcGISBasemaps: false,
        basemapsGroup: { id: "a89e08f2cc584e55a23b76fa7c9b8618" },
        map: map
    }, "basemapGallery");
    basemapGallery.startup();
    basemapGallery.on("load", function (_a) {
        var target = _a.target;
        // Select the Streets basemap to match the basemap loaded prior to the Basemap Gallery's creation.
        var basemaps = target.basemaps.filter(function (bm) { return bm.title.match(/^Streets$/); });
        if (basemaps && basemaps.length) {
            target.select(basemaps[0].id);
        }
    });
    basemapGallery.on("error", function (msg) {
        // tslint:disable-next-line:no-console
        console.log("basemap gallery error:  ", msg);
    });
});
