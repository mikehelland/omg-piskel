function OMGEmbeddedViewerPISKEL(viewer) {
    this.data = viewer.data
    this.embedDiv = viewer.embedDiv

    
    var canvas = document.createElement("canvas")
    /*canvas.width = framesheet.width
    canvas.height = framesheet.height
    canvas.style.width = Math.max(64, canvas.width) + "px"
    canvas.style.height = Math.max(64, canvas.height) + "px"
    */
    this.embedDiv.appendChild(canvas)

    
    var img = document.createElement("img")
    //img.src = this.data.first_frame_as_png
    img.src = this.data.framesheet_as_png
    img.onload = e => {
        canvas.getContext("2d").drawImage(img, 0, 0)
    }
}
/*

    let dir = omg.apps["sprite"].path

    this.interval = 250
    
    omg.util.loadScripts([dir + "spriter.js"], () => this.setup())
}

OMGEmbeddedViewerPISKEL.prototype.setup = function () {
    var spriters = []

    for (var sheetName in this.data.sheets) {
        
        var canvas = document.createElement("canvas")
        canvas.width = this.data.frameWidth
        canvas.height = this.data.frameHeight
        canvas.style.width = canvas.width + "px"
        canvas.style.height = canvas.height + "px"
        this.embedDiv.appendChild(canvas)

        var spriter = new OMGSpriter(this.data, canvas)
        spriter.autoIncrementRow = true
        spriter.clearCanvas = true
        spriter.setSheet(sheetName)
        spriter.draw()
    
        spriters.push(spriter)
    }
    
    setInterval(() => {
        for (var i = 0; i < spriters.length; i++) {
            spriters[i].drawNext()
        }
    }, this.interval)
}
*/