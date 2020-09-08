var artshow_rotsler = (function(){

   return {
      textures: {
         "rotsler-nameplate.png": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "rotsler-nameplate.png"
               }
         },
         "rotsler-chunga-09-back.jpg": {
               "options": {
                  "loader": "default"
               },
               "data": {
                  "dir": "textures/content/artshow/",
                  "file-name": "rotsler-chunga-09-back.jpg"
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
                  "object": "artshow.art-panel-17,18-1",
                  "data": [
                     {
                        "place-name": "rotsler-art",
                        "options": {
                           "placer": "ArtPlacer",
                           "moreInfoData": {
                              "title": "Bill Rotsler",
                              "link-text": "More about Bill Rotsler",
                              "link": "http://fancyclopedia.org/Bill_Rotsler",
                              "text": "Bill Rotsler was an American fan artist, writer, editor, and science fiction author. The Rotsler award is named after him. He has not won a Rotsler, but he has won multiple Hugo awards for Best Fan Artist."
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "texture": "rotsler-nameplate.png",
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
                                 "texture": "rotsler-chunga-09-back.jpg",
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
SQUIDSPACE.addAutoloadModule(artshow_rotsler);