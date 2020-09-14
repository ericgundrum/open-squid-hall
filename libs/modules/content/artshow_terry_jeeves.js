var artshow_terry_jeeves = (function(){

   return {
      textures: {
         "terry_jeeves-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "terry_jeeves-nameplate.png"
               }
         },
         "terry_jeeves-Vector20.jpg": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "terry_jeeves-Vector20.jpg"
               }
         },
         "terry_jeeves-1.png": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "terry_jeeves-1.png"
               }
         },
         "terry_jeeves-2.png": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "terry_jeeves-2.png"
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
                  "object": "artshow.art-panel-7,8-0",
                  "data": [
                     {
                        "place-name": "terry_jeeves-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Terry Jeeves",
                              "link-text": "More about Terry Jeeves",
                              "link": "http://fancyclopedia.org/Terry_Jeeves",
                              "text": "Terry Jeeves was a UK fan artist, writer and publisher. He won the Doc Weir Award and the Rotsler Award. He is in the First Fandom Hall of Fame."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "terry_jeeves-nameplate.png",
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
                                 "texture": "terry_jeeves-Vector20.jpg",
                                 "size": [
                                    0.5,
                                    0.62
                                 ],
                                 "position": [
                                    0.05,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "terry_jeeves-1.png",
                                 "size": [
                                    0.39,
                                    0.4
                                 ],
                                 "position": [
                                    0.7,
                                    0.2
                                 ]
                              },
                              {
                                 "texture": "terry_jeeves-2.png",
                                 "size": [
                                    0.47,
                                    0.4
                                 ],
                                 "position": [
                                    0.67,
                                    0.65
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
SQUIDSPACE.addAutoloadModule(artshow_terry_jeeves);