var artshow_ditmar = (function(){

   return {
      textures: {
         "ditmar-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ditmar-nameplate.png"
               }
         },
         "ditmar-SFC84p.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ditmar-SFC84p.jpg"
               }
         },
         "ditmar-SFC88P.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "ditmar-SFC88P.jpg"
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
                  "object": "artshow.art-panel-15,16-1",
                  "data": [
                     {
                        "place-name": "ditmar-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Ditmar",
                              "link-text": "More about Ditmar",
                              "link": "http://fancyclopedia.org/Dick_Jenssen",
                              "text": "Ditmar (Dick) Jenssen is an Australian fan artist. The Ditmar Award is named after him. He has also won a couple of Ditmars, a FAAn award, and the Rotsler award."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "ditmar-nameplate.png",
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
                                 "texture": "ditmar-SFC84p.jpg",
                                 "size": [
                                    0.5,
                                    0.71
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "ditmar-SFC88P.jpg",
                                 "size": [
                                    0.5,
                                    0.71
                                 ],
                                 "position": [
                                    0.65,
                                    0.2
                                 ]
                              }
                           ],
                           "place-on": "front"
                        }
                     }
                  ]
               },
            ]
         },
      }
   };
})();
SQUIDSPACE.addAutoloadModule(artshow_ditmar);