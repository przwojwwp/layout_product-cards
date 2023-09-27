report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card.png",
        "test": "..\\bitmaps_test\\20230927-141049\\Card_with_data-qa_card.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 16
          },
          "rawMisMatchPercentage": 0.8688725490196078,
          "misMatchPercentage": "0.87",
          "analysisTime": 15
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_data-qa_hover.png",
        "test": "..\\bitmaps_test\\20230927-141049\\Link_with_data-qa_hover.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Link_with_data-qa_hover.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 16
          },
          "rawMisMatchPercentage": 0.8541666666666666,
          "misMatchPercentage": "0.85",
          "analysisTime": 15
        }
      },
      "status": "pass"
    }
  ]
});