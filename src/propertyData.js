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
      propertySelector: [".variant-input-wrap[name]"],
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
  {
    conditions: {
      propertySelector: [
        ".product-details .swatches [option-name]:has(.swatch-button)",
      ],
    },
    data: {
      propDetails: {
        name: `.product-details .swatches [option-name]:first`,
        attr: `option-name`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (jQuery('.product-details .swatches [option-name="REPLACE_ME"] li .swatch-button').length > 0) {
        [
          jQuery('.product-details .swatches [option-name="REPLACE_ME"] li .swatch-button.swatch-selected')
            .length > 0
            ? jQuery(
                '.product-details .swatches [option-name="REPLACE_ME"] li .swatch-button.swatch-selected'
              ).attr("data-value")
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery('.product-details .swatches [option-name="REPLACE_ME"] li .swatch-button').map(function (
              i,
              e
            ) {
              return jQuery(e).attr("data-value");
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery('.product-details .swatches [option-name="REPLACE_ME"] li .swatch-button').length > 0 &&
        ($sarg != "Choose REPLACE_ME") & ($sarg != "No REPLACE_ME")
      ) {
        jQuery('.product-details .swatches [option-name="REPLACE_ME"] li .swatch-button').each(function (
          i,
          e
        ) {
          if (jQuery(this).attr("data-value").trim() == $sarg) {
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
        jQuery('.product-details .swatches [option-name="REPLACE_ME"] li .swatch-button').length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        $val = true;
        jQuery('.product-details .swatches [option-name="REPLACE_ME"] li .swatch-button').each(function () {
          if (
            jQuery(this).attr("data-value").trim() == $sarg &&
            !jQuery(this).parent().hasClass("swatch-item-unavailable")
          ) {
            $val = false;
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
        "#product-options-wrapper .swatch-attribute:has(.swatch-attribute-label:visible)",
      ],
    },
    data: {
      propDetails: {
        name: `.swatch-attribute-label:first`,
        attr: `text`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (jQuery('#product-options-wrapper .swatch-attribute-label:contains(REPLACE_ME):first ~ .swatch-attribute-options:first .swatch-option').length > 0) {
        [
          jQuery('#product-options-wrapper .swatch-attribute-label:contains(REPLACE_ME):first ~ .swatch-attribute-options:first .swatch-option.selected')
            .length > 0
            ? jQuery(
                '#product-options-wrapper .swatch-attribute-label:contains(REPLACE_ME):first ~ .swatch-attribute-options:first .swatch-option.selected'
              ).attr("data-option-label")
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery('#product-options-wrapper .swatch-attribute-label:contains(REPLACE_ME):first ~ .swatch-attribute-options:first .swatch-option').map(function (
              i,
              e
            ) {
              return jQuery(e).attr("data-option-label");
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];      
      `,
      propSetter: `
      if (
        jQuery('#product-options-wrapper .swatch-attribute-label:contains(REPLACE_ME):first ~ .swatch-attribute-options:first .swatch-option').length > 0 &&
        ($sarg != "Choose REPLACE_ME") & ($sarg != "No REPLACE_ME")
      ) {
        jQuery('#product-options-wrapper .swatch-attribute-label:contains(REPLACE_ME):first ~ .swatch-attribute-options:first .swatch-option').each(function (
          i,
          e
        ) {
          if (jQuery(this).attr("data-option-label").trim() == $sarg) {
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
        jQuery('#product-options-wrapper .swatch-attribute-label:contains(REPLACE_ME):first ~ .swatch-attribute-options:first .swatch-option').length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        $val = true;
        jQuery('#product-options-wrapper .swatch-attribute-label:contains(REPLACE_ME):first ~ .swatch-attribute-options:first .swatch-option').each(function () {
          if (
            jQuery(this).attr("data-option-label").trim() == $sarg &&
            !jQuery(this).hasClass("disabled")
          ) {
            $val = false;
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
        '.productView-options .form-field[data-product-attribute]:has(.form-label):visible',
      ],
    },
    data: {
      propDetails: {
        name: `.form-label:first`,
        attr: `text`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (
        jQuery(
          ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
        ).length > 0
      ) {
        [
          jQuery(
            ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input:checked"
          ).length > 0
            ? jQuery(
                ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input:checked"
              )
                .attr('aria-label')
                ?.trim()|| jQuery(
                ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input:checked"
              )
                .siblings('label')
                .text()
                ?.trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
            ).map(function (i, e) {
              return jQuery(e).attr('aria-label')?.trim()|| jQuery(e).siblings('label').text()?.trim();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];  
      `,
      propSetter: `
      if (
        jQuery(
          ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
        ).each(function () {
          if (jQuery(this).attr('aria-label')?.trim() || jQuery(this).siblings("label").text()?.trim() == $sarg) {
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
          ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
        ).each(function () {
          if (
            jQuery(this).attr('aria-label')?.trim() || jQuery(this).siblings("label").text()?.trim() == $sarg &&
            (jQuery(this).is(":disabled") || 
            jQuery(this).hasClass("disabled") || 
            jQuery(this).siblings("label").hasClass("unavailable"))
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
    ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
  ).length > 0
) {
  [
    jQuery(
      ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input:checked"
    ).length > 0
      ? jQuery(
          ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input:checked"
        )
          .attr('aria-label')
          ?.trim()|| jQuery(
          ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input:checked"
        )
          .siblings('label')
          .text()
          ?.trim()
      : "Select REPLACE_ME",
    jQuery.makeArray(
      jQuery(
        ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
      ).map(function (i, e) {
        return jQuery(e).attr('aria-label')?.trim()|| jQuery(
          ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input:checked"
        )
          .siblings('label').text()?.trim();
      })
    ),
  ];
} else ["No REPLACE_ME", ["No REPLACE_ME"]];

if (
  jQuery(
    ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
  ).length > 0 &&
  $sarg != "Select REPLACE_ME" &&
  $sarg != "No REPLACE_ME"
) {
  jQuery(
    ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
  ).each(function () {
    if (jQuery(this).attr('aria-label')?.trim() || jQuery(this).siblings("label").text()?.trim() == $sarg) {
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
    ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
  ).length > 0 &&
  $sarg != "Select REPLACE_ME" &&
  $sarg != "No REPLACE_ME"
) {
  jQuery(
    ".productView-options .form-label:contains(REPLACE_ME) ~ .form-option-wrapper input"
  ).each(function () {
    if (
      jQuery(this).attr('aria-label')?.trim() || jQuery(this).siblings("label").text()?.trim() == $sarg &&
      (jQuery(this).is(":disabled") || 
      jQuery(this).hasClass("disabled") || 
      jQuery(this).siblings("label").hasClass("unavailable"))
    ) {
      $val = true;
    }
  });
}
$val;



*/
