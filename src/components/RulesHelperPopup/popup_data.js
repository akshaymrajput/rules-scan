// @collapse

const coupons = [
  {
    conditions: {
      couponInput: [],
      submitButton: [],
      totalPrice: [],
    },
    data: {
      couponInput: ``,
      submitButton: ``,
      totalPrice: ``,
    },
  },
];

const skeleton = {
  rules: `
  /* RULES SKELETON */

  // Product Title

  jQuery('PRODUCT_NAME_SELECTOR').text().trim();

  // Brand Name

  var brand = "";
  try {
    brand = JSON.parse(
      jQuery('[type="application/ld+json"]:contains(brand)').text().trim()
    ).brand.name;
  } catch (e) {}

  brand = brand ? brand : "SITE_NAME";

  // Product Description

  jQuery('meta[property="og:description"]').attr("content")?.trim() ||
  jQuery('meta[name="description"]').attr("content")?.trim();

  // Main Image
  
  $img =
    jQuery('PRODUCT_MAIN_IMAGE_SELECTOR').attr("src") ||
    jQuery('meta[property="og:image:secure_url"]').attr("content") ||
    jQuery('meta[property="og:image"]').attr("content");
  if ($img) {
    $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
    $img = $img.split("?")[0];
  }

  // Item Images
  
  if (jQuery("PRODUCT_ITEM_IMAGES_SELECTOR").length > 0) {
    $arr = [];
    jQuery("PRODUCT_ITEM_IMAGES_SELECTOR").each(function (index) {
      $img = jQuery(this).find("[data-src]").attr("data-src") || 
             jQuery(this).find("img").attr("src");
      if ($img) {
        $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
        $img = $img.split("?")[0];
      }
  
      if (index < 4) $arr.push($img);
    });
    $arr;
  }

  // Price Getter

  $cr = jQuery('meta[property="product:price:currency"]').attr("content") ||
        jQuery('meta[property="og:price:currency"]').attr("content");

  $pr = jQuery('PRODUCT_PRICE_SELECTOR').text().trim();
  $pr =
    $cr && $pr
      ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
      : $pr;

  // Original Price Getter

  $cr = jQuery('meta[property="product:price:currency"]').attr("content") ||
        jQuery('meta[property="og:price:currency"]').attr("content");

  $pr = jQuery('PRODUCT_ORIGINAL_PRICE_SELECTOR').text().trim() || 
        jQuery('PRODUCT_PRICE_SELECTOR').text().trim();
  $pr =
    $cr && $pr
      ? $cr + $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "")
      : $pr;
  
  // Stock Status Getter

  jQuery('ADD_TO_CART_SELECTOR').is(":disabled") ||
  jQuery('OUT_OF_STOCK_INDICATOR_SELECTOR').is(":visible") ||
    jQuery('404_PAGE_SELECTOR').length > 0;
  `,
};

