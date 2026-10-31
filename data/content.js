/* Numeric series for the figures. Copy lives in index.html (static, SEO/a11y safe);
   this file only supplies chart data so the numbers can be edited in one place. */
window.ECHO_DATA = {
  asOf: "2026-11-01",
  dataset: "MIMIC-IV-ECHO v1.0.1 + MIMIC-IV",
  cohort: [
    { label: "TTE EF 2회 이상", value: 26132 },
    { label: "EF ≥40 → <40 전이", value: 2614 },
    { label: "전이 후 30일 내 재검", value: 504 },
    { label: "전이 후 90일 내 재검", value: 791 }
  ],
  gapDays: { median: 313, p25: 57, p75: 882 },
  literature: [
    { q: "EF 하락 후 GDMT 미시작", n: 35 },
    { q: "심초음파가 GDMT를 촉발", n: 107 },
    { q: "ML로 GDMT 시작 예측", n: 3 },
    { q: "심초음파 보고서 실행가능성", n: 21 },
    { q: "MIMIC × 심부전 × 약물", n: 1115 }
  ]
};
