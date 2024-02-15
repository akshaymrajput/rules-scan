// @collapse

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
        '.product .option-selector__btns:has(input[name$="-option"])',
      ],
    },
    data: {
      propDetails: {
        name: `input[name$="-option"]:first`,
        attr: `name`,
        complexity: complexityType.SPECIAL.Pattern_B,
      },
      propGetter: `
      if (
        jQuery(
          '.product .option-selector__btns input[name$="REPLACE_ME-option"]'
        ).length > 0
      ) {
        [
          jQuery(
            '.product .option-selector__btns input[name$="REPLACE_ME-option"]:checked'
          ).length > 0
            ? jQuery(
                '.product .option-selector__btns input[name$="REPLACE_ME-option"]:checked'
              )
                .val()
                .trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              '.product .option-selector__btns input[name$="REPLACE_ME-option"]'
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
          '.product .option-selector__btns input[name$="REPLACE_ME-option"]'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product .option-selector__btns input[name$="REPLACE_ME-option"]'
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
          '.product .option-selector__btns input[name$="REPLACE_ME-option"]'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product .option-selector__btns input[name$="REPLACE_ME-option"]'
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
        ".productView-options .form-field[data-product-attribute]:has(.form-label:has(~ .form-option-wrapper)):visible",
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
  {
    conditions: {
      propertySelector: [
        ".productView-options .form-field[data-product-attribute]:has(.form-label:has(~ input)):visible",
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
          ".productView-options .form-label:contains(REPLACE_ME) ~ input"
        ).length > 0
      ) {
        [
          jQuery(
            ".productView-options .form-label:contains(REPLACE_ME) ~ input:checked"
          ).length > 0
            ? jQuery(
                ".productView-options .form-label:contains(REPLACE_ME) ~ input:checked"
              )
                .attr('aria-label')
                ?.trim()|| jQuery(
                ".productView-options .form-label:contains(REPLACE_ME) ~ input:checked"
              )
                .next('label')
                .text()
                ?.trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              ".productView-options .form-label:contains(REPLACE_ME) ~ input"
            ).map(function (i, e) {
              return jQuery(e).attr('aria-label')?.trim()|| jQuery(e).next('label').text()?.trim();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];  
      `,
      propSetter: `
      if (
        jQuery(
          ".productView-options .form-label:contains(REPLACE_ME) ~ input"
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          ".productView-options .form-label:contains(REPLACE_ME) ~ input"
        ).each(function () {
          if (jQuery(this).attr('aria-label')?.trim() || jQuery(this).next("label").text()?.trim() == $sarg) {
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
          ".productView-options .form-label:contains(REPLACE_ME) ~ input"
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          ".productView-options .form-label:contains(REPLACE_ME) ~ input"
        ).each(function () {
          if (
            jQuery(this).attr('aria-label')?.trim() || jQuery(this).next("label").text()?.trim() == $sarg &&
            (jQuery(this).is(":disabled") || 
            jQuery(this).hasClass("disabled") || 
            jQuery(this).next("label").hasClass("unavailable"))
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
        '.product__page fieldset:has(input[name*="options["]:visible)',
      ],
    },
    data: {
      propDetails: {
        name: `input[name*="options["]:visible`,
        attr: `name`,
        complexity: complexityType.INSIDE_SQ_BRACKETS,
      },
      propName: `.product__page input[name*="options["]:visible`,
      propAttr: `name`,
      propGetter: `
      if (jQuery('.product__page input[name="options[REPLACE_ME]"]').length > 0) {
        [
          jQuery('.product__page input[name="options[REPLACE_ME]"]:checked').length > 0
            ? jQuery('.product__page input[name="options[REPLACE_ME]"]:checked')
                .attr("value")
                .trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery('.product__page input[name="options[REPLACE_ME]"]').map(function (i, e) {
              return jQuery(e).attr("value").trim();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];      
      `,
      propSetter: `
      if (
        jQuery('.product__page input[name="options[REPLACE_ME]"]').length > 0 &&
        $sarg != "Choose REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery('.product__page input[name="options[REPLACE_ME]"]').each(function (i, e) {
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
        jQuery('.product__page input[name="options[REPLACE_ME]"]').length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        $val = true;
        jQuery('.product__page input[name="options[REPLACE_ME]"]').each(function () {
          if (
            jQuery(this).val().trim() == $sarg &&
            !(jQuery(this).hasClass("sold-out") || jQuery(this).hasClass("disabled") || jQuery(this).is(":disabled"))
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
      propertySelector: [".product .swatch:has(.option_title:has(~ input))"],
    },
    data: {
      propDetails: {
        name: `.option_title:first`,
        attr: `text`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (
        jQuery(".product .swatch .option_title:contains(REPLACE_ME):first").siblings(
          "input"
        ).length > 0
      ) {
        [
          jQuery(".product .swatch .option_title:contains(REPLACE_ME):first").siblings(
            "input:checked"
          ).length > 0
            ? jQuery(".product .swatch .option_title:contains(REPLACE_ME):first")
                .siblings("input:checked")
                .val()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(".product .swatch .option_title:contains(REPLACE_ME):first")
              .siblings("input")
              .map(function (i, e) {
                return jQuery(e).val();
              })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery(".product .swatch .option_title:contains(REPLACE_ME):first").siblings(
          "input"
        ).length > 0 &&
        ($sarg != "Choose REPLACE_ME") & ($sarg != "No REPLACE_ME")
      ) {
        jQuery(".product .swatch .option_title:contains(REPLACE_ME):first")
          .siblings("input")
          .each(function (i, e) {
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
        jQuery(".product .swatch .option_title:contains(REPLACE_ME):first").siblings(
          "input"
        ).length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        $val = true;
        jQuery(".product .swatch .option_title:contains(REPLACE_ME):first")
          .siblings("input")
          .each(function () {
            if (
              jQuery(this).val().trim() == $sarg &&
              !jQuery(this).next().hasClass("soldout")
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
        ".product .swatches [option-name]:has(li .swatch-button)",
      ],
    },
    data: {
      propDetails: {
        name: `[option_title]:has(li .swatch-button):first`,
        attr: `option-name`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-button').length > 0) {
        [
          jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-button.swatch-selected')
            .length > 0
            ? jQuery(
                '.product .swatches [option-name="REPLACE_ME"] li .swatch-button.swatch-selected'
              ).attr("data-value")
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-button').map(function (
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
        jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-button').length > 0 &&
        ($sarg != "Choose REPLACE_ME") & ($sarg != "No REPLACE_ME")
      ) {
        jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-button').each(function (
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
        jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-button').length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        $val = true;
        jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-button').each(function () {
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
        ".product .swatches [option-name]:has(li .swatch-image)",
      ],
    },
    data: {
      propDetails: {
        name: `[option_title]:has(li .swatch-image):first`,
        attr: `option-name`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-image').length > 0) {
        [
          jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-image.swatch-selected')
            .length > 0
            ? jQuery(
                '.product .swatches [option-name="REPLACE_ME"] li .swatch-image.swatch-selected'
              ).attr("data-value")
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-image').map(function (
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
        jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-image').length > 0 &&
        ($sarg != "Choose REPLACE_ME") & ($sarg != "No REPLACE_ME")
      ) {
        jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-image').each(function (
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
        jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-image').length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        $val = true;
        jQuery('.product .swatches [option-name="REPLACE_ME"] li .swatch-image').each(function () {
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
        ".product-single__meta .selector-wrapper:has(select[data-name]:visible)",
      ],
    },
    data: {
      propDetails: {
        name: `select[data-name]:has(option):first`,
        attr: `data-name`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (
        jQuery(
          '.product-single__meta .selector-wrapper select[data-name="REPLACE_ME"] option'
        ).length > 0
      ) {
        [
          jQuery(
            '.product-single__meta .selector-wrapper select[data-name="REPLACE_ME"] option:selected'
          ).length > 0
            ? jQuery(
                '.product-single__meta .selector-wrapper select[data-name="REPLACE_ME"] option:selected'
              )
                .text()
                .trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              '.product-single__meta .selector-wrapper select[data-name="REPLACE_ME"] option'
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
          '.product-single__meta .selector-wrapper select[data-name="REPLACE_ME"] option'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product-single__meta .selector-wrapper select[data-name="REPLACE_ME"] option'
        ).each(function () {
          if (jQuery(this).text().trim() == $sarg) {
            jQuery(this).parent().val(jQuery(this).text()).change();
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
          '.product-single__meta .selector-wrapper select[data-name="REPLACE_ME"] option'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product-single__meta .selector-wrapper select[data-name="REPLACE_ME"] option'
        ).each(function () {
          if (jQuery(this).text().trim() == $sarg && jQuery(this).is(":disabled")) {
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
        ".product-single__meta .selector-wrapper:has(label + select:visible)",
      ],
    },
    data: {
      propDetails: {
        name: `label:has(+ select:visible):first`,
        attr: `text`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (
        jQuery(
          '.product-single__meta .selector-wrapper label:contains(REPLACE_ME) + select:visible option'
        ).length > 0
      ) {
        [
          jQuery(
            '.product-single__meta .selector-wrapper label:contains(REPLACE_ME) + select:visible option:selected'
          ).length > 0
            ? jQuery(
                '.product-single__meta .selector-wrapper label:contains(REPLACE_ME) + select:visible option:selected'
              )
                .text()
                .trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              '.product-single__meta .selector-wrapper label:contains(REPLACE_ME) + select:visible option'
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
          '.product-single__meta .selector-wrapper label:contains(REPLACE_ME) + select:visible option'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product-single__meta .selector-wrapper label:contains(REPLACE_ME) + select:visible option'
        ).each(function () {
          if (jQuery(this).text().trim() == $sarg) {
            jQuery(this).parent().val(jQuery(this).text()).change();
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
          '.product-single__meta .selector-wrapper label:contains(REPLACE_ME) + select:visible option'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product-single__meta .selector-wrapper label:contains(REPLACE_ME) + select:visible option'
        ).each(function () {
          if (jQuery(this).text().trim() == $sarg && jQuery(this).is(":disabled")) {
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
      propertySelector: [".product-option-select:has(label + select:visible)"],
    },
    data: {
      propDetails: {
        name: `label:has(+ select:visible):first`,
        attr: `text`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (
        jQuery(
          '.product-option-select label:contains(REPLACE_ME) + select:visible option'
        ).length > 0
      ) {
        [
          jQuery(
            '.product-option-select label:contains(REPLACE_ME) + select:visible option:selected'
          ).length > 0
            ? jQuery(
                '.product-option-select label:contains(REPLACE_ME) + select:visible option:selected'
              )
                .text()
                .trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              '.product-option-select label:contains(REPLACE_ME) + select:visible option'
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
          '.product-option-select label:contains(REPLACE_ME) + select:visible option'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product-option-select label:contains(REPLACE_ME) + select:visible option'
        ).each(function () {
          if (jQuery(this).text().trim() == $sarg) {
            jQuery(this).parent().val(jQuery(this).text()).change();
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
          '.product-option-select label:contains(REPLACE_ME) + select:visible option'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product-option-select label:contains(REPLACE_ME) + select:visible option'
        ).each(function () {
          if (jQuery(this).text().trim() == $sarg && jQuery(this).is(":disabled")) {
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
        ".product fieldset.variant-picker__option:has(legend):visible",
      ],
    },
    data: {
      propDetails: {
        name: `legend:first`,
        attr: `text`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (
        jQuery(
          ".product fieldset.variant-picker__option:has(legend:contains(REPLACE_ME)) .variant-picker__option-values [data-option-value][class*=swatch]"
        ).length > 0
      ) {
        [
          jQuery(
            ".product fieldset.variant-picker__option:has(legend:contains(REPLACE_ME)) .variant-picker__option-values [data-option-value][class*=swatch].is-selected"
          ).length > 0
            ? jQuery(
                ".product fieldset.variant-picker__option:has(legend:contains(REPLACE_ME)) .variant-picker__option-values [data-option-value][class*=swatch].is-selected"
              )
                .text()
                .trim()
            : jQuery(
                ".product fieldset.variant-picker__option:has(legend:contains(REPLACE_ME)) .variant-picker__option-values input:checked"
              ).length > 0
            ? jQuery(
                ".product fieldset.variant-picker__option:has(legend:contains(REPLACE_ME)) .variant-picker__option-values input:checked"
              )
                .next("[data-option-value][class*=swatch]")
                .text()
                ?.trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              ".product fieldset.variant-picker__option:has(legend:contains(REPLACE_ME)) .variant-picker__option-values [data-option-value][class*=swatch]"
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
          ".product fieldset.variant-picker__option:has(legend:contains(REPLACE_ME)) .variant-picker__option-values [data-option-value][class*=swatch]"
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          ".product fieldset.variant-picker__option:has(legend:contains(REPLACE_ME)) .variant-picker__option-values [data-option-value][class*=swatch]"
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
          ".product fieldset.variant-picker__option:has(legend:contains(REPLACE_ME)) .variant-picker__option-values [data-option-value][class*=swatch]"
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          ".product fieldset.variant-picker__option:has(legend:contains(REPLACE_ME)) .variant-picker__option-values [data-option-value][class*=swatch]"
        ).each(function () {
          if (
            jQuery(this).text().trim() == $sarg &&
            (jQuery(this).is(":disabled") || jQuery(this).hasClass("disabled") || jQuery(this).hasClass("is-disabled"))
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
        '.product-form__option-selector:has(.product-form__option-info:has(.product-form__option-name) + [class*="swatch-list"])',
      ],
    },
    data: {
      propDetails: {
        name: `.product-form__option-info:has(+ [class*="swatch-list"]) .product-form__option-name:first`,
        attr: `text`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (
        jQuery(".product-form__option-name:contains(REPLACE_ME)")
          .parent()
          .siblings('[class*="swatch-list"]')
          .find("input").length > 0
      ) {
        [
          jQuery(".product-form__option-name:contains(REPLACE_ME)")
            .parent()
            .siblings('[class*="swatch-list"]')
            .find("input:checked").length > 0
            ? jQuery(".product-form__option-name:contains(REPLACE_ME)")
                .parent()
                .siblings('[class*="swatch-list"]')
                .find("input:checked")
                .val()
                .trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(".product-form__option-name:contains(REPLACE_ME)")
              .parent()
              .siblings('[class*="swatch-list"]')
              .find("input")
              .map(function (i, e) {
                return jQuery(e).val().trim();
              })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery(".product-form__option-name:contains(REPLACE_ME)")
          .parent()
          .siblings('[class*="swatch-list"]')
          .find("input").length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(".product-form__option-name:contains(REPLACE_ME)")
          .parent()
          .siblings('[class*="swatch-list"]')
          .find("input")
          .each(function () {
            if (jQuery(this).val().trim() == $sarg) jQuery(this)[0].click();
          });
      }
      wait_for(function () {
        return true;
      });        
      `,
      propStockGetter: `
      $val = false;
      if (
        jQuery(".product-form__option-name:contains(REPLACE_ME)")
          .parent()
          .siblings('[class*="swatch-list"]')
          .find("input").length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        $val = true;
        jQuery(".product-form__option-name:contains(REPLACE_ME)")
          .parent()
          .siblings('[class*="swatch-list"]')
          .find("input")
          .each(function () {
            if (
              jQuery(this).val().trim() == $sarg &&
              !jQuery(this).parent().is("[class$=disabled]")
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
        '.product-form__option:has(.product-form__option-name + [class*="swatch-list"])',
      ],
    },
    data: {
      propDetails: {
        name: `.product-form__option-name:first`,
        attr: `text`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (
        jQuery(".product-form__option-name:contains(REPLACE_ME)")
          .siblings('[class*="swatch-list"]')
          .find("input").length > 0
      ) {
        [
          jQuery(".product-form__option-name:contains(REPLACE_ME)")
            .siblings('[class*="swatch-list"]')
            .find("input:checked").length > 0
            ? jQuery(".product-form__option-name:contains(REPLACE_ME)")
                
                .siblings('[class*="swatch-list"]')
                .find("input:checked")
                .val()
                .trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(".product-form__option-name:contains(REPLACE_ME)")
              .siblings('[class*="swatch-list"]')
              .find("input")
              .map(function (i, e) {
                return jQuery(e).val().trim();
              })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery(".product-form__option-name:contains(REPLACE_ME)")
          .siblings('[class*="swatch-list"]')
          .find("input").length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(".product-form__option-name:contains(REPLACE_ME)")
          .siblings('[class*="swatch-list"]')
          .find("input")
          .each(function () {
            if (jQuery(this).val().trim() == $sarg) jQuery(this)[0].click();
          });
      }
      wait_for(function () {
        return true;
      });        
      `,
      propStockGetter: `
      $val = false;
      if (
        jQuery(".product-form__option-name:contains(REPLACE_ME)")
          .siblings('[class*="swatch-list"]')
          .find("input").length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        $val = true;
        jQuery(".product-form__option-name:contains(REPLACE_ME)")
          .siblings('[class*="swatch-list"]')
          .find("input")
          .each(function () {
            if (
              jQuery(this).val().trim() == $sarg &&
              !jQuery(this).parent().is("[class$=disabled]")
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
        ".product-single__meta .radio-wrapper:has(label + select:visible)",
      ],
    },
    data: {
      propDetails: {
        name: `label:has(+ select:visible):first`,
        attr: `text`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (
        jQuery(
          '.product-single__meta .radio-wrapper label:contains(REPLACE_ME) + select:visible option'
        ).length > 0
      ) {
        [
          jQuery(
            '.product-single__meta .radio-wrapper label:contains(REPLACE_ME) + select:visible option:selected'
          ).length > 0
            ? jQuery(
                '.product-single__meta .radio-wrapper label:contains(REPLACE_ME) + select:visible option:selected'
              )
                .text()
                .trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              '.product-single__meta .radio-wrapper label:contains(REPLACE_ME) + select:visible option'
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
          '.product-single__meta .radio-wrapper label:contains(REPLACE_ME) + select:visible option'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product-single__meta .radio-wrapper label:contains(REPLACE_ME) + select:visible option'
        ).each(function () {
          if (jQuery(this).text().trim() == $sarg) {
            jQuery(this).parent().val(jQuery(this).text()).change();
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
          '.product-single__meta .radio-wrapper label:contains(REPLACE_ME) + select:visible option'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product-single__meta .radio-wrapper label:contains(REPLACE_ME) + select:visible option'
        ).each(function () {
          if (jQuery(this).text().trim() == $sarg && jQuery(this).is(":disabled")) {
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
      propertySelector: [".product-detail [data-attr]:visible"],
    },
    data: {
      propDetails: {
        name: ``,
        attr: `data-attr`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (
        jQuery(
          '.product-detail [data-attr="REPLACE_ME"]:visible button[class*="-attribute"] span[class*="-value"][data-attr-value]'
        ).length > 0
      ) {
        [
          jQuery(
            '.product-detail [data-attr="REPLACE_ME"]:visible button[class*="-attribute"] span[class*="-value"][data-attr-value].selected'
          ).length > 0
            ? jQuery(
                '.product-detail [data-attr="REPLACE_ME"]:visible button[class*="-attribute"] span[class*="-value"][data-attr-value].selected'
              )
                .attr("data-attr-value")
                ?.trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              '.product-detail [data-attr="REPLACE_ME"]:visible button[class*="-attribute"] span[class*="-value"][data-attr-value]'
            ).map(function (i, e) {
              return jQuery(e).attr("data-attr-value")?.trim();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];      
      `,
      propSetter: `
      if (
        jQuery(
          '.product-detail [data-attr="REPLACE_ME"]:visible button[class*="-attribute"] span[class*="-value"][data-attr-value]'
        ).length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(
          '.product-detail [data-attr="REPLACE_ME"]:visible button[class*="-attribute"] span[class*="-value"][data-attr-value]'
        ).each(function () {
          if (jQuery(this).attr("data-attr-value")?.trim() == $sarg)
            jQuery(this)[0]?.click();
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
          '.product-detail [data-attr="REPLACE_ME"]:visible button[class*="-attribute"] span[class*="-value"][data-attr-value]'
        ).length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        jQuery(
          '.product-detail [data-attr="REPLACE_ME"]:visible button[class*="-attribute"] span[class*="-value"][data-attr-value]'
        ).each(function () {
          if (
            jQuery(this).attr("data-attr-value")?.trim() == $sarg &&
            (jQuery(this).hasClass("unselectable") || jQuery(this).is(":disabled"))
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
        "#product-description .swatch:has(.swatch-element input):visible",
      ],
    },
    data: {
      propDetails: {
        name: `.swatch-element input[name]:first`,
        attr: `name`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (jQuery('.swatch .swatch-element input[name="REPLACE_ME"]').length > 0) {
        [
          jQuery('.swatch .swatch-element input[name="REPLACE_ME"]:checked').length > 0
            ? jQuery('.swatch .swatch-element input[name="REPLACE_ME"]:checked').val()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery('.swatch .swatch-element input[name="REPLACE_ME"]').map(function (i, e) {
              return jQuery(e).val();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];   
      `,
      propSetter: `
      if (
        jQuery('.swatch .swatch-element input[name="REPLACE_ME"]').length > 0 &&
        $sarg != "Choose REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery('.swatch .swatch-element input[name="REPLACE_ME"]').each(function (i, e) {
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
        jQuery('.swatch .swatch-element input[name="REPLACE_ME"]').length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        $val = true;
        jQuery('.swatch .swatch-element input[name="REPLACE_ME"]').each(function () {
          if (
            jQuery(this).val().trim() == $sarg &&
            jQuery(this).parent().hasClass("soldout")
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
        '.Product [id*="product-template-"]:has( > .Popover__Content):visible',
      ],
    },
    data: {
      propDetails: {
        name: ``,
        attr: `id`,
        complexity: complexityType.SPECIAL.Pattern_C,
      },
      propGetter: `
      if (
        jQuery("[id*='product-template-REPLACE_ME'] > .Popover__Content .Popover__Value")
          .length > 0
      ) {
        [
          jQuery(
            "[id*='product-template-REPLACE_ME'] > .Popover__Content .Popover__Value.is-selected"
          ).length > 0
            ? jQuery(
                "[id*='product-template-REPLACE_ME'] > .Popover__Content .Popover__Value.is-selected"
              )
                .text()
                .trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(
              "[id*='product-template-REPLACE_ME'] > .Popover__Content .Popover__Value"
            ).map(function (i, e) {
              {
                return jQuery(e).text().trim();
              }
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery("[id*='product-template-REPLACE_ME'] > .Popover__Content .Popover__Value")
          .length > 0 &&
        ($sarg != "Choose REPLACE_ME") & ($sarg != "No REPLACE_ME")
      ) {
        jQuery(
          "[id*='product-template-REPLACE_ME'] > .Popover__Content .Popover__Value"
        ).each(function (i, e) {
          if (jQuery(this).text().trim() == $sarg) {
            jQuery(this)[0].click();
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
        jQuery("[id*='product-template-REPLACE_ME'] > .Popover__Content .Popover__Value")
          .length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        $val = true;
        jQuery(
          "[id*='product-template-REPLACE_ME'] > .Popover__Content .Popover__Value"
        ).each(function () {
          if (jQuery(this).text().trim() == $sarg && !jQuery(this).attr("disabled")) {
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
        ".Product:has(.ProductForm__Label + [class*=SwatchList]:has(input))",
      ],
    },
    data: {
      propDetails: {
        name: `.ProductForm__Label:has(+ [class*=SwatchList]:has(input)):first`,
        attr: `text`,
        complexity: complexityType.SIMPLE,
      },
      propGetter: `
      if (jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").length > 0) {
        [
          jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input:checked").length > 0
            ? jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input:checked").val().trim()
            : "Select REPLACE_ME",
          jQuery.makeArray(
            jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").map(function (i, e) {
              return jQuery(e).val().trim();
            })
          ),
        ];
      } else ["No REPLACE_ME", ["No REPLACE_ME"]];
      `,
      propSetter: `
      if (
        jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").length > 0 &&
        $sarg != "Select REPLACE_ME" &&
        $sarg != "No REPLACE_ME"
      ) {
        jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").each(function () {
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
        jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").length > 0 &&
        $sarg != "No REPLACE_ME" &&
        $sarg != "Select REPLACE_ME"
      ) {
        $val = true;
        jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").each(function (index) {
          if (
            jQuery(this).val().trim() == $sarg &&
            !jQuery(this).siblings().hasClass("unavailable")
          ) {
            $val = false;
          }
        });
      }
      $val;          
      `,
    },
  },
];

/*

if (jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").length > 0) {
  [
    jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input:checked").length > 0
      ? jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input:checked").val().trim()
      : "Select REPLACE_ME",
    jQuery.makeArray(
      jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").map(function (i, e) {
        return jQuery(e).val().trim();
      })
    ),
  ];
} else ["No REPLACE_ME", ["No REPLACE_ME"]];

// $sarg = 'X-Large'
if (
  jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").length > 0 &&
  $sarg != "Select REPLACE_ME" &&
  $sarg != "No REPLACE_ME"
) {
  jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").each(function () {
    if (jQuery(this).val().trim() == $sarg) {
      jQuery(this)[0]?.click();
    }
  });
}
wait_for(function () {
  return true;
});

// $sarg = '2'
$val = false;
if (
  jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").length > 0 &&
  $sarg != "No REPLACE_ME" &&
  $sarg != "Select REPLACE_ME"
) {
  $val = true;
  jQuery(".Product .ProductForm__Label:contains(REPLACE_ME) + [class*=SwatchList]:has(input):first input").each(function (index) {
    if (
      jQuery(this).val().trim() == $sarg &&
      !jQuery(this).siblings().hasClass("unavailable")
    ) {
      $val = false;
    }
  });
}
$val;


*/
