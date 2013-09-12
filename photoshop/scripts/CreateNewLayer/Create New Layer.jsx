/*
var begDesc = "Assign this to the "New Document" event. Creates a new layer and sets it as active when creating a new document." // endDesc
var begName = "Create New Layer" // endName
*/

/*
    The MIT License (MIT)
    
    Copyright (c) 2013 Mike Chambers
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*
    Create New Layer Event script for Photoshop CC
    v0.85
    
    Creates a new layer and sets it as the active layer when creating a new document.
    
    Created by Mike Chambers
    mikechambers@gmail.com
    http://www.mikechambers.com
*/

//Name of the new layer. By default, the script lets Photoshop name it (Usually "Layer 1").
//If you want something different, set it here.
var NEW_LAYER_NAME = "";

var createNewLayer = function() {
    try {
        if (app.documents.length) {
            var doc = activeDocument;
            var layers = doc.artLayers;
            var newLayer = layers.add();
            
            if(NEW_LAYER_NAME) {
                newLayer.name = NEW_LAYER_NAME;
            }
            
            doc.activeLayer = newLayer;
        }
    } catch (e) {
    
    }
}

createNewLayer();
