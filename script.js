const FabricWidthOptionSpan = document.getElementById("fabricWidthOptionSpan");
const FabricWidthOptionInput = document.getElementById("fabricWidthOptionInput");

const HorizontalRuler = document.getElementById("horizontalRuler");
const VerticalRuler = document.getElementById("verticalRuler");
const Display = document.getElementById('display');

const ScaleRangeSlider = document.getElementById("scaleRangeSlider");

const MinusButton = document.getElementById("minusButton");
const AddButton = document.getElementById("addButton");
const ScaleInput = document.getElementById("scaleInput");

const ResetButton = document.getElementById("resetButton");

const UploadImageInput = document.getElementById("fileUpload");

ScaleRangeSlider.addEventListener("input", onScaleRangeSliderChange, false);

var fabricWidth = 72;
var defaultImageScale = fabricWidth;
var previewImageScale = defaultImageScale;
var previewImageFactor = fabricWidth;


setup();
function setup() {
    ScaleRangeSlider.max = fabricWidth;
    FabricWidthOptionSpan.innerText = fabricWidth + " Inches";
    FabricWidthOptionInput.value = fabricWidth;
    updatePreviewImageScaleValues(fabricWidth);
    changeRulerScale();
}

function changePreviewImageScale(value) {
    var newValue = Number(previewImageScale) + Number(value);
    updatePreviewImageScaleValues(newValue);
}

function changeRulerScale() {
    HorizontalRuler.innerHTML = "";
    VerticalRuler.innerHTML = "";

    var countFactor = previewImageFactor / 12;
    var count = previewImageFactor / countFactor;

    for (let i = 0; i < count; i++) {
        var text = Math.ceil((i+ 1) * countFactor);

        var rulerInchHorizontal = document.createElement("div");
        rulerInchHorizontal.className = "rulerInch";
        rulerInchHorizontal.innerText = text;
        HorizontalRuler.append(rulerInchHorizontal);
        
        var rulerInchVertical = document.createElement("div");
        rulerInchVertical.className = "rulerInchVertical";
        rulerInchVertical.innerText = text;
        VerticalRuler.append(rulerInchVertical);

    }
}

function updatePreviewImageScaleValues(value) {
    previewImageScale = value;
    ScaleInput.value = value;
    ScaleRangeSlider.value = value;
    updatePreviewImageScale()
}

function changeViewScaleOptions() {
    var value = document.querySelector('input[name="scaleOptions"]:checked').value;
    previewImageFactor = value;
    changeRulerScale();
    updatePreviewImageScale();
}

function onScaleRangeSliderChange() {
    var value = ScaleRangeSlider.value;
    updatePreviewImageScaleValues(value)
}
updatePreviewImageScale()
function updatePreviewImageScale() {
    var size = Display.offsetWidth / (previewImageFactor / previewImageScale);
    document.documentElement.style.setProperty('--previewImageScale', size);
}

function resetImageScale() {
    updatePreviewImageScaleValues(defaultImageScale)
}
