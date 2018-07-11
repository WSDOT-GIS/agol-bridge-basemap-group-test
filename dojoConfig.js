/**
 * Setups dojo configuration.
 */

window.dojoConfig = {
    packages: [
        {
            name: "app",
            // Replace v0_00 path (with optional ".html" extension) with "dist".
            location: location.href.replace(/([^\/][\d_]+)+(.html?)?$/, "") + "dist"
        }
    ]
}