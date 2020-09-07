var artshow_jeanne_gomoll = (function(){

   return {
      textures: {
         "jeanne-gomoll-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "jeanne-gomoll-nameplate.png"
               }
         },
         "jeanne-gomoll-janus-04-Vol-2-No-2.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "jeanne-gomoll-janus-04-Vol-2-No-2.jpg"
               }
         },
         "jeanne-gomoll-space-babe-tiara.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "jeanne-gomoll-space-babe-tiara.jpg"
               }
         },
         "jeanne-gomoll-space-babe.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "jeanne-gomoll-space-babe.jpg"
               }
         },
         "jeanne-gomoll-PLUGLUNK.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "jeanne-gomoll-PLUGLUNK.jpg"
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
                  "object": "artshow.art-panel-5,6-0",
                  "data": [
                     {
                        "place-name": "jeanne-gomoll-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Jeanne Gomoll",
                              "link-text": "More about Jeanne Gomoll",
                              "link": "http://fancyclopedia.org/Jeanne_Gomoll",
                              "text": ""
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "jeanne-gomoll-nameplate.png",
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
                                 "texture": "jeanne-gomoll-janus-04-Vol-2-No-2.jpg",
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
                                 "texture": "jeanne-gomoll-space-babe-tiara.jpg",
                                 "size": [
                                    0.5,
                                    0.3
                                 ],
                                 "position": [
                                    0.65,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "jeanne-gomoll-space-babe.jpg",
                                 "size": [
                                    0.5,
                                    0.47
                                 ],
                                 "position": [
                                    0.65,
                                    0.6
                                 ]
                              },
                              {
                                 "texture": "jeanne-gomoll-PLUGLUNK.jpg",
                                 "size": [
                                    0.5,
                                    0.65
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
SQUIDSPACE.addAutoloadModule(artshow_jeanne_gomoll);