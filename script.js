const rangeData = {
    케미: {
        비구면: { min: -12.00, max: 6.00 },
        구면: { min: -10.00, max: 8.00 },
    },
    XYZ: {
        모델A: { min: -5.00, max: 5.00 },
        모델B: { min: -15.00, max: 10.00 },
    },
};

document.getElementById('rangeCheckerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const company = document.getElementById('company').value.trim();
    const product = document.getElementById('product').value.trim();
    const value = parseFloat(document.getElementById('value').value);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';

    if (!rangeData[company] || !rangeData[company][product]) {
        resultDiv.textContent = '해당 제품 정보를 찾을 수 없습니다.';
        resultDiv.style.color = 'red';
        return;
    }

    const { min, max } = rangeData[company][product];

    if (value >= min && value <= max) {
        resultDiv.textContent = '가능';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = '불가능';
        resultDiv.style.color = 'red';
    }
});
