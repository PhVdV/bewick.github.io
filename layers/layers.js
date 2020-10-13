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
var format_Bewick2020Septembre_1 = new ol.format.GeoJSON();
var features_Bewick2020Septembre_1 = format_Bewick2020Septembre_1.readFeatures(json_Bewick2020Septembre_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bewick2020Septembre_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bewick2020Septembre_1.addFeatures(features_Bewick2020Septembre_1);
var lyr_Bewick2020Septembre_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bewick2020Septembre_1, 
                style: style_Bewick2020Septembre_1,
                interactive: true,
    title: 'Bewick 2020 Septembre<br />\
    <img src="styles/legend/Bewick2020Septembre_1_0.png" /> 190995<br />\
    <img src="styles/legend/Bewick2020Septembre_1_1.png" /> 191002<br />\
    <img src="styles/legend/Bewick2020Septembre_1_2.png" /> 191010<br />\
    <img src="styles/legend/Bewick2020Septembre_1_3.png" /> 191013<br />\
    <img src="styles/legend/Bewick2020Septembre_1_4.png" /> 191017<br />\
    <img src="styles/legend/Bewick2020Septembre_1_5.png" /> 191019<br />\
    <img src="styles/legend/Bewick2020Septembre_1_6.png" /> 191020<br />\
    <img src="styles/legend/Bewick2020Septembre_1_7.png" /> 191022<br />\
    <img src="styles/legend/Bewick2020Septembre_1_8.png" /> 191025<br />\
    <img src="styles/legend/Bewick2020Septembre_1_9.png" /> 191026<br />\
    <img src="styles/legend/Bewick2020Septembre_1_10.png" /> 191027<br />\
    <img src="styles/legend/Bewick2020Septembre_1_11.png" /> 191028<br />\
    <img src="styles/legend/Bewick2020Septembre_1_12.png" /> 191032<br />\
    <img src="styles/legend/Bewick2020Septembre_1_13.png" /> 191033<br />\
    <img src="styles/legend/Bewick2020Septembre_1_14.png" /> 191034<br />'
        });
var format_Bewick2020Aot_2 = new ol.format.GeoJSON();
var features_Bewick2020Aot_2 = format_Bewick2020Aot_2.readFeatures(json_Bewick2020Aot_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bewick2020Aot_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bewick2020Aot_2.addFeatures(features_Bewick2020Aot_2);
var lyr_Bewick2020Aot_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bewick2020Aot_2, 
                style: style_Bewick2020Aot_2,
                interactive: true,
    title: 'Bewick 2020 Août<br />\
    <img src="styles/legend/Bewick2020Aot_2_0.png" /> 190995<br />\
    <img src="styles/legend/Bewick2020Aot_2_1.png" /> 191002<br />\
    <img src="styles/legend/Bewick2020Aot_2_2.png" /> 191010<br />\
    <img src="styles/legend/Bewick2020Aot_2_3.png" /> 191013<br />\
    <img src="styles/legend/Bewick2020Aot_2_4.png" /> 191017<br />\
    <img src="styles/legend/Bewick2020Aot_2_5.png" /> 191019<br />\
    <img src="styles/legend/Bewick2020Aot_2_6.png" /> 191020<br />\
    <img src="styles/legend/Bewick2020Aot_2_7.png" /> 191022<br />\
    <img src="styles/legend/Bewick2020Aot_2_8.png" /> 191025<br />\
    <img src="styles/legend/Bewick2020Aot_2_9.png" /> 191026<br />\
    <img src="styles/legend/Bewick2020Aot_2_10.png" /> 191027<br />\
    <img src="styles/legend/Bewick2020Aot_2_11.png" /> 191028<br />\
    <img src="styles/legend/Bewick2020Aot_2_12.png" /> 191032<br />\
    <img src="styles/legend/Bewick2020Aot_2_13.png" /> 191033<br />\
    <img src="styles/legend/Bewick2020Aot_2_14.png" /> 191034<br />'
        });
