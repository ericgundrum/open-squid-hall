var artshow_alison_scott = (function(){

   return {
      textures: {
         "alison_scott-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alison_scott-nameplate.png"
               }
         },
         "alison_scott-plokta-33.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alison_scott-plokta-33.jpg"
               }
         },
         "alison_scott-plokta-37.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "alison_scott-plokta-37.jpg"
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
                        "place-name": "alison_scott-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Alison Scott",
                              "link-text": "More about Alison Scott",
                              "link": "http://fancyclopedia.org/Alison_Scott",
                              "text": "Alison Scott is a Hugo, Nova and Rotsler award winning fan artist and fan editor, living in the UK. She is an editor of PLOKTA, a con runner, and the 2020 GUFF delegate. Alison organized the most excellent fan bars in memory, at Interaction (2005) and LonCon 3 (2014). Alison's artistic style, appropriately for a member of the PLOKTA cabal, uses Photoshop heavily, but she can also draw in old school fannish style, as her cover for PLOKTA #37 shows."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "alison_scott-nameplate.png",
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
                                 "texture": "alison_scott-plokta-37.jpg",
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
                                 "texture": "alison_scott-plokta-33.jpg",
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
SQUIDSPACE.addAutoloadModule(artshow_alison_scott);