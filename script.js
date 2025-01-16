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

// 한글 ↔ 영문 매핑
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

// optiondata : 코팅
const extraOptionData = {
    nikon: {
        photochromic:{
            '1.56':[
                {value: 'gr', label: '구면 gen8 그레이'}
            ],
            '1.60':[
                {value: 'gr', label: '비구면 gen8 그레이'},
                {value: 'br', label: '비구면 gen8 브라운'}
            ]
        },
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
        das: {
            '1.60': [
                { value: 'pureblue', label: 'PUREBLUE(SCN)'}
            ],
            '1.67': [
                { value: 'pureblue', label: 'PUREBLUE(SCN)'}
            ],
            '1.74': [
                { value: 'seeCoatNext', label: 'SCN'}
            ],
        }
    },
    chemi: {
        photochromic:{
            '1.60':[
                {value: 'gr', label: '구면 gen8 그레이'},
                {value: 'br', label: '구면 gen8 브라운'},
                {value: 'exgr', label: '구면 gen8 엑스트라그레이'},
            ]
        },
        asp: {
            '1.56': [
                { value: 'perfect', label: '퍼펙트' },
                { value: 'uv', label: '발수' },
            ],
            '1.60': [
                { value: 'perfect', label: '퍼펙트' },
                { value: 'uv', label: '발수' },
            ],
            '1.67': [
                { value: 'perfect', label: '퍼펙트' },
                { value: 'uv', label: '발수' },
            ],
            '1.74': [
                { value: 'perfect', label: '퍼펙트' },
                { value: 'uv', label: '발수' },
            ],
        },
        das:{
            '1.60':[
                {value: 'perfect', label: '퍼펙트'}
            ],
            '1.67':[
                {value: 'perfect', label: '퍼펙트'}
            ],
            '1.74':[
                { value: 'perfect', label: '퍼펙트' },
                { value: 'uv', label: '발수' },
            ]
        }
    },
    zeiss:{
        photochromic:{
            '1.56':[
                {value: 'gr', label: '클리어뷰 포토퓨전 그레이'},
            ],
            '1.60':[
                {value: 'gr', label: '클리어뷰 포토퓨전 그레이'},
                {value: 'br', label: '클리어뷰 포토퓨전 브라운'},
                {value: 'exgr', label: '클리어뷰 엑스트라 그레이'},
            ]
        },
        asp:{
            '1.56':[
                {value: 'dd', label: 'DD'},
                {value: 'bp', label: 'BP'},
                {value: 'dp', label: 'DP'},
            ],
            '1.60':[
                {value: 'dd', label: 'DD'},
                {value: 'bp', label: 'BP'},
                {value: 'dp', label: 'DP'},
            ],
            '1.67':[
                {value: 'dd', label: 'DD'},
                {value: 'bp', label: 'BP'},
                {value: 'dp', label: 'DP'},
            ],
        },
        clearview:{
            '1.56':[
                {value: 'dp', label: 'DP'},
                {value: 'bgdp', label: 'BGDP'},
            ],
            '1.60':[
                {value: 'dp', label: 'DP'},
                {value: 'bgdp', label: 'BGDP'},
            ],
            '1.67':[
                {value: 'dp', label: 'DP'},
                {value: 'bgdp', label: 'BGDP'},
            ],
        }
    },
    tokai:{
        asp:{
            '1.60':[
                {value: 'puv', label: 'P-UV 루티나'}
            ],
            '1.67':[
                {value: 'puv', label: 'P-UV 루티나'}
            ],
            '1.76':[
                {value: 'puv', label: 'P-UV 루티나'}
            ],
        },
        das:{
            '1.60':[
                {value: 'puv', label: 'P-UV 루티나'}
            ],
            '1.76':[
                {value: 'puv', label: 'P-UV 루티나'}
            ],
        }
    },
    daemyung:{
        asp:{
            '1.60':[
                {value: 'uvtect', label: 'UV-TECT lite'},
                {value: 'uv', label: '발수'}
            ],
            '1.67':[
                {value: 'uvtect', label: 'UV-TECT lite'},
                {value: 'uv', label: '발수'}
            ],
            '1.74':[
                {value: 'uvtect', label: 'UV-TECT lite'},
                {value: 'uv', label: '발수'}
            ]
        },
        das:{
            '1.60':[
                {value: 'uvtect', label: 'UV-TECT lite'},
                {value: 'uv', label: '발수'}
            ],
            '1.67':[
                {value: 'uvtect', label: 'UV-TECT lite'},
                {value: 'uv', label: '발수'}
            ],
            '1.74':[
                {value: 'uvtect', label: 'UV-TECT lite'},
                {value: 'uv', label: '발수'}
            ]
        }
    }
};

