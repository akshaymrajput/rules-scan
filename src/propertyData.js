const { complexityType } = require("./utils");

module.exports = [
  {
    conditions: {
      propertySelector: [".product-form__input:has(>input[name])"],
    },
    data: {
      propDetails: {
        name: `input[name]:first`,
        attr: "name",
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (jQuery('.product-form__input input[name="REPLACE_ME"]').length > 0) {
        [
          jQuery('.product-form__input input[name="REPLACE_ME"]:checked').length > 0
            ? jQuery('.product-form__input input[name="REPLACE_ME"]:checked').val().trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery('.product-form__input input[name="REPLACE_ME"]').map(function (i, e) {
              return jQuery(e).val().trim();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery('.product-form__input input[name="REPLACE_ME"]').length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery('.product-form__input input[name="REPLACE_ME"]').each(function () {
          if (jQuery(this).val().trim() == $sarg) {
            jQuery(this)[0]?.click();
          }
        });
      }
      wait_for(function () {
        return true;
      });
      `,
      propStockGetter: `
      $val = false;
      if (
        jQuery('.product-form__input input[name="REPLACE_ME"]').length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery('.product-form__input input[name="REPLACE_ME"]').each(function () {
          if (
            jQuery(this).val().trim() == $sarg &&
            (jQuery(this).is(":disabled") || jQuery(this).hasClass("disabled"))
          ) {
            $val = true;
          }
        });
      }
      $val;
      `,
    },
  },
  {
    conditions: {
      propertySelector: [".variant-input-wrap[name]:first"],
    },
    data: {
      propDetails: {
        name: `.variant-input-wrap[name]:first`,
        attr: "name",
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (jQuery('.variant-input-wrap[name="REPLACE_ME"] input').length > 0) {
        [
          jQuery('.variant-input-wrap[name="REPLACE_ME"] input:checked').length > 0
            ? jQuery('.variant-input-wrap[name="REPLACE_ME"] input:checked').val().trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery('.variant-input-wrap[name="REPLACE_ME"] input').map(function (i, e) {
              return jQuery(e).val().trim();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery('.variant-input-wrap[name="REPLACE_ME"] input').length > 0 &&
        $sarg != "Choose REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery('.variant-input-wrap[name="REPLACE_ME"] input').each(function (i, e) {
          if (jQuery(this).val().trim() == $sarg) {
            jQuery(this)[0]?.click();
          }
        });
      }
      wait_for(function () {
        return true;
      });
      `,
      propStockGetter: `
      $val = false;
      if (
        jQuery('.variant-input-wrap[name="REPLACE_ME"] input').length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        jQuery('.variant-input-wrap[name="REPLACE_ME"] input').each(function () {
          if (
            jQuery(this).val().trim() == $sarg &&
            jQuery(this).hasClass("disabled")
          ) {
            $val = true;
          }
        });
      }
      $val;
      `,
    },
  },
  {
    conditions: {
      propertySelector: [
        '[class*="product-form__variants"] [data-swatch-option][class*="name__"]',
      ],
    },
    data: {
      propDetails: {
        name: `[class*="product-form__variants"] [data-swatch-option][class*="name__"]`,
        attr: `class`,
        complexity: complexityType.SPECIAL.Pattern_A,
      },
      propGetter: `
      if (
        jQuery(
          '[class*="product-form__variants"] [data-swatch-option][class*="name__REPLACE_ME"] [data-swatch-item]'
        ).length > 0
      ) {
        [
          jQuery(
            '[class*="product-form__variants"] [data-swatch-option][class*="name__REPLACE_ME"] [data-swatch-item].is--selected'
          ).length > 0
            ? jQuery(
                '[class*="product-form__variants"] [data-swatch-option][class*="name__REPLACE_ME"] [data-swatch-item].is--selected'
              )
                .text()
                .trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              '[class*="product-form__variants"] [data-swatch-option][class*="name__REPLACE_ME"] [data-swatch-item]'
            ).map(function (i, e) {
              return jQuery(e).text().trim();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery(
          '[class*="product-form__variants"] [data-swatch-option][class*="name__REPLACE_ME"] [data-swatch-item]'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '[class*="product-form__variants"] [data-swatch-option][class*="name__REPLACE_ME"] [data-swatch-item]'
        ).each(function () {
          if (jQuery(this).text().trim() == $sarg) {
            jQuery(this)[0]?.click();
          }
        });
      }
      wait_for(function () {
        return true;
      });
      `,
      propStockGetter: `
      $val = false;
      if (
        jQuery(
          '[class*="product-form__variants"] [data-swatch-option][class*="name__REPLACE_ME"] [data-swatch-item]'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '[class*="product-form__variants"] [data-swatch-option][class*="name__REPLACE_ME"] [data-swatch-item]'
        ).each(function () {
          if (
            jQuery(this).text().trim() == $sarg &&
            (jQuery(this).is(":disabled") ||
              jQuery(this).hasClass("disabled") ||
              jQuery(this).hasClass("is--soldout"))
          ) {
            $val = true;
          }
        });
      }
      $val;
      `,
    },
  },
  {
    conditions: {
      propertySelector: [".variations select[id]:visible"],
    },
    data: {
      propDetails: {
        name: `.variations select[id]:visible`,
        attr: `id`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (jQuery(".variations select#REPLACE_ME option").length > 0) {
        [
          jQuery(".variations select#REPLACE_ME option:selected")
            .text()
            .toLowerCase()
            .indexOf("choose") == -1
            ? jQuery(".variations select#REPLACE_ME option:selected").text().trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(".variations select#REPLACE_ME option").map(function (i, e) {
              if (jQuery(e).text().toLowerCase().indexOf("choose") == -1)
                return jQuery(e).text().trim();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery(".variations select#REPLACE_ME option").length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(".variations select#REPLACE_ME option").each(function () {
          if (jQuery(this).text().trim() == $sarg) {
            jQuery(this).parent().val(jQuery(this).val()).change();
          }
        });
      }
      wait_for(function () {
        return true;
      });
      `,
      propStockGetter: `
      $val = false;
      if (
        jQuery(".variations select#REPLACE_ME option").length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        jQuery(".variations select#REPLACE_ME option").each(function () {
          if (
            jQuery(this).text().trim() == $sarg &&
            jQuery(this).hasClass("disabled")
          ) {
            $val = true;
          }
        });
      }
      $val;
      `,
    },
  },
  {
    conditions: {
      propertySelector: ['.product select[name*="options["]:visible'],
    },
    data: {
      propDetails: {
        name: `.product select[name*="options["]:visible`,
        attr: `name`,
        complexity: complexityType.INSIDE_SQ_BRACKETS,
      },
      propName: `.product select[name*="options["]:visible`,
      propAttr: `name`,
      propGetter: `
      if (jQuery('.product select[name="options[REPLACE_ME]"] option').length > 0) {
        [
          jQuery('.product select[name="options[REPLACE_ME]"] option:selected')
            .text()
            .toLowerCase()
            .indexOf("choose") == -1
            ? jQuery('.product select[name="options[REPLACE_ME]"] option:selected').text().trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery('.product select[name="options[REPLACE_ME]"] option').map(function (i, e) {
              if (jQuery(e).text().toLowerCase().indexOf("choose") == -1)
                return jQuery(e).text().trim();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery('.product select[name="options[REPLACE_ME]"] option').length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery('.product select[name="options[REPLACE_ME]"] option').each(function () {
          if (jQuery(this).text().trim() == $sarg) {
            jQuery(this).parent().val(jQuery(this).val()).change();
          }
        });
      }
      wait_for(function () {
        return true;
      });
      `,
      propStockGetter: `
      $val = false;
      if (
        jQuery('.product select[name="options[REPLACE_ME]"] option').length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        jQuery('.product select[name="options[REPLACE_ME]"] option').each(function () {
          if (
            jQuery(this).text().trim() == $sarg &&
            jQuery(this).hasClass("disabled")
          ) {
            $val = true;
          }
        });
      }
      $val;
      `,
    },
  },
  {
    conditions: {
      propertySelector: [
        '.product-detail .option-selector__btns:has(input[name$="-selector"])',
      ],
    },
    data: {
      propDetails: {
        name: `input[name$="-selector"]:first`,
        attr: `name`,
        complexity: complexityType.SPECIAL.Pattern_B,
      },
      propGetter: `
      if (
        jQuery(
          '.product-detail .option-selector__btns input[name$="REPLACE_ME-selector"]'
        ).length > 0
      ) {
        [
          jQuery(
            '.product-detail .option-selector__btns input[name$="REPLACE_ME-selector"]:checked'
          ).length > 0
            ? jQuery(
                '.product-detail .option-selector__btns input[name$="REPLACE_ME-selector"]:checked'
              )
                .val()
                .trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              '.product-detail .option-selector__btns input[name$="REPLACE_ME-selector"]'
            ).map(function (i, e) {
              return jQuery(e).val().trim();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery(
          '.product-detail .option-selector__btns input[name$="REPLACE_ME-selector"]'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product-detail .option-selector__btns input[name$="REPLACE_ME-selector"]'
        ).each(function () {
          if (jQuery(this).val().trim() == $sarg) {
            jQuery(this)[0]?.click();
          }
        });
      }
      wait_for(function () {
        return true;
      });
      `,
      propStockGetter: `
      $val = false;
      if (
        jQuery(
          '.product-detail .option-selector__btns input[name$="REPLACE_ME-selector"]'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product-detail .option-selector__btns input[name$="REPLACE_ME-selector"]'
        ).each(function () {
          if (
            jQuery(this).val().trim() == $sarg &&
            (jQuery(this).is(":disabled") ||
              jQuery(this).hasClass("unavailable") ||
              jQuery(this).hasClass("disabled"))
          ) {
            $val = true;
          }
        });
      }
      $val;      
      `,
    },
  },
];


/*
if (
  jQuery(
    '.product-detail .option-selector__btns input[name$="colore-selector"]'
  ).length > 0
) {
  [
    jQuery(
      '.product-detail .option-selector__btns input[name$="colore-selector"]:checked'
    ).length > 0
      ? jQuery(
          '.product-detail .option-selector__btns input[name$="colore-selector"]:checked'
        )
          .val()
          .trim()
      : "Select Color",
    jQuery.makeArray(
      jQuery(
        '.product-detail .option-selector__btns input[name$="colore-selector"]'
      ).map(function (i, e) {
        return jQuery(e).val().trim();
      })
    ),
  ];
} else ["No Color", ["No Color"]];

// $sarg = 'Malva'
if (
  jQuery(
    '.product-detail .option-selector__btns input[name$="colore-selector"]'
  ).length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(
    '.product-detail .option-selector__btns input[name$="colore-selector"]'
  ).each(function () {
    if (jQuery(this).val().trim() == $sarg) {
      jQuery(this)[0]?.click();
    }
  });
}
wait_for(function () {
  return true;
});

$val = false;
if (
  jQuery(
    '.product-detail .option-selector__btns input[name$="colore-selector"]'
  ).length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(
    '.product-detail .option-selector__btns input[name$="colore-selector"]'
  ).each(function () {
    if (
      jQuery(this).val().trim() == $sarg &&
      (jQuery(this).is(":disabled") ||
        jQuery(this).hasClass("unavailable") ||
        jQuery(this).hasClass("disabled"))
    ) {
      $val = true;
    }
  });
}
$val;


*/