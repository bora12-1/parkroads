var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Yeouido_park_roads_1 = new ol.format.GeoJSON();
var features_Yeouido_park_roads_1 = format_Yeouido_park_roads_1.readFeatures(json_Yeouido_park_roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yeouido_park_roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yeouido_park_roads_1.addFeatures(features_Yeouido_park_roads_1);
var lyr_Yeouido_park_roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yeouido_park_roads_1, 
                style: style_Yeouido_park_roads_1,
                popuplayertitle: 'Yeouido_park_roads',
                interactive: true,
    title: 'Yeouido_park_roads<br />\
    <img src="styles/legend/Yeouido_park_roads_1_0.png" /> 1 - 2<br />\
    <img src="styles/legend/Yeouido_park_roads_1_1.png" /> 2 - 3<br />\
    <img src="styles/legend/Yeouido_park_roads_1_2.png" /> 3 - 4<br />\
    <img src="styles/legend/Yeouido_park_roads_1_3.png" /> 4 - 5<br />\
    <img src="styles/legend/Yeouido_park_roads_1_4.png" /> 5 - 6<br />\
    <img src="styles/legend/Yeouido_park_roads_1_5.png" /> 6 - 7<br />\
    <img src="styles/legend/Yeouido_park_roads_1_6.png" /> 7 - 8<br />\
    <img src="styles/legend/Yeouido_park_roads_1_7.png" /> 8 - 9<br />\
    <img src="styles/legend/Yeouido_park_roads_1_8.png" /> 9 - 10<br />\
    <img src="styles/legend/Yeouido_park_roads_1_9.png" /> 10 - 11<br />\
    <img src="styles/legend/Yeouido_park_roads_1_10.png" /> 11 - 12<br />\
    <img src="styles/legend/Yeouido_park_roads_1_11.png" /> 12 - 13<br />\
    <img src="styles/legend/Yeouido_park_roads_1_12.png" /> 13 - 14<br />\
    <img src="styles/legend/Yeouido_park_roads_1_13.png" /> 14 - 15<br />\
    <img src="styles/legend/Yeouido_park_roads_1_14.png" /> 15 - 16<br />\
    <img src="styles/legend/Yeouido_park_roads_1_15.png" /> 16 - 17<br />\
    <img src="styles/legend/Yeouido_park_roads_1_16.png" /> 17 - 18<br />\
    <img src="styles/legend/Yeouido_park_roads_1_17.png" /> 18 - 19<br />\
    <img src="styles/legend/Yeouido_park_roads_1_18.png" /> 19 - 20<br />\
    <img src="styles/legend/Yeouido_park_roads_1_19.png" /> 20 - 21<br />\
    <img src="styles/legend/Yeouido_park_roads_1_20.png" /> 21 - 22<br />\
    <img src="styles/legend/Yeouido_park_roads_1_21.png" /> 22 - 23<br />' });
var format_Olympic_park_roads_2 = new ol.format.GeoJSON();
var features_Olympic_park_roads_2 = format_Olympic_park_roads_2.readFeatures(json_Olympic_park_roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Olympic_park_roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Olympic_park_roads_2.addFeatures(features_Olympic_park_roads_2);
var lyr_Olympic_park_roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Olympic_park_roads_2, 
                style: style_Olympic_park_roads_2,
                popuplayertitle: 'Olympic_park_roads',
                interactive: true,
    title: 'Olympic_park_roads<br />\
    <img src="styles/legend/Olympic_park_roads_2_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Olympic_park_roads_2_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Olympic_park_roads_2_2.png" /> 2 - 3<br />\
    <img src="styles/legend/Olympic_park_roads_2_3.png" /> 3 - 4<br />\
    <img src="styles/legend/Olympic_park_roads_2_4.png" /> 4 - 5<br />\
    <img src="styles/legend/Olympic_park_roads_2_5.png" /> 5 - 6<br />\
    <img src="styles/legend/Olympic_park_roads_2_6.png" /> 6 - 7<br />\
    <img src="styles/legend/Olympic_park_roads_2_7.png" /> 7 - 8<br />\
    <img src="styles/legend/Olympic_park_roads_2_8.png" /> 8 - 9<br />\
    <img src="styles/legend/Olympic_park_roads_2_9.png" /> 9 - 10<br />\
    <img src="styles/legend/Olympic_park_roads_2_10.png" /> 10 - 11<br />\
    <img src="styles/legend/Olympic_park_roads_2_11.png" /> 11 - 12<br />\
    <img src="styles/legend/Olympic_park_roads_2_12.png" /> 12 - 13<br />\
    <img src="styles/legend/Olympic_park_roads_2_13.png" /> 13 - 14<br />\
    <img src="styles/legend/Olympic_park_roads_2_14.png" /> 14 - 15<br />\
    <img src="styles/legend/Olympic_park_roads_2_15.png" /> 15 - 16<br />\
    <img src="styles/legend/Olympic_park_roads_2_16.png" /> 16 - 17<br />\
    <img src="styles/legend/Olympic_park_roads_2_17.png" /> 17 - 18<br />\
    <img src="styles/legend/Olympic_park_roads_2_18.png" /> 18 - 19<br />\
    <img src="styles/legend/Olympic_park_roads_2_19.png" /> 19 - 20<br />\
    <img src="styles/legend/Olympic_park_roads_2_20.png" /> 20 - 21<br />\
    <img src="styles/legend/Olympic_park_roads_2_21.png" /> 21 - 22<br />' });
var format_BusStops_3 = new ol.format.GeoJSON();
var features_BusStops_3 = format_BusStops_3.readFeatures(json_BusStops_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStops_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStops_3.addFeatures(features_BusStops_3);
var lyr_BusStops_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusStops_3, 
                style: style_BusStops_3,
                popuplayertitle: 'Bus Stops',
                interactive: true,
                title: '<img src="styles/legend/BusStops_3.png" /> Bus Stops'
            });
var format_Elevators_4 = new ol.format.GeoJSON();
var features_Elevators_4 = format_Elevators_4.readFeatures(json_Elevators_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elevators_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elevators_4.addFeatures(features_Elevators_4);
var lyr_Elevators_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elevators_4, 
                style: style_Elevators_4,
                popuplayertitle: 'Elevators',
                interactive: true,
                title: '<img src="styles/legend/Elevators_4.png" /> Elevators'
            });
var format_SubwayStations_5 = new ol.format.GeoJSON();
var features_SubwayStations_5 = format_SubwayStations_5.readFeatures(json_SubwayStations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubwayStations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubwayStations_5.addFeatures(features_SubwayStations_5);
var lyr_SubwayStations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubwayStations_5, 
                style: style_SubwayStations_5,
                popuplayertitle: 'Subway Stations',
                interactive: true,
                title: '<img src="styles/legend/SubwayStations_5.png" /> Subway Stations'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Yeouido_park_roads_1.setVisible(true);lyr_Olympic_park_roads_2.setVisible(true);lyr_BusStops_3.setVisible(true);lyr_Elevators_4.setVisible(true);lyr_SubwayStations_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Yeouido_park_roads_1,lyr_Olympic_park_roads_2,lyr_BusStops_3,lyr_Elevators_4,lyr_SubwayStations_5];
lyr_Yeouido_park_roads_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Val_min': 'Val_min', 'Val_max': 'Val_max', 'Val_mean': 'Val_mean', 'Val_majori': 'Val_majori', });
lyr_Olympic_park_roads_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Val_min': 'Val_min', 'Val_max': 'Val_max', 'Val_mean': 'Val_mean', 'Val_majori': 'Val_majori', });
lyr_BusStops_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Elevators_4.set('fieldAliases', {'fid': 'fid', '노드링크 유형': '노드링크 유형', '노드 ID': '노드 ID', '노드 유형 코드': '노드 유형 코드', '시군구코드': '시군구코드', '시군구명': '시군구명', '읍면동코드': '읍면동코드', '읍면동명': '읍면동명', '지하철역코드': '지하철역코드', '지하철역명': '지하철역명', });
lyr_SubwayStations_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Yeouido_park_roads_1.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Val_min': 'TextEdit', 'Val_max': 'TextEdit', 'Val_mean': 'TextEdit', 'Val_majori': 'TextEdit', });
lyr_Olympic_park_roads_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Val_min': 'TextEdit', 'Val_max': 'TextEdit', 'Val_mean': 'TextEdit', 'Val_majori': 'TextEdit', });
lyr_BusStops_3.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Elevators_4.set('fieldImages', {'fid': 'TextEdit', '노드링크 유형': 'TextEdit', '노드 ID': 'Range', '노드 유형 코드': 'Range', '시군구코드': 'Range', '시군구명': 'TextEdit', '읍면동코드': 'Range', '읍면동명': 'TextEdit', '지하철역코드': 'Range', '지하철역명': 'TextEdit', });
lyr_SubwayStations_5.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Yeouido_park_roads_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Val_min': 'no label', 'Val_max': 'no label', 'Val_mean': 'inline label - visible with data', 'Val_majori': 'no label', });
lyr_Olympic_park_roads_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Val_min': 'no label', 'Val_max': 'no label', 'Val_mean': 'inline label - visible with data', 'Val_majori': 'no label', });
lyr_BusStops_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - visible with data', });
lyr_Elevators_4.set('fieldLabels', {'fid': 'no label', '노드링크 유형': 'no label', '노드 ID': 'no label', '노드 유형 코드': 'no label', '시군구코드': 'no label', '시군구명': 'no label', '읍면동코드': 'inline label - visible with data', '읍면동명': 'no label', '지하철역코드': 'no label', '지하철역명': 'inline label - visible with data', });
lyr_SubwayStations_5.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - visible with data', });
lyr_SubwayStations_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});