const rangeData = {
    chemi: {
        photochromic:{
            '1.60':{
                gr: {
                    sRange: { min: -6.00, max: +3.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: 1.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 1.25, sMax: 1.25, cMin: -1.75, cMax: 0.00 },
                        { sMin: 1.50, sMax: 1.50, cMin: -1.50, cMax: 0.00 },
                        { sMin: 1.75, sMax: 1.75, cMin: -1.25, cMax: 0.00 },
                        { sMin: 2.00, sMax: 2.00, cMin: -1.00, cMax: 0.00 },
                        { sMin: 2.25, sMax: 2.25, cMin: -0.75, cMax: 0.00 },
                        { sMin: 2.50, sMax: 2.50, cMin: -0.50, cMax: 0.00 },
                        { sMin: 2.75, sMax: 2.75, cMin: -0.25, cMax: 0.00 },
                        { sMin: 3.00, sMax: 3.00, cMin: 0.00, cMax: 0.00 },
                    ],
                },
                br: {
                    sRange: { min: -6.00, max: +3.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: 1.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 1.25, sMax: 1.25, cMin: -1.75, cMax: 0.00 },
                        { sMin: 1.50, sMax: 1.50, cMin: -1.50, cMax: 0.00 },
                        { sMin: 1.75, sMax: 1.75, cMin: -1.25, cMax: 0.00 },
                        { sMin: 2.00, sMax: 2.00, cMin: -1.00, cMax: 0.00 },
                        { sMin: 2.25, sMax: 2.25, cMin: -0.75, cMax: 0.00 },
                        { sMin: 2.50, sMax: 2.50, cMin: -0.50, cMax: 0.00 },
                        { sMin: 2.75, sMax: 2.75, cMin: -0.25, cMax: 0.00 },
                        { sMin: 3.00, sMax: 3.00, cMin: 0.00, cMax: 0.00 },
                    ],
                },
                exgr: {
                    sRange: { min: -6.00, max: 0.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                    ]
                }
            }
        },
        asp: {
            '1.56': {
                perfect: {
                    sRange: { min: -4.00, max: +6.00 },
                    cRules: [
                        { sMin: -4.00, sMax: 0.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +6.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                uv: {
                    sRange: { min: -4.00, max: +6.00 },
                    cRules: [
                        { sMin: -4.00, sMax: 0.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +6.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -8.00, sMax: -4.25, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.60': {
                perfect: {
                    sRange: { min: -10.00, max: 6.00 },
                    cRules: [
                        { sMin: -8.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: -10.00, sMax: -8.25, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +6.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                uv: {
                    sRange: { min: -10.00, max: +6.00 },
                    cRules: [
                        { sMin: -8.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +6.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -10.00, sMax: -8.25, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.67': {
                perfect: {
                    sRange: { min: -6.00, max: 4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: 4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                uv: {
                    sRange: { min: -15.00, max: +6.00 },
                    cRules: [
                        { sMin: -10.00, sMax: 0.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +6.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -12.00, sMax: -10.25, cMin: -2.00, cMax: 0.00 },
                        { sMin: -12.50, sMax: -12.50, cMin: -0.00, cMax: 0.00 },
                        { sMin: -13.00, sMax: -13.00, cMin: -0.00, cMax: 0.00 },
                        { sMin: -13.50, sMax: -13.50, cMin: -0.00, cMax: 0.00 },
                        { sMin: -14.00, sMax: -14.00, cMin: -0.00, cMax: 0.00 },
                        { sMin: -14.50, sMax: -14.50, cMin: -0.00, cMax: 0.00 },
                        { sMin: -15.00, sMax: -15.00, cMin: -0.00, cMax: 0.00 },
                    ],
                },
            },
            '1.74': {
                perfect: {
                    sRange: { min: -15.00, max: -1.00 },
                    cRules: [
                        { sMin: -10.00, sMax: -1.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: -12.00, sMax: -10.25, cMin: -2.00, cMax: 0.00 },
                        { sMin: -13.00, sMax: -12.25, cMin: 0.00, cMax: 0.00 },
                        { sMin: -13.50, sMax: -13.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.00, sMax: -14.00, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.50, sMax: -14.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -15.00, sMax: -15.00, cMin: 0.00, cMax: 0.00 },
                    ],
                },
                uv: {
                    sRange: { min: -15.00, max: -1.00 },
                    cRules: [
                        { sMin: -10.00, sMax: 0.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: -12.00, sMax: -10.25, cMin: -2.00, cMax: 0.00 },
                        { sMin: -13.00, sMax: -12.25, cMin: 0.00, cMax: 0.00 },
                        { sMin: -13.50, sMax: -13.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.00, sMax: -14.00, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.50, sMax: -14.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -15.00, sMax: -15.00, cMin: 0.00, cMax: 0.00 },
                    ],
                },
            },
        },
        das:{
            '1.60':{
                perfect:{
                    sRange: { min: -5.00, max: 0.00 },
                    cRules: [
                        { sMin: -4.00, sMax: 0.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: -5.00, sMax: -4.25, cMin: -2.00, cMax: 0.00 }
                    ],
                },
            },
            '1.67':{
                perfect:{
                    sRange: { min: -8.00, max: -2.00 },
                    cRules: [
                        { sMin: -8.00, sMax: -2.00, cMin: -4.00, cMax: 0.00 }
                    ],
                },
            },
            '1.74':{
                perfect:{
                    sRange: { min: -12.00, max: -3.00 },
                    cRules: [
                        { sMin: -8.00, sMax: -3.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: -12.00, sMax: -8.25, cMin: -2.00, cMax: 0.00 }
                    ],
                },
                uv:{
                    sRange: { min: -12.00, max: -3.00 },
                    cRules: [
                        { sMin: -12.00, sMax: -3.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            }
        }
    },
    nikon: {
        photochromic:{
            '1.56':{
                gr:{
                    sRange: { min: -6.00, max: 3.00 },
                    cRules: [
                        { sMin: -4.75, sMax: 3.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -6.00, sMax: -5.00, cMin: 0.00, cMax: 0.00 },
                    ],
                }
            },
            '1.60':{
                gr:{
                    sRange: { min: -6.00, max: 3.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 3.00, cMin: -2.00, cMax: 0.00 }
                    ],
                },
                br:{
                    sRange: { min: -6.00, max: 3.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 3.00, cMin: -2.00, cMax: 0.00 }
                    ],
                }
            }
        },
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
                    sRange: { min: -10.00, max: 6.00 }, 
                    cRules: [
                        { sMin: -8.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 }, 
                        { sMin: 0.25, sMax: 6.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -10.00, sMax: -8.25, cMin: 0.00, cMax: 0.00 }, 
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
        das: {
            '1.60': {
                pureblue: {
                    sRange: { min: -6.00, max: 0.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.67': {
                pureblue: {
                    sRange: { min: -8.00, max: -3.00 },
                    cRules: [
                        { sMin: -8.00, sMax: -3.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -10.00, sMax: -8.25, cMin: 0.00, cMax: 0.00 },
                    ],
                },
            },
            '1.74': {
                seeCoatNext: {
                    sRange: { min: -10.00, max: -3.00 },
                    cRules: [
                        { sMin: -10.00, sMax: -3.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -12.00, sMax: -10.25, cMin: 0.00, cMax: 0.00 },
                    ],
                },
            },
        },
    },
    zeiss: {
        photochromic:{
            '1.56':{
                gr:{
                    sRange: { min: -4.00, max: 3.00 },
                    cRules: [
                        { sMin: -4.00, sMax: 3.00, cMin: -2.00, cMax: 0.00 }
                    ],
                }
            },
            '1.60':{
                gr:{
                    sRange: { min: -6.00, max: 4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 4.00, cMin: -2.00, cMax: 0.00 }
                    ],
                },
                br:{
                    sRange: { min: -6.00, max: 4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 4.00, cMin: -2.00, cMax: 0.00 }
                    ],
                },
                exgr:{
                    sRange: { min: -6.00, max: 4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 4.00, cMin: -2.00, cMax: 0.00 }
                    ],
                }
            }
        },
        asp:{
            '1.56':{
                dd: {
                    sRange: { min: -5.00, max: +4.00 },
                    cRules: [
                        { sMin: -5.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                bp: {
                    sRange: { min: -5.00, max: +4.00 },
                    cRules: [
                        { sMin: -5.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                dp: {
                    sRange: { min: -5.00, max: +4.00 },
                    cRules: [
                        { sMin: -5.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.60':{
                dd: {
                    sRange: { min: -6.00, max: +4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                bp: {
                    sRange: { min: -6.00, max: +4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                dp: {
                    sRange: { min: -6.00, max: +4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.67':{
                dd: {
                    sRange: { min: -10.00, max: -3.00 },
                    cRules: [
                        { sMin: -8.00, sMax: -3.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -8.25, sMax: -8.25, cMin: -1.75, cMax: 0.00 },
                        { sMin: -8.50, sMax: -8.50, cMin: -1.50, cMax: 0.00 },
                        { sMin: -8.75, sMax: -8.75, cMin: -1.25, cMax: 0.00 },
                        { sMin: -9.00, sMax: -9.00, cMin: -1.00, cMax: 0.00 },
                        { sMin: -9.25, sMax: -9.25, cMin: -0.75, cMax: 0.00 },
                        { sMin: -9.50, sMax: -9.50, cMin: -0.50, cMax: 0.00 },
                        { sMin: -9.75, sMax: -9.75, cMin: -0.25, cMax: 0.00 },
                        { sMin: -10.00, sMax: -10.00, cMin: -0.00, cMax: 0.00 },
                    ],
                },
                bp: {
                    sRange: { min: -10.00, max: -3.00 },
                    cRules: [
                        { sMin: -8.00, sMax: -3.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -8.25, sMax: -8.25, cMin: -1.75, cMax: 0.00 },
                        { sMin: -8.50, sMax: -8.50, cMin: -1.50, cMax: 0.00 },
                        { sMin: -8.75, sMax: -8.75, cMin: -1.25, cMax: 0.00 },
                        { sMin: -9.00, sMax: -9.00, cMin: -1.00, cMax: 0.00 },
                        { sMin: -9.25, sMax: -9.25, cMin: -0.75, cMax: 0.00 },
                        { sMin: -9.50, sMax: -9.50, cMin: -0.50, cMax: 0.00 },
                        { sMin: -9.75, sMax: -9.75, cMin: -0.25, cMax: 0.00 },
                        { sMin: -10.00, sMax: -10.00, cMin: -0.00, cMax: 0.00 },
                    ],
                },
                dp: {
                    sRange: { min: -10.00, max: -3.00 },
                    cRules: [
                        { sMin: -8.00, sMax: -3.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -8.25, sMax: -8.25, cMin: -1.75, cMax: 0.00 },
                        { sMin: -8.50, sMax: -8.50, cMin: -1.50, cMax: 0.00 },
                        { sMin: -8.75, sMax: -8.75, cMin: -1.25, cMax: 0.00 },
                        { sMin: -9.00, sMax: -9.00, cMin: -1.00, cMax: 0.00 },
                        { sMin: -9.25, sMax: -9.25, cMin: -0.75, cMax: 0.00 },
                        { sMin: -9.50, sMax: -9.50, cMin: -0.50, cMax: 0.00 },
                        { sMin: -9.75, sMax: -9.75, cMin: -0.25, cMax: 0.00 },
                        { sMin: -10.00, sMax: -10.00, cMin: -0.00, cMax: 0.00 },
                    ],
                },
            }
        },
        clearview:{
            '1.56':{
                dp: {
                    sRange: { min: -4.00, max: +3.00 },
                    cRules: [
                        { sMin: -4.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +3.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                bgdp: {
                    sRange: { min: -4.00, max: +3.00 },
                    cRules: [
                        { sMin: -4.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +3.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.60':{
                dp: {
                    sRange: { min: -6.00, max: +4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                bgdp: {
                    sRange: { min: -6.00, max: +4.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: +4.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.67':{
                dp: {
                    sRange: { min: -8.00, max: 0.00 },
                    cRules: [
                        { sMin: 0.00, sMax: 0.00, cMin: -3.00, cMax: -2.00 },
                        { sMin: -7.00, sMax: -2.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: -7.25, sMax: -7.25, cMin: -2.75, cMax: 0.00 },                        { sMin: -8.50, sMax: -8.50, cMin: -1.50, cMax: 0.00 },
                        { sMin: -7.50, sMax: -7.50, cMin: -2.50, cMax: 0.00 },
                        { sMin: -7.75, sMax: -7.75, cMin: -2.25, cMax: 0.00 },
                        { sMin: -8.00, sMax: -8.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                bgdp: {
                    sRange: { min: -8.00, max: 0.00 },
                    cRules: [
                        { sMin: 0.00, sMax: 0.00, cMin: -3.00, cMax: -2.00 },
                        { sMin: -7.00, sMax: -2.00, cMin: -3.00, cMax: 0.00 },
                        { sMin: -7.25, sMax: -7.25, cMin: -2.75, cMax: 0.00 },                        { sMin: -8.50, sMax: -8.50, cMin: -1.50, cMax: 0.00 },
                        { sMin: -7.50, sMax: -7.50, cMin: -2.50, cMax: 0.00 },
                        { sMin: -7.75, sMax: -7.75, cMin: -2.25, cMax: 0.00 },
                        { sMin: -8.00, sMax: -8.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.74':{
                dp: {
                    sRange: { min: -14.00, max: -3.00 },
                    cRules: [
                        { sMin: -10.00, sMax: -3.00, cMin: -2.00, cMax: -0.00 },
                        { sMin: -10.25, sMax: -10.25, cMin: -1.75, cMax: -0.00 },
                        { sMin: -10.50, sMax: -10.50, cMin: -1.50, cMax: -0.00 },
                        { sMin: -10.75, sMax: -10.75, cMin: -1.25, cMax: -0.00 },
                        { sMin: -11.00, sMax: -11.00, cMin: -1.00, cMax: -0.00 },
                        { sMin: -11.25, sMax: -11.25, cMin: -0.75, cMax: -0.75 },
                        { sMin: -11.50, sMax: -11.50, cMin: -0.50, cMax: -0.50 },
                        { sMin: -11.75, sMax: -11.75, cMin: -0.25, cMax: -0.25 },
                        { sMin: -14.00, sMax: -12.00, cMin: -0.00, cMax: -0.00 },
                    ],
                },
                bgdp: {
                    sRange: { min: -14.00, max: -3.00 },
                    cRules: [
                        { sMin: -10.00, sMax: -3.00, cMin: -2.00, cMax: -0.00 },
                        { sMin: -10.25, sMax: -10.25, cMin: -1.75, cMax: -0.00 },
                        { sMin: -10.50, sMax: -10.50, cMin: -1.50, cMax: -0.00 },
                        { sMin: -10.75, sMax: -10.75, cMin: -1.25, cMax: -0.00 },
                        { sMin: -11.00, sMax: -11.00, cMin: -1.00, cMax: -0.00 },
                        { sMin: -11.25, sMax: -11.25, cMin: -0.75, cMax: -0.75 },
                        { sMin: -11.50, sMax: -11.50, cMin: -0.50, cMax: -0.50 },
                        { sMin: -11.75, sMax: -11.75, cMin: -0.25, cMax: -0.25 },
                        { sMin: -14.00, sMax: -12.00, cMin: -0.00, cMax: -0.00 },
                    ],
                },
            }
        }
    },
    tokai:{
        asp:{
            '1.60':{
                puv: {
                    sRange: { min: -5.00, max: +4.00 },
                    cRules: [
                        { sMin: -4.50, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -5.00, sMax: 0.00, cMin: 0.00, cMax: 0.00 },
                        { sMin: 0.25, sMax: 0.25, cMin: -2.00, cMax: -0.50 },
                        { sMin: 0.50, sMax: 0.50, cMin: -2.00, cMax: -0.75 },
                        { sMin: 0.75, sMax: 0.75, cMin: -2.00, cMax: -1.00 },
                        { sMin: 1.00, sMax: 1.00, cMin: -2.00, cMax: -1.25 },
                        { sMin: 1.25, sMax: 1.25, cMin: -2.00, cMax: -1.50 },
                        { sMin: 1.50, sMax: 1.50, cMin: -2.00, cMax: -1.75 },
                        { sMin: 1.75, sMax: 1.75, cMin: -2.00, cMax: -2.00 },
                    ],
                },
            },
            '1.67':{
                puv: {
                    sRange: { min: -8.00, max: -2.00 },
                    cRules: [
                        { sMin: -8.00, sMax: -2.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
            },
            '1.76':{
                puv: {
                    sRange: { min: -12.00, max: -4.00 },
                    cRules: [
                        { sMin: -10.00, sMax: -4.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -12.00, sMax: -10.25, cMin: 0.00, cMax: 0.00 },
                    ],
                },
            },
        },
        das:{
            '1.60':{
                puv: {
                    sRange: { min: -6.50, max: 0.00 },
                    cRules: [
                        { sMin: -0.75, sMax: 0.00, cMin: 0.00, cMax: 0.00 },
                        { sMin: -6.00, sMax: -1.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -6.50, sMax: -6.25, cMin: 0.00, cMax: 0.00 },
                    ],
                },
            },
            '1.76':{
                puv: {
                    sRange: { min: -12.00, max: -4.00 },
                    cRules: [
                        { sMin: -10.00, sMax: -4.00, cMin: -2.00, cMax: 0.00 },
                        { sMin: -12.00, sMax: -10.25, cMin: 0.00, cMax: 0.00 },
                    ],
                },
            }
        }
    },
    daemyung:{
        asp:{
            '1.60':{
                uvtect:{
                    sRange: { min: -10.00, max: +8.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: -8.00, sMax: -6.25, cMin: -3.00, cMax: 0.00 },
                        { sMin: -10.00, sMax: +8.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                uv:{
                    sRange: { min: -10.00, max: +8.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: -8.00, sMax: -6.25, cMin: -3.00, cMax: 0.00 },
                        { sMin: -10.00, sMax: +8.00, cMin: -2.00, cMax: 0.00 },
                    ],
                }
            },
            '1.67':{
                uvtect:{
                    sRange: { min: -15.00, max: 0.00 },
                    cRules: [
                        { sMin: -10.00, sMax: 0.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: -12.00, sMax: -10.25, cMin: -2.00, cMax: 0.00 },
                        { sMin: -12.50, sMax: -12.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -13.00, sMax: -13.00, cMin: 0.00, cMax: 0.00 },
                        { sMin: -13.50, sMax: -13.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.00, sMax: -14.00, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.50, sMax: -14.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -15.00, sMax: -15.00, cMin: 0.00, cMax: 0.00 },
                    ],
                },
                uv:{
                    sRange: { min: -15.00, max: 0.00 },
                    cRules: [
                        { sMin: -10.00, sMax: 0.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: -12.00, sMax: -10.25, cMin: -2.00, cMax: 0.00 },
                        { sMin: -12.50, sMax: -12.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -13.00, sMax: -13.00, cMin: 0.00, cMax: 0.00 },
                        { sMin: -13.50, sMax: -13.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.00, sMax: -14.00, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.50, sMax: -14.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -15.00, sMax: -15.00, cMin: 0.00, cMax: 0.00 },
                    ],
                }
            },
            '1.74':{
                uvtect:{
                    sRange: { min: -15.00, max: -2.25 },
                    cRules: [
                        { sMin: -10.00, sMax: -2.25, cMin: -4.00, cMax: 0.00 },
                        { sMin: -12.00, sMax: -10.25, cMin: -3.00, cMax: 0.00 },
                        { sMin: -13.00, sMax: -12.25, cMin: -2.00, cMax: 0.00 },
                        { sMin: -13.50, sMax: -13.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.00, sMax: -14.00, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.50, sMax: -14.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -15.00, sMax: -15.00, cMin: 0.00, cMax: 0.00 },
                    ],
                },
                uv:{
                    sRange: { min: -15.00, max: -2.25 },
                    cRules: [
                        { sMin: -10.00, sMax: -2.25, cMin: -4.00, cMax: 0.00 },
                        { sMin: -12.00, sMax: -10.25, cMin: -3.00, cMax: 0.00 },
                        { sMin: -13.00, sMax: -12.25, cMin: -2.00, cMax: 0.00 },
                        { sMin: -13.50, sMax: -13.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.00, sMax: -14.00, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.50, sMax: -14.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -15.00, sMax: -15.00, cMin: 0.00, cMax: 0.00 },
                    ],
                }
            }
        },
        das:{
            '1.60':{
                uvtect:{
                    sRange: { min: -6.00, max: 0.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                    ],
                },
                uv:{
                    sRange: { min: -6.00, max: 0.00 },
                    cRules: [
                        { sMin: -6.00, sMax: 0.00, cMin: -2.00, cMax: 0.00 },
                    ],
                }
            },
            '1.67':{
                uvtect:{
                    sRange: { min: -10.00, max: -2.50 },
                    cRules: [
                        { sMin: -8.25, sMax: -2.25, cMin: -2.00, cMax: 0.00 },
                        { sMin: -8.50, sMax: -8.50, cMin: -1.75, cMax: 0.00 },
                        { sMin: -8.75, sMax: -8.75, cMin: -1.50, cMax: 0.00 },
                        { sMin: -9.00, sMax: -9.00, cMin: -1.25, cMax: 0.00 },
                        { sMin: -9.25, sMax: -9.25, cMin: -1.00, cMax: 0.00 },
                        { sMin: -9.50, sMax: -9.50, cMin: -0.75, cMax: 0.00 },
                        { sMin: -9.75, sMax: -9.75, cMin: -0.50, cMax: 0.00 },
                        { sMin: -10.00, sMax: -10.00, cMin: -0.00, cMax: 0.00 },
                    ],
                },
                uv:{
                    sRange: { min: -10.00, max: -2.50 },
                    cRules: [
                        { sMin: -8.25, sMax: -2.25, cMin: -2.00, cMax: 0.00 },
                        { sMin: -8.50, sMax: -8.50, cMin: -1.75, cMax: 0.00 },
                        { sMin: -8.75, sMax: -8.75, cMin: -1.50, cMax: 0.00 },
                        { sMin: -9.00, sMax: -9.00, cMin: -1.25, cMax: 0.00 },
                        { sMin: -9.25, sMax: -9.25, cMin: -1.00, cMax: 0.00 },
                        { sMin: -9.50, sMax: -9.50, cMin: -0.75, cMax: 0.00 },
                        { sMin: -9.75, sMax: -9.75, cMin: -0.50, cMax: 0.00 },
                        { sMin: -10.00, sMax: -10.00, cMin: -0.00, cMax: 0.00 },
                    ],
                },
            },
            '1.74':{
                uvtect:{
                    sRange: { min: -15.00, max: -3.00 },
                    cRules: [
                        { sMin: -10.00, sMax: -3.00, cMin: -4.00, cMax: 0.00 },
                        { sMin: -10.50, sMax: -10.50, cMin: -2.00, cMax: 0.00 },
                        { sMin: -11.00, sMax: -11.00, cMin: -2.00, cMax: 0.00 },                       
                        { sMin: -11.50, sMax: -11.50, cMin: -2.00, cMax: 0.00 },                       
                        { sMin: -12.00, sMax: -12.00, cMin: -2.00, cMax: 0.00 }, 
                        { sMin: -12.50, sMax: -12.50, cMin: 0.00, cMax: 0.00 }, 
                        { sMin: -13.00, sMax: -13.00, cMin: 0.00, cMax: 0.00 }, 
                        { sMin: -13.50, sMax: -13.50, cMin: 0.00, cMax: 0.00 },
                        { sMin: -14.00, sMax: -14.00, cMin: 0.00, cMax: 0.00 },  
                        { sMin: -14.50, sMax: -14.50, cMin: 0.00, cMax: 0.00 }, 
                        { sMin: -15.00, sMax: -15.00, cMin: 0.00, cMax: 0.00 }, 
                    ]                    
                }, 
            }
        }
    }
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

document.getElementById('refractiveIndex').addEventListener('change', function () {
    const company = document.getElementById('company').value;
    const refractiveIndex = this.value;

    const productSelect = document.getElementById('product');
    productSelect.innerHTML = '<option value="">설계 선택</option>';

    if (company && refractiveIndex) {
        let products = [...companyToProducts[company]];

        // 회사별 가능한 굴절률과 색상 옵션 확인
        const photochromicOptions = extraOptionData[company]?.photochromic || {};

        if (photochromicOptions[refractiveIndex]) {
            // 굴절률에서 '변색'이 가능한 경우 추가
            if (!products.includes('변색')) {
                products.push('변색');
            }
        } else {
            // 굴절률에서 '변색'이 불가능한 경우 제외
            products = products.filter(product => product !== 'photochromic');
        }

        const dasOptions = extraOptionData[company]?.das || {};

        if (dasOptions[refractiveIndex]) {
            // 굴절률에서 'das'이 가능한 경우 추가
            if (!products.includes('양면비구면')) {
                products.push('양면비구면');
            }
        } else {
            // 굴절률에서 'das'이 불가능한 경우 제외
            products = products.filter(product => product !== 'das');
        }

        // 드롭다운에 옵션 추가
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product;
            option.textContent = product;
            productSelect.appendChild(option);
        });
    }
});


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
        const filteredOptions = (refractiveIndex === '1.67' || refractiveIndex === '1.74') 
            ? options.filter(option => option.value !== 'photochromic') 
            : options;

        filteredOptions.forEach(option => {
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



