const colorsBox = document.getElementById('colorsBox');
const colorText = document.getElementById("color-text")

const addColor = () => {
    const color = colorText.value;

    if(color == "") return;

    colorsBox.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <div class="rounded shadow color-box" style="background: ${color}">
            </div>
        </div>
    `
}