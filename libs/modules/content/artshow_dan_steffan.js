var artshow_dan_steffan = (function(){

   return {
      textures: {
         "dan-steffan-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan-steffan-nameplate.png"
               }
         },
         "dan-steffan-Banana-Wings-50.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan-steffan-Banana-Wings-50.jpg"
               }
         },
         "dan-steffan-chung-11-front.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan-steffan-chung-11-front.jpg"
               }
         },
         "dan-steffan-chunga-14-front.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "dan-steffan-chunga-14-front.jpg"
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
                  "object": "artshow.art-panel-1,2-0",
                  "data": [
                     {
                        "place-name": "dan-steffan-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Dan Steffan",
                              "link-text": "More about Dan Steffan",
                              "link": "http://fancyclopedia.org/Dan_Steffan",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "dan-steffan-nameplate.png",
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
                                 "texture": "dan-steffan-Banana-Wings-50.jpg",
                                 "size": [
                                    1.1,
                                    0.78
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "dan-steffan-chung-11-front.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.05,
                                    1.05
                                 ]
                              },
                              {
                                 "texture": "dan-steffan-chung-11-front.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.65,
                                    1.05
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
SQUIDSPACE.addAutoloadModule(artshow_dan_steffan);