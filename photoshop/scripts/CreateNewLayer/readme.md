#Create New Layer Event script for Photoshop CC  
Creates a new layer and sets it as the active layer when creating a new document.   

https://github.com/mikechambers/CC-Utils/tree/master/photoshop/scripts/CreateNewLayer

Created by Mike Chambers  
mikechambers@gmail.com  
http://www.mikechambers.com

##Installation

1. Copy Script into the "Event Scripts Only" folder for your Photoshop CC install
    * __Windows 7__ : *C:\Program Files\Adobe\Adobe Photoshop CC (64 Bit)\Presets\Scripts\Event Scripts Only*
    * __Mac__ : */Applications/Adobe Photoshop CC/Presets/Scripts/Event Scripts Only*
        
2. Open Scripts Event Manager in Photoshop (File > Scripts > Scripts Event Manager)
3. Make sure that "Enabled Events to Run Scripts / Actions" is checked.
4. For Photoshop Event, select "New Document".
5. For Script, select "Create new Layer"
6. Click "Add"
7. Click "Done:
    
Once installed and enabled, anytime you create a new document, the document will include an empty layer above
the background layer.
    
##Customization

By default, the new layer is automatically named by Photoshop (usually "Layer 1"). If you would like the layer to
have a specific name, you can setting it in the NEW_LAYER_NAME variable in the script.

## Support

This script has been tested on Photoshop CC on Mac and Windows.

##Issues
If you run into any issues, or have any feature requests, you can report them at:
https://github.com/mikechambers/CC-Utils/issues

Please make sure to tag the issue with the "CreateNewLayer" label.


##License

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