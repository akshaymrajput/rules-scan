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

const propertiesSkeleton = {
  select_option: 
  `
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
  ul_li: 
  `
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
  div_button_a_img: 
  `
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
  div_input: 
  `
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
}

module.exports = {
  coupons,
  skeleton,
  propertiesSkeleton
};
