export const translations = {
  en: {
    appTitle: 'FS25 DEM Expander',

    // Controls
    demPng:          'DEM PNG',
    dropZone:        'Drop 16-bit PNG or click to browse',
    targetSize:      'Target map size',
    placement:       'Placement',
    placementTooltip:'Where the source DEM is placed within the new larger canvas.',
    fillMode:        'New area fill',
    fillModeTooltip: 'How to fill the canvas outside the original DEM.',
    fillFlat:        'Flat',
    fillEdge:        'Edge Extend',
    fillMirror:      'Mirror',
    fillPixelValue:  'Fill value (0–65535)',
    fillPixelTooltip: 'Raw 16-bit pixel value to fill new areas with. 0 = black (lowest point), 65535 = white (highest point).',
    unitsPerPixel:   'Units per pixel',
    uppTooltip:      'Meters of terrain per heightmap pixel. Must match your source map.',

    run:         'Run',
    running:     'Running...',
    downloadZip: 'Download .zip',

    // Log
    activity: 'Activity',
    logEmpty: 'Run to see activity here.',

    // Preview
    preview:       'Preview',
    previewEmpty:  'Upload a DEM PNG to see a placement preview.',
  },

  de: {
    appTitle: 'FS25 DEM Expander',

    demPng:          'DEM PNG',
    dropZone:        '16-Bit PNG ablegen oder klicken',
    targetSize:      'Zielkartengröße',
    placement:       'Platzierung',
    placementTooltip:'Wo das Quell-DEM auf der neuen Leinwand platziert wird.',
    fillMode:        'Füllung neuer Bereiche',
    fillModeTooltip: 'Wie der Bereich außerhalb des Original-DEM gefüllt wird.',
    fillFlat:        'Flach',
    fillEdge:        'Kante verlängern',
    fillMirror:      'Spiegeln',
    fillPixelValue:  'Füllwert (0–65535)',
    fillPixelTooltip: 'Roher 16-Bit Pixelwert für neue Bereiche. 0 = schwarz, 65535 = weiß.',
    unitsPerPixel:   'Einheiten pro Pixel',
    uppTooltip:      'Meter Gelände pro Heightmap-Pixel.',

    run:         'Starten',
    running:     'Läuft...',
    downloadZip: '.zip herunterladen',

    activity: 'Aktivität',
    logEmpty: 'Starten um Aktivität zu sehen.',

    preview:      'Vorschau',
    previewEmpty: 'DEM PNG hochladen für Vorschau.',
  },
}
