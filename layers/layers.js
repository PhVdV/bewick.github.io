var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Beewick01092020maintenant_1 = new ol.format.GeoJSON();
var features_Beewick01092020maintenant_1 = format_Beewick01092020maintenant_1.readFeatures(json_Beewick01092020maintenant_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beewick01092020maintenant_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beewick01092020maintenant_1.addFeatures(features_Beewick01092020maintenant_1);
var lyr_Beewick01092020maintenant_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beewick01092020maintenant_1, 
                style: style_Beewick01092020maintenant_1,
                interactive: true,
    title: 'Beewick 01/09/2020 à maintenant<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_0.png" /> 190995<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_1.png" /> 191002<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_2.png" /> 191010<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_3.png" /> 191013<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_4.png" /> 191017<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_5.png" /> 191019<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_6.png" /> 191020<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_7.png" /> 191022<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_8.png" /> 191025<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_9.png" /> 191026<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_10.png" /> 191027<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_11.png" /> 191028<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_12.png" /> 191032<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_13.png" /> 191033<br />\
    <img src="styles/legend/Beewick01092020maintenant_1_14.png" /> 191034<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Beewick01092020maintenant_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Beewick01092020maintenant_1];
lyr_Beewick01092020maintenant_1.set('fieldAliases', {'id': 'id', 'device_id': 'device_id', 'UTC_datetime': 'UTC_datetime', });
lyr_Beewick01092020maintenant_1.set('fieldImages', {'id': 'TextEdit', 'device_id': 'TextEdit', 'UTC_datetime': 'DateTime', });
lyr_Beewick01092020maintenant_1.set('fieldLabels', {'id': 'no label', 'device_id': 'inline label', 'UTC_datetime': 'inline label', });
lyr_Beewick01092020maintenant_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});