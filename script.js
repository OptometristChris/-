// 회사별 설계 옵션 데이터
const companyToProducts = {
    chemi: ['비구면', '양면비구면', '변색'],
    nikon: ['비구면', '양면비구면', '변색'],
    zeiss: ['비구면', '클리어뷰', '변색'],
    tokai: ['비구면', '양면비구면', '변색'],
    daemyung: ['비구면', '양면비구면'],
};

const refractiveIndexOptions = {
    tokai: ['1.56', '1.60', '1.67', '1.76'],
    default: ['1.56', '1.60', '1.67', '1.74'],
};

// 한글 설계 ↔ 영문 설계 매핑
const productMapping = {
    비구면: 'asp',
    양면비구면: 'das',
    클리어뷰: 'clearview',
    변색: 'photochromic',
};

const companyMapping = {
    케미: 'chemi',
    니콘: 'nikon',
    자이스: 'zeiss',
    토카이: 'tokai',
    다가스: 'daemyung', // 추가로 필요한 경우
};

// 회사 데이터 범위 (예: rangeData 사용)
const extraOptionData = {
    nikon: {
        asp: {
            '1.60': [
                { value: 'bluv', label: 'BLUV' },
                { value: 'seeuv', label: 'SEE+UV' },
            ],
            '1.67': [
                { value: 'bluv', label: 'BLUV' },
                { value: 'seeuv', label: 'SEE+UV' },
            ],
        },
    },
};

const rangeData = {
    chemi: {
        asp: {
            '1.56': {
                퍼펙트: {
                    sRange: { min: -4.00, max: +6.00 },
                    cRules: [
                        { sMin: -4.00, sMax: 0.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +6.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.60': {
                퍼펙트: {
                    sRange: { min: -10.00, max: 6.00 },
                    cRules: [
                        { sMin: -8.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: -10.00, sMax: -8.25, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +6.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.67': {
                퍼펙트: {
                    sRange: { min: -6.00, max: 4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: 4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.74': {
                퍼펙트: {
                    sRange: { min: -15.00, max: -1.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: 4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
        },
    },
    nikon: {
        asp: {
            '1.60': {
                seeuv: {
                    sRange: { min: -6.00, max: 4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: 4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                bluv: {
                    sRange: { min: -6.00, max: 4.00 }, // S값 전체 범위
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 }, // S값 -6.00 ~ 0.00
                        { sMin: 0.25, sMax: 4.00, cMin: -2.00, cMax: 0.00 }, // S값 0.25 ~ 4.00
                    ],
                },
            },
            '1.67': {
                seeuv: {
                    sRange: { min: -6.00, max: 4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: 4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
        },
    },
    // 다른 회사 데이터
};


const product = productMapping[document.getElementById('product').value];

// 회사 선택 시 설계 드롭다운 업데이트
document.getElementById('company').addEventListener('change', function () {
    const company = this.value;

    // 굴절률 드롭다운 초기화
    const refractiveIndexSelect = document.getElementById('refractiveIndex');
    refractiveIndexSelect.innerHTML = '<option value="">굴절률 선택</option>';
    const refractiveOptions = company === 'tokai' ? refractiveIndexOptions.tokai : refractiveIndexOptions.default;

    // 굴절률 옵션 추가
    refractiveOptions.forEach(index => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = index;
        refractiveIndexSelect.appendChild(option);
    });

    // 설계 드롭다운 초기화
    const productSelect = document.getElementById('product');
    productSelect.innerHTML = '<option value="">설계 선택</option>';

    if (companyToProducts[company]) {
        companyToProducts[company].forEach(product => {
            const option = document.createElement('option');
            option.value = product;
            option.textContent = product;
            productSelect.appendChild(option);
        });
    }
});

// 설계 변경 시 코팅/색상 옵션 업데이트
// 설계 변경 시 코팅/색상 옵션 업데이트
document.getElementById('product').addEventListener('change', function () {
    const company = document.getElementById('company').value;
    const product = productMapping[this.value]; // 한글 설계를 영문 키로 매핑
    const refractiveIndex = document.getElementById('refractiveIndex').value;

    const extraOptionSelect = document.getElementById('extraOption');
    extraOptionSelect.innerHTML = '<option value="">옵션 선택</option>';

    // refractiveIndex가 비어 있는 경우 처리
    if (!refractiveIndex) {
        console.warn('굴절률을 먼저 선택하세요.');
        alert('굴절률을 먼저 선택하세요.');
        return;
    }

    console.log('company:', company);
    console.log('product:', product);
    console.log('refractiveIndex:', refractiveIndex);

    // 데이터 연결 및 코팅/색상 옵션 추가
    if (
        extraOptionData[company] &&
        extraOptionData[company][product] &&
        extraOptionData[company][product][refractiveIndex]
    ) {
        const options = extraOptionData[company][product][refractiveIndex];
        options.forEach(option => {
            const optElement = document.createElement('option');
            optElement.value = option.value;
            optElement.textContent = option.label;
            extraOptionSelect.appendChild(optElement);
        });
    } else {
        console.warn('No matching data found for the selected options.');
    }
});



// 폼 제출 시 범위 확인
document.getElementById('rangeCheckerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const company = document.getElementById('company').value.trim();
    const product = productMapping[document.getElementById('product').value.trim()]; // 한글 -> 영문 매핑
    const refractiveIndex = document.getElementById('refractiveIndex').value.trim();
    const extraOption = document.getElementById('extraOption').value.trim();
    const sValue = parseFloat(document.getElementById('sValue').value);
    const cValue = parseFloat(document.getElementById('cValue').value);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';

    if (!company || !product || !refractiveIndex || !extraOption) {
        resultDiv.textContent = '모든 필드를 선택하세요.';
        resultDiv.style.color = 'red';
        return;
    }

    // rangeData에서 조건 찾기
    const range = rangeData[company]?.[product]?.[refractiveIndex]?.[extraOption];

    if (!range) {
        resultDiv.textContent = '해당 조건에 대한 데이터가 없습니다.';
        resultDiv.style.color = 'red';
        return;
    }

    const { sRange, cRules } = range;

    // S값 범위 확인
    if (sValue < sRange.min || sValue > sRange.max) {
        resultDiv.textContent = `불가능: S값 (${sValue})은 범위 (${sRange.min} ~ ${sRange.max})에 포함되지 않습니다.`;
        resultDiv.style.color = 'red';
        return;
    }

    // C값 범위 확인 (S값에 따라 결정)
    const matchingRule = cRules.find(rule => sValue >= rule.sMin && sValue <= rule.sMax);

    if (matchingRule) {
        if (cValue >= matchingRule.cMin && cValue <= matchingRule.cMax) {
            resultDiv.textContent = `가능: S값 (${sValue})과 C값 (${cValue})은 범위에 포함됩니다.`;
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = `불가능: C값 (${cValue})은 S값 (${sValue})에 따른 범위 (${matchingRule.cMin} ~ ${matchingRule.cMax})에 포함되지 않습니다.`;
            resultDiv.style.color = 'red';
        }
    } else {
        resultDiv.textContent = `불가능: S값 (${sValue})에 따른 C값의 조건을 찾을 수 없습니다.`;
        resultDiv.style.color = 'red';
    }
});








// // 한글 설계 ↔ 영문 설계 매핑