const propertiesSkeletonData = {
  select_option: `
  if (jQuery("select option").length > 0) {
    [
      jQuery("select option:selected")
        .text()
        .toLowerCase()
        .indexOf("choose") == -1
        ? jQuery("select option:selected").text().trim()
        : "Select OPTION_NAME",
      jQuery.makeArray(
        jQuery("select option").map(function (i, e) {
          if (jQuery(e).text().toLowerCase().indexOf("choose") == -1)
            return jQuery(e).text().trim();
        })
      ),
    ];
  } else ["No OPTION_NAME", ["No OPTION_NAME"]];
  
  if (
    jQuery("select option").length > 0 &&
    $sarg != "Select OPTION_NAME" &&
    $sarg != "No OPTION_NAME"
  ) {
    jQuery("select option").each(function () {
      if (jQuery(this).text().trim() == $sarg) {
        jQuery(this).parent().val(jQuery(this).val()).change();
      }
    });
  }
  wait_for(function () {
    return true;
  });
  
  $val = false;
  if (
    jQuery("select option").length > 0 &&
    $sarg != "No OPTION_NAME" &&
    $sarg != "Select OPTION_NAME"
  ) {
    jQuery("select option").each(function () {
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
  ul_li: `
  if (jQuery('ul li').length > 0) {
    [
      jQuery('ul li.selected').length > 0
        ? jQuery('ul li.selected').text().trim()
        : "Select OPTION_NAME",
      jQuery.makeArray(
        jQuery('ul li').map(function (i, e) {
          return jQuery(e).text().trim();
        })
      ),
    ];
  } else ["No OPTION_NAME", ["No OPTION_NAME"]];
  
  if (
    jQuery('ul li').length > 0 &&
    $sarg != "Choose OPTION_NAME" &&
    $sarg != "No OPTION_NAME"
  ) {
    jQuery('ul li').each(function (i, e) {
      if (jQuery(this).text().trim() == $sarg) {
        jQuery(this).find(__BUTTON_A_IMG__)[0].click();
      }
    });
  }
  wait_for(function () {
    return true;
  });
  
  $val = false;
  if (
    jQuery('ul li').length > 0 &&
    $sarg != "Choose OPTION_NAME" &&
    $sarg != "No OPTION_NAME"
  ) {
    jQuery('ul li').each(function (i, e) {
      if (jQuery(this).text().trim() == $sarg && jQuery(this).is(":disabled")) {
        $val = true;
      }
    });
  }
  $val;
  `,
  div_button_a_img: `
  if (jQuery('div button_a_img').length > 0) {
    [
      jQuery('div button_a_img.selected').length > 0
        ? jQuery('div button_a_img.selected').text().trim()
        : "Select OPTION_NAME",
      jQuery.makeArray(
        jQuery('div button_a_img').map(function (i, e) {
          return jQuery(e).text().trim();
        })
      ),
    ];
  } else ["No OPTION_NAME", ["No OPTION_NAME"]];
  
  if (
    jQuery('div button_a_img').length > 0 &&
    $sarg != "Choose OPTION_NAME" &&
    $sarg != "No OPTION_NAME"
  ) {
    jQuery('div button_a_img').each(function (i, e) {
      if (jQuery(this).text().trim() == $sarg) {
        jQuery(this).find(__BUTTON_A_IMG__)[0].click() || 
        jQuery(this)[0].click();
      }
    });
  }
  wait_for(function () {
    return true;
  });
  
  $val = false;
  if (
    jQuery('div button_a_img').length > 0 &&
    $sarg != "Choose OPTION_NAME" &&
    $sarg != "No OPTION_NAME"
  ) {
    jQuery('div button_a_img').each(function (i, e) {
      if (jQuery(this).text().trim() == $sarg && jQuery(this).is(":disabled")) {
        $val = true;
      }
    });
  }
  $val;
  `,
  div_input: `
  if (jQuery('div input').length > 0) {
    [
      jQuery('div input:checked').length > 0
        ? jQuery('div input:checked').val().trim()
        : "Select OPTION_NAME",
      jQuery.makeArray(
        jQuery('div input').map(function (i, e) {
          return jQuery(e).val().trim();
        })
      ),
    ];
  } else ["No OPTION_NAME", ["No OPTION_NAME"]];
  
  if (
    jQuery('div input').length > 0 &&
    $sarg != "Select OPTION_NAME" &&
    $sarg != "No OPTION_NAME"
  ) {
    jQuery('div input').each(function () {
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
    jQuery('div input').length > 0 &&
    $sarg != "Select OPTION_NAME" &&
    $sarg != "No OPTION_NAME"
  ) {
    jQuery('div input').each(function () {
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
};

const propertiesSkeletonDataConfig = [
  {
    showCopyIcon: false,
    textToCopy: propertiesSkeletonData.select_option,
    buttonText: "Select Option",
  },
  {
    showCopyIcon: false,
    textToCopy: propertiesSkeletonData.ul_li,
    buttonText: "UL LI",
  },
  {
    showCopyIcon: false,
    textToCopy: propertiesSkeletonData.div_input,
    buttonText: "Div Input",
  },
  {
    showCopyIcon: false,
    textToCopy: propertiesSkeletonData.div_button_a_img,
    buttonText: "Div Btn/Link/Img",
  },
];

const toolsData = {
  currency_if_else: `
let priceExtractor = $pr.replace(/[^,.\\d]/g, "").replace(/^[,.]+|[,.]+$/g, "");

if ($pr.indexOf("€") !== -1) $pr = "EUR" + priceExtractor;
else if ($pr.indexOf("CA$") !== -1) $pr = "CAD" + priceExtractor;
else if ($pr.indexOf("£") !== -1) $pr = "GBP" + priceExtractor;
else if ($pr.indexOf("AU$") !== -1) $pr = "AUD" + priceExtractor;
else if ($pr.indexOf("Ft") !== -1) $pr = "HUF" + priceExtractor;
else if ($pr.indexOf("MX$") !== -1) $pr = "MXN" + priceExtractor;
else if ($pr.indexOf("R$") !== -1) $pr = "BRL" + priceExtractor;
else if ($pr.indexOf("₹") !== -1) $pr = "INR" + priceExtractor;
else if ($pr.indexOf("Rs") !== -1) $pr = "INR" + priceExtractor;
else if ($pr.indexOf("CN¥") !== -1) $pr = "CNY" + priceExtractor;
else if ($pr.indexOf("NZ$") !== -1) $pr = "NZD" + priceExtractor;
else if ($pr.indexOf("HK$") !== -1) $pr = "HKD" + priceExtractor;
else if ($pr.indexOf("¥") !== -1) $pr = "JPY" + priceExtractor;
else if ($pr.indexOf("₪") !== -1) $pr = "ILS" + priceExtractor;
else if ($pr.indexOf("฿") !== -1) $pr = "THB" + priceExtractor;
else if ($pr.indexOf("₩") !== -1) $pr = "KRW" + priceExtractor;
else if ($pr.indexOf("₫") !== -1) $pr = "VND" + priceExtractor;
else if ($pr.indexOf("DKKr.") > -1) $pr = "DKK" + priceExtractor;
else if ($pr.indexOf("SEK") > -1) $pr = "SEK" + priceExtractor;
else if ($pr.indexOf("円") > -1) $pr = "JPY" + priceExtractor;
else if ($pr.indexOf("¥") > -1) $pr = "JPY" + priceExtractor;
else if ($pr.indexOf("p.") > -1) $pr = "RUB" + priceExtractor;
else if ($pr.indexOf("руб.") > -1) $pr = "RUB" + priceExtractor;
else if ($pr.indexOf("руб") > -1) $pr = "RUB" + priceExtractor;
else if ($pr.indexOf("US$") >= 0) $pr = "USD" + priceExtractor;
else if ($pr.indexOf("฿") >= 0) $pr = "THB" + priceExtractor;
else if ($pr.indexOf("S$") >= 0) $pr = "SGD" + priceExtractor;
else if ($pr.indexOf("RM") >= 0) $pr = "MYR" + priceExtractor;
else if ($pr.indexOf("₱") >= 0) $pr = "PHP" + priceExtractor;
else if ($pr.indexOf("грн") >= 0) $pr = "UAH" + priceExtractor;
else if ($pr.indexOf("zł") >= 0) $pr = "PLN" + priceExtractor;
else if ($pr.indexOf("$") >= 0) $pr = "USD" + priceExtractor;
else $pr.toUpperCase();
`,
  img_bg_css: `
jQuery(IMG_SELECTOR)
.css('background-image')
.replace('url(','')
.replace(')','')
.replace(/\\"/gi, "")
.split('?')[0]
`,
  raw_text: `
jQuery(SELECTOR).clone().children().remove().end().text().trim();
`,
  brand_currency_from_json: `
// Currency
$cr = "";

try {
  $cr = JSON.parse(
    jQuery('script[type="application/ld+json"]:contains(priceCurrency)')
      .text()
      .trim()
  ).offers[0].priceCurrency;
} catch (e) {}

// Brand
var brand = "";
try {
  brand = JSON.parse(
    jQuery('[type="application/ld+json"]:contains(brand):first').text().trim()
  ).brand.name;
} catch (e) {}

brand = brand ? brand : "SITE_NAME";
`,
  img_srcset: `
// srcset
jQuery(IMG_SELECTOR).attr('srcset')?.split(',')?.pop()?.trim()?.split(' ')?.[0]

// data-srcset
jQuery(IMG_SELECTOR).attr('data-srcset')?.split(',')?.pop()?.trim()?.split(' ')?.[0]
`,
  img_canvas: `
// Get Img from Canvas
let canvasElement = jQuery(CANVAS_SELECTOR);
let imgData = canvasElement?.[0]?.toDataURL('image/jpeg');

$img =
  imgData?.length ? imgData : '' ||
  jQuery('[property="og:image"]:last').attr("content");

if ($img) {
  $img = $img.split("?")[0];
  $img = $img.indexOf("data") == 0 ? "" + $img : ($img.indexOf("http") == -1 ? "https:" + $img : $img);
}
`,
  img_src_including_domain: `
if ($img) {
  $img = $img.split("?")[0];
  $img = $img.indexOf("//") == 0 ? "https:" + $img : $img;
  $img = $img.charAt(0) == "/" ? 'PASTE_DOMAIN_LINK_WITHOUT_FORWARD_SLASH' + $img : $img;
  $img = $img.indexOf("http") == -1 ? "https:" + $img : $img;
}
`,
};

const toolsDataConfig = [
  {
    showCopyIcon: false,
    textToCopy: toolsData.currency_if_else,
    buttonText: "Currency Check",
  },
  {
    showCopyIcon: false,
    textToCopy: toolsData.img_bg_css,
    buttonText: "Background CSS Img",
  },
  {
    showCopyIcon: false,
    textToCopy: toolsData.raw_text,
    buttonText: "Raw Text",
  },
  {
    showCopyIcon: false,
    textToCopy: toolsData.brand_currency_from_json,
    buttonText: "Brand/Currency JSON",
  },
  {
    showCopyIcon: false,
    textToCopy: toolsData.img_srcset,
    buttonText: "Img Srcset",
  },
  {
    showCopyIcon: false,
    textToCopy: toolsData.img_canvas,
    buttonText: "Img from Canvas",
  },
  {
    showCopyIcon: false,
    textToCopy: toolsData.img_src_including_domain,
    buttonText: "Img with Domain",
  },
];

module.exports = {
  coupons,
  skeleton,
  propertiesSkeletonDataConfig,
  toolsDataConfig,
};
