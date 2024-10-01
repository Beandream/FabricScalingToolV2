const Display = document.getElementById('display');

const ScaleRangeSlider = document.getElementById("scaleRangeSlider");

const MinusButton = document.getElementById("minusButton");
const AddButton = document.getElementById("addButton");
const ScaleInput = document.getElementById("scaleInput");

const ResetButton = document.getElementById("resetButton");

const UploadImageInput = document.getElementById("fileUpload");

ScaleRangeSlider.addEventListener("input", onScaleRangeSliderChange, false);

var defaultImageScale = 72;
var previewImageScale = defaultImageScale;

function changePreviewImageScale(value) {
    var newValue = Number(previewImageScale) + Number(value);
    updatePreviewImageScaleValues(newValue);
}

function updatePreviewImageScaleValues(value) {
    previewImageScale = value;
    ScaleInput.value = value;
    ScaleRangeSlider.value = value;
    updatePreviewImageScale()
}

changeViewScaleOptions();
function changeViewScaleOptions() {
    var value = document.querySelector('input[name="scaleOptions"]:checked').value;
    console.log(value);
}

function onScaleRangeSliderChange() {
    var value = ScaleRangeSlider.value;
    updatePreviewImageScaleValues(value)
}

function updatePreviewImageScale() {
    var size = Display.offsetWidth / previewImageScale;
    document.documentElement.style.setProperty('--previewImageScale', size);
    // document.documentElement.style.setProperty('--outputElementSize', Display.offsetWidth / previewImageScale);
}

function resetImageScale() {
    updatePreviewImageScaleValues(defaultImageScale)
}