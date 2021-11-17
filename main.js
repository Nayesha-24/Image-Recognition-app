Webcam.set({
    width:350 , 
    height:375 , 
    img_format:'jpeg',
    jpeg_quality:10

});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
    
}
console.log('ml5 version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8QM3xc0uL/model.json', modelLoaded);


