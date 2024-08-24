tailwind.config = {
    theme: {
        fontFamily: {
            HK: ['"Hanken Grotesk"'],
        },
        extend: {
            boxShadow: {
                'cardShadow': '-20px 10px 60px 0 rgba(0, 0, 0, 0.04)',
                'cardShadow2': '0px 4px 40px 0 rgba(43, 89, 255, 0.08)',
            },
            listStyleImage: {
                checkmark: 'url("./images/check sign.png")',
            },
        },
        screens: {
            "lg1400": { "max": "1400px" },
            "lg1300": { "max": "1300px" },
            "lg1130": { "max": "1130px" },
            "md973": { "max": "973px" },
            "md950": { "max": "950px" },
            "md870": { "max": "870px" },
            "md807": { "max": "807px" },
            "md786": { "max": "786px" },
            "md744": { "max": "744px" },
            "md720": { "max": "720px" },
            "md690": { "max": "690px" },
            "md640": { "max": "640px" },
            "md600": { "max": "600px" },
            "md540": { "max": "540px" },
            "sm486": { "max": "486px" },
            "sm436": { "max": "436px" },
            "sm400": { "max": "400px" },
            "sm366": { "max": "366px" },
            "sm340": { "max": "340px" },
        }
    },
};

// display: -webkit-box !important;
//     -webkit-line-clamp: 5 !important;
//     -webkit-box-orient: vertical !important;
//     overflow: hidden !important;
//     word-break: normal;