var wheketere = (function(){

   return {
      textures: {},
      materials: {},
      objects: {
         "room": {
               "options": {
                  "doc": "'floor' hook function creates an object from scratch.",
                  "loader": "BasicRoom",
                  "visible": true
               },
               "data": {
                     "size": [
                        18,
                        4.5,
                        27
                     ],
                     "floor-material": "macadam"
                  }
         },
         "skybox": {
               "options": {
                  "doc": "'SkyBox' hook function creates object from scratch.",
                  "loader": "SkyBox",
                  "visible": true
               },
               "data": {
                     "doc": "Possible values: textures/skybox/skybox1/skybox1, textures/skybox/Ely38/Ely38, etc.",
                     "cube-texture": "textures/skybox/Ely38/Ely38"
                  }
         },
         "user": {
               "options": {
                  "doc": "'UserCamera' hook function creates object from scratch.",
                  "loader": "UserCamera",
                  "visible": true
               },
               "data": {
                     "position": [
                        2,
                        1.6,
                        2
                     ]
                  }
         },
      },
      mods: {
      },
      layouts: {
         
         "room": {
            "options": {
               "doc": "Area origin and size are required are not currently implemented.",
               "size": [
                  18,
                  4.5,
                  27
               ],
               "origin": [
                  0,
                  0,
                  0
               ]
            },
            "objectPlacements": [
            ]
         },
      }
   };
})();