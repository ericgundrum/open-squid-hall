// NOTE: Strict mode is causing problems I can't track down right now. 
// TODO: Find out why this breaks things and fix.
//'use strict'; 

/**
Contains web page support for Squid Hall, plus the SquidHall module. The 
SquidHall module is a SquidSpace.js mod providing Squid Hall-specific hooks, 
events, and extensions.
 */

//
// Web Page Stuff.
//

document.addEventListener("DOMContentLoaded", (event) =>{
	var mpopup = document.getElementById('mPopupBox');
	var closepopup = document.getElementById("mPopupBox-close");
	var mctrlpnl = document.getElementById('mCtrlPnl');
	var closectrlpnl = document.getElementById("mCtrlPnl-close");

	window.showMessagePopup = function(data) {
		let mainText = data[`<p>${data["text"]}</p>`];
		let linkText = undefined;

		if ("title" in data) {
			document.getElementById('mpopup-title').innerHTML = data["title"];
		}
		else {
			document.getElementById('mpopup-title').innerHTML = "Attention!";
		}

		if ("text" in data) {
			document.getElementById('mpopup-text').innerHTML = `<p>${data["text"]}</p>`;
		}
		else {
			document.getElementById('mpopup-text').innerHTML = "<p>&nbsp;</p>";
		}

		if ("link" in data && "link-text" in data) {
			document.getElementById('mpopup-link').innerHTML = `<p>See more here: <a href='${data["link"]}' target='_blank'>${data["link-text"]}</a></p>`;
		}
		mpopup.style.display = "block";
	}

	closepopup.onclick = function() {
	    mpopup.style.display = "none";
	}

	showCntrlPanelPopup = function() {
		mctrlpnl.style.display = "block";
	}

	closectrlpnl.onclick = function() {
	    mctrlpnl.style.display = "none";
	}

	window.onclick = function(event) {
	    if (event.target == mpopup) {
	        mpopup.style.display = "none";
	    }
	    else if (event.target == mctrlpnl) {
	        mctrlpnl.style.display = "none";
	    }
	}
	
	showMessagePopup(welcomeMessage);
});

var aCtx;
var aSource;
var aBuff;
var aGainNode;
var aVolume = 0.05;

var audioCkbox = function(el) {
	if (AudioContext) {
		if (el.checked) {
			aSource.start(0); // start our bufferSource
		} 
		else {
			aSource.stop(0); // this destroys the buffer source
			aSource = aCtx.createBufferSource(); // so we need to create a new one
			aSource.buffer = aBuff;
			aSource.loop = true;
			//aSource.connect(aCtx.destination);
			aGainNode = aCtx.createGain();
		    aGainNode.gain.value = aVolume;
		    aSource.connect(aGainNode);
		    aGainNode.connect(aCtx.destination);
	  	}
	}
	else {
		console.log("No AudioContext available. Sound will not play.")
	}
}

var fullScrCkbox = function(el) {
	if (el.checked) {
		var elem = document.documentElement;
		
	    if (elem.requestFullscreen) {
	      elem.requestFullscreen();
	    } else if (elem.mozRequestFullScreen) { /* Firefox */
	      elem.mozRequestFullScreen();
	    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
	      elem.webkitRequestFullscreen();
	    } else if (elem.msRequestFullscreen) { /* IE/Edge */
	      elem.msRequestFullscreen();
	    }
	} 
	else {
	    if (document.exitFullscreen) {
	      document.exitFullscreen();
	    } else if (document.mozCancelFullScreen) { /* Firefox */
	      document.mozCancelFullScreen();
	    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
	      document.webkitExitFullscreen();
	    } else if (document.msExitFullscreen) { /* IE/Edge */
	      document.msExitFullscreen();
	    }
  	}
}

document.addEventListener('fullscreenchange', function() {
	var full_screen_element = document.fullscreenElement;

	if(full_screen_element !== null) {
		console.log('Page has entered fullscreen mode');
	}
	else {
		console.log('Page has exited fullscreen mode');
		document.getElementById('mFullScrCB').checked = false; 
	}
});

var playSound = function() {
	// Play audio loop. (No audio if browser doesn't support AudioContext.)
	if (AudioContext) {
		aCtx = new AudioContext();
		aSource = aCtx.createBufferSource();
		fetch('audio/crowdambiance.mp3') 
		  .then(resp => resp.arrayBuffer())
		  .then(aBuff => aCtx.decodeAudioData(aBuff))
		  .then(decoded => {
		    aSource.buffer = aBuff = decoded;
		    aSource.loop = true;
		    //aSource.connect(aCtx.destination);
			aGainNode = aCtx.createGain();
		    aGainNode.gain.value = aVolume;
		    aSource.connect(aGainNode);
		    aGainNode.connect(aCtx.destination);
			audioCkbox(document.getElementById('mAudioCB'))
		});
	}
	else {
		console.log("No AudioContext available. Sound will not play.")
	}
}

//
// Squid Hall mod.
//

/**
This is a SquidSpace.js mod providing Squid Hall-specific hooks, events, and extensions.
 */
var SquidHall = function() {
	
	//
	// Some size variables we need for calculations.
	//
	// NOTE: Each unit corresponds to 1 meter, so 1.75 is one and three quarter meters.
	//

	// Values.
	
	var avatarBase = undefined;
	var exitBase = undefined;
	
	
	//
	// Helper Functions.
	//

	var addFloorSection = function(sectionName, x, z, w, d, material, scene) {
		let floorSection = BABYLON.MeshBuilder.CreatePlane(sectionName, 
												{width: w, height:d}, scene);
		floorSection.position = new SQUIDSPACE.makeLayoutVector(x, 0.001, z, w, d);
		floorSection.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);
	    floorSection.material = material;
		floorSection.material.backFaceCulling = false;
		return [floorSection];
	}
	
	var makeImageFrame = function(objName, textureName, size, position, rotation, eventData, cullBackface, alpha) {
		txtr = SQUIDSPACE.getTexture(textureName);
		
		let mat = new BABYLON.StandardMaterial(objName, scene);
		mat.diffuseTexture = txtr;
		mat.emissiveTexture = txtr;
		//mat.alpha = 0.9;
		if (cullBackface) {
			mat.backFaceCulling = true;
		}
		else {
			mat.backFaceCulling = false;
		}
		if (alpha) {
			mat.alpha = alpha;
		}

		let frame = BABYLON.MeshBuilder.CreatePlane(objName, {width: size[0], height: size[1]}, scene);
		frame.material = mat;
		frame.position = position;
		frame.rotation = rotation;
		frame.checkCollisions = false;
		frame.isVisible = true;
		
		// Add frame object to SquidSpace.
		SQUIDSPACE.addObjectInstance(objName, [frame]);
		
		// Set event data.
    	if (eventData) {
			SQUIDSPACE.attachClickEventToObject(objName, "onClickShowPopup", eventData, scene);
    	}
		
		return frame;
	}
	
	//
	// Object Loader Hooks
	//
	
	var attachObjectLoaderHooks = function(squidSpace){
		squidSpace.attachObjectLoaderHook("FloorSection",
			function(objName, options, data, scene) {
			
			squidSpace.logDebug(`FloorSection Loader called! ${objName}, ${options}, ${data}`);
			
			// TODO: Size should be 3 elements.
			let sz = SQUIDSPACE.getValIfKeyInDict("size", data, [1, 1]);
			let pos = SQUIDSPACE.getValIfKeyInDict("position", data, [0, 0, 0]);
			let mn = SQUIDSPACE.getValIfKeyInDict("material", data, "");
			let mat = SQUIDSPACE.getMaterial("marble");
			// TODO: Get material from material list by material name
			//       with a default if not loaded.
			return addFloorSection(key, pos[0], pos[2], sz[0], sz[1], mat, scene);
	    });
		
		squidSpace.attachObjectLoaderHook("SkyBox",
			function(objName, options, data, scene) {
		
			squidSpace.logDebug(`SkyBox Loader called! ${objName}, ${options}, ${data}`);
			
			cubeTx = data["cube-texture"];
		
			var skybox = BABYLON.Mesh.CreateBox(objName, 1000.0, scene);
			var skyboxMaterial = new BABYLON.StandardMaterial(objName, scene);
			skyboxMaterial.backFaceCulling = false;
			skyboxMaterial.disableLighting = true;
			skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(cubeTx, scene);
			skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
			skybox.material = skyboxMaterial;
			skybox.infiniteDistance = true;
			
			return [skybox];
	    });
	
		squidSpace.attachObjectLoaderHook("ImageBox",
			function(objName, options, data, scene) {
	
			squidSpace.logDebug(`ImageBox Loader called! ${objName}, ${options}, ${data}`);
			
			let imageBox = undefined;
		
			// Get the box textures.
			let alphaEnabled = SQUIDSPACE.getValIfKeyInDict("alpha-enabled", data, false);
			let txa = undefined;
			let txb = undefined;
			let txc = undefined;
			let txd = undefined;
			let textures = SQUIDSPACE.getValIfKeyInDict("textures", data, undefined);
			let textureName = SQUIDSPACE.getValIfKeyInDict("box-texture-name", data, undefined)
			if (textures) {
				txa = SQUIDSPACE.getTexture(textures["a"]);;
				txb = SQUIDSPACE.getTexture(textures["b"]);;
				txc = SQUIDSPACE.getTexture(textures["c"]);;
				txd = SQUIDSPACE.getTexture(textures["d"]);;
			}
			else if (textureName) {
				let ext = SQUIDSPACE.getValIfKeyInDict("box-texture-ext", data, ".png")
				txa = new BABYLON.Texture(textureName + "a" + ext, scene);
				txb = new BABYLON.Texture(textureName + "b" + ext, scene);
				txc = new BABYLON.Texture(textureName + "c" + ext, scene);
				txd = new BABYLON.Texture(textureName + "d" + ext, scene);
			}
			
			if (txa && txb && txc && txd) {
				if (alphaEnabled) {
					txa.hasAlpha = true;
					txb.hasAlpha = true;
					txc.hasAlpha = true;
					txd.hasAlpha = true;
				}
				
				// Get dimensions.
				let size = SQUIDSPACE.getValIfKeyInDict("size", data, [1, 1]);
				
				// Make materials.
				let mata = new BABYLON.StandardMaterial(objName, scene);
				mata.backFaceCulling = true;
				mata.diffuseTexture = txa;
				mata.emissiveTexture = txa;
				let matb = new BABYLON.StandardMaterial(objName, scene);
				matb.backFaceCulling = true;
				matb.diffuseTexture = txb;
				matb.emissiveTexture = txb;
				let matc = new BABYLON.StandardMaterial(objName, scene);
				matc.backFaceCulling = true;
				matc.diffuseTexture = txc;
				matc.emissiveTexture = txc;
				let matd = new BABYLON.StandardMaterial(objName, scene);
				matd.backFaceCulling = true;
				matd.diffuseTexture = txd;
				matd.emissiveTexture = txd;
				
				// Make the box.
				imageBox = BABYLON.MeshBuilder.CreateBox(objName, {width: size[0], depth: size[0], height: size[1]});
				imageBox.checkCollisions = true;
				imageBox.visibility = 0;
				imageBox.isVisible = true;
				imageBox.position = new BABYLON.Vector3(0, 0, 0);
				imageBox.rotation = new BABYLON.Vector3(0, 0, 0);
				
				// Add the sides
				let sidea = BABYLON.MeshBuilder.CreatePlane(objName + "-a", {width: size[0], height: size[1]}, scene);
				sidea.material = mata;
				sidea.position = new BABYLON.Vector3(-1 * (size[0] / 2), (size[1] / 2), 0);
				sidea.rotation = new BABYLON.Vector3(0, (Math.PI / 2), 0);
				sidea.checkCollisions = false;
				sidea.isVisible = true;
				imageBox.addChild(sidea);
				let sideb = BABYLON.MeshBuilder.CreatePlane(objName + "-b", {width: size[0], height: size[1]}, scene);
				sideb.material = matb;
				sideb.position = new BABYLON.Vector3(0, (size[1] / 2), (size[0] / 2));
				sideb.rotation = new BABYLON.Vector3(0, Math.PI, 0);
				sideb.checkCollisions = false;
				sideb.isVisible = true;
				imageBox.addChild(sideb);
				let sidec = BABYLON.MeshBuilder.CreatePlane(objName + "-c", {width: size[0], height: size[1]}, scene);
				sidec.material = matc;
				sidec.position = new BABYLON.Vector3((size[0] / 2), (size[1] / 2), 0);
				sidec.rotation = new BABYLON.Vector3(0, -1 * (Math.PI / 2), 0);
				sidec.checkCollisions = false;
				sidec.isVisible = true;
				imageBox.addChild(sidec);
				let sided = BABYLON.MeshBuilder.CreatePlane(objName + "-d", {width: size[0], height: size[1]}, scene);
				sided.material = matd;
				sided.position = new BABYLON.Vector3(0, (size[1] / 2), -1 * (size[0] / 2));
				sided.rotation = new BABYLON.Vector3(0, 0, 0);
				sided.checkCollisions = false;
				sided.isVisible = true;
				imageBox.addChild(sided);
			}
			
			if (imageBox) {
				// Shift the box down to put it out of sight.
				imageBox.position = new BABYLON.Vector3(0, -8, 0);
				
				// Return box.
				return [imageBox];
			}

			return undefined;
	    });
	}
	
	//
	// Placer hooks.
	//
	
	var attachObjectPlacerHooks = function(squidSpace){
		// TODO: Implement Texture/Material support in SquidSpace and 
		//       refactor as many of these as possible into the pack file.

		squidSpace.attachObjectPlacerHook("LightPlacer",
			function(areaName, areaOptions, objectName, placeName, options, data, scene){
		
			squidSpace.logDebug(`LightPlacer called! ${areaName}, ${placeName}.`);
			
			// This fills in lights nicely. 
			scene.createDefaultLight();
			
			// This enables the glow around the tables
			let gl = new BABYLON.GlowLayer("glow", scene, {});
			gl.intensity = 1.0;

			// These lights cover the space.
			/*
			let lightFrontFill = new BABYLON.PointLight("light-point-front",
													squidSpace.makePointVector(20, 20, 10), scene);
			lightFrontFill.diffuse = new BABYLON.Color3(0.5, 0.5, 0.5);
			lightFrontFill.specular = new BABYLON.Color3(0.5, 0.5, 0.5);
			lightFrontFill.range = 90;

			//let lightMidFill = new BABYLON.PointLight("light-point-mid",
			//										squidSpace.makePointVector(20, 20, 30), scene);
			//lightMidFill.diffuse = new BABYLON.Color3(1, 1, 1);
			//lightMidFill.specular = new BABYLON.Color3(0.5, 0.5, 0.5);
			//lightMidFill.range = 90;

			let lightBackFill = new BABYLON.PointLight("light-point-back",
													squidSpace.makePointVector(20, 20, 50), scene);
			lightBackFill.diffuse = new BABYLON.Color3(0.5, 0.5, 0.5);
			lightBackFill.specular = new BABYLON.Color3(0.5, 0.5, 0.5);
			lightBackFill.range = 90;
			//*/
			
			/*
			var hemi = new BABYLON.HemisphericLight("light-hemi", new BABYLON.Vector3(0, 1, 0), scene);
			hemi.diffuse = new BABYLON.Color3(1, 1, 1);
			hemi.intensity = 0.75;
			//*/
			
			var artSpot1 = new BABYLON.SpotLight("light-spot-art-north", 
				new BABYLON.Vector3(16, 4, 0), 
				new BABYLON.Vector3(-4, -3, -5), 
				BABYLON.Tools.ToRadians(100), 1, scene);
			artSpot1.range = 20;
			artSpot1.intensity = 1.5;
			artSpot1.shadowEnabled = false;
			
			var artSpot2 = new BABYLON.SpotLight("light-spot-art-south", 
				new BABYLON.Vector3(11.5, 4, -20), 
				new BABYLON.Vector3(0, -0.75, 3), 
				BABYLON.Tools.ToRadians(100), 1, scene);
			artSpot2.range = 20;
			artSpot2.intensity = 1.5;
			artSpot2.shadowEnabled = false;
			/*
			var creditsSpot1 = new BABYLON.SpotLight("light-spot-credits", 
				new BABYLON.Vector3(20, 3, -65.5), 
				new BABYLON.Vector3(3, -1, 0), 
				BABYLON.Tools.ToRadians(18), 1, scene);
			creditsSpot1.range = 20;
			creditsSpot1.intensity = 8;
			creditsSpot1.shadowEnabled = false;
			//*/
			
			//*
			var squareSpot1 = new BABYLON.SpotLight("light-spot-square", 
				new BABYLON.Vector3(36.0, 4, 0), 
				new BABYLON.Vector3(-4, -3, -9), 
				BABYLON.Tools.ToRadians(100), 1, scene);
			squareSpot1.range = 30;
			squareSpot1.intensity = 1;
			squareSpot1.shadowEnabled = false;
			//*/
			return true;
		});

		squidSpace.attachObjectPlacerHook("BeamPlacer",
			function(areaName, areaOptions, objectName, placeName, options, data, scene) {
			
			squidSpace.logDebug(`BeamPlacer called! ${areaName}, ${placeName}.`);
			let meshes = SQUIDSPACE.getLoadedObject(objectName);
			for (beammesh of meshes){
	            for (var i = 0; i < 8; i++ ) {
	                var bm = beammesh.createInstance("beam1-" + i);
	                bm.position.z = -1 * i * 8.3;
	                bm.checkCollisions = false;
	            }
	        }
			
			return true;
	    });
		
		squidSpace.attachObjectPlacerHook("BannerPlacer",
			function(areaName, areaOptions, objectName, placeName, options, data, scene) {
			
			squidSpace.logDebug(`BannerPlacer called! ${areaName}, ${placeName}.`);

			for (key in data) {
				let bannerinfo = data[key];
				let mat = new BABYLON.StandardMaterial("mat", scene);
				let bannerTexture = new BABYLON.Texture("./textures/" + bannerinfo.texture, scene);
				bannerTexture.vScale = -1;
				// mat.diffuseColor = BABYLON.Color3(1, 1, 1);
				mat.diffuseTexture = bannerTexture;
				mat.emissiveTexture = bannerTexture;
				mat.alpha = 0.9;
				mat.backFaceCulling = false;
				let meshes = SQUIDSPACE.getLoadedObject(objectName);
				// NOTE: Not using squidSpace.cloneObject() here because we aren't adding
				//       events or actions to these objects.
				for (index = 0; index < meshes.length; index++) {
			        let bn = meshes[index].clone("banner-" + index);
					bn.material = mat;
	                bn.position.x = bannerinfo.x;
	                bn.position.y = bannerinfo.y;
	                bn.position.z = bannerinfo.z;
	                bn.rotation.y = bannerinfo.rotateY;
	                bn.checkCollisions = false;
					bn.isVisible = true;
				}
			}
			
			return true;
		});

		squidSpace.attachObjectPlacerHook("CurtainPlacer",
			function(areaName, areaOptions, objectName, placeName, options, data, scene) {
			
			squidSpace.logDebug(`CurtainPlacer called! ${areaName}, ${placeName}.`);

			// NOTE: if you need to verify meshes exist before using them, the
			//  	 the following example is one way.
			//
			//  if (typeof meshes != "undefined") {
			//     . . . code here
			//  }

			let meshes = SQUIDSPACE.getLoadedObject(objectName);
			for (curtainmesh of meshes) {
				curtainmesh.isVisible = false;

				for (i = 0; i < 7; i++ ) {
					let bm = curtainmesh.createInstance("curtain1-" + i);
					bm.position.x = 0;
					bm.position.y = 0;
					bm.position.z = -1 * i * 10;
					bm.checkCollisions = false;
				}

				for (i = 0; i < 7; i++ ) {
					let bm = curtainmesh.createInstance("curtain2-" + i);
					bm.rotation.y = Math.PI;
					bm.position.x = 39;
					bm.position.y = 0;
					bm.position.z = -1 * i * 10 - 10;
					bm.checkCollisions = false;
				}

				for (i = 0; i < 4; i++ ) {
					let bm = curtainmesh.createInstance("curtain3-" + i);
					bm.rotation.y = -1 * Math.PI / 2;
					bm.position.x = i * 10;
					bm.position.y = 0;
					bm.position.z = -64;
					bm.checkCollisions = false;
				}

				for (i = 1; i < 4; i++ ) {
					let bm = curtainmesh.createInstance("curtain4-" + i);
					bm.rotation.y = Math.PI / 2;
					bm.position.x = (i * 10) + 5.71;
					bm.position.y = 0;
					bm.position.z = -0.25;
					bm.checkCollisions = false;
				}
			}
			
			return true;
		});

		squidSpace.attachObjectPlacerHook("SquidPlacer",
			function(areaName, areaOptions, objectName, placeName, options, data, scene) {

			squidSpace.logDebug(`SquidPlacer called! ${areaName}, ${placeName}.`);
			
			let meshes = SQUIDSPACE.getLoadedObject(objectName);
			for (squidmesh of meshes){
		        for (var i = 0; i < 1; i++ ) {
		            var bm = squidmesh.createInstance("squid1-" + i);
		            bm.position = squidSpace.makePointVector(data.position[0], data.position[1], data.position[2]);
					bm.rotation.y = data.rotation;
		            bm.checkCollisions = false;
		        }
		    }
			
			return true;
		});

		squidSpace.attachObjectPlacerHook("ExitPlacer",
	      	function(areaName, areaOptions, objectName, placeName, options, data, scene) {
		
			squidSpace.logDebug(`ExitPlacer called! ${areaName}, ${placeName}.`);

			for (key in data) {
				let dt = data[key];
				
				// Lazy load the base object.
				if (!exitBase) {
					// Create a UV mapping that turns off the material for every face but the front one.
					let faceUV = new Array(6);
					faceUV[0] = new BABYLON.Vector4(0, 0, 0);
					faceUV[2] = new BABYLON.Vector4(0, 0, 0);
					faceUV[3] = new BABYLON.Vector4(0, 0, 0);
					faceUV[4] = new BABYLON.Vector4(0, 0, 0);
					faceUV[5] = new BABYLON.Vector4(0, 0, 0);
			  
					// Make options with the UV.
					let options = {height: 0.2, width: 0.5, depth: 0.03, faceUV: faceUV};
			
					// Make the exit sign object.
					let exitMat = new BABYLON.StandardMaterial("exit", scene);
					let exitTex = new BABYLON.Texture("/textures/exit.png", scene);
					exitMat.diffuseTexture = exitTex;
					exitMat.emissiveTexture = exitTex;
					exitMat.backFaceCulling = true;
					exitBase = BABYLON.MeshBuilder.CreateBox("exitBase", options, scene);
					exitBase.material = exitMat;
					exitBase.isVisible = false;
				}
				
				let mesh = exitBase.createInstance(key);
				mesh.position = SQUIDSPACE.makePointVector(dt.pos[0], dt.pos[1], dt.pos[2]);
				mesh.rotation.y = dt.rotateY;
				mesh.checkCollisions = false;
				mesh.isVisible = true;
				
				SQUIDSPACE.addObjectInstance(key, [mesh]);
			}
		
			return true;
		});
		
		squidSpace.attachObjectPlacerHook("SignFullPlacer",
	      	function(areaName, areaOptions, objectName, placeName, options, data, scene) {
			
			squidSpace.logDebug(`SignFullPlacer called! ${areaName}, ${placeName}.`);

			for (key in data) {
				let signfullinfo = data[key];
				let mat = new BABYLON.StandardMaterial("mat", scene);
				let signfullTexture = new BABYLON.Texture("./textures/" + signfullinfo.texture, scene);
				signfullTexture.vScale = -1;
				// mat.diffuseColor = BABYLON.Color3(1, 1, 1);
				mat.diffuseTexture = signfullTexture;
				mat.emissiveTexture = signfullTexture;
				mat.alpha = 0.9;
				mat.backFaceCulling = true;

				// Using squidSpace.cloneObject() here because we *are* adding events to these objects.
				let cloneMeshes = squidSpace.cloneObject(objectName, key);

				for (index = 0; index < cloneMeshes.length; index++) {
					let sgn = cloneMeshes[index];
					if(index == 1) sgn.material = mat;
					sgn.position = squidSpace.makePointVector(
															signfullinfo.pos[0],
															signfullinfo.pos[1],
															signfullinfo.pos[2]);
					sgn.rotation.y = signfullinfo.rotateY;
					sgn.checkCollisions = true;
					sgn.isVisible = true;
				}
				
				// Add event?
				eventData = signfullinfo["moreInfoData"];
		    	if (eventData) {
					SQUIDSPACE.attachClickEventToObject(key, "onClickShowPopup", eventData, scene);
		    	}
			}
			
			return true;
		});

		squidSpace.attachObjectPlacerHook("SignHalfPlacer",
	    	function(areaName, areaOptions, objectName, placeName, options, data, scene) {
			
			squidSpace.logDebug(`SignHalfPlacer called! ${areaName}, ${placeName}.`);

	        for (key in data) {
	            let signhalfinfo = data[key];
	            let mat = new BABYLON.StandardMaterial("mat", scene);
	            let signhalfTexture = new BABYLON.Texture("./textures/" + signhalfinfo.texture, scene);
	            signhalfTexture.vScale = -1;
	            // mat.diffuseColor = BABYLON.Color3(1, 1, 1);
	            mat.diffuseTexture = signhalfTexture;
	            mat.emissiveTexture = signhalfTexture;
	            mat.alpha = 0.9;
	            mat.backFaceCulling = true;

				// Using squidSpace.cloneObject() here because we *are* adding events to these objects.
				let cloneMeshes = SQUIDSPACE.cloneObject(objectName, key);
				
	            for (index = 0; index < cloneMeshes.length; index++) {
	                let sgn = cloneMeshes[index];
	                if(index == 1) sgn.material = mat;
	                sgn.position = squidSpace.makePointVector(
															signhalfinfo.pos[0],
															signhalfinfo.pos[1],
															signhalfinfo.pos[2]);
	                sgn.rotation.y = signhalfinfo.rotateY;
	                sgn.checkCollisions = true;
	                sgn.isVisible = true;
	            }
				
				// Add event?
				eventData = signhalfinfo["moreInfoData"];
		    	if (eventData) {
					SQUIDSPACE.attachClickEventToObject(key, "onClickShowPopup", eventData, scene);
		    	}
	        }
			
			return true;
	    });

		squidSpace.attachObjectPlacerHook("ImagePlacer",
	      	function(areaName, areaOptions, objectName, placeName, options, data, scene) {
	
			squidSpace.logDebug(`ImagePlacer called! ${areaName}, ${placeName}.`);
			
			let texture = SQUIDSPACE.getValIfKeyInDict("texture", data, undefined);
			let alpha = SQUIDSPACE.getValIfKeyInDict("alpha", data, 1);
			let size = SQUIDSPACE.getValIfKeyInDict("size", data, [1, 1]);
			let pos = SQUIDSPACE.getValIfKeyInDict("position", data, [0, 0, 0]);
			let rot = SQUIDSPACE.getValIfKeyInDict("rotation", data, [0, 0, 0]);
			let position = SQUIDSPACE.makePointVector(pos[0], pos[1], pos[2]);
			let rotation = new BABYLON.Vector3(rot[0], rot[1], rot[2]);
		
			if (texture) {
				let frm = makeImageFrame(placeName, texture, size, position, rotation, undefined, false, alpha);
				if (frm) {
					return true;
				}
			}
			
			return false;
		});
	
		squidSpace.attachObjectPlacerHook("ArtPlacer",
	    	function(areaName, areaOptions, objectName, placeName, options, data, scene) {
	
			squidSpace.logDebug(`ArtPlacer called! ${areaName}, ${placeName}, ${objectName}.`);
		
			// Get target object.
			target = SQUIDSPACE.getLoadedObject(objectName);
			// TODO: Check target and fail with error if not loaded. 
		
			//if (SQUIDDEBUG) {
			//      SQUIDSPACE.logDebug(SQUIDDEBUG.makeDetailedObjectInfoString(target));
			//      SQUIDSPACE.logDebug(SQUIDDEBUG.makeObjectInfoString(target));
			//}
		
			// Get the event data.
			ed = options["moreInfoData"];
		
			// Get the placer data.
			if (!data["textures"]) {
				SQUIDSPACE.logWarn("ArtPlacer - No texture data. Cannot do placement.");
				return false;
			}
			dt = data["textures"];
			po = data["place-on"] != "back";
		
			count = 0;
			for (tx of dt) {
				// Get texture data values.
				txName = tx["texture"];
				size = tx["size"];
				position = tx["position"];
			
				// HACK: Right now we are assuming *ANY* y rotation is 90 degrees.
				// TODO: Come up with a way to match rotations better. This will require
				//       translating each frame based on it's position. 
				tgtRot = target[0].rotation.clone();
				isRot = tgtRot.y != 0;
			
				// Calculate positions.
				posV = target[0].position.clone();
				posV.y = posV.y - position[1] + 2.28 - (size[1] / 2);
				if (isRot) {
					if (po) {
						posV.z = posV.z - position[0] + 1.2 - (size[0] / 2);
						posV.x = posV.x - 0.04;
					}
					else {
						posV.z = posV.z + position[0] + (size[0] / 2);
						posV.x = posV.x + 0.001;
						tgtRot.y = -1 * (Math.PI / 2);
					}
				}
				else {
					if (po) {
						posV.x = posV.x + position[0] - 1.2 + (size[0] / 2);
						posV.z = posV.z - 0.04;
					}
					else {
						posV.x = posV.x - position[0] - (size[0] / 2);
						posV.z = posV.z + 0.001;
						tgtRot.y = -1 * (Math.PI);
					}
				}
			
				// Place on target.
				let nm = areaName + "." + txName + "-" + count++;
				frm = makeImageFrame(nm, txName, size, posV, tgtRot, ed, true);
			}
		
			return true;
	    });
	
		squidSpace.attachObjectPlacerHook("TablePlacer",
	    	function(areaName, areaOptions, objectName, placeName, options, data, scene) {
		
			squidSpace.logDebug(`TablePlacer called! ${areaName}, ${placeName}, ${objectName}.`);
			
			// Get target object.
			let target = SQUIDSPACE.getLoadedObject(objectName);
			// TODO: Check target and fail with error if not loaded. 
			
			//if (SQUIDDEBUG) {
			//      SQUIDSPACE.logDebug(SQUIDDEBUG.makeDetailedObjectInfoString(target));
			//      SQUIDSPACE.logDebug(SQUIDDEBUG.makeObjectInfoString(target));
			//}
			
			// Get the event data.
			let ed = options["moreInfoData"];
			
			// Get the placer data.
			let dtx = []
			if (data["textures"]) {
				dtx = data["textures"];
			}
			let dobj = []
			if (data["objects"]) {
				dobj = data["objects"];
			}
			let sign = undefined;
			if (data["sign"]) {
				sign = data["sign"];
			}
			let ocs = data["origin-corner"];
			let oc = -1;
			if (typeof ocs === 'string' || ocs instanceof String) {
				oc = ['nw', 'ne', 'sw', 'se'].indexOf(ocs.toLowerCase());				
			}
			if (oc < 0) {
				SQUIDSPACE.logWarn(`TablePlacer - Invalid origin-corner: ${data["origin-corner"]}. Defaulting to 'ne'.`);
				oc = 0;
			}
			
			let count = 0;
			for (tx of dtx) {
				// Get data values.
				let txName = tx["texture"];
				let size = tx["size"];
				let position = tx["position"];
				let cullBackFace = true;
				if (tx["tilted"]) cullBackFace = false;
				
				// HACK: Right now we are assuming *ANY* y rotation is 90 degrees.
				// TODO: Come up with a way to match rotations better. This will require
				//       translating each frame based on it's position. 
				let tgtRot = target[0].rotation.clone();
				let isRot = tgtRot.y != 0;
				
				// Calculate positions.
				let posV = target[0].position.clone();
				posV.y = posV.y + 0.751;		
				tgtRot.x = 1.57;
				switch (oc) {
				case 0: // 'nw'
					tgtRot.y = 0;
					posV.x = posV.x - 0.45 + position[0];// - (size[0] / 2);
					posV.z = posV.z + 0.03 - position[1] - (size[1] / 2);
					break;
				case 1: // 'ne'
					tgtRot.y = 1.57;
					posV.z = posV.z + 0.5 - position[0];// - (size[0] / 2);
					posV.x = posV.x + 0.03 - position[1] - (size[1] / 2);
					break;
				case 2: // 'sw'
					tgtRot.y = 4.71;
					posV.z = posV.z - 0.46 + position[0];// - (size[0] / 2);
					posV.x = posV.x - 0.68 + position[1] + (size[1] / 2);
					break;
				case 3: // 'se'
					tgtRot.y = 3.14;
					posV.x = posV.x + 0.5 - position[0];// - (size[0] / 2);
					posV.z = posV.z - 0.68 + position[1] + (size[1] / 2);
					break;
				}
				
				// Place on target.
				let nm = areaName + "." + txName + "-" + count++;
				let frm = makeImageFrame(nm, txName, size, posV, tgtRot, ed, cullBackFace);
				
				// Is it tilted?
				if (tx["tilted"]) {
					frm.rotation.x = 0.3;
					frm.position.y = frm.position.y + (size[1] / 2);
				}
			}
			for (obj of dobj) {
				// Get the object data.
				let objToPlaceName = undefined;
				if (obj["object"]) {
					objToPlaceName = obj["object"];
				}
				let placeRotation = [0, 0, 0];
				if (obj["rotation"]) {
					placeRotation = obj["rotation"];
				}
				let placeScaling = 1;
				if (obj["scale"]) {
					placeScaling = obj["scale"];
				}
				let size = obj["size"];
				let position = obj["position"];
				if (!objToPlaceName) {
					SQUIDSPACE.logWarn("PlinthPlacer - No object to place. Cannot do placement.");
					return false;
				}
				else {
					// Calculate positions.
					let posV = target[0].position.clone();
					posV.y = posV.y + 0.751;		
					switch (oc) {
					case 0: // 'nw'
						placeRotation[2] = placeRotation[2] + 0;
						posV.x = posV.x - 0.58 + position[0] - (size[0] / 2);
						posV.z = posV.z + 0.03 - position[1] - (size[1] / 2);
						break;
					case 1: // 'ne'
						placeRotation[2] = placeRotation[2] + 1.57;
						posV.z = posV.z + 0.885 - position[0] - (size[0] / 2);
						posV.x = posV.x + 0.03 - position[1] - (size[1] / 2);
						break;
					case 2: // 'sw'
						placeRotation[2] = placeRotation[2] + 4.71;
						posV.z = posV.z - 0.58 + position[0] - (size[0] / 2);
						posV.x = posV.x - 0.68 + position[1] + (size[1] / 2);
						break;
					case 3: // 'se'
						placeRotation[2] = placeRotation[2] + 3.14;
						posV.x = posV.x + 0.885 - position[0] - (size[0] / 2);
						posV.z = posV.z - 0.68 + position[1] + (size[1] / 2);
						break;
					}
					
					// Get the object to place.
					let nm = areaName + "." + objToPlaceName + "-" + count++;
					let objToPlace = SQUIDSPACE.cloneObject(objToPlaceName, nm);
					// TODO: Check target and fail with error if not loaded. 
					
					// Place on target.
					let rot = new BABYLON.Vector3(placeRotation[0], placeRotation[1], placeRotation[2]);
					let scl = new BABYLON.Vector3(placeScaling, placeScaling, placeScaling);
					for (mesh of objToPlace) {
						mesh.scaling = scl;
						mesh.rotation = rot;
						mesh.position = posV;
						mesh.isVisible = true
					}
		
					// Set event data.
			    	if (ed) {
						SQUIDSPACE.attachClickEventToObject(nm, "onClickShowPopup", ed, scene);
			    	}
				}
			}
			if (sign) {
				// Get data values.
				let txName = sign["texture"];
				let tgtRot = target[0].rotation.clone();
				
				// Calculate size and positions.
				let size = [1.7, 0.7];
				let posV = target[0].position.clone();
				posV.y = posV.y + 0.35;		
				
				switch (oc) {
				case 0: // 'nw'
					tgtRot.y = 0;
					posV.z = posV.z - 0.69;
					break;
				case 1: // 'ne'
					tgtRot.y = 1.57;
					posV.x = posV.x - 0.69;
					break;
				case 2: // 'sw'
					tgtRot.y = 4.71;
					break;
				case 3: // 'se'
					tgtRot.y = 3.14;
					break;
				}
				
				// Place on target.
				let nm = areaName + "." + txName + "-sign";
				let frm = makeImageFrame(nm, txName, size, posV, tgtRot, ed, false);
			}
			
			return true;
	    });
		
		squidSpace.attachObjectPlacerHook("SuitcasePlacer",
	    	function(areaName, areaOptions, objectName, placeName, options, data, scene) {
	
			squidSpace.logDebug(`SuitcasePlacer called! ${areaName}, ${placeName}, ${objectName}.`);
				
			// Get data values.
			let txName = data["texture"];
			let pos = data["position"];
			let rot = data["rotation"];
			let meshes = SQUIDSPACE.getLoadedObject(objectName);
			let newMeshes = [];
			
			// Create and place the object.
			for (mesh of meshes) {
				mi = mesh.createInstance(placeName);
				newMeshes.push(mi);
				// HACK: There is something wrong with the suitcase model when setting position. You have
				//       to increase 'y' by 0.07.
				mi.position = SQUIDSPACE.makePointVector(pos[0], pos[1] + 0.7, pos[2])
				mi.rotation = SQUIDSPACE.makePointVector(rot[0], rot[1], rot[2])
				mi.checkCollisions = true;
				mi.visible = true;
			}
			
			SQUIDSPACE.addObjectInstance(placeName, newMeshes);
			
			// Place the signs.
			if (txName) {
				// HACK: There is something wrong with the suitcase model when setting position. Here
				//       I am adjusting the sign 'y'.
				let posV = newMeshes[0].position.clone();
				posV.y = posV.y - 0.21;
				let rot = newMeshes[0].rotation.clone();
				let size = [0.7, 0.7];

				// HACK: Right now we are assuming *ANY* y rotation is 90 degrees.
				// TODO: Come up with a way to match rotations better. This will require
				//       translating each frame based on it's position. 
				let isRot = rot.y != 0;
				
				if (isRot) {
					posV.x = posV.x - 0.20;
				}
				else {
					posV.z = posV.z - 0.20;		
				}
				let frm1 = makeImageFrame(placeName + "-sign1", txName, size, posV, rot, undefined, true);
				posV = posV.clone();
				rot = rot.clone();
				if (isRot) {
					posV.x = posV.x + 0.40;	
				}
				else {
					posV.z = posV.z + 0.40;		
				}
				rot.y = rot.y + Math.PI;
				let frm2 = makeImageFrame(placeName + "-sign2", txName, size, posV, rot, undefined, true);
			}
		
			return true;
	    });
		
		squidSpace.attachObjectPlacerHook("PlinthPlacer",
	    	function(areaName, areaOptions, objectName, placeName, options, data, scene) {
	
			squidSpace.logDebug(`PlinthPlacer called! ${areaName}, ${placeName}, ${objectName}.`);
		
			// Get target object.
			target = SQUIDSPACE.getLoadedObject(objectName);
			// TODO: Check target and fail with error if not loaded. 
		
			//if (SQUIDDEBUG) {
			//      SQUIDSPACE.logDebug(SQUIDDEBUG.makeDetailedObjectInfoString(target));
			//      SQUIDSPACE.logDebug(SQUIDDEBUG.makeObjectInfoString(target));
			//}
		
			// Get the event data.
			ed = options["moreInfoData"];
			//SQUIDSPACE.logDebug(`PlinthPlacer - moreInfoData: ${ed}`);
		
			// Get the placer data.
			let objToPlaceName = SQUIDSPACE.getValIfKeyInDict("object", data, undefined);
			let placePosition = SQUIDSPACE.getValIfKeyInDict("position", data, [0, 0, 0]);
			let placeRotation = SQUIDSPACE.getValIfKeyInDict("rotation", data, [0, 0, 0]);
			let placeScaling = SQUIDSPACE.getValIfKeyInDict("scale", data, 1);
			
			if (!objToPlaceName) {
				SQUIDSPACE.logWarn("PlinthPlacer - No object to place. Cannot do placement.");
				return false;
			}

			// Get the object to place.
			objToPlace = SQUIDSPACE.cloneObject(objToPlaceName, placeName);
			// TODO: Check target and fail with error if not loaded. 

			// Place on target.
			pos = target[0].position.clone();
			pos.x = pos.x + placePosition[0];
			pos.y = pos.y + placePosition[1] + 1.365;
			pos.z = pos.z + placePosition[2];
			rot = new BABYLON.Vector3(placeRotation[0], placeRotation[1], placeRotation[2]);
			scl = new BABYLON.Vector3(placeScaling, placeScaling, placeScaling);
			for (mesh of objToPlace) {
				mesh.isVisible = true
				mesh.scaling = scl;
				mesh.rotation = rot;
				mesh.position = pos;
			}
		
			// Set event data.
	    	if (ed) {
				SQUIDSPACE.attachClickEventToObject(placeName, "onClickShowPopup", ed, scene);
	    	}
			
			return true;
	    });
	
	}
	
	//
	// Prepare Hook.
	//
	
	var attachPrepareHook = function(squidSpace){
		squidSpace.attachPrepareHook(function(scene){
			
			squidSpace.logDebug("Preparing builtins.");
			
			// Add some procedural materials  we'll be using as 'builtins' to the scene.
			// TODO: Add texture and material code to SquidSpace and either move these to 
			//       squidhall.js or to a pack file.
			// TODO: Determine if we want to use ambient or diffuse textures. Currently using
			//       ambient on marble and diffuse on macadam. See:
			// * https://gamedev.stackexchange.com/questions/14334/the-difference-between-diffuse-texture-and-ambient-occlusion-texture
			// * https://www.quora.com/What-is-the-difference-between-Ambient-Diffuse-and-Specular-Light-in-OpenGL-Figures-for-illustration-are-encouraged?share=1
			
		    let matMacadam = new BABYLON.StandardMaterial("macadam", scene);
		    let texMacadam = new BABYLON.RoadProceduralTexture("macadamtext", 2048, scene);
			matMacadam.backFaceCulling = true;
		    matMacadam.diffuseTexture = texMacadam;

			squidSpace.addTextureInstance("macadam", texMacadam);
			squidSpace.addMaterialInstance("macadam", matMacadam);			

		    let matMarble = new BABYLON.StandardMaterial("marble", scene);
		    let texMarble = new BABYLON.MarbleProceduralTexture("marbletext", 512, scene);
		    matMarble.ambientTexture = texMarble;
		    //matMarble.numberOfBricksHeight = 1; // Doesn't seem to do anything?
		    //matMarble.numberOfBricksWidth = 1; // Doesn't seem to do anything?

			squidSpace.addTextureInstance("marble", texMarble);
			squidSpace.addMaterialInstance("marble", matMarble);

		    let matWood = new BABYLON.StandardMaterial("wood", scene);
		    let texWood = new BABYLON.WoodProceduralTexture("woodtext", 1048, scene);
			matWood.ampScale = 256; // TODO: Experiment with this, read docs again.
			matWood.woodColor = new BABYLON.Color3(0.8, 0.8, 0.8);
			matWood.backFaceCulling = true;
		    matWood.diffuseTexture = texWood;

			squidSpace.addTextureInstance("wood", texWood);
			squidSpace.addMaterialInstance("wood", matWood);	
			
		    let matCone = new BABYLON.StandardMaterial("cone", scene);
			let texCone = new BABYLON.Texture("./textures/TrafficConeSkin.jpg", scene);		
			matCone.backFaceCulling = true;
		    matCone.diffuseTexture = texCone;
		    matCone.ambientTexture = texCone;

			squidSpace.addTextureInstance("cone", texCone);
			squidSpace.addMaterialInstance("cone", matCone);	
		});
	}
	
	//
	// Build Hook.
	//
	
	var attachSquidHallBuildHooks = function(squidSpace) {
		squidSpace.attachBuildHook(function(scene) {

			squidSpace.logDebug("Build World Hook.");

			// Put an invisible box around the floor to keep you in.
			origin = SQUIDSPACE.makePointXYZ(32, 50, 35)
			boundsBox = BABYLON.MeshBuilder.CreateBox('_bndsbx_', 
				{width: 70, depth: 70, height: 120, sideOrientation: BABYLON.Mesh.BACKSIDE})
			boundsBox.position = new BABYLON.Vector3(origin[0], origin[1], origin[2])
			boundsBox.checkCollisions = true;
			boundsBox.visibility = 0;
			
			// DO NOT USE! Makes stuff look weird.
			//scene.createDefaultEnvironment();
		
		});
	}
		
	return {
		/** Creates a user avatar with the specified user ID at the specified position with the
		    specified rotation. Position and rotation are BABYLON.Vector3 values.
		 */
		makeAvatar: function(userId, position, rotation, scene, memberOptions) {
			// Lazy load the base object.
			if (!avatarBase) {
				// Create a UV mapping that turns off the material for every face but the front one.
				let faceUV = new Array(6);
				faceUV[0] = new BABYLON.Vector4(0, 0, 0);
				faceUV[2] = new BABYLON.Vector4(0, 0, 0);
				faceUV[3] = new BABYLON.Vector4(0, 0, 0);
				faceUV[4] = new BABYLON.Vector4(0, 0, 0);
				faceUV[5] = new BABYLON.Vector4(0, 0, 0);
			  
				// Make options with the UV.
				let options = {height: 0.5, width: 0.75, depth: 0.025, faceUV: faceUV};
			
				// Make the avatar object.
				let badgeMat = new BABYLON.StandardMaterial("badge", scene);
				let badgeTex = new BABYLON.Texture("/textures/conbadge.png", scene);
				//badgeTex.vScale = -1;
				badgeMat.diffuseTexture = badgeTex;
				badgeMat.emissiveTexture = badgeTex;
				badgeMat.backFaceCulling = true;
				avatarBase = BABYLON.MeshBuilder.CreateBox("avatarBase", options, scene);
				avatarBase.material = badgeMat;
				avatarBase.checkCollisions = false;
			
				// Add googly eyes.
				let whiteMat = new BABYLON.StandardMaterial("white", scene);
				whiteMat.diffuseColor = new BABYLON.Color3(1, 1, 1);
				//whiteMat.ambientColor = new BABYLON.Color3(1, 1, 1);
				whiteMat.emissiveColor = new BABYLON.Color3(1, 1, 1);
				let blackMat = new BABYLON.StandardMaterial("black", scene);
				blackMat.diffuseColor = new BABYLON.Color3(0, 0, 0);
				blackMat.ambientColor = new BABYLON.Color3(0, 0, 0);		
				//blackMat.emissiveColor = new BABYLON.Color3(0, 0, 0);
				let b1 = BABYLON.MeshBuilder.CreateDisc("eye", {radius: 0.055, tessellation: 32}, scene);	
				b1.position = new BABYLON.Vector3(-0.075, 0.23, -0.027);
				b1.material = blackMat;
				let e1 = BABYLON.MeshBuilder.CreateDisc("eye", {radius: 0.05, tessellation: 32}, scene);	
				e1.position = new BABYLON.Vector3(-0.075, 0.23, -0.03);
				e1.material = whiteMat;
				let p1 = BABYLON.MeshBuilder.CreateDisc("eye", {radius: 0.04, tessellation: 32}, scene);	
				p1.position = new BABYLON.Vector3(-0.077, 0.22, -0.04);
				p1.material = blackMat;
				avatarBase.addChild(b1);
				avatarBase.addChild(e1);
				avatarBase.addChild(p1);
				let b2 = BABYLON.MeshBuilder.CreateDisc("eye", {radius: 0.055, tessellation: 32}, scene);	
				b2.position = new BABYLON.Vector3(0.075, 0.23, -0.027);
				b2.material = blackMat;
				let e2 = BABYLON.MeshBuilder.CreateDisc("eye", {radius: 0.05, tessellation: 32}, scene);	
				e2.position = new BABYLON.Vector3(0.075, 0.23, -0.03);
				e2.material = whiteMat;
				let p2 = BABYLON.MeshBuilder.CreateDisc("eye", {radius: 0.04, tessellation: 32}, scene);	
				p2.position = new BABYLON.Vector3(0.073, 0.22, -0.04);
				p2.material = blackMat;
				avatarBase.addChild(b2);
				avatarBase.addChild(e2);
				avatarBase.addChild(p2);
				avatarBase.position = new BABYLON.Vector3(0, -5, 0);
			}
			
			// Clone.
			avatar = avatarBase.clone(userId);
			
			// Do we have options?
			if (memberOptions) {
				// Add name.
				let nm = SQUIDSPACE.getValIfKeyInDict("member-name", memberOptions, "Anonymous Coward");
				let tx = new BABYLON.DynamicTexture(nm + "_tex", {width:140, height:20}, scene);
				let ctx = tx.getContext();
				
				// HACK: The BJS DynamicTexture drawText() does something weird based on the string length, 
				//       so here we are doing a little hack that (mostly) compensates for that.
				// TODO: Find a better way to draw text where you can properly use canvas context capabilities.
				let drawMiddle = 140 / 2; 
				if (nm.length > 18) {
					drawMiddle = drawMiddle - 20;
				} 
				else if (nm.length > 12) {
					drawMiddle = drawMiddle - 15;
				} 
				else if (nm.length > 6) {
					drawMiddle = drawMiddle - 10;
				} 
				let drawStart = drawMiddle - (ctx.measureText(nm).width / 2);
				
				tx.drawText(nm, drawStart, 15, "14px Sans-serif", "black", "white", true, true);
				let mat = new BABYLON.StandardMaterial(nm + "_mat", scene);
				mat.diffuseTexture = tx;
				mat.emissiveTexture = tx;
				mat.backFaceCulling = true;
				let nmFrm = BABYLON.MeshBuilder.CreatePlane(nm + "_sticker", {width: 0.70, height: 0.1}, scene);
				nmFrm.material = mat;
				nmFrm.position = new BABYLON.Vector3(0, -5.19, -0.04);
				nmFrm.checkCollisions = false;
				nmFrm.isVisible = true;
				avatar.addChild(nmFrm);
			
				// Add events
				let evd = SQUIDSPACE.getValIfKeyInDict("event-data", memberOptions, undefined);
				if (evd) {
					try {
						avatar.actionManager = new BABYLON.ActionManager(scene);
						avatar.actionManager.registerAction(
							new BABYLON.ExecuteCodeAction({
									trigger: BABYLON.ActionManager.OnPickTrigger
								},
								function () {SQUIDSPACE.fireEvent("onClickShowPopup", "avatar_" + nm, evd);}
							),
						);
					} catch(e) {
						SQUIDSPACE.logError(`makeAvatar(): Attaching click event to Avatar failed with error ${e}.`)
					}
				}
			
				// TODO: Other options. 
			}
												
			// Set the position and rotation.
			avatar.position = position;
			avatar.rotation = rotation;
			 
			// Done.
			return avatar;
		},
		
		wireSquidSpace: function(options, data, squidSpace) {
			attachObjectLoaderHooks(squidSpace);
			attachPrepareHook(squidSpace);
			if (options.squidHallBuildHook) attachSquidHallBuildHooks(squidSpace);
			attachObjectPlacerHooks(squidSpace);
		},
		
		makeWorld: function(contentModuleList, beforeBuildFunc, afterBuildFunc, isHall) {

			// Set up Babylon.js.
			window.canvas = document.getElementById("renderCanvas"); // Get the canvas element
			window.engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
			window.scene = new BABYLON.Scene(engine);
			
			// What does this do?
			engine.getCaps().highPrecisionShaderSupported = false;
	
			// Wire in the SquidSpace.js common code.
			SQUIDCOMMON.wireSquidSpace(null, null, SQUIDSPACE);
	
			// Wire in the SquidHall code.
			let options = {squidHallBuildHook: false};
			if (isHall) options.squidHallBuildHook = true;
			SquidHall.wireSquidSpace(options, null, SQUIDSPACE);

			// Here's where we do the magic.
			document.addEventListener("DOMContentLoaded", (event) =>{
				try {
					setupDebugBefore();
				} catch(e) {
					// Ignore.
				}
				try {
					beforeBuildFunc(scene);
				} catch(e) {
					// Ignore.
				}
				// Create and activate the world space.
				if (SQUIDSPACE.buildWorld(world, contentModuleList, scene)) {
					try {
						setupDebugAfter();
					} catch(e) {
						// Ignore.
					}
					try {
						afterBuildFunc(scene);
					} catch(e) {
						// Ignore.
					}
					
					// Register a render loop to repeatedly render the world space.
					// NOTE: Use commented out render loop below if you don't want FPS label.
					let currFPS = 0;
					let newFPS = 0;
				    var fpsLabel = document.getElementById("fpsLabel");

					// Add page-specific event handlers. (The events themselves are added when 
					// SQUIDSPACE.buildWorld() is called.)
					SQUIDSPACE.addEventListener("onClickShowPopup", function(sourceObjectName, data){
						showMessagePopup(data);
					});
			
					engine.runRenderLoop(function() {
						scene.render();

						// Update FPS on screen if it has changed.
						newFPS = engine.getFps().toFixed();
						if (currFPS != newFPS) {
							currFPS = newFPS;
						    fpsLabel.innerHTML = `&nbsp;${currFPS} fps&nbsp;`;
						}
					});

					// Alternate render loop without FPS label.
					//engine.runRenderLoop(function() {
					//	scene.render();
					//});

					// Watch for browser/canvas resize events
					window.addEventListener("resize", function() {
						engine.resize();
					});
					
					// Play crowd sound.
					playSound();
					
				}
				else {
					console.log("Failed to load world space.")

					showMessagePopup(
						{
							"title": "Squid Hall 3D Space Failed to Load",
						 	"text": "We apologize! Something happened while loading the 3D simulation space. It's possible your computer or web browser do not support WebGL or other features required to make it work. Please try again with a different browser or computer."
						}
					);
				}
			});
		}
	}
}();
