sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hpe/dm/namagepo/test/integration/FirstJourney',
		'hpe/dm/namagepo/test/integration/pages/POsList',
		'hpe/dm/namagepo/test/integration/pages/POsObjectPage',
		'hpe/dm/namagepo/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hpe/dm/namagepo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);