var canvas = new fabric.Canvas('myCanvas');
 var audio = new Audio('bdayaudio.mp3');

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        block_image_object=Img;
        //gap
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:150,
            left:0
        })
        canvas.add(block_image_object);
    })
    
}
function playSound(){
	audio.play();
}
