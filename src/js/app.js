var farts_container = document.getElementsByClassName("farts-container")

let currentAudio = null

for(let i = 1; i<=500; i++){
    var test_button = document.createElement('button')
    var audio_fart = document.createElement("audio")
    audio_fart.id = "fart" + i
    audio_fart.src = "public/data/fart_dataset/" + i + ".wav"
    console.log(audio_fart.src)
    test_button.addEventListener("click", () => {
        /*audio_fart.play()*/
        var audio = document.getElementById("fart" + i)

        if(currentAudio){
            currentAudio.pause()
            currentAudio.currentTime = 0
        }
        audio.play()
        currentAudio = audio
    });

    test_button.textContent = "Fart" + i
    farts_container[0].appendChild(test_button)
    farts_container[0].appendChild(audio_fart)
}