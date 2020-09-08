var artshow_marc_schirmeister = (function(){

   return {
      textures: {
         "marc_schirmeister-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "marc_schirmeister-nameplate.png"
               }
         },
         "marc_schirmeister-chunga-09-front.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "marc_schirmeister-chunga-09-front.jpg"
               }
         },},
      materials: {},
      objects: {
      },
      layouts: {
         
         "artshow": {
            "options": {
            },
            "objectPlacements": [
               {
                  "object": "artshow.art-panel-11,12-1",
                  "data": [
                     {
                        "place-name": "marc_schirmeister-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Marc Schirmeister",
                              "link-text": "More about Marc Schirmeister",
                              "link": "http://fancyclopedia.org/Marc_Schirmeister",
                              "text": "Marc Schirmeister is an American fan artist. He is a Rotsler award winner."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "marc_schirmeister-nameplate.png",
                                 "size": [
                                    1.1,
                                    0.11
                                 ],
                                 "position": [
                                    0.05,
                                    0.04
                                 ]
                              },
                              {
                                 "texture": "marc_schirmeister-chunga-09-front.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              }
                           ],
                           "place-on": "back"
                        }
                     }
                  ]
               },
            ]
         },
      }
   };
})();
SQUIDSPACE.addAutoloadModule(artshow_marc_schirmeister);