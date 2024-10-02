const FabricWidthOption = document.getElementById("fabricWidthOption");

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
    // changeViewScaleOptions();
    ScaleRangeSlider.max = fabricWidth;
    FabricWidthOption.innerText = fabricWidth + " Inches";
    updatePreviewImageScaleValues(fabricWidth);
}

function changePreviewImageScale(value) {
    var newValue = Number(previewImageScale) + Number(value);
    updatePreviewImageScaleValues(newValue);
}

function changeRulerScale() {

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