var format_Bewick2020Juillet_3 = new ol.format.GeoJSON();
var features_Bewick2020Juillet_3 = format_Bewick2020Juillet_3.readFeatures(json_Bewick2020Juillet_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bewick2020Juillet_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bewick2020Juillet_3.addFeatures(features_Bewick2020Juillet_3);
var lyr_Bewick2020Juillet_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bewick2020Juillet_3, 
                style: style_Bewick2020Juillet_3,
                interactive: true,
    title: 'Bewick 2020 Juillet<br />\
    <img src="styles/legend/Bewick2020Juillet_3_0.png" /> 190995<br />\
    <img src="styles/legend/Bewick2020Juillet_3_1.png" /> 191002<br />\
    <img src="styles/legend/Bewick2020Juillet_3_2.png" /> 191010<br />\
    <img src="styles/legend/Bewick2020Juillet_3_3.png" /> 191013<br />\
    <img src="styles/legend/Bewick2020Juillet_3_4.png" /> 191017<br />\
    <img src="styles/legend/Bewick2020Juillet_3_5.png" /> 191019<br />\
    <img src="styles/legend/Bewick2020Juillet_3_6.png" /> 191020<br />\
    <img src="styles/legend/Bewick2020Juillet_3_7.png" /> 191022<br />\
    <img src="styles/legend/Bewick2020Juillet_3_8.png" /> 191025<br />\
    <img src="styles/legend/Bewick2020Juillet_3_9.png" /> 191026<br />\
    <img src="styles/legend/Bewick2020Juillet_3_10.png" /> 191027<br />\
    <img src="styles/legend/Bewick2020Juillet_3_11.png" /> 191028<br />\
    <img src="styles/legend/Bewick2020Juillet_3_12.png" /> 191032<br />\
    <img src="styles/legend/Bewick2020Juillet_3_13.png" /> 191033<br />\
    <img src="styles/legend/Bewick2020Juillet_3_14.png" /> 191034<br />'
        });
var format_Bewick2020Juin_4 = new ol.format.GeoJSON();
var features_Bewick2020Juin_4 = format_Bewick2020Juin_4.readFeatures(json_Bewick2020Juin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bewick2020Juin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bewick2020Juin_4.addFeatures(features_Bewick2020Juin_4);
var lyr_Bewick2020Juin_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bewick2020Juin_4, 
                style: style_Bewick2020Juin_4,
                interactive: true,
    title: 'Bewick 2020 Juin<br />\
    <img src="styles/legend/Bewick2020Juin_4_0.png" /> 190995<br />\
    <img src="styles/legend/Bewick2020Juin_4_1.png" /> 191002<br />\
    <img src="styles/legend/Bewick2020Juin_4_2.png" /> 191010<br />\
    <img src="styles/legend/Bewick2020Juin_4_3.png" /> 191013<br />\
    <img src="styles/legend/Bewick2020Juin_4_4.png" /> 191017<br />\
    <img src="styles/legend/Bewick2020Juin_4_5.png" /> 191019<br />\
    <img src="styles/legend/Bewick2020Juin_4_6.png" /> 191020<br />\
    <img src="styles/legend/Bewick2020Juin_4_7.png" /> 191022<br />\
    <img src="styles/legend/Bewick2020Juin_4_8.png" /> 191025<br />\
    <img src="styles/legend/Bewick2020Juin_4_9.png" /> 191026<br />\
    <img src="styles/legend/Bewick2020Juin_4_10.png" /> 191027<br />\
    <img src="styles/legend/Bewick2020Juin_4_11.png" /> 191028<br />\
    <img src="styles/legend/Bewick2020Juin_4_12.png" /> 191032<br />\
    <img src="styles/legend/Bewick2020Juin_4_13.png" /> 191033<br />\
    <img src="styles/legend/Bewick2020Juin_4_14.png" /> 191034<br />'
        });
var format_Bewick2020Mai_5 = new ol.format.GeoJSON();
var features_Bewick2020Mai_5 = format_Bewick2020Mai_5.readFeatures(json_Bewick2020Mai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bewick2020Mai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bewick2020Mai_5.addFeatures(features_Bewick2020Mai_5);
var lyr_Bewick2020Mai_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bewick2020Mai_5, 
                style: style_Bewick2020Mai_5,
                interactive: true,
    title: 'Bewick 2020 Mai<br />\
    <img src="styles/legend/Bewick2020Mai_5_0.png" /> 190995<br />\
    <img src="styles/legend/Bewick2020Mai_5_1.png" /> 191002<br />\
    <img src="styles/legend/Bewick2020Mai_5_2.png" /> 191010<br />\
    <img src="styles/legend/Bewick2020Mai_5_3.png" /> 191013<br />\
    <img src="styles/legend/Bewick2020Mai_5_4.png" /> 191017<br />\
    <img src="styles/legend/Bewick2020Mai_5_5.png" /> 191019<br />\
    <img src="styles/legend/Bewick2020Mai_5_6.png" /> 191020<br />\
    <img src="styles/legend/Bewick2020Mai_5_7.png" /> 191022<br />\
    <img src="styles/legend/Bewick2020Mai_5_8.png" /> 191025<br />\
    <img src="styles/legend/Bewick2020Mai_5_9.png" /> 191026<br />\
    <img src="styles/legend/Bewick2020Mai_5_10.png" /> 191027<br />\
    <img src="styles/legend/Bewick2020Mai_5_11.png" /> 191028<br />\
    <img src="styles/legend/Bewick2020Mai_5_12.png" /> 191032<br />\
    <img src="styles/legend/Bewick2020Mai_5_13.png" /> 191033<br />\
    <img src="styles/legend/Bewick2020Mai_5_14.png" /> 191034<br />'
        });
var format_Bewick2020Avril_6 = new ol.format.GeoJSON();
var features_Bewick2020Avril_6 = format_Bewick2020Avril_6.readFeatures(json_Bewick2020Avril_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bewick2020Avril_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bewick2020Avril_6.addFeatures(features_Bewick2020Avril_6);
var lyr_Bewick2020Avril_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bewick2020Avril_6, 
                style: style_Bewick2020Avril_6,
                interactive: true,
    title: 'Bewick 2020 Avril<br />\
    <img src="styles/legend/Bewick2020Avril_6_0.png" /> 190995<br />\
    <img src="styles/legend/Bewick2020Avril_6_1.png" /> 191002<br />\
    <img src="styles/legend/Bewick2020Avril_6_2.png" /> 191010<br />\
    <img src="styles/legend/Bewick2020Avril_6_3.png" /> 191013<br />\
    <img src="styles/legend/Bewick2020Avril_6_4.png" /> 191017<br />\
    <img src="styles/legend/Bewick2020Avril_6_5.png" /> 191019<br />\
    <img src="styles/legend/Bewick2020Avril_6_6.png" /> 191020<br />\
    <img src="styles/legend/Bewick2020Avril_6_7.png" /> 191022<br />\
    <img src="styles/legend/Bewick2020Avril_6_8.png" /> 191025<br />\
    <img src="styles/legend/Bewick2020Avril_6_9.png" /> 191026<br />\
    <img src="styles/legend/Bewick2020Avril_6_10.png" /> 191027<br />\
    <img src="styles/legend/Bewick2020Avril_6_11.png" /> 191028<br />\
    <img src="styles/legend/Bewick2020Avril_6_12.png" /> 191032<br />\
    <img src="styles/legend/Bewick2020Avril_6_13.png" /> 191033<br />\
    <img src="styles/legend/Bewick2020Avril_6_14.png" /> 191034<br />'
        });
var format_Bewick2020Mars_7 = new ol.format.GeoJSON();
var features_Bewick2020Mars_7 = format_Bewick2020Mars_7.readFeatures(json_Bewick2020Mars_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bewick2020Mars_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bewick2020Mars_7.addFeatures(features_Bewick2020Mars_7);
var lyr_Bewick2020Mars_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bewick2020Mars_7, 
                style: style_Bewick2020Mars_7,
                interactive: true,
    title: 'Bewick 2020 Mars<br />\
    <img src="styles/legend/Bewick2020Mars_7_0.png" /> 190995<br />\
    <img src="styles/legend/Bewick2020Mars_7_1.png" /> 191002<br />\
    <img src="styles/legend/Bewick2020Mars_7_2.png" /> 191010<br />\
    <img src="styles/legend/Bewick2020Mars_7_3.png" /> 191013<br />\
    <img src="styles/legend/Bewick2020Mars_7_4.png" /> 191017<br />\
    <img src="styles/legend/Bewick2020Mars_7_5.png" /> 191019<br />\
    <img src="styles/legend/Bewick2020Mars_7_6.png" /> 191020<br />\
    <img src="styles/legend/Bewick2020Mars_7_7.png" /> 191022<br />\
    <img src="styles/legend/Bewick2020Mars_7_8.png" /> 191025<br />\
    <img src="styles/legend/Bewick2020Mars_7_9.png" /> 191026<br />\
    <img src="styles/legend/Bewick2020Mars_7_10.png" /> 191027<br />\
    <img src="styles/legend/Bewick2020Mars_7_11.png" /> 191028<br />\
    <img src="styles/legend/Bewick2020Mars_7_12.png" /> 191032<br />\
    <img src="styles/legend/Bewick2020Mars_7_13.png" /> 191033<br />\
    <img src="styles/legend/Bewick2020Mars_7_14.png" /> 191034<br />'
        });
var format_Bewick2020Fvrier_8 = new ol.format.GeoJSON();
var features_Bewick2020Fvrier_8 = format_Bewick2020Fvrier_8.readFeatures(json_Bewick2020Fvrier_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bewick2020Fvrier_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bewick2020Fvrier_8.addFeatures(features_Bewick2020Fvrier_8);
var lyr_Bewick2020Fvrier_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bewick2020Fvrier_8, 
                style: style_Bewick2020Fvrier_8,
                interactive: true,
    title: 'Bewick 2020 Février<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_0.png" /> 190995<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_1.png" /> 191002<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_2.png" /> 191010<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_3.png" /> 191013<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_4.png" /> 191017<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_5.png" /> 191019<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_6.png" /> 191020<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_7.png" /> 191022<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_8.png" /> 191025<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_9.png" /> 191026<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_10.png" /> 191027<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_11.png" /> 191028<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_12.png" /> 191032<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_13.png" /> 191033<br />\
    <img src="styles/legend/Bewick2020Fvrier_8_14.png" /> 191034<br />'
        });
var format_Bewick2020Janvier_9 = new ol.format.GeoJSON();
var features_Bewick2020Janvier_9 = format_Bewick2020Janvier_9.readFeatures(json_Bewick2020Janvier_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bewick2020Janvier_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bewick2020Janvier_9.addFeatures(features_Bewick2020Janvier_9);
var lyr_Bewick2020Janvier_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bewick2020Janvier_9, 
                style: style_Bewick2020Janvier_9,
                interactive: true,
    title: 'Bewick 2020 Janvier<br />\
    <img src="styles/legend/Bewick2020Janvier_9_0.png" /> 190995<br />\
    <img src="styles/legend/Bewick2020Janvier_9_1.png" /> 191002<br />\
    <img src="styles/legend/Bewick2020Janvier_9_2.png" /> 191010<br />\
    <img src="styles/legend/Bewick2020Janvier_9_3.png" /> 191013<br />\
    <img src="styles/legend/Bewick2020Janvier_9_4.png" /> 191017<br />\
    <img src="styles/legend/Bewick2020Janvier_9_5.png" /> 191019<br />\
    <img src="styles/legend/Bewick2020Janvier_9_6.png" /> 191020<br />\
    <img src="styles/legend/Bewick2020Janvier_9_7.png" /> 191022<br />\
    <img src="styles/legend/Bewick2020Janvier_9_8.png" /> 191025<br />\
    <img src="styles/legend/Bewick2020Janvier_9_9.png" /> 191026<br />\
    <img src="styles/legend/Bewick2020Janvier_9_10.png" /> 191027<br />\
    <img src="styles/legend/Bewick2020Janvier_9_11.png" /> 191028<br />\
    <img src="styles/legend/Bewick2020Janvier_9_12.png" /> 191032<br />\
    <img src="styles/legend/Bewick2020Janvier_9_13.png" /> 191033<br />\
    <img src="styles/legend/Bewick2020Janvier_9_14.png" /> 191034<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Bewick2020Septembre_1.setVisible(false);lyr_Bewick2020Aot_2.setVisible(false);lyr_Bewick2020Juillet_3.setVisible(false);lyr_Bewick2020Juin_4.setVisible(false);lyr_Bewick2020Mai_5.setVisible(false);lyr_Bewick2020Avril_6.setVisible(false);lyr_Bewick2020Mars_7.setVisible(false);lyr_Bewick2020Fvrier_8.setVisible(false);lyr_Bewick2020Janvier_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Bewick2020Septembre_1,lyr_Bewick2020Aot_2,lyr_Bewick2020Juillet_3,lyr_Bewick2020Juin_4,lyr_Bewick2020Mai_5,lyr_Bewick2020Avril_6,lyr_Bewick2020Mars_7,lyr_Bewick2020Fvrier_8,lyr_Bewick2020Janvier_9];
lyr_Bewick2020Septembre_1.set('fieldAliases', {'id': 'id', 'device_id': 'device_id', 'jour': 'jour', 'UTC_datetime': 'UTC_datetime', });
lyr_Bewick2020Aot_2.set('fieldAliases', {'id': 'id', 'device_id': 'device_id', 'jour': 'jour', 'UTC_datetime': 'UTC_datetime', });
lyr_Bewick2020Juillet_3.set('fieldAliases', {'id': 'id', 'device_id': 'device_id', 'jour': 'jour', 'UTC_datetime': 'UTC_datetime', });
lyr_Bewick2020Juin_4.set('fieldAliases', {'id': 'id', 'device_id': 'device_id', 'jour': 'jour', 'UTC_datetime': 'UTC_datetime', });
lyr_Bewick2020Mai_5.set('fieldAliases', {'id': 'id', 'device_id': 'device_id', 'jour': 'jour', 'UTC_datetime': 'UTC_datetime', });
lyr_Bewick2020Avril_6.set('fieldAliases', {'id': 'id', 'device_id': 'device_id', 'jour': 'jour', 'UTC_datetime': 'UTC_datetime', });
lyr_Bewick2020Mars_7.set('fieldAliases', {'id': 'id', 'device_id': 'device_id', 'jour': 'jour', 'UTC_datetime': 'UTC_datetime', });
lyr_Bewick2020Fvrier_8.set('fieldAliases', {'id': 'id', 'device_id': 'device_id', 'jour': 'jour', 'UTC_datetime': 'UTC_datetime', });
lyr_Bewick2020Janvier_9.set('fieldAliases', {'id': 'id', 'device_id': 'device_id', 'jour': 'jour', 'UTC_datetime': 'UTC_datetime', });
lyr_Bewick2020Septembre_1.set('fieldImages', {'id': 'TextEdit', 'device_id': 'TextEdit', 'jour': 'TextEdit', 'UTC_datetime': 'DateTime', });
lyr_Bewick2020Aot_2.set('fieldImages', {'id': 'TextEdit', 'device_id': 'TextEdit', 'jour': 'TextEdit', 'UTC_datetime': 'DateTime', });
lyr_Bewick2020Juillet_3.set('fieldImages', {'id': 'TextEdit', 'device_id': 'TextEdit', 'jour': 'TextEdit', 'UTC_datetime': 'DateTime', });
lyr_Bewick2020Juin_4.set('fieldImages', {'id': 'TextEdit', 'device_id': 'TextEdit', 'jour': 'TextEdit', 'UTC_datetime': 'DateTime', });
lyr_Bewick2020Mai_5.set('fieldImages', {'id': 'TextEdit', 'device_id': 'TextEdit', 'jour': 'TextEdit', 'UTC_datetime': 'DateTime', });
lyr_Bewick2020Avril_6.set('fieldImages', {'id': 'TextEdit', 'device_id': 'TextEdit', 'jour': 'TextEdit', 'UTC_datetime': 'DateTime', });
lyr_Bewick2020Mars_7.set('fieldImages', {'id': 'TextEdit', 'device_id': 'TextEdit', 'jour': 'TextEdit', 'UTC_datetime': 'DateTime', });
lyr_Bewick2020Fvrier_8.set('fieldImages', {'id': 'TextEdit', 'device_id': 'TextEdit', 'jour': 'TextEdit', 'UTC_datetime': 'DateTime', });
lyr_Bewick2020Janvier_9.set('fieldImages', {'id': 'TextEdit', 'device_id': 'TextEdit', 'jour': 'TextEdit', 'UTC_datetime': 'DateTime', });
lyr_Bewick2020Septembre_1.set('fieldLabels', {'id': 'inline label', 'device_id': 'inline label', 'jour': 'inline label', 'UTC_datetime': 'inline label', });
lyr_Bewick2020Aot_2.set('fieldLabels', {'id': 'inline label', 'device_id': 'inline label', 'jour': 'inline label', 'UTC_datetime': 'inline label', });
lyr_Bewick2020Juillet_3.set('fieldLabels', {'id': 'inline label', 'device_id': 'inline label', 'jour': 'inline label', 'UTC_datetime': 'inline label', });
lyr_Bewick2020Juin_4.set('fieldLabels', {'id': 'inline label', 'device_id': 'inline label', 'jour': 'inline label', 'UTC_datetime': 'inline label', });
lyr_Bewick2020Mai_5.set('fieldLabels', {'id': 'inline label', 'device_id': 'inline label', 'jour': 'inline label', 'UTC_datetime': 'inline label', });
lyr_Bewick2020Avril_6.set('fieldLabels', {'id': 'inline label', 'device_id': 'inline label', 'jour': 'inline label', 'UTC_datetime': 'inline label', });
lyr_Bewick2020Mars_7.set('fieldLabels', {'id': 'inline label', 'device_id': 'inline label', 'jour': 'inline label', 'UTC_datetime': 'inline label', });
lyr_Bewick2020Fvrier_8.set('fieldLabels', {'id': 'inline label', 'device_id': 'inline label', 'jour': 'inline label', 'UTC_datetime': 'inline label', });
lyr_Bewick2020Janvier_9.set('fieldLabels', {'id': 'inline label', 'device_id': 'inline label', 'jour': 'inline label', 'UTC_datetime': 'inline label', });
lyr_Bewick2020Janvier_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});