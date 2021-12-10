Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version:', ml5.version );

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MVe0qZHd6/model.json' , modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    prediction1 ="The first prediction is " + prediction1;
    prediction2 ="And the second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(prediction1 + prediction2);
    synth.speak(utterThis);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }else {
            console.log (results);
            document.getElementById("result_hand_gesture_name").innerHTML = results[0].label;
            document.getElementById("result_hand_gesutre_name2").innerHTML = results[1].label;
            prediction_1 = results[0].label;
            prediction_2 = results[1].label;
            speak();
            if(result[0].label == "this looks Amazing")
            {
                document.getElementById("update_hand_gesture").innerHTML = "&#128076;";
            }
            if(result[0].label == "All the Best")
            {
                document.getElementById("update_hand_gesture").innerHTML = "&#128077;";
            }
            if(result[0].label == "That was a great Victory")
            {
                document.getElementById("update_emoji").innerHTML = "&#9996;";
            }
            if(result[1].label == "this looks Amazing")
            {
                document.getElementById("update_hand_gesture").innerHTML = "&#128076;";
            }
            if(result[1].label == "All the Best")
            {
                document.getElementById("update_hand_gesture").innerHTML = "&#128077;";
            }
            if(result[1].label == "That was a great Victory")
            {
                document.getElementById("update_emoji").innerHTML = "&#9996;";
            }
        }
    }
