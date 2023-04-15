Webcam.set({
    width: 400,
    height: 400,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach('#webcam');
function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img src= "+data_uri+" id='captured_img'>" 
    });
}
console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/B2kh1KnP-/model.json", modelloaded);
function modelloaded(){
    console.log("Model is Loaded!");
}
function check(){
    img=document.getElementById('captured_img');
    classifier.classify(img, gotresult);
}
function gotresult(error, result){
if (error){
    console.log(error);
}else{
    console.log(result);

    document.getElementById("object").innerHTML = result[0].label;
    document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);


}

}
