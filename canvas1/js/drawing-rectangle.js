class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft,selectedStrokeColour,selectFillColour){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.selectedStrokeColour = selectedStrokeColour;
        this.selectedFillColour = selectedFillColour;
    }

    onMouseDown(coord,event){
        this.contextReal.fillStyle = this.selectedFillColour;
        this.contextReal.strokeStyle = this.selectedStrokeColour;
        this.contextReal.lineWidth = this.selectedLineWidth;
        this.origX = coord[0];
        this.origY = coord[1];

    }
    onDragging(coord,event){
        //console.log(coord)
        this.contextDraft.fillStyle = this.selectedFillColour;
        this.contextDraft.strokeStyle = this.selectedStrokeColour;
        this.contextDraft.lineWidth = this.selectedLineWidth;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.fillRect(this.origX,this.origY,(coord[0]- this.origX),(coord[1] - this.origY))
        this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillStyle = this.selectedFillColour;
        this.contextReal.strokeStyle = this.selectedStrokeColour;
        this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        this.contextReal.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        // History
        history.push($('#canvas-real')[0].toDataURL());
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
