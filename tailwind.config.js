module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "Unit": "16px",
        "FourUnits": "64px",
        "SixUnits": "96px",
        "FiveUnits": "80px",
        "TwoUnits": "32px",
        "HalfUnit": "8px",
        "ThreeUnits": "48px",
        "OneAndHalfUnits": "24px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius8": "8px",
        "Radius4": "4px",
        "Radius2": "2px"
      },
      "scale": {
        "XSmall": "16px",
        "Medium": "96px",
        "MaxWidth": "1400px",
        "XXLarge": "288px",
        "XLarge": "192px",
        "Large": "144px",
        "Small": "48px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}