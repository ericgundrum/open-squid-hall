var artshow_grant_canfield = (function(){

   return {
      textures: {
         "grant_canfield-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "grant_canfield-nameplate.png"
               }
         },
         "grant_canfield-File770-161.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "grant_canfield-File770-161.jpg"
               }
         },
         "grant_canfield-File770-162.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "grant_canfield-File770-162.jpg"
               }
         },
         "grant_canfield-Al-Sid.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "grant_canfield-Al-Sid.jpg"
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
                  "object": "artshow.art-panel-3,4-1",
                  "data": [
                     {
                        "place-name": "grant_canfield-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Grant Canfield",
                              "link-text": "More about Grant Canfield",
                              "link": "http://fancyclopedia.org/Grant_Canfield",
                              "text": "Grant Canfield is a Rotsler and FAAn Award winning fan artist."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "grant_canfield-nameplate.png",
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
                                 "texture": "grant_canfield-File770-161.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "grant_canfield-File770-162.jpg",
                                 "size": [
                                    0.5,
                                    0.65
                                 ],
                                 "position": [
                                    0.65,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "grant_canfield-Al-Sid.jpg",
                                 "size": [
                                    0.5,
                                    0.6
                                 ],
                                 "position": [
                                    0.05,
                                    1.0
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
SQUIDSPACE.addAutoloadModule(artshow_grant_canfield